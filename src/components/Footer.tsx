export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Boston Better Streets Coalition</p>
          <a
            href="mailto:bostonbetterstreets@gmail.com"
            className="hover:text-[#dbf3d0] transition-colors"
          >
            bostonbetterstreets@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
