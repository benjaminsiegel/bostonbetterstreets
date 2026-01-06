"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Our Mission", href: "/mission" },
  { name: "Updates", href: "/updates" },
  { name: "Stalled Projects", href: "/projects" },
  { name: "FAQ", href: "/faq" },
  { name: "Resources", href: "/resources" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#0a0a0a] text-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-[#13ec25] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-[#0a0a0a] text-xl">
                directions_walk
              </span>
            </div>
            <div className="font-bold text-sm uppercase tracking-wider leading-tight">
              <div>Boston Better</div>
              <div>Streets Coalition</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-bold uppercase tracking-wider text-white/80 hover:text-[#13ec25] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/take-action"
              className="inline-flex items-center px-6 py-3 bg-[#13ec25] text-[#0a0a0a] text-sm font-bold uppercase tracking-wider rounded-full hover:bg-[#0fc91f] transition-all shadow-[4px_4px_0px_0px_#fff] hover:shadow-[6px_6px_0px_0px_#fff] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              <span className="material-symbols-outlined text-lg mr-2">
                campaign
              </span>
              Take Action
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-bold uppercase tracking-wider text-white/80 hover:text-[#13ec25] transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/take-action"
                className="mt-4 inline-flex items-center justify-center px-6 py-3 bg-[#13ec25] text-[#0a0a0a] text-sm font-bold uppercase tracking-wider rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="material-symbols-outlined text-lg mr-2">
                  campaign
                </span>
                Take Action
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
