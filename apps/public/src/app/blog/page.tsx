import BlogList from "@/components/BlogList";

export const metadata = {
  title: "Blog & Insights | Dr. Eduardo Tébar",
  description: "Artículos sobre bioestadística, liderazgo clínico y los avances médicos.",
};

import { getAllPosts } from "@/lib/posts";

export default async function BlogFeedPage() {
  const posts = await getAllPosts();
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      {/* Hero Header */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl text-center">
             <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-full mb-6">
                <span className="material-symbols-outlined text-primary text-sm">edit_note</span>
                <span className="text-xs font-bold text-primary uppercase tracking-wide">Blog & Insights</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
                Evidencia, experiencia y <span className="text-primary">divulgación</span>.
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Artículos sobre bioestadística, liderazgo clínico y los avances médicos que están definiendo el futuro de la cirugía.
            </p>
        </div>
      </section>

      {/* Interactive List */}
      <BlogList initialPosts={posts} />
    </div>
  );
}
