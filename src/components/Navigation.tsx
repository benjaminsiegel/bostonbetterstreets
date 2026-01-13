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
  { name: "Officials", href: "/officials" },
  { name: "FAQ", href: "/faq" },
  { name: "Resources", href: "/resources" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

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
              href="/take-action"
              className="inline-flex items-center px-4 py-2 xl:px-6 xl:py-3 bg-[#13ec25] text-[#0a0a0a] text-xs xl:text-sm font-bold uppercase tracking-wider rounded-full hover:bg-[#0fc91f] transition-all shadow-[4px_4px_0px_0px_#fff] hover:shadow-[6px_6px_0px_0px_#fff] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              <span className="material-symbols-outlined text-base xl:text-lg mr-1 xl:mr-2">
                campaign
              </span>
              Take Action
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
