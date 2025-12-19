import Link from "next/link";
import { MapPin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg text-white">
                  Boston Better Streets
                </span>
                <span className="block text-xs text-gray-400">
                  Coalition - Est. 2024
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4 max-w-md">
              We are a grassroots coalition of 700+ Boston residents fighting
              for safer streets, better bike infrastructure, and accessible
              public transit. Boston must be a city where families, seniors, and
              people of all abilities can walk, bike, and take transit safely.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:info@bostonbetterstreets.org"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/BostonBetterSt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Active Projects
                </Link>
              </li>
              <li>
                <Link href="/map" className="hover:text-white transition-colors">
                  Pain Point Map
                </Link>
              </li>
              <li>
                <Link href="/updates" className="hover:text-white transition-colors">
                  Latest Updates
                </Link>
              </li>
              <li>
                <Link href="/take-action" className="hover:text-white transition-colors">
                  Take Action
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Partner Organizations
                </Link>
              </li>
              <li>
                <a
                  href="https://www.boston.gov/departments/transportation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Boston Transportation Dept
                </a>
              </li>
              <li>
                <a
                  href="https://www.boston.gov/departments/311"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Report an Issue (311)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024-{new Date().getFullYear()} Boston Better Streets Coalition. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Built with determination by Boston residents who refuse to accept dangerous streets.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
