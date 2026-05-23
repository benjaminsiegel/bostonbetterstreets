import Link from "next/link";
import Image from "next/image";
import { getRecentUpdates, UpdateType } from "@/lib/updates";
import { format, parseISO } from "date-fns";

const typeConfig: Record<UpdateType, { label: string; color: string; bgColor: string }> = {
  news: { label: "News", color: "text-[#0a0a0a]", bgColor: "bg-[#d8e2d3]" },
  "action-alert": { label: "Action Alert", color: "text-white", bgColor: "bg-[#b7342c]" },
  victory: { label: "Victory", color: "text-white", bgColor: "bg-[#2f6f4e]" },
  setback: { label: "Setback", color: "text-[#0a0a0a]", bgColor: "bg-[#e7d5a0]" },
  event: { label: "Event", color: "text-[#0a0a0a]", bgColor: "bg-[#b8c7d8]" },
};

export default function Home() {
  const recentUpdates = getRecentUpdates(3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#0a0a0a] text-white min-h-[620px] md:min-h-[680px] flex items-center relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-community.jpg"
            alt="Boston Better Streets Coalition community members"
            fill
            className="object-cover opacity-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/60 to-[#0a0a0a]/10" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14 relative z-10 w-full">
          <div className="max-w-3xl">
            {/* Main headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] mb-6">
              Boston&apos;s
              <br />
              Streets Are
              <br />
              <span className="text-[#d8e2d3]">Broken Promises</span>
            </h1>

            <p className="text-lg md:text-xl text-white/82 max-w-2xl mb-6 leading-relaxed">
              Mayor Wu once campaigned on safer streets. Re-elected with a mandate to build them, she abandoned her promises, ignored experts and data, and let big business and outsiders make decisions about Boston&apos;s streets. Boston families deserve better.
            </p>

            <div className="grid grid-cols-2 gap-5 max-w-lg mb-7 border-y border-white/20 py-4">
              <div>
                <div className="text-2xl md:text-3xl font-black text-[#2f6f4e]">800+</div>
                <div className="text-[0.68rem] md:text-xs font-bold text-white/60">Residents</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-[#2f6f4e]">2024</div>
                <div className="text-[0.68rem] md:text-xs font-bold text-white/60">Organizing since</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/join"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2f6f4e] text-white font-bold rounded-full text-base transition-all shadow-[4px_4px_0px_0px_#fff] hover:shadow-[6px_6px_0px_0px_#fff] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                Join Us
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/80 text-white font-bold rounded-full text-base hover:bg-white hover:text-[#0a0a0a] transition-all"
              >
                See Stalled Projects
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Recent Updates Section */}
      <section className="bg-[#f0ece2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-sm font-bold text-[#b7342c] mb-3">
                Latest Updates
              </p>
              <h2 className="text-3xl md:text-5xl font-black leading-none text-[#0a0a0a]">
                From the Coalition
              </h2>
            </div>
            <Link
              href="/updates"
              className="hidden sm:inline-flex items-center text-[#0a0a0a] font-bold hover:text-[#2f6f4e] transition-colors"
            >
              View All
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[#0a0a0a] border-2 border-[#0a0a0a] shadow-[6px_6px_0px_0px_#0a0a0a]">
            {recentUpdates.map((update) => {
              const config = typeConfig[update.type];
              return (
                <Link
                  key={update.id}
                  href={`/updates/${update.slug}`}
                  className="bg-white hover:bg-[#fbfaf6] transition-colors group flex flex-col overflow-hidden"
                >
                  {update.image && (
                    <div className="relative aspect-square w-full bg-[#f0ece2] border-b-2 border-[#0a0a0a] overflow-hidden">
                      <Image
                        src={update.image}
                        alt={update.imageAlt || update.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow min-h-72">
                    <div className="flex items-center gap-3 mb-5">
                      <span
                        className={`px-3 py-1 text-[0.68rem] font-bold rounded-full ${config.bgColor} ${config.color}`}
                      >
                        {config.label}
                      </span>
                      <span className="text-xs font-bold text-[#0a0a0a]/45">
                        {format(parseISO(update.date), "MMM d, yyyy")}
                      </span>
                    </div>
                    <h3 className="text-xl font-black leading-tight mb-4 text-[#0a0a0a] group-hover:text-[#2f6f4e] transition-colors">
                      {update.title}
                    </h3>
                    <p className="text-[#0a0a0a]/62 text-sm leading-relaxed mb-5 line-clamp-3">
                      {update.excerpt}
                    </p>
                    <span className="inline-flex items-center text-[#0a0a0a] font-bold text-sm mt-auto group-hover:text-[#2f6f4e]">
                      Read more
                      <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 sm:hidden text-center">
            <Link
              href="/updates"
              className="inline-flex items-center text-[#0a0a0a] font-bold"
            >
              View All Updates
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
