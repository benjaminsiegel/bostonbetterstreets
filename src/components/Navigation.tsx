"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Mission", href: "/mission" },
  { name: "Updates", href: "/updates" },
];

const projectsDropdown = {
  name: "Stalled Projects",
  href: "/projects",
  items: [
    { name: "Hyde Park Avenue", href: "/projects/hyde-park-avenue" },
    { name: "Blue Hill Avenue", href: "/projects/blue-hill-avenue" },
    { name: "Columbia Road", href: "/projects/columbia-road" },
  ],
};

const navItemsAfterProjects = [
  { name: "FAQ", href: "/faq" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      {/* Game Banner */}
      <Link
        href="/game/index.html"
        className="block bg-[#13ec25] text-[#0a0a0a] py-2 px-4 text-center text-sm font-medium hover:bg-[#0fc91f] transition-colors"
      >
        Play our new game, <strong className="font-bold">Boston: No Safe Crossing</strong>, now!
      </Link>

      <header className="bg-[#0a0a0a] text-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Wordmark */}
            <Link href="/" className="group">
              <div className="font-bold text-sm lg:text-base uppercase tracking-wider text-white whitespace-nowrap">
                Boston Better Streets Coalition
              </div>
              {/* Street stripe accent */}
              <div className="flex gap-1 mt-1">
                <div className="h-[3px] w-8 bg-[#13ec25]"></div>
                <div className="h-[3px] w-4 bg-[#13ec25]"></div>
                <div className="h-[3px] w-2 bg-[#13ec25]"></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-5 xl:space-x-7">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs xl:text-sm font-bold uppercase tracking-wider text-white/80 hover:text-[#13ec25] transition-colors whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}

              {/* Stalled Projects Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProjectsOpen(true)}
                onMouseLeave={() => setProjectsOpen(false)}
              >
                <Link
                  href={projectsDropdown.href}
                  className="text-xs xl:text-sm font-bold uppercase tracking-wider text-white/80 hover:text-[#13ec25] transition-colors whitespace-nowrap inline-flex items-center"
                >
                  {projectsDropdown.name}
                  <span className="material-symbols-outlined text-sm ml-1">
                    expand_more
                  </span>
                </Link>

                {projectsOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-[#0a0a0a] border border-white/10 min-w-[200px] shadow-lg">
                    <Link
                      href={projectsDropdown.href}
                      className="block px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#13ec25] hover:bg-white/5 border-b border-white/10"
                    >
                      View All Projects
                    </Link>
                    {projectsDropdown.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-xs font-bold uppercase tracking-wider text-white/80 hover:text-[#13ec25] hover:bg-white/5 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navItemsAfterProjects.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs xl:text-sm font-bold uppercase tracking-wider text-white/80 hover:text-[#13ec25] transition-colors whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/join"
                className="inline-flex items-center px-6 py-2.5 bg-[#dbf3d0] text-[#0a0a0a] text-xs xl:text-sm font-bold uppercase tracking-wider rounded-full transition-all shadow-[3px_3px_0px_0px_#fff] hover:shadow-[5px_5px_0px_0px_#fff] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                Join Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
                    className="text-base font-bold uppercase tracking-wider text-white/80 hover:text-[#13ec25] transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Stalled Projects */}
                <div>
                  <button
                    onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                    className="w-full flex items-center justify-between text-base font-bold uppercase tracking-wider text-white/80 hover:text-[#13ec25] transition-colors py-2"
                  >
                    {projectsDropdown.name}
                    <span className="material-symbols-outlined">
                      {mobileProjectsOpen ? "expand_less" : "expand_more"}
                    </span>
                  </button>
                  {mobileProjectsOpen && (
                    <div className="pl-4 border-l-2 border-[#13ec25] ml-2 mt-2 space-y-2">
                      <Link
                        href={projectsDropdown.href}
                        className="block text-sm font-bold uppercase tracking-wider text-[#13ec25] py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        View All Projects
                      </Link>
                      {projectsDropdown.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block text-sm font-bold uppercase tracking-wider text-white/60 hover:text-[#13ec25] transition-colors py-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {navItemsAfterProjects.map((item) => (
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
                  href="/join"
                  className="mt-4 inline-flex items-center justify-center px-6 py-3 bg-[#dbf3d0] text-[#0a0a0a] text-sm font-bold uppercase tracking-wider rounded-full shadow-[3px_3px_0px_0px_#fff]"
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
