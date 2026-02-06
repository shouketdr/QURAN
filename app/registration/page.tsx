export default function Register() {
  return (
    <div className="max-w-2xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold text-islamic-green mb-8 text-center">Enrollment Form</h2>
      <form className="bg-white p-8 rounded-2xl shadow-md space-y-6">
        <div>
          <label className="block text-sm font-bold mb-2">Full Name</label>
          <input type="text" className="w-full p-3 bg-slate-50 border rounded-lg" placeholder="Enter student name" required />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">Course Selection</label>
          <select className="w-full p-3 bg-slate-50 border rounded-lg">
            <option>Hifz Program</option>
            <option>Tajweed Basics</option>
            <option>Noorani Qaida</option>
          </select>
        </div>
        <button className="w-full bg-islamic-gold text-islamic-green font-bold py-4 rounded-lg">
          Submit Application
        </button>
        <p className="text-xs text-center text-slate-400">Our campus team will call you for an in-person assessment.</p>
      </form>
    </div>
  );
}
