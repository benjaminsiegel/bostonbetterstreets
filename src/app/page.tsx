import Link from "next/link";
import Image from "next/image";
import { getRecentUpdates, UpdateType } from "@/data/updates";
import { format } from "date-fns";

const typeConfig: Record<UpdateType, { label: string; color: string; bgColor: string }> = {
  news: { label: "NEWS", color: "text-[#0a0a0a]", bgColor: "bg-[#13ec25]" },
  "action-alert": { label: "ACTION", color: "text-white", bgColor: "bg-[#ff3b3b]" },
  victory: { label: "VICTORY", color: "text-[#0a0a0a]", bgColor: "bg-[#13ec25]" },
  setback: { label: "SETBACK", color: "text-[#0a0a0a]", bgColor: "bg-yellow-400" },
  event: { label: "EVENT", color: "text-white", bgColor: "bg-blue-500" },
};

export default function Home() {
  const recentUpdates = getRecentUpdates(3);

  return (
    <div className="flex flex-col">
      {/* Game Banner */}
      <Link
        href="/game/index.html"
        className="bg-[#13ec25] text-[#0a0a0a] py-3 px-4 text-center font-medium hover:bg-[#0fc91f] transition-colors"
      >
        Play our new game, <strong className="font-bold">Boston: No Safe Crossing</strong>, now!
      </Link>

      {/* Hero Section */}
      <section className="bg-[#0a0a0a] text-white min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-community.jpg"
            alt="Boston Better Streets Coalition community members"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
          <div className="max-w-4xl">
            {/* Main headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-[0.9] mb-8">
              Boston&apos;s Streets
              <br />
              Are <span className="text-[#13ec25]">Broken</span>
              <br />
              <span className="text-[#13ec25]">Promises</span>
            </h1>

            {/* Subheadline - NEW TAGLINE */}
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-10 leading-relaxed">
              Mayor Wu once campaigned on safer streets. Re-elected with a mandate to build them, she abandoned her promises, ignored experts and data, and let big business and outsiders make decisions about Boston&apos;s streets. Boston families deserve better.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/take-action"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#13ec25] text-[#0a0a0a] font-bold uppercase tracking-wider rounded-full text-lg transition-all shadow-[6px_6px_0px_0px_#fff] hover:shadow-[8px_8px_0px_0px_#fff] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <span className="material-symbols-outlined text-xl mr-2">campaign</span>
                Take Action Now
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider rounded-full text-lg hover:bg-white hover:text-[#0a0a0a] transition-all"
              >
                <span className="material-symbols-outlined text-xl mr-2">construction</span>
                See Stalled Projects
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <span className="material-symbols-outlined text-3xl text-white/50">
              expand_more
            </span>
          </div>
        </div>
      </section>

      {/* Recent Updates Section */}
      <section className="bg-[#f0ece2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#0a0a0a]">
              Latest <span className="text-[#13ec25]">Updates</span>
            </h2>
            <Link
              href="/updates"
              className="hidden sm:inline-flex items-center text-[#0a0a0a] font-bold uppercase tracking-wider hover:text-[#13ec25] transition-colors"
            >
              View All
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {recentUpdates.map((update) => {
              const config = typeConfig[update.type];
              return (
                <Link
                  key={update.id}
                  href={`/updates/${update.slug}`}
                  className="bg-white border-2 border-[#0a0a0a] p-6 shadow-[4px_4px_0px_0px_#0a0a0a] hover:shadow-[6px_6px_0px_0px_#13ec25] hover:border-[#13ec25] transition-all group flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${config.bgColor} ${config.color}`}
                    >
                      {config.label}
                    </span>
                    <span className="text-sm text-[#0a0a0a]/50">
                      {format(new Date(update.date), "MMM d, yyyy")}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-tight mb-3 text-[#0a0a0a] group-hover:text-[#13ec25] transition-colors flex-grow">
                    {update.title}
                  </h3>
                  <p className="text-[#0a0a0a]/60 text-sm mb-4 line-clamp-2">
                    {update.excerpt}
                  </p>
                  <span className="inline-flex items-center text-[#0a0a0a] font-bold uppercase tracking-wider text-sm mt-auto group-hover:text-[#13ec25]">
                    Read more
                    <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 sm:hidden text-center">
            <Link
              href="/updates"
              className="inline-flex items-center text-[#0a0a0a] font-bold uppercase tracking-wider"
            >
              View All Updates
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-[#0a0a0a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mb-4">
              Streets For <span className="text-[#13ec25]">Everyone</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Boston must be a city where people of all ages and abilities can walk,
              bike, and take transit safely—without fear.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { image: "/images/hero_square_families.jpg", title: "For Families", desc: "Parents shouldn't fear walking their children to school." },
              { image: "/images/Hero_square_abilities.jpg", title: "For All Abilities", desc: "Accessible infrastructure benefits everyone in our community." },
              { image: "/images/hero_square_cyclist.jpg", title: "For Cyclists", desc: "Protected bike lanes save lives. Paint is not protection." },
              { image: "/images/hero_square_transit.jpg", title: "For Transit Riders", desc: "Bus riders deserve safe access to stops without risking their lives." },
            ].map((item, index) => (
              <div key={index} className="relative group overflow-hidden aspect-square">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-bold uppercase tracking-wider text-white mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-white/70 text-xs md:text-sm hidden sm:block">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* From Bold to Backtracking */}
      <section className="bg-[#0a0a0a] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-12 md:mb-16 text-center">
            From Bold to <span className="text-[#ff3b3b]">Backtracking</span>
          </h2>

          <div className="space-y-8 md:space-y-10">
            {[
              {
                label: "Big Promises",
                quote: "We're working to transform our streets, so all road users are protected.",
                source: "Mayor Michelle Wu, City of Boston, September 2022",
                link: "https://www.boston.gov/news/bostons-bike-network-and-safer-streets-expanding",
              },
              {
                label: "Hedging",
                quote: "I just don't want us to have it as an on or off switch of either we go to something that feels safe for pedestrians but then almost disastrous for many of the drivers who are coming in from further away.",
                source: "Mayor Michelle Wu, Ask the Mayor, Boston Public Radio, November 18, 2025",
                link: "https://www.youtube.com/watch?v=3vc0-ifqyOc&list=PLMQKK3_a14M1QU6e3Tp2q3HMBEJIr7Z0t&index=48",
              },
              {
                label: "Just Too Complicated",
                quote: "Everyone's interests have to be balanced...we have to find ways to balance everything and it's complicated.",
                source: "Mayor Michelle Wu, Java with Jimmy, November 20, 2025",
                link: "https://www.youtube.com/watch?v=N9QpakqFczo",
              },
            ].map((item, index) => (
              <div key={index}>
                <div className="text-sm md:text-base font-bold uppercase tracking-widest text-[#ff3b3b] mb-3 md:mb-4">
                  {item.label}
                </div>
                <blockquote className="border-l-4 border-[#ff3b3b] pl-5 md:pl-6">
                  <p className="text-lg md:text-xl text-white/80 italic leading-relaxed mb-3">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 hover:text-[#13ec25] transition-colors"
                  >
                    — {item.source}
                  </a>
                </blockquote>
              </div>
            ))}
          </div>

          <p className="mt-12 md:mt-16 text-base md:text-lg text-white leading-relaxed">
            Mayor Wu took office promising the bold street safety reforms Boston desperately needed.
            In 2025, those promises crumbled. Political fears replaced action. Regional traffic
            priorities overrode local safety. The administration even weaponized equity language
            to justify inaction—while communities of color continue facing the highest pedestrian
            injury rates. What we got instead: another year of studies while our kids dodge traffic.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#13ec25] py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-[#0a0a0a] mb-6">
            Enough Delays.
            <br />
            Enough Excuses.
          </h2>
          <p className="text-xl text-[#0a0a0a]/70 mb-10 max-w-2xl mx-auto">
            Join Boston residents demanding the city deliver on its promises
            for safer streets. Your voice matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/take-action"
              className="inline-flex items-center justify-center px-10 py-5 bg-[#0a0a0a] text-white font-bold uppercase tracking-wider rounded-full text-lg transition-all shadow-[6px_6px_0px_0px_#fff] hover:shadow-[8px_8px_0px_0px_#fff] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              <span className="material-symbols-outlined text-xl mr-2">campaign</span>
              Take Action Now
            </Link>
            <Link
              href="/updates"
              className="inline-flex items-center justify-center px-10 py-5 border-2 border-[#0a0a0a] text-[#0a0a0a] font-bold uppercase tracking-wider rounded-full text-lg hover:bg-[#0a0a0a] hover:text-white transition-all"
            >
              <span className="material-symbols-outlined text-xl mr-2">newspaper</span>
              Read Updates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
