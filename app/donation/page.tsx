import { Heart } from "lucide-react";

export default function Donation() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      <div className="text-center mb-12">
        <Heart className="mx-auto text-red-500 mb-4" size={48} />
        <h1 className="text-3xl font-bold text-islamic-green">Your Donation Helps Someone Learn the Quran</h1>
      </div>
      
      <div className="bg-white p-10 rounded-3xl shadow-xl">
        <p className="text-xl text-center italic text-slate-700 mb-10">
          “Every letter a student memorizes becomes a continuous charity (sadaqah jariyah) for you.”
        </p>
        <div className="space-y-4 mb-10 text-slate-600">
          <div className="flex gap-3">✅ <span>Free classes for orphans and low-income students</span></div>
          <div className="flex gap-3">✅ <span>Sponsorship of Hifz students</span></div>
          <div className="flex gap-3">✅ <span>New books and campus maintenance</span></div>
        </div>
        <button className="w-full bg-islamic-green text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-800 transition">
          Donate to Support Quran Students
        </button>
      </div>
    </div>
  );
}
