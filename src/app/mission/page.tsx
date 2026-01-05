import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Mission | Boston Better Streets Coalition",
  description:
    "We believe every neighborhood deserves streets that are safe, connected, and vibrant. Learn about the Boston Better Streets Coalition's mission.",
};

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-[#f0ece2]">
      {/* Header */}
      <section className="bg-[#0a0a0a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center px-4 py-2 bg-[#13ec25] text-[#0a0a0a] rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <span className="material-symbols-outlined text-sm mr-2">
              favorite
            </span>
            Our Mission
          </div>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
            Streets for
            <br />
            <span className="text-[#13ec25]">Everyone</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl">
            Building a Boston where every resident can move safely and freely.
          </p>
        </div>
      </section>

      {/* Mission Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* What We Believe */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-[#0a0a0a] mb-8 pb-4 border-b-4 border-[#13ec25]">
              What We Believe
            </h2>
            <div className="bg-[#0a0a0a] text-white p-8 md:p-12">
              <p className="text-lg md:text-xl leading-relaxed text-white/90">
                We believe every neighborhood deserves streets that are safe,
                connected, and vibrant. We believe in a city where kids can bike
                to school, seniors can cross the street safely, and bus riders
                get where they&apos;re going without delay. We believe that we
                should have streets where car traffic is slower and more
                predictable, sidewalks are large enough that people of all
                ability can use them, and where accessibility and community
                well-being aren&apos;t afterthoughts in design, but the
                foundation of how they are imagined and built.
              </p>
            </div>
          </div>

          {/* The Problem */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-[#0a0a0a] mb-8 pb-4 border-b-4 border-[#ff3b3b]">
              The Problem
            </h2>
            <div className="bg-white border-4 border-[#0a0a0a] p-8 md:p-12 shadow-[8px_8px_0px_0px_#0a0a0a]">
              <p className="text-lg leading-relaxed text-[#0a0a0a]/80">
                Boston once led the way on safe, sustainable mobility. But
                today, the vision is stalling. Projects are being paused, bike
                and bus lanes removed, and entire corridors like Hyde Park
                Avenue and Columbia Road are being left behind. In the name of
                &quot;community process,&quot; bold plans are quietly shelved,
                and the city&apos;s politicians are listening to large donors
                and pass-through drivers instead of residents.
              </p>
            </div>
          </div>

          {/* What We Do */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-[#0a0a0a] mb-8 pb-4 border-b-4 border-[#13ec25]">
              What We Do
            </h2>
            <div className="bg-[#13ec25] p-8 md:p-12">
              <p className="text-lg md:text-xl leading-relaxed text-[#0a0a0a]">
                The Boston Better Streets Coalition brings together residents,
                riders, and advocates with a shared goal: to make Boston a city
                where everyone can get around well, no matter how they get
                around. We&apos;re tracking delays, exposing backslides, and
                pushing leaders to deliver on the promise of a better, safer,
                and fairer city.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6">
            Join the <span className="text-[#13ec25]">Movement</span>
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Every voice matters. Help us hold Boston accountable for the streets
            we were promised.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/take-action"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#13ec25] text-[#0a0a0a] font-bold uppercase tracking-wider rounded-full transition-all shadow-[4px_4px_0px_0px_#fff] hover:shadow-[6px_6px_0px_0px_#fff] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              <span className="material-symbols-outlined mr-2">campaign</span>
              Take Action
            </Link>
            <Link
              href="/updates"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#13ec25] text-[#13ec25] font-bold uppercase tracking-wider rounded-full hover:bg-[#13ec25] hover:text-[#0a0a0a] transition-all"
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
