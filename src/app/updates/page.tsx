import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getUpdates, UpdateType } from "@/lib/updates";
import { format, parseISO } from "date-fns";

export const metadata: Metadata = {
  title: "Updates | Boston Better Streets Coalition",
  description:
    "Reporting, action alerts, and campaign notes from Boston residents pushing the city to deliver safer streets.",
};

const typeConfig: Record<UpdateType, { label: string; color: string; bgColor: string }> = {
  news: { label: "News", color: "text-[#0a0a0a]", bgColor: "bg-[#d8e2d3]" },
  "action-alert": { label: "Action Alert", color: "text-white", bgColor: "bg-[#b7342c]" },
  victory: { label: "Victory", color: "text-white", bgColor: "bg-[#2f6f4e]" },
  setback: { label: "Setback", color: "text-[#0a0a0a]", bgColor: "bg-[#e7d5a0]" },
  event: { label: "Event", color: "text-[#0a0a0a]", bgColor: "bg-[#b8c7d8]" },
};

export default function UpdatesPage() {
  const sortedUpdates = getUpdates().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const featuredUpdate = sortedUpdates.find((update) => update.featured) ?? sortedUpdates[0];
  const remainingUpdates = sortedUpdates.filter((update) => update.id !== featuredUpdate.id);
  const featuredConfig = typeConfig[featuredUpdate.type];

  return (
    <div className="min-h-screen bg-[#f0ece2] text-[#0a0a0a]">
      <header className="border-b border-[#0a0a0a]/16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end lg:gap-16 lg:px-8">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[#a63d36]">
              <span className="h-px w-9 bg-[#a63d36]" aria-hidden="true" />
              From the coalition
            </p>
            <h1 className="text-[3.6rem] font-black leading-[0.88] tracking-[-0.055em] sm:text-[5.25rem] md:text-[6.5rem]">
              Updates
            </h1>
          </div>
          <div className="border-l-2 border-[#2f6f4e] pl-6 lg:mb-1">
            <p className="text-lg leading-[1.65] text-[#0a0a0a]/70">
              Reporting, action alerts, and campaign notes from Boston residents pushing the city to deliver safer streets.
            </p>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.1em] text-[#0a0a0a]/42">
              {sortedUpdates.length} dispatches and counting
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <section className="mb-16 md:mb-24">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.13em] text-[#0a0a0a]/48">
            Featured dispatch
          </p>
          <Link
            href={`/updates/${featuredUpdate.slug}`}
            className="group grid overflow-hidden border border-[#0a0a0a]/20 bg-[#0a0a0a] shadow-[7px_7px_0_0_#2f6f4e] lg:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="relative aspect-[16/10] min-h-[280px] overflow-hidden bg-[#ded8cb] lg:aspect-auto">
              {featuredUpdate.image ? (
                <Image
                  src={featuredUpdate.image}
                  alt={featuredUpdate.imageAlt || featuredUpdate.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-end bg-[#d8e2d3] p-8 text-7xl font-black text-[#0a0a0a]/12">
                  BBSC
                </div>
              )}
            </div>

            <div className="flex flex-col justify-between p-7 text-white sm:p-10 lg:p-12">
              <div>
                <div className="mb-7 flex flex-wrap items-center gap-3">
                  <span
                    className={`px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.09em] ${featuredConfig.bgColor} ${featuredConfig.color}`}
                  >
                    {featuredConfig.label}
                  </span>
                  <time dateTime={featuredUpdate.date} className="text-xs font-semibold text-white/48">
                    {format(parseISO(featuredUpdate.date), "MMMM d, yyyy")}
                  </time>
                </div>
                <h2 className="mb-6 text-3xl font-black leading-[1.06] tracking-[-0.035em] sm:text-4xl lg:text-[2.8rem]">
                  {featuredUpdate.title}
                </h2>
                <p className="text-base leading-[1.7] text-white/67">
                  {featuredUpdate.excerpt}
                </p>
              </div>
              <span className="mt-9 inline-flex w-fit items-center gap-2 border-b border-white/35 pb-1 text-sm font-bold text-white transition-colors group-hover:border-[#d8e2d3] group-hover:text-[#d8e2d3]">
                Read the dispatch
                <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1" aria-hidden="true">
                  arrow_forward
                </span>
              </span>
            </div>
          </Link>
        </section>

        <section>
          <div className="mb-5 flex items-end justify-between border-b-2 border-[#0a0a0a] pb-4">
            <h2 className="text-2xl font-black tracking-[-0.025em] sm:text-3xl">
              Latest dispatches
            </h2>
            <p className="hidden text-xs font-bold uppercase tracking-[0.1em] text-[#0a0a0a]/42 sm:block">
              Newest first
            </p>
          </div>

          <div className="divide-y divide-[#0a0a0a]/18">
            {remainingUpdates.map((update, index) => {
              const config = typeConfig[update.type];

              return (
                <Link
                  key={update.id}
                  href={`/updates/${update.slug}`}
                  className="group grid gap-5 py-7 sm:grid-cols-[88px_minmax(0,1fr)_220px] sm:items-center sm:gap-7 md:py-9 lg:grid-cols-[110px_minmax(0,1fr)_300px] lg:gap-10"
                >
                  <div className="flex items-center justify-between sm:block">
                    <span className="text-xs font-black text-[#0a0a0a]/28">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <time
                      dateTime={update.date}
                      className="block text-xs font-bold uppercase leading-[1.5] tracking-[0.06em] text-[#0a0a0a]/48 sm:mt-5"
                    >
                      {format(parseISO(update.date), "MMM d")}
                      <span className="hidden sm:block">{format(parseISO(update.date), "yyyy")}</span>
                    </time>
                  </div>

                  <div className="sm:pr-4">
                    <span
                      className={`mb-3 inline-flex px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.09em] ${config.bgColor} ${config.color}`}
                    >
                      {config.label}
                    </span>
                    <h3 className="mb-3 max-w-2xl text-xl font-black leading-[1.14] tracking-[-0.025em] transition-colors group-hover:text-[#2f6f4e] md:text-2xl">
                      {update.title}
                    </h3>
                    <p className="line-clamp-2 max-w-2xl text-sm leading-[1.65] text-[#0a0a0a]/60 md:text-[0.95rem]">
                      {update.excerpt}
                    </p>
                  </div>

                  <div className="relative aspect-[16/9] overflow-hidden bg-[#ded8cb] sm:order-none">
                    {update.image ? (
                      <Image
                        src={update.image}
                        alt={update.imageAlt || update.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-end bg-[#d8e2d3] p-4 text-3xl font-black text-[#0a0a0a]/12">
                        BBSC
                      </div>
                    )}
                    <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#f0ece2] text-[#0a0a0a] shadow-sm transition-transform group-hover:translate-x-1">
                      <span className="material-symbols-outlined text-lg" aria-hidden="true">
                        arrow_forward
                      </span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
