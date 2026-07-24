import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Allies & Obstructionists | Boston Better Streets Coalition",
  description:
    "Tracking which Boston officials are helping and hindering progress on street safety.",
};

export default function OfficialsPage() {
  return (
    <div className="min-h-screen bg-[#f0ece2] text-[#0a0a0a]">
      <section className="border-b border-[#0a0a0a]/18">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 py-14 md:py-20">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#b7342c] mb-4">
            Accountability
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-[-0.05em] leading-[0.96] max-w-4xl mb-7">
            Allies &amp; obstructionists.
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-[#0a0a0a]/70 max-w-3xl">
            Tracking which elected officials and city leaders are fighting for
            safer streets—and which ones are standing in the way.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <div className="bg-[#f8f5ed] border border-[#0a0a0a]/16 rounded-md p-8 md:p-12">
            <span className="material-symbols-outlined text-5xl text-[#2f6f4e] mb-6">
              construction
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-[-0.03em] mb-4">
              This tracker is coming soon.
            </h2>
            <p className="text-lg leading-relaxed text-[#0a0a0a]/70 mb-8 max-w-2xl">
              We&apos;re compiling records on Boston&apos;s elected officials, city
              councilors, and administration leaders. Soon you&apos;ll be able to see
              who&apos;s championing street safety and who&apos;s blocking progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/take-action"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#2f6f4e] text-white font-bold rounded-lg hover:bg-[#285f43] transition-colors"
              >
                <span className="material-symbols-outlined mr-2">campaign</span>
                Take Action Now
              </Link>
              <Link
                href="/updates"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#0a0a0a]/30 text-[#0a0a0a] font-bold rounded-lg hover:bg-[#0a0a0a] hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined mr-2">newspaper</span>
                Read Updates
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18 bg-[#0a0a0a] text-white">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#8fba9f] mb-3">
            The public record
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.04em] mb-10">
            What we&apos;ll track
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-white/16 rounded-md p-6">
              <div className="w-11 h-11 bg-[#2f6f4e] rounded-full flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-white">
                  thumb_up
                </span>
              </div>
              <h3 className="text-lg font-extrabold mb-2">
                Votes & Statements
              </h3>
              <p className="text-white/64 text-sm leading-relaxed">
                How officials have voted on street safety measures and what
                they&apos;ve said publicly about transportation policy.
              </p>
            </div>
            <div className="border border-white/16 rounded-md p-6">
              <div className="w-11 h-11 bg-[#b7342c] rounded-full flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-white">
                  block
                </span>
              </div>
              <h3 className="text-lg font-extrabold mb-2">
                Opposition Tactics
              </h3>
              <p className="text-white/64 text-sm leading-relaxed">
                Documenting who has blocked, delayed, or watered down safety
                projects in their districts or citywide.
              </p>
            </div>
            <div className="border border-white/16 rounded-md p-6">
              <div className="w-11 h-11 bg-[#e7d5a0] rounded-full flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-[#0a0a0a]">
                  attach_money
                </span>
              </div>
              <h3 className="text-lg font-extrabold mb-2">
                Campaign Donors
              </h3>
              <p className="text-white/64 text-sm leading-relaxed">
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
