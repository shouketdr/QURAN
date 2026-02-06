"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Book, Heart, User, MapPin, GraduationCap } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Adds a shadow effect when you scroll down
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Programs', href: '/programs', icon: <Book className="w-4 h-4" /> },
    { name: 'Admissions', href: '/registration', icon: <GraduationCap className="w-4 h-4" /> },
    { name: 'Donation', href: '/donation', icon: <Heart className="w-4 h-4" /> },
    { name: 'Campus', href: '/contact', icon: <MapPin className="w-4 h-4" /> },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-islamic-green p-2 rounded-xl group-hover:rotate-12 transition-transform">
              <Book className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-islamic-green">AL-QURAN</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-islamic-gold font-bold">Institute</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="flex items-center space-x-1 text-sm font-semibold text-slate-700 hover:text-islamic-green transition-colors"
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
            
            {/* Student Portal Button */}
            <Link 
              href="/registration" 
              className="bg-islamic-green text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-opacity-90 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-islamic-green transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl animate-in slide-in-from-top">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-4 p-3 rounded-xl hover:bg-slate-50 text-slate-700 font-medium"
              >
                <span className="text-islamic-green">{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            ))}
            <Link 
              href="/registration"
              className="w-full bg-islamic-green text-white text-center py-4 rounded-xl font-bold"
            >
              Enroll Today
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
