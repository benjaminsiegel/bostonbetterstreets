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

const enoughIsEnoughUrl = "https://benjaminsiegel.github.io/enough-is-enough/";

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
      {/* Current campaign notice */}
      <a
        href={enoughIsEnoughUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center gap-2 border-b border-[#0a0a0a]/10 bg-[#e4eadf] px-4 py-2 text-center text-[0.7rem] font-semibold text-[#0a0a0a]/75 transition-colors hover:bg-[#d8e2d3] sm:text-xs"
      >
        <span className="text-[#9b3731]">Enough Is Enough</span>
        <span className="hidden sm:inline">Read the open letter from Boston neighbors</span>
        <span className="material-symbols-outlined text-[0.8rem] transition-transform group-hover:translate-x-0.5" aria-hidden="true">north_east</span>
      </a>

      <header className="border-b border-white/10 bg-[#0a0a0a] text-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-[4.25rem] items-center justify-between">
            {/* Wordmark */}
            <Link href="/" className="group">
              <div className="whitespace-nowrap text-sm font-bold tracking-[-0.01em] text-white lg:text-base">
                Boston Better Streets Coalition
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
                className="inline-flex items-center rounded-lg bg-[#d8e2d3] px-5 py-2.5 text-xs font-bold text-[#0a0a0a] transition-colors hover:bg-white xl:text-sm"
              >
                Join Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="rounded-md p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
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
                  className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#d8e2d3] px-6 py-3 text-sm font-bold text-[#0a0a0a]"
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
