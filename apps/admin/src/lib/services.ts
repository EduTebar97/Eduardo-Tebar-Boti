import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  orderBy,
  Timestamp,
} from 'firebase/firestore';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  listAll,
} from 'firebase/storage';
import { db, storage } from './firebase';

// --- Interfaces ---

export interface Post {
  id?: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  status: 'draft' | 'published' | 'scheduled';
  category: string;
  imageUrl?: string;
  publishDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id?: string;
  name: string;
  slug: string;
  description: string;
  count: number;
}

// --- Posts Services ---

export const getPosts = async () => {
  const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt?.toDate(),
    publishDate: doc.data().publishDate?.toDate(),
  })) as Post[];
};

export const getPost = async (id: string) => {
  const docRef = doc(db, 'posts', id);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) return null;
  return {
    id: snapshot.id,
    ...snapshot.data(),
    createdAt: snapshot.data().createdAt?.toDate(),
    publishDate: snapshot.data().publishDate?.toDate(),
  } as Post;
};

export const savePost = async (post: Omit<Post, 'id' | 'createdAt' | 'updatedAt'>, id?: string) => {
  const data = {
    ...post,
    updatedAt: Timestamp.now(),
  };

  if (id) {
    // Update existing
    const docRef = doc(db, 'posts', id);
    await updateDoc(docRef, data);
    return id;
  } else {
    // Create new
    const docRef = await addDoc(collection(db, 'posts'), {
      ...data,
      createdAt: Timestamp.now(),
    });
    return docRef.id;
  }
};

export const deletePost = async (id: string) => {
  await deleteDoc(doc(db, 'posts', id));
};

// --- Storage Services ---

export const uploadImage = async (file: File) => {
  const storageRef = ref(storage, `blog-images/${Date.now()}_${file.name}`);
  const snapshot = await uploadBytes(storageRef, file);
  return await getDownloadURL(snapshot.ref);
};

export const getImages = async () => {
  const listRef = ref(storage, 'blog-images');
  const res = await listAll(listRef);
  return Promise.all(
    res.items.map(async (itemRef) => {
      const url = await getDownloadURL(itemRef);
      return { name: itemRef.name, url };
    })
  );
};
