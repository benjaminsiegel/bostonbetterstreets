import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo and tagline */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#13ec25] rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-[#0a0a0a] text-2xl">
                directions_walk
              </span>
            </div>
            <div>
              <span className="font-bold text-lg uppercase tracking-wider block">
                Boston Better Streets Coalition
              </span>
              <span className="text-sm text-white/60">
                Fighting for safer streets since 2024
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-6 text-sm font-medium uppercase tracking-wider">
            <Link href="/projects" className="text-white/70 hover:text-[#13ec25] transition-colors">
              Projects
            </Link>
            <Link href="/updates" className="text-white/70 hover:text-[#13ec25] transition-colors">
              Updates
            </Link>
            <Link href="/faq" className="text-white/70 hover:text-[#13ec25] transition-colors">
              FAQ
            </Link>
            <Link href="/resources" className="text-white/70 hover:text-[#13ec25] transition-colors">
              Resources
            </Link>
            <Link href="/take-action" className="text-[#13ec25] hover:text-white transition-colors">
              Take Action
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Boston Better Streets Coalition</p>
          <div className="flex items-center space-x-4">
            <a
              href="mailto:info@bostonbetterstreets.org"
              className="hover:text-[#13ec25] transition-colors flex items-center"
            >
              <span className="material-symbols-outlined text-lg mr-2">mail</span>
              info@bostonbetterstreets.org
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
