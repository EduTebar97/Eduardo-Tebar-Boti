import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { savePost, deletePost, getPost, getPosts, Post } from '../lib/services'
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit
} from 'firebase/firestore'
import { db } from '../lib/firebase'

// Verify the entire lifecycle of a blog post
describe('Blog Flow Lifecycle (Complete)', () => {
  let postId: string
  // Post 1: Statistics Category
  const testPost = {
    title: 'Integration Test Post',
    slug: 'integration-test-post',
    content: '<p>This is a test content</p>',
    excerpt: 'Test excerpt',
    status: 'draft' as const,
    category: 'Estadística',
    author: 'Test Bot',
    coverImage: 'http://example.com/image.jpg',
    tags: ['Test', 'Automation']
  }

  // Post 2: Habits Category
  let post2Id: string
  const testPost2 = {
    title: 'Secondary Post',
    slug: 'secondary-post',
    content: 'Content 2',
    excerpt: 'Excerpt 2',
    status: 'published' as const,
    category: 'Hábitos',
    author: 'Test Bot',
    tags: ['Habits']
  }

  beforeAll(() => {
    console.log('DEBUG ENV:', {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY ? 'DEFINED' : 'UNDEFINED',
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID
    })
  })

  // --- TESTS START ---

  it('1. Create Draft: Should save a new post as draft', async () => {
    postId = await savePost(testPost)
    expect(postId).toBeDefined()
    const result = await getPost(postId)
    expect(result?.status).toBe('draft')
  })

  it('2. Private Visibility: Draft should NOT be visible in Public Query', async () => {
    // Logic from Public App: getAllPosts
    const q = query(
      collection(db, 'posts'),
      where('status', '==', 'published'),
      orderBy('publishDate', 'desc')
    )
    const snapshot = await getDocs(q)
    const publicPosts = snapshot.docs.map((d) => d.data())
    const found = publicPosts.find((p) => p.slug === testPost.slug)
    expect(found).toBeUndefined()
  })

  it('3. Publish: Should update status to published', async () => {
    await savePost({ ...testPost, status: 'published' }, postId)
    const result = await getPost(postId)
    expect(result?.status).toBe('published')
    expect(result?.publishDate).toBeDefined()
  })

  it('4. Public Visibility (Feed): Published post SHOULD be visible', async () => {
    const q = query(
      collection(db, 'posts'),
      where('status', '==', 'published'), // Public only sees published
      orderBy('publishDate', 'desc')
    )
    const snapshot = await getDocs(q)
    const publicPosts = snapshot.docs.map((d) => d.data())
    const found = publicPosts.find((p) => p.slug === testPost.slug)
    expect(found).toBeDefined()
  })

  it('5. Public Visibility (Detail/SEO): Should fetch by Slug', async () => {
    // Logic from Public App: getPostBySlug
    const q = query(
      collection(db, 'posts'),
      where('slug', '==', testPost.slug),
      where('status', '==', 'published'),
      limit(1)
    )
    const snapshot = await getDocs(q)

    // VERIFICATION: Post found?
    expect(snapshot.empty).toBe(false)
    const docData = snapshot.docs[0].data()

    // VERIFICATION: Check SEO Fields
    expect(docData.title).toBe(testPost.title) // Title Tag
    expect(docData.excerpt).toBe(testPost.excerpt) // Meta Description
    expect(docData.coverImage).toBe(testPost.coverImage) // OG Image
  })

  it('6. Filter by Category: Should filter posts correctly', async () => {
    post2Id = await savePost(testPost2)

    const q1 = query(
      collection(db, 'posts'),
      where('status', '==', 'published'),
      where('category', '==', 'Estadística'),
      orderBy('publishDate', 'desc')
    )
    const snap1 = await getDocs(q1)
    const posts1 = snap1.docs.map((d) => d.data())

    expect(posts1.some((p) => p.slug === testPost.slug)).toBe(true)
    expect(posts1.some((p) => p.slug === testPost2.slug)).toBe(false)

    const q2 = query(
      collection(db, 'posts'),
      where('status', '==', 'published'),
      where('category', '==', 'Hábitos'),
      orderBy('publishDate', 'desc')
    )
    const snap2 = await getDocs(q2)
    const posts2 = snap2.docs.map((d) => d.data())

    expect(posts2.some((p) => p.slug === testPost.slug)).toBe(false)
    expect(posts2.some((p) => p.slug === testPost2.slug)).toBe(true)
  })

  it('7. Edit Post: Should update content and persist', async () => {
    const newTitle = 'Integration Test Post UPDATED'
    await savePost(
      { ...testPost, status: 'published', title: newTitle },
      postId
    )
    const result = await getPost(postId)
    expect(result?.title).toBe(newTitle)
  })

  it('8. Error Handling: Non-existent post should return undefined', async () => {
    const q = query(
      collection(db, 'posts'),
      where('slug', '==', 'non-existent-slug-12345'),
      where('status', '==', 'published'),
      limit(1)
    )
    const snapshot = await getDocs(q)
    expect(snapshot.empty).toBe(true)
  })

  it('9. Cleanup: Delete posts', async () => {
    await deletePost(postId)
    await deletePost(post2Id)

    const result1 = await getPost(postId)
    const result2 = await getPost(post2Id)
    expect(result1).toBeNull()
    expect(result2).toBeNull()
  })
})
