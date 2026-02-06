import "./globals.css";
import Navbar from "../components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-islamic-cream text-slate-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <footer className="bg-islamic-green text-white p-8 text-center">
          <p>© 2026 Quran Teaching Institute. Every letter learned is a Sadaqah Jariyah.</p>
        </footer>
      </body>
    </html>
  );
}
