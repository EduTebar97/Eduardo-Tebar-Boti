import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center bg-white/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-4 h-16 transition-all">
      <div className="flex items-center gap-2 cursor-pointer">
        <span className="material-symbols-outlined text-primary text-3xl">cardiology</span>
        <span className="font-bold text-lg tracking-tight hidden sm:block">Dr. Profile</span>
      </div>
      <div className="flex-1"></div>
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex space-x-6 mr-4 text-sm font-medium text-gray-600">
           <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
           <Link href="/services/research-analysis" className="hover:text-primary transition-colors">Servicios</Link>
           <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
        </div>

        <Link href="/contact" className="hidden sm:inline-flex items-center justify-center rounded-lg h-9 px-4 bg-primary/10 text-primary text-sm font-bold hover:bg-primary hover:text-white transition-all">
            Contactar
        </Link>
        <button className="text-gray-600 hover:text-primary p-2 rounded-full transition-colors sm:hidden">
            <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
