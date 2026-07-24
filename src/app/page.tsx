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
  const recentUpdates = getRecentUpdates(6);

  return (
    <div className="flex flex-col bg-[#f0ece2]">
      {/* Hero Section */}
      <section className="relative flex min-h-[560px] items-center overflow-hidden bg-[#0a0a0a] text-white md:min-h-[620px]">
        {/* Background Image */}
        <div className="absolute inset-0 md:left-[34%]">
          <Image
            src="/images/hero-community.jpg"
            alt="Boston Better Streets Coalition community members"
            fill
            sizes="100vw"
            className="object-cover object-[62%_center]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[#0a0a0a]/58 md:bg-[linear-gradient(90deg,rgba(10,10,10,.92)_0%,rgba(10,10,10,.86)_38%,rgba(10,10,10,.68)_58%,rgba(10,10,10,.12)_84%,rgba(10,10,10,.03)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0a]/45 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="max-w-[700px]">
            <div className="mb-5 flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.13em] text-[#d8e2d3]/90 sm:text-xs">
              <span className="h-px w-8 bg-[#8cb29a]" aria-hidden="true" />
              Resident-led street safety advocacy
            </div>

            {/* Main headline */}
            <h1 className="mb-6 text-[3rem] font-extrabold leading-[0.95] tracking-[-0.035em] sm:text-[3.75rem] md:text-[4.25rem] lg:text-[4.75rem]">
              Boston&apos;s
              <br />
              Streets Are
              <br />
              <span className="text-[#d8e2d3]">Broken Promises</span>
            </h1>

            <p className="mb-8 max-w-[620px] text-base leading-[1.65] text-white/75 md:text-lg">
              Mayor Wu once campaigned on safer streets. Re-elected with a mandate to build them, she abandoned her promises, ignored experts and data, and let big business and outsiders make decisions about Boston&apos;s streets. Boston families deserve better.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
              <Link
                href="/join"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#397956] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[#448b64] sm:text-base"
              >
                Join Us
              </Link>
              <Link
                href="/map"
                className="inline-flex items-center gap-2 border-b border-white/45 pb-1 text-sm font-semibold text-white/78 transition-colors hover:border-white hover:text-white sm:text-base"
              >
                See stalled projects
                <span className="material-symbols-outlined text-base" aria-hidden="true">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Updates Section */}
      <section className="border-t border-[#0a0a0a]/8 bg-[#f0ece2] py-14 md:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 flex items-end justify-between gap-6 md:mb-10">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.13em] text-[#a63d36]">
                Latest Updates
              </p>
              <h2 className="text-3xl font-extrabold leading-[1] tracking-[-0.025em] text-[#0a0a0a] md:text-[2.65rem]">
                From the Coalition
              </h2>
            </div>
            <Link
              href="/updates"
              className="hidden items-center gap-1.5 text-sm font-semibold text-[#0a0a0a]/70 transition-colors hover:text-[#2f6f4e] sm:inline-flex"
            >
              View all updates
              <span className="material-symbols-outlined ml-2 text-base" aria-hidden="true">arrow_forward</span>
            </Link>
          </div>

          <div className="grid gap-x-6 gap-y-11 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {recentUpdates.map((update) => {
              const config = typeConfig[update.type];
              return (
                <Link
                  key={update.id}
                  href={`/updates/${update.slug}`}
                  className="group flex flex-col"
                >
                  {update.image && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-[#e7e2d7]">
                      <Image
                        src={update.image}
                        alt={update.imageAlt || update.title}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                      />
                    </div>
                  )}
                  <div className="flex flex-grow flex-col px-1 pt-5 sm:min-h-[230px]">
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
                    <h3 className="mb-3 text-xl font-extrabold leading-[1.15] tracking-[-0.015em] text-[#0a0a0a] transition-colors group-hover:text-[#2f6f4e]">
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

          <div className="mt-9 text-center sm:hidden">
            <Link
              href="/updates"
              className="inline-flex items-center text-sm font-semibold text-[#0a0a0a]/75"
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
