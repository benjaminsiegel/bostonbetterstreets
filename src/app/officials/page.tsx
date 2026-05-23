import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Allies & Obstructionists | Boston Better Streets Coalition",
  description:
    "Tracking which Boston officials are helping and hindering progress on street safety.",
};

export default function OfficialsPage() {
  return (
    <div className="min-h-screen bg-[#f0ece2]">
      {/* Header */}
      <section className="bg-[#0a0a0a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center px-4 py-2 bg-[#2f6f4e] text-white rounded-full text-xs font-bold mb-6">
            <span className="material-symbols-outlined text-sm mr-2">
              how_to_vote
            </span>
            Accountability
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Allies &<br />
            <span className="text-[#b7342c]">Obstructionists</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl">
            Tracking which elected officials and city leaders are fighting for
            safer streets—and which ones are standing in the way.
          </p>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white border-2 border-[#0a0a0a] p-12 shadow-[8px_8px_0px_0px_#0a0a0a]">
            <span className="material-symbols-outlined text-6xl text-[#0a0a0a]/30 mb-6">
              construction
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-[#0a0a0a]/70 mb-8 max-w-2xl mx-auto">
              We&apos;re compiling records on Boston&apos;s elected officials, city
              councilors, and administration leaders. Soon you&apos;ll be able to see
              who&apos;s championing street safety and who&apos;s blocking progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/take-action"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2f6f4e] text-white font-bold rounded-full transition-all shadow-[4px_4px_0px_0px_#0a0a0a] hover:shadow-[6px_6px_0px_0px_#0a0a0a] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <span className="material-symbols-outlined mr-2">campaign</span>
                Take Action Now
              </Link>
              <Link
                href="/updates"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#0a0a0a] text-[#0a0a0a] font-bold rounded-full hover:bg-[#0a0a0a] hover:text-white transition-all"
              >
                <span className="material-symbols-outlined mr-2">newspaper</span>
                Read Updates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
            What We&apos;ll <span className="text-[#2f6f4e]">Track</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-white/10 p-6">
              <div className="w-12 h-12 bg-[#2f6f4e] rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[#0a0a0a]">
                  thumb_up
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Votes & Statements
              </h3>
              <p className="text-white/60 text-sm">
                How officials have voted on street safety measures and what
                they&apos;ve said publicly about transportation policy.
              </p>
            </div>
            <div className="border border-white/10 p-6">
              <div className="w-12 h-12 bg-[#b7342c] rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-white">
                  block
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Opposition Tactics
              </h3>
              <p className="text-white/60 text-sm">
                Documenting who has blocked, delayed, or watered down safety
                projects in their districts or citywide.
              </p>
            </div>
            <div className="border border-white/10 p-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[#0a0a0a]">
                  attach_money
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Campaign Donors
              </h3>
              <p className="text-white/60 text-sm">
                Following the money to understand whose interests officials may
                be serving when they oppose safety improvements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
