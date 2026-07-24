import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Mission | Boston Better Streets Coalition",
  description:
    "We believe every neighborhood deserves streets that are safe, connected, and vibrant. Learn about the Boston Better Streets Coalition's mission.",
};

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-[#f0ece2] text-[#0a0a0a]">
      <section className="border-b border-[#0a0a0a]/18">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 py-14 md:py-20">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#b7342c] mb-4">Mission</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.05em] leading-[0.96] max-w-3xl mb-7">
            Streets should work for the people who live on them.
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-[#0a0a0a]/70 max-w-3xl">
            Boston Better Streets Coalition is organizing residents to demand streets that are safe, accessible, reliable, and built around neighborhood life instead of political caution.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[260px_1fr] gap-8 lg:gap-14 border-b border-[#0a0a0a]/18 pb-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-[-0.03em]">What we believe</h2>
            <p className="text-lg md:text-xl leading-relaxed text-[#0a0a0a]/75">
              Every neighborhood deserves streets that are safe, connected, and vibrant. Kids should be able to bike to school. Seniors should be able to cross without fear. Bus riders should not lose hours to streets designed only around car throughput. Accessibility and community well-being should be the foundation of street design, not an afterthought.
            </p>
          </div>

          <div className="grid lg:grid-cols-[260px_1fr] gap-8 lg:gap-14 border-b border-[#0a0a0a]/18 pb-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-[-0.03em]">The problem</h2>
            <p className="text-lg md:text-xl leading-relaxed text-[#0a0a0a]/75">
              Boston once led on safe, sustainable mobility. Today, the vision is stalling. Projects are paused, bike and bus lanes are removed, and corridors like Hyde Park Avenue and Columbia Road are left behind. In the name of &quot;community process,&quot; bold plans are quietly shelved while residents are asked to accept delay as progress.
            </p>
          </div>

          <div className="grid lg:grid-cols-[260px_1fr] gap-8 lg:gap-14">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-[-0.03em]">What we do</h2>
            <div>
              <p className="text-lg md:text-xl leading-relaxed text-[#0a0a0a]/75 mb-8">
                We track delays, document backslides, publish updates, organize residents, and push leaders to deliver the safer city they promised.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  ["Track", "Projects, timelines, budget decisions, and broken commitments."],
                  ["Document", "Dangerous conditions and the public record behind stalled work."],
                  ["Organize", "Residents who want safer crossings, reliable buses, and protected bike routes."],
                ].map(([title, body]) => (
                  <div key={title} className="bg-[#f8f5ed] border border-[#0a0a0a]/16 rounded-md p-5">
                    <h3 className="font-extrabold text-lg mb-2">{title}</h3>
                    <p className="text-sm leading-relaxed text-[#0a0a0a]/65">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-[#0a0a0a] text-white">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.04em] mb-4">
              Help hold Boston accountable.
            </h2>
            <p className="text-lg text-white/70 max-w-2xl">
              Join residents pushing for the streets the city promised.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/take-action"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#2f6f4e] text-white font-bold rounded-lg hover:bg-[#285f43] transition-colors"
            >
              <span className="material-symbols-outlined mr-2">campaign</span>
              Take Action
            </Link>
            <Link
              href="/updates"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-bold rounded-lg hover:bg-white hover:text-[#0a0a0a] transition-colors"
            >
              <span className="material-symbols-outlined mr-2">newspaper</span>
              Latest Updates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
