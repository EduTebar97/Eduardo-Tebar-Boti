import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/posts';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Post no encontrado' };

  return {
    title: `${post.title} | Dr. Eduardo Tébar`,
    description: post.excerpt,
    openGraph: {
        title: post.title,
        description: post.excerpt,
        images: [{ url: post.coverImage }],
        type: 'article',
        publishedTime: post.publishedAt,
    }
  };
}

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map(post => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white dark:bg-black font-sans">

        {/* Progress Bar (Simulated) */}
        <div className="fixed top-16 left-0 h-1 bg-primary z-50 w-1/3"></div>

        {/* Hero Section */}
        <div className="relative w-full h-[60vh] md:h-[70vh] bg-black">
             <img src={post.coverImage} className="w-full h-full object-cover opacity-60" alt={post.title} />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

             <div className="absolute inset-0 flex items-center justify-center">
                 <div className="container mx-auto px-4 max-w-4xl text-center mt-20">
                    <span className="inline-block px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider mb-6 shadow-lg shadow-primary/30">
                        {post.category}
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8 drop-shadow-lg font-display">
                        {post.title}
                    </h1>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                            <div className="size-8 rounded-full bg-white text-primary flex items-center justify-center font-bold">Dr</div>
                            <div className="text-left">
                                <p className="text-xs font-bold text-white uppercase tracking-wide">Autor</p>
                                <p className="text-sm font-bold">{post.author}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <span className="flex items-center gap-2 font-medium">
                                <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                                {new Date(post.publishedAt).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </span>
                            <span className="flex items-center gap-2 font-medium">
                                <span className="material-symbols-outlined text-[20px]">schedule</span>
                                {post.readTime}
                            </span>
                        </div>
                    </div>
                 </div>
             </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 max-w-7xl relative -mt-20 z-10 grid lg:grid-cols-12 gap-10 pb-24">

            {/* Left Sidebar (Share) */}
            <div className="lg:col-span-2 hidden lg:flex flex-col items-end pt-32 sticky top-8 h-fit gap-4">
                 <span className="text-xs font-bold text-gray-400 uppercase tracking-widest writing-vertical rotate-180">Compartir</span>
                 <button className="size-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-600 hover:text-primary hover:-translate-y-1 transition-all">
                    <span className="material-symbols-outlined text-lg">link</span>
                 </button>
                 <button className="size-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-600 hover:text-blue-500 hover:-translate-y-1 transition-all">
                    <span className="material-symbols-outlined text-lg">share</span>
                 </button>
            </div>

            {/* Article Content */}
            <div className="lg:col-span-8 bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800">
                <div
                    className="prose prose-lg md:prose-xl prose-blue dark:prose-invert mx-auto font-body prose-headings:font-display prose-headings:font-bold prose-p:leading-relaxed prose-img:rounded-2xl"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                        <Link href="/blog" key={tag} className="px-4 py-1.5 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                            #{tag}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Right Sidebar (Related) */}
            <div className="lg:col-span-2 hidden lg:block pt-10 sticky top-8 h-fit">
               <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wider mb-6">Más Posts</h3>
               <div className="space-y-6">
                   <div className="group cursor-pointer">
                       <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-3">
                            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="Thumbnail" />
                       </div>
                       <h4 className="font-bold text-gray-900 dark:text-white text-sm leading-tight group-hover:text-primary transition-colors">
                           Liderazgo en la UCI
                       </h4>
                       <span className="text-xs text-gray-500">Gestión</span>
                   </div>
               </div>
            </div>

        </div>

        {/* Floating Back Button (Mobile) */}
        <Link href="/blog" className="fixed bottom-6 right-6 lg:hidden size-14 bg-primary text-white rounded-full shadow-xl flex items-center justify-center z-50">
             <span className="material-symbols-outlined">arrow_back</span>
        </Link>
    </article>
  );
}
