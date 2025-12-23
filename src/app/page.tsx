import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#0a0a0a] text-white min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 50px,
              rgba(19, 236, 37, 0.1) 50px,
              rgba(19, 236, 37, 0.1) 51px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 50px,
              rgba(19, 236, 37, 0.1) 50px,
              rgba(19, 236, 37, 0.1) 51px
            )`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
          <div className="max-w-5xl">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-[#13ec25] text-[#0a0a0a] rounded-full text-sm font-bold uppercase tracking-wider mb-8 shadow-[4px_4px_0px_0px_#fff]">
              <span className="material-symbols-outlined text-lg mr-2">group</span>
              700+ Residents Demanding Action
            </div>

            {/* Main headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-[0.9] mb-8">
              Boston&apos;s Streets
              <br />
              Are <span className="text-[#13ec25]">Broken</span>
              <br />
              <span className="text-[#13ec25]">Promises</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-10 leading-relaxed">
              The city promised safer streets. Instead, we got studies, delays,
              and tragedy. We&apos;re tracking the broken promises and demanding action.
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

      {/* Stats Section */}
      <section className="bg-[#f0ece2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-[#0a0a0a]">6+</div>
              <div className="text-sm font-bold uppercase tracking-wider text-[#0a0a0a]/60 mt-2">Years of Delays</div>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-[#13ec25]">700+</div>
              <div className="text-sm font-bold uppercase tracking-wider text-[#0a0a0a]/60 mt-2">Petition Signatures</div>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-[#0a0a0a]">12+</div>
              <div className="text-sm font-bold uppercase tracking-wider text-[#0a0a0a]/60 mt-2">Stalled Projects</div>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-[#ff3b3b]">0</div>
              <div className="text-sm font-bold uppercase tracking-wider text-[#0a0a0a]/60 mt-2">Promises Kept</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-[#0a0a0a] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
              Streets For <span className="text-[#13ec25]">Everyone</span>
            </h2>
            <p className="text-xl text-white/70">
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
              <div key={index} className="bg-white/5 border border-white/10 p-8 hover:border-[#13ec25] transition-colors group">
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

      {/* Featured Project: Hyde Park Avenue */}
      <section className="bg-[#f0ece2] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-[#ff3b3b] text-white rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <span className="material-symbols-outlined text-sm mr-2">warning</span>
                Featured Project
              </div>

              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#0a0a0a] mb-6">
                Hyde Park Avenue:
                <br />
                <span className="text-[#ff3b3b]">A Six-Year Battle</span>
              </h2>

              <p className="text-lg text-[#0a0a0a]/70 mb-6">
                Planning for a &quot;complete streets&quot; redesign began in <strong>2019</strong>.
                In October 2024, Forest Hills resident <strong>Glenn Inghram was killed</strong> by
                an MBTA bus in a crosswalk. Over 700 residents signed a petition demanding action.
              </p>

              <p className="text-lg text-[#0a0a0a]/70 mb-8">
                The city&apos;s response? More delays. In July 2025, the Wu administration announced
                it would proceed with <strong>repaving only</strong>—implementing neither safety
                alternative and delaying designs until at least 2026.
              </p>

              <blockquote className="border-l-4 border-[#13ec25] pl-6 my-8 text-xl italic text-[#0a0a0a]/80">
                &quot;Hyde Park Avenue is not a road but a moat—a dangerous, high-speed barrier
                residents must swim across daily just to reach transit.&quot;
              </blockquote>

              <Link
                href="/projects/hyde-park-avenue"
                className="inline-flex items-center text-[#0a0a0a] font-bold uppercase tracking-wider hover:text-[#13ec25] transition-colors group"
              >
                Read the Full Story
                <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>

            {/* Timeline */}
            <div className="bg-[#0a0a0a] text-white p-8 shadow-[8px_8px_0px_0px_#13ec25]">
              <h3 className="text-xl font-bold uppercase tracking-wider mb-8 flex items-center">
                <span className="material-symbols-outlined text-[#13ec25] mr-3">timeline</span>
                Timeline of Inaction
              </h3>
              <div className="space-y-6">
                {[
                  { year: "2019", event: "Complete streets planning begins", status: "started" },
                  { year: "2020", event: "Project shelved due to COVID", status: "paused" },
                  { year: "2023", event: "Project formally restarts", status: "resumed" },
                  { year: "Oct 2024", event: "Glenn Inghram killed in crosswalk", status: "tragedy" },
                  { year: "May 2025", event: "City presents two alternatives", status: "progress" },
                  { year: "Jul 2025", event: "City chooses neither—repaving only", status: "stalled" },
                  { year: "2026+", event: "Safety designs delayed indefinitely", status: "unknown" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`w-4 h-4 rounded-full mt-1 mr-4 flex-shrink-0 ${
                      item.status === "tragedy" ? "bg-[#ff3b3b]" :
                      item.status === "stalled" ? "bg-yellow-400" :
                      item.status === "unknown" ? "bg-white/30" :
                      "bg-[#13ec25]"
                    }`} />
                    <div>
                      <span className="font-bold text-[#13ec25]">{item.year}</span>
                      <span className="text-white/70 ml-3">{item.event}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
            Join 700+ Boston residents demanding the city deliver on its promises
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
