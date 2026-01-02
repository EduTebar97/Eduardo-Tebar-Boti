"use client";

import { useState } from "react";
import Link from "next/link";
import { MOCK_POSTS, CATEGORIES } from "@/lib/posts";

export default function BlogList() {
    const [filterCategory, setFilterCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    // Filter logic
    const filteredPosts = MOCK_POSTS.filter(post => {
        const matchesCategory = filterCategory ? post.category === filterCategory : true;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="container mx-auto px-4 max-w-7xl py-12">
            <div className="grid lg:grid-cols-12 gap-10">

                {/* Sidebar / Filters */}
                <aside className="lg:col-span-3 lg:sticky lg:top-24 h-fit space-y-8">
                    {/* Search */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                            <span className="material-symbols-outlined">search</span>
                        </div>
                        <input
                            type="text"
                            className="block w-full p-3 pl-10 text-sm text-gray-900 border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder-gray-400 shadow-sm"
                            placeholder="Buscar artículos..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Categories */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">Explorar</h3>
                        <div className="space-y-2">
                            <button
                                onClick={() => setFilterCategory(null)}
                                className={`w-full text-left px-4 py-2.5 rounded-lg font-medium text-sm transition-all flex justify-between items-center ${!filterCategory ? 'bg-primary text-white shadow-md shadow-primary/20' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50'}`}
                            >
                                <span>Todos los posts</span>
                                <span className={`${!filterCategory ? 'bg-white/20' : 'bg-gray-100'} px-2 py-0.5 rounded text-xs`}>{MOCK_POSTS.length}</span>
                            </button>
                            {CATEGORIES.map(cat => (
                                <button
                                    key={cat.name}
                                    onClick={() => setFilterCategory(cat.name as any)}
                                    className={`w-full text-left px-4 py-2.5 rounded-lg font-medium text-sm transition-all flex items-center gap-3 group ${filterCategory === cat.name ? 'bg-gray-100 dark:bg-gray-700 text-primary' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50'}`}
                                >
                                    <span className={`material-symbols-outlined text-lg ${cat.color}`}>{cat.icon}</span>
                                    <span>{cat.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Posts Grid */}
                <main className="lg:col-span-9">
                    <div className="grid md:grid-cols-2 gap-8">
                        {filteredPosts.map(post => (
                            <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                                <div className="relative h-56 overflow-hidden">
                                    <img src={post.coverImage} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={post.title} />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold rounded-full shadow-sm">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                                        <span className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                                            {new Date(post.publishedAt).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}
                                        </span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[16px]">schedule</span>
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center gap-2">
                                            <div className="size-8 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold text-xs ring-2 ring-white">Dr</div>
                                            <span className="text-xs font-bold text-gray-700 dark:text-gray-200">{post.author}</span>
                                        </div>
                                        <span className="text-primary text-sm font-bold group-hover:underline">Leer más</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
