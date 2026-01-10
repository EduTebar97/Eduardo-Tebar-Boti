import { collection, getDocs, query, where, orderBy, limit } from "firebase/firestore";
import { db } from "./firebase";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML content
  category: "Estadística" | "Gestión Equipos" | "Hábitos" | "Neurociencia";
  author: string;
  publishedAt: string; // ISO date
  readTime: string;
  coverImage: string;
  tags: string[];
}

export const CATEGORIES = [
  { name: "Estadística", icon: "analytics", color: "text-primary", bg: "bg-blue-50" },
  { name: "Gestión Equipos", icon: "diversity_3", color: "text-accent", bg: "bg-teal-50" },
  { name: "Hábitos", icon: "favorite", color: "text-rose-500", bg: "bg-rose-50" },
  { name: "Neurociencia", icon: "neurology", color: "text-indigo-500", bg: "bg-indigo-50" },
] as const;

import { DocumentData } from 'firebase/firestore';

const mapFirestoreToPost = (data: DocumentData): BlogPost => {
  return {
    slug: data.slug,
    title: data.title,
    excerpt: data.excerpt,
    content: data.content,
    category: data.category,
    author: data.author || "Dr. Eduardo Tébar",
    publishedAt: data.publishDate?.toDate?.()?.toISOString() || data.createdAt?.toDate?.()?.toISOString() || new Date().toISOString(),
    readTime: data.readTime || "5 min",
    coverImage: data.coverImage || data.imageUrl || "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80",
    tags: data.tags || [],
  };
};

export async function getAllPosts(category?: string): Promise<BlogPost[]> {
  try {
    let q;
    if (category) {
      q = query(
        collection(db, "posts"),
        where("status", "==", "published"),
        where("category", "==", category),
        orderBy("publishDate", "desc")
      );
    } else {
      q = query(
        collection(db, "posts"),
        where("status", "==", "published"),
        orderBy("publishDate", "desc")
      );
    }
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => mapFirestoreToPost(doc.data()));
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  try {
    const q = query(
      collection(db, "posts"),
      where("slug", "==", slug),
      where("status", "==", "published"),
      limit(1)
    );
    const snapshot = await getDocs(q);
    if (snapshot.empty) return undefined;
    return mapFirestoreToPost(snapshot.docs[0].data());
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return undefined;
  }
}
