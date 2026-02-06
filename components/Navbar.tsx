"use client"; // This allows the menu to be interactive
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-bold text-islamic-green text-xl">
            QURAN INSTITUTE
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-islamic-green font-medium">
            <Link href="/" className="hover:text-islamic-gold">Home</Link>
            <Link href="/registration" className="hover:text-islamic-gold">Enroll</Link>
            <Link href="/donation" className="hover:text-islamic-gold">Donate</Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white pb-4 px-4 space-y-2">
          <Link href="/" className="block py-2 text-islamic-green">Home</Link>
          <Link href="/registration" className="block py-2 text-islamic-green">Enroll</Link>
          <Link href="/donation" className="block py-2 text-islamic-green">Donate</Link>
        </div>
      )}
    </nav>
  );
}
