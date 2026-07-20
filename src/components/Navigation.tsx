"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { name: "Mission", href: "/mission" },
  { name: "Updates", href: "/updates" },
];

const stalledProjectsUrl =
  "https://app.notion.com/p/pressplayontransportation/Press-Play-on-Transportation-3374eb75300c807494e2f6446632e826?source=copy_link";

const navItemsAfterProjects = [
  { name: "FAQ", href: "/faq" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <div className="sticky top-0 z-50">
      {/* Game Banner */}
      <Link
        href="/play"
        className="group flex items-center justify-center gap-2 bg-[#d8e2d3] px-4 py-2 text-center text-[0.68rem] font-black uppercase tracking-[0.08em] text-[#0a0a0a] transition-colors hover:bg-[#c8d5c1] sm:text-xs"
      >
        Play <span>Boston: No Safe Crossing</span>
        <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-0.5" aria-hidden="true">arrow_forward</span>
      </Link>

      <header className="border-b border-white/10 bg-[#0a0a0a] text-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Wordmark */}
            <Link href="/" className="group">
              <div className="whitespace-nowrap text-sm font-black tracking-[-0.015em] text-white lg:text-base">
                Boston Better Streets Coalition
              </div>
              {/* Street stripe accent */}
              <div className="flex gap-1 mt-1">
                <div className="h-[3px] w-8 bg-[#2f6f4e]"></div>
                <div className="h-[3px] w-4 bg-[#2f6f4e]"></div>
                <div className="h-[3px] w-2 bg-[#2f6f4e]"></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-5 xl:space-x-7">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-xs xl:text-sm font-bold transition-colors whitespace-nowrap pb-1 ${
                    isActive(item.href)
                      ? "text-white"
                      : "text-white/75 hover:text-[#d8e2d3]"
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2f6f4e]" />
                  )}
                </Link>
              ))}

              <a
                href={stalledProjectsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center whitespace-nowrap pb-1 text-xs font-bold text-white/75 transition-colors hover:text-[#d8e2d3] xl:text-sm"
              >
                Stalled Projects
                <span className="material-symbols-outlined ml-1 text-sm" aria-hidden="true">
                  open_in_new
                </span>
              </a>

              {navItemsAfterProjects.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-xs xl:text-sm font-bold transition-colors whitespace-nowrap pb-1 ${
                    isActive(item.href)
                      ? "text-white"
                      : "text-white/75 hover:text-[#d8e2d3]"
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2f6f4e]" />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/join"
                className="inline-flex items-center rounded-full bg-[#d8e2d3] px-6 py-2.5 text-xs font-black text-[#0a0a0a] shadow-[2px_2px_0_#fff] transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-[3px_4px_0_#2f6f4e] xl:text-sm"
              >
                Join Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-6 border-t border-white/10">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-base font-bold transition-colors py-2 ${
                      isActive(item.href)
                        ? "text-[#2f6f4e]"
                        : "text-white/75 hover:text-[#d8e2d3]"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <a
                  href={stalledProjectsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-2 text-base font-bold text-white/75 transition-colors hover:text-[#d8e2d3]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Stalled Projects
                  <span className="material-symbols-outlined text-lg" aria-hidden="true">
                    open_in_new
                  </span>
                </a>

                {navItemsAfterProjects.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-base font-bold transition-colors py-2 ${
                      isActive(item.href)
                        ? "text-[#2f6f4e]"
                        : "text-white/75 hover:text-[#d8e2d3]"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="/join"
                  className="mt-4 inline-flex items-center justify-center px-6 py-3 bg-[#d8e2d3] text-[#0a0a0a] text-sm font-bold rounded-full shadow-[3px_3px_0px_0px_#fff]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join Us
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}
