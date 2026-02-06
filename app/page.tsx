import React from 'react';
import { BookOpen, GraduationCap, MapPin, Heart } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center bg-islamic-green text-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-islamic-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-islamic-gold rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Elevate Your <span className="text-islamic-gold">Quranic</span> Journey
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience traditional learning in a modern setting. Join our campus for Hifz, 
            Tajweed, and Arabic studies guided by expert scholars.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-islamic-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all hover:-translate-y-1">
              Start Enrollment
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
              View Programs
            </button>
          </div>
        </div>
      </section>

      {/* QUICK STATS / INFO */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Students', val: '500+', icon: <GraduationCap /> },
            { label: 'Courses', val: '12', icon: <BookOpen /> },
            { label: 'Campus', val: '2', icon: <MapPin /> },
            { label: 'Sadaqah', val: '100%', icon: <Heart /> },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-islamic-gold flex justify-center mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-islamic-green">{stat.val}</div>
              <div className="text-slate-500 text-sm uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
