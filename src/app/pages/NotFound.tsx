import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-[#fffafc] p-6 text-center">
      <div>
        <h1 className="text-5xl italic text-[#cb1f52]" style={{ fontFamily: "'Playfair Display', serif" }}>404</h1>
        <p className="mt-2 text-[#4b3140]">Page not found.</p>
        <Link to="/" className="mt-4 inline-flex rounded-full bg-[#cb1f52] px-5 py-2 text-sm font-semibold text-white">Go home</Link>
      </div>
    </div>
  );
}
