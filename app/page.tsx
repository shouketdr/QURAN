import React from 'react';
import { BookOpen, GraduationCap, MapPin, Heart, ArrowRight, Star, Users, Award, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fcfdfa]">
      
      {/* SECTION 1: HERO WITH YOUR IMAGE */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        
        {/* 1. THE IMAGE LAYER (Using your file: hero-bg.jpg) */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
          style={{ 
            backgroundImage: "url('/hero-bg.jpg')" 
          }}
        >
          {/* 2. THE DARK OVERLAY - Makes white text readable */}
          <div className="absolute inset-0 bg-emerald-950/80 backdrop-blur-[1px]" />
        </div>

        {/* 3. DECORATIVE GLOW */}
        <div className="absolute inset-0 opacity-20 z-[1]">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* 4. CONTENT LAYER */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-xs font-bold uppercase tracking-widest">Al-Quran Institute Campus</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-[1.1]">
            Elevate Your <span className="text-amber-400">Quranic</span> Journey
          </h1>
          
          <p className="text-lg md:text-xl text-emerald-50/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience traditional learning in a modern setting. Join our campus for Hifz, 
            Tajweed, and Arabic studies guided by expert scholars.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-emerald-950 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2">
              Start Enrollment <ArrowRight size={20} />
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg transition-all">
              View Programs
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: FLOATING STATS STRIP */}
      <section className="relative z-20 -mt-16 max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-[2rem] shadow-2xl shadow-emerald-950/10 grid grid-cols-2 md:grid-cols-4 border border-emerald-50 overflow-hidden">
          
          <div className="p-8 text-center border-r border-emerald-50 hover:bg-emerald-50/50 transition-colors">
            <div className="flex justify-center mb-3 text-amber-500"><Users size={28} /></div>
            <div className="text-3xl font-black text-emerald-900">500+</div>
            <div className="text-slate-400 text-[10px] uppercase font-bold tracking-[0.2em] mt-1 text-nowrap">Active Students</div>
          </div>

          <div className="p-8 text-center border-r border-emerald-50 hover:bg-emerald-50/50 transition-colors">
            <div className="flex justify-center mb-3 text-amber-500"><BookOpen size={28} /></div>
            <div className="text-3xl font-black text-emerald-900">12+</div>
            <div className="text-slate-400 text-[10px] uppercase font-bold tracking-[0.2em] mt-1 text-nowrap">Courses Offered</div>
          </div>

          <div className="p-8 text-center border-r border-emerald-50 hover:bg-emerald-50/50 transition-colors">
            <div className="flex justify-center mb-3 text-amber-500"><Award size={28} /></div>
            <div className="text-3xl font-black text-emerald-900">45+</div>
            <div className="text-slate-400 text-[10px] uppercase font-bold tracking-[0.2em] mt-1 text-nowrap">Hafiz Graduates</div>
          </div>

          <div className="p-8 text-center hover:bg-emerald-50/50 transition-colors">
            <div className="flex justify-center mb-3 text-amber-500"><MapPin size={28} /></div>
            <div className="text-3xl font-black text-emerald-900">2</div>
            <div className="text-slate-400 text-[10px] uppercase font-bold tracking-[0.2em] mt-1 text-nowrap">Campus Locations</div>
          </div>

        </div>
      </section>

      {/* SECTION 3: CORE PROGRAMS */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-900 mb-4">Our Core Programs</h2>
          <p className="text-slate-500 max-w-xl mx-auto font-medium">Specially designed curriculum for all age groups to master the Holy Quran.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Hifz-ul-Quran", 
              desc: "A dedicated path for memorizing the Quran with proper revision cycles.",
              features: ["Expert Mentors", "Daily Revision", "Certification"]
            },
            { 
              title: "Tajweed Mastery", 
              desc: "Perfecting your pronunciation and understanding the rules of Tilawah.",
              features: ["Makharij Focus", "Small Batches", "Live Feedback"]
            },
            { 
              title: "Arabic Language", 
              desc: "Understand the meaning of the Quranic verses through classical Arabic.",
              features: ["Grammar Rules", "Vocabulary", "Translation"]
            }
          ].map((program, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-emerald-50 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700 mb-6 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">{program.title}</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">{program.desc}</p>
              <ul className="space-y-3">
                {program.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm font-semibold text-emerald-800">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER-LIKE CALL TO ACTION */}
      <section className="bg-emerald-900 py-16 text-center text-white rounded-t-[3rem]">
        <h2 className="text-3xl font-bold mb-4">Ready to start?</h2>
        <p className="text-emerald-200/80 mb-8">Join the Al-Quran Institute community today.</p>
        <button className="bg-amber-500 text-emerald-950 px-8 py-3 rounded-full font-bold hover:bg-amber-400 transition-colors">
          Contact Us
        </button>
      </section>

    </main>
  );
}
