import { BookOpen, MapPin, Users, Heart } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-islamic-green text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">Traditional Quran Learning</h1>
        <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-10">
          We teach Quran Reading, Tajweed, and Hifz through in-person classes led by qualified teachers.
        </p>
        <Link href="/registration" className="bg-islamic-gold text-islamic-green px-10 py-4 rounded-full font-bold text-lg hover:brightness-110 transition">
          Enroll at the Campus
        </Link>
      </section>

      {/* Offline Focus */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div className="bg-white p-8 rounded-2xl shadow-sm border-b-4 border-islamic-gold">
          <Users className="text-islamic-gold mb-4" size={32} />
          <h3 className="text-xl font-bold mb-2 text-islamic-green">Face-to-Face Guidance</h3>
          <p className="text-slate-600 italic">Students learn directly at the campus with physical supervision.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border-b-4 border-islamic-gold">
          <BookOpen className="text-islamic-gold mb-4" size={32} />
          <h3 className="text-xl font-bold mb-2 text-islamic-green">Structured Programs</h3>
          <p className="text-slate-600">Daily Hifz circles, Tajweed revision, and Qaida sessions.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border-b-4 border-islamic-gold">
          <MapPin className="text-islamic-gold mb-4" size={32} />
          <h3 className="text-xl font-bold mb-2 text-islamic-green">Quiet Campus</h3>
          <p className="text-slate-600">A spiritual environment designed specifically for focus and revision.</p>
        </div>
      </section>
    </div>
  );
}
