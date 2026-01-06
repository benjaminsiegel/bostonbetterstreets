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
              Mayor Wu&apos;s administration promised safer streets. We got studies,
              delays, and streets we&apos;re still afraid to let our kids cross.
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
      <section className="bg-[#f0ece2] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#0a0a0a] mb-6">
              Streets For <span className="text-[#13ec25]">Everyone</span>
            </h2>
            <p className="text-xl text-[#0a0a0a]/70">
              Boston must be a city where people of all ages and abilities can walk,
              bike, and take transit safely—without fear.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "family_restroom", title: "For Families", desc: "Parents shouldn't fear walking their children to school." },
              { icon: "accessible", title: "For All Abilities", desc: "Accessible infrastructure benefits everyone in our community." },
              { icon: "pedal_bike", title: "For Cyclists", desc: "Protected bike lanes save lives. Paint is not protection." },
              { icon: "directions_bus", title: "For Transit Riders", desc: "Bus riders deserve safe access to stops without risking their lives." },
            ].map((item, index) => (
              <div key={index} className="bg-[#0a0a0a] text-white p-8 hover:shadow-[6px_6px_0px_0px_#13ec25] transition-all group">
                <div className="w-16 h-16 bg-[#13ec25] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[#0a0a0a] text-3xl">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Progress Has Stalled */}
      <section className="bg-[#0a0a0a] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-12 text-center">
              Why Progress Has <span className="text-[#ff3b3b]">Stalled</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  icon: "how_to_vote",
                  title: "Election-Year Politics",
                  desc: "Internal guidance suggested minimizing 'oxygen' for street design during the 2025 election cycle to avoid backlash.",
                },
                {
                  icon: "traffic",
                  title: "Regional vs. Local",
                  desc: "The administration has prioritized regional traffic flow for suburban commuters over safety for local residents.",
                },
                {
                  icon: "balance",
                  title: "Equity Paradox",
                  desc: "Residents in Black and brown communities are four times more likely to be struck by cars and most reliant on delayed bus routes.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start p-6 border border-white/10 hover:border-[#13ec25] transition-colors">
                  <div className="w-12 h-12 bg-[#ff3b3b] rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                    <span className="material-symbols-outlined text-white text-xl">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-wider mb-2">{item.title}</h3>
                    <p className="text-white/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
