"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-all">
      <div className="flex items-center justify-between px-4 h-16">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <span className="material-symbols-outlined text-primary text-3xl">cardiology</span>
          <span className="font-bold text-lg tracking-tight hidden sm:block">Dr. Eduardo Tébar</span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex space-x-6 mr-4 text-sm font-medium text-gray-600">
             <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
             <Link href="/servicios" className="hover:text-primary transition-colors">Servicios</Link>
             <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          </div>

          <Link href="/contact" className="hidden sm:inline-flex items-center justify-center rounded-lg h-9 px-4 bg-primary/10 text-primary text-sm font-bold hover:bg-primary hover:text-white transition-all">
              Contactar
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-primary p-2 rounded-full transition-colors sm:hidden"
            aria-label="Toggle menu"
          >
              <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden border-t border-gray-100 bg-white dark:bg-gray-900 absolute w-full left-0 shadow-lg animate-fade-in">
          <div className="flex flex-col p-4 space-y-4 font-medium text-gray-600 dark:text-gray-300">
            <Link
              href="/"
              className="hover:text-primary transition-colors block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/servicios"
              className="hover:text-primary transition-colors block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="/blog"
              className="hover:text-primary transition-colors block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center rounded-lg h-10 w-full bg-primary text-white font-bold hover:bg-primary/90 transition-all mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contactar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
