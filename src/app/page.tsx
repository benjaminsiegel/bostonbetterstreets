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

const stalledProjectsUrl =
  "https://app.notion.com/p/pressplayontransportation/Press-Play-on-Transportation-3374eb75300c807494e2f6446632e826?source=copy_link";

export default function Home() {
  const recentUpdates = getRecentUpdates(3);

  return (
    <div className="flex flex-col bg-[#f0ece2]">
      {/* Hero Section */}
      <section className="relative flex min-h-[620px] items-center overflow-hidden bg-[#0a0a0a] text-white md:min-h-[680px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-community.jpg"
            alt="Boston Better Streets Coalition community members"
            fill
            className="object-cover object-[58%_center] opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,.98)_0%,rgba(10,10,10,.9)_38%,rgba(10,10,10,.48)_68%,rgba(10,10,10,.15)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-16 lg:px-8">
          <div className="max-w-[760px]">
            <div className="mb-6 flex items-center gap-3 text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#d8e2d3] sm:text-xs">
              <span className="h-[3px] w-10 bg-[#2f6f4e]" aria-hidden="true" />
              Resident-led street safety advocacy
            </div>

            {/* Main headline */}
            <h1 className="mb-7 text-[3.35rem] font-black leading-[0.88] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[5.35rem]">
              Boston&apos;s
              <br />
              Streets Are
              <br />
              <span className="text-[#d8e2d3]">Broken Promises</span>
            </h1>

            <p className="mb-8 max-w-[660px] text-base leading-[1.7] text-white/78 sm:text-lg md:text-xl">
              Mayor Wu once campaigned on safer streets. Re-elected with a mandate to build them, she abandoned her promises, ignored experts and data, and let big business and outsiders make decisions about Boston&apos;s streets. Boston families deserve better.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/join"
                className="inline-flex min-h-13 items-center justify-center rounded-full bg-[#2f6f4e] px-8 py-3.5 text-sm font-black text-white shadow-[3px_3px_0_#fff] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[#397e5a] hover:shadow-[5px_5px_0_#fff] sm:text-base"
              >
                Join the coalition
              </Link>
              <a
                href={stalledProjectsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/65 px-8 py-3.5 text-sm font-black text-white transition-colors hover:border-white hover:bg-white hover:text-[#0a0a0a] sm:text-base"
              >
                See stalled projects
                <span className="material-symbols-outlined text-base" aria-hidden="true">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Updates Section */}
      <section className="border-t border-[#0a0a0a]/10 bg-[#f0ece2] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-6 md:mb-12">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.15em] text-[#b7342c]">
                Latest Updates
              </p>
              <h2 className="text-3xl font-black leading-[0.95] tracking-[-0.035em] text-[#0a0a0a] md:text-5xl">
                From the Coalition
              </h2>
            </div>
            <Link
              href="/updates"
              className="hidden items-center border-b-2 border-[#0a0a0a] pb-1 text-sm font-black text-[#0a0a0a] transition-colors hover:border-[#2f6f4e] hover:text-[#2f6f4e] sm:inline-flex"
            >
              View all updates
              <span className="material-symbols-outlined ml-2 text-base" aria-hidden="true">arrow_forward</span>
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
            {recentUpdates.map((update) => {
              const config = typeConfig[update.type];
              return (
                <Link
                  key={update.id}
                  href={`/updates/${update.slug}`}
                  className="group flex flex-col overflow-hidden border border-[#0a0a0a]/25 bg-white shadow-[4px_4px_0_#0a0a0a] transition-all hover:-translate-y-1 hover:border-[#0a0a0a] hover:shadow-[6px_7px_0_#0a0a0a]"
                >
                  {update.image && (
                    <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[#0a0a0a]/25 bg-[#e7e2d7]">
                      <Image
                        src={update.image}
                        alt={update.imageAlt || update.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                      />
                    </div>
                  )}
                  <div className="flex min-h-72 flex-grow flex-col p-6">
                    <div className="mb-5 flex items-center gap-3">
                      <span
                        className={`rounded-full px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.08em] ${config.bgColor} ${config.color}`}
                      >
                        {config.label}
                      </span>
                      <time dateTime={update.date} className="text-xs font-bold text-[#0a0a0a]/45">
                        {format(parseISO(update.date), "MMM d, yyyy")}
                      </time>
                    </div>
                    <h3 className="mb-4 text-[1.35rem] font-black leading-[1.08] tracking-[-0.02em] text-[#0a0a0a] transition-colors group-hover:text-[#2f6f4e]">
                      {update.title}
                    </h3>
                    <p className="mb-6 line-clamp-3 text-sm leading-[1.65] text-[#0a0a0a]/62">
                      {update.excerpt}
                    </p>
                    <span className="mt-auto inline-flex items-center text-sm font-black text-[#0a0a0a] group-hover:text-[#2f6f4e]">
                      Read update
                      <span className="material-symbols-outlined ml-1 text-sm transition-transform group-hover:translate-x-1" aria-hidden="true">
                        arrow_forward
                      </span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-9 text-center sm:hidden">
            <Link
              href="/updates"
              className="inline-flex items-center border-b-2 border-[#0a0a0a] pb-1 text-sm font-black text-[#0a0a0a]"
            >
              View all updates
              <span className="material-symbols-outlined ml-2 text-base" aria-hidden="true">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
