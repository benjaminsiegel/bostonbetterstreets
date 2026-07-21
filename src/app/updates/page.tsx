import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getUpdates, UpdateType } from "@/lib/updates";
import { format, parseISO } from "date-fns";

export const metadata: Metadata = {
  title: "Updates | Boston Better Streets Coalition",
  description:
    "Latest news, action alerts, and updates from the Boston Better Streets Coalition.",
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
    <main className="min-h-screen bg-[#f0ece2] text-[#0a0a0a]">
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 md:pb-24 md:pt-20 lg:px-8">
        <header className="mb-12 max-w-3xl md:mb-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.13em] text-[#a63d36]">
            From the coalition
          </p>
          <h1 className="mb-6 text-4xl font-extrabold leading-[0.98] tracking-[-0.035em] sm:text-5xl md:text-[4.25rem]">
            Updates
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[#0a0a0a]/65 md:text-xl">
            Reporting, action alerts, and campaign notes from Boston residents pushing the city to deliver safer streets.
          </p>
        </header>

        <section className="mb-16 border-b border-[#0a0a0a]/12 pb-16 md:mb-20 md:pb-20">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.13em] text-[#0a0a0a]/48">
            Featured dispatch
          </p>
          <Link
            href={`/updates/${featuredUpdate.slug}`}
            className="group grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-[#e7e2d7]">
              {featuredUpdate.image ? (
                <Image
                  src={featuredUpdate.image}
                  alt={featuredUpdate.imageAlt || featuredUpdate.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  priority
                />
              ) : (
                <div className="absolute inset-0 bg-[#e7e2d7]" />
              )}
            </div>

            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span
                  className={`rounded px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.08em] ${featuredConfig.bgColor} ${featuredConfig.color}`}
                >
                  {featuredConfig.label}
                </span>
                <time dateTime={featuredUpdate.date} className="text-sm font-medium text-[#0a0a0a]/45">
                  {format(parseISO(featuredUpdate.date), "MMM d, yyyy")}
                </time>
              </div>
              <h2 className="mb-5 text-3xl font-extrabold leading-[1.05] tracking-[-0.025em] transition-colors group-hover:text-[#2f6f4e] sm:text-4xl">
                {featuredUpdate.title}
              </h2>
              <p className="mb-7 text-base leading-relaxed text-[#0a0a0a]/62 md:text-lg">
                {featuredUpdate.excerpt}
              </p>
              <span className="inline-flex w-fit items-center border-b border-[#0a0a0a]/25 pb-0.5 text-sm font-semibold text-[#0a0a0a]/72 transition-colors group-hover:border-[#2f6f4e] group-hover:text-[#2f6f4e]">
                Read update
                <span className="material-symbols-outlined ml-1 text-sm transition-transform group-hover:translate-x-1" aria-hidden="true">
                  arrow_forward
                </span>
              </span>
            </div>
          </Link>
        </section>

        <section>
          <div className="mb-9 flex items-end justify-between gap-6">
            <h2 className="text-2xl font-extrabold tracking-[-0.02em] sm:text-3xl">All updates</h2>
            <p className="hidden text-sm text-[#0a0a0a]/45 sm:block">Newest first</p>
          </div>

          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {remainingUpdates.map((update) => {
              const config = typeConfig[update.type];

              return (
                <Link key={update.id} href={`/updates/${update.slug}`} className="group flex flex-col">
                  {update.image && (
                    <div className="relative aspect-[16/9] overflow-hidden rounded-md bg-[#e7e2d7]">
                      <Image
                        src={update.image}
                        alt={update.imageAlt || update.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                      />
                    </div>
                  )}
                  <div className="flex flex-grow flex-col px-1 pt-5 sm:min-h-[235px]">
                    <div className="mb-4 flex items-center gap-3">
                      <span
                        className={`rounded px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.08em] ${config.bgColor} ${config.color}`}
                      >
                        {config.label}
                      </span>
                      <time dateTime={update.date} className="text-xs font-medium text-[#0a0a0a]/45">
                        {format(parseISO(update.date), "MMM d, yyyy")}
                      </time>
                    </div>
                    <h3 className="mb-3 text-xl font-extrabold leading-[1.15] tracking-[-0.015em] transition-colors group-hover:text-[#2f6f4e]">
                      {update.title}
                    </h3>
                    <p className="mb-5 line-clamp-3 text-sm leading-[1.6] text-[#0a0a0a]/60">
                      {update.excerpt}
                    </p>
                    <span className="mt-auto inline-flex w-fit items-center border-b border-[#0a0a0a]/25 pb-0.5 text-sm font-semibold text-[#0a0a0a]/72 transition-colors group-hover:border-[#2f6f4e] group-hover:text-[#2f6f4e]">
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
        </section>
      </section>
    </main>
  );
}
