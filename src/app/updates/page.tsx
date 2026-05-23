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
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const featuredUpdate = sortedUpdates.find((update) => update.featured) ?? sortedUpdates[0];
  const remainingUpdates = sortedUpdates.filter((update) => update.id !== featuredUpdate.id);
  const featuredConfig = typeConfig[featuredUpdate.type];

  return (
    <div className="min-h-screen bg-[#f0ece2] text-[#020202]">
      <section className="max-w-[1120px] mx-auto px-4 sm:px-6 py-12 md:py-16 pb-24">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <p className="text-sm font-bold text-[#b7342c] mb-3">
            Updates
          </p>
          <h1 className="text-4xl md:text-6xl font-black leading-none text-[#0a0a0a] mb-6">
            Dispatches
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-[#0a0a0a]/70 max-w-2xl">
            Reporting, action alerts, and campaign notes from Boston residents pushing the city to deliver safer streets.
          </p>
        </div>

        <div className="mb-14">
          <p className="text-sm font-bold text-[#b7342c] mb-3">
            Featured
          </p>
          <Link
            href={`/updates/${featuredUpdate.slug}`}
            className="group grid lg:grid-cols-[0.9fr_1fr] gap-0 bg-white border border-[#0a0a0a]/20 overflow-hidden hover:border-[#0a0a0a]/50 transition-colors"
          >
            <div className="relative aspect-square lg:aspect-auto lg:min-h-[430px] bg-[#e8e2d6] border-b lg:border-b-0 lg:border-r border-[#0a0a0a]/15 overflow-hidden">
              {featuredUpdate.image ? (
                <Image
                  src={featuredUpdate.image}
                  alt={featuredUpdate.imageAlt || featuredUpdate.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  priority
                />
              ) : (
                <div className="absolute inset-0 bg-[#e8e2d6]" />
              )}
            </div>
            <div className="p-6 md:p-9 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <span
                    className={`px-3 py-1 text-xs font-bold rounded-full ${featuredConfig.bgColor} ${featuredConfig.color}`}
                  >
                    {featuredConfig.label}
                  </span>
                  <time
                    dateTime={featuredUpdate.date}
                    className="text-sm font-semibold text-[#0a0a0a]/50"
                  >
                    {format(parseISO(featuredUpdate.date), "MMM d, yyyy")}
                  </time>
                </div>
                <h2 className="text-3xl md:text-5xl font-black leading-[1.02] mb-6 group-hover:text-[#2f6f4e] transition-colors">
                  {featuredUpdate.title}
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-[#0a0a0a]/68">
                  {featuredUpdate.excerpt}
                </p>
              </div>
              <span className="inline-flex items-center mt-10 text-sm font-bold text-[#2f6f4e]">
                Read dispatch
                <span className="material-symbols-outlined ml-2 text-base group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </span>
            </div>
          </Link>
        </div>

        <div className="border-t border-[#0a0a0a]/25">
          {remainingUpdates.map((update, index) => {
            const config = typeConfig[update.type];
            const isLast = index === remainingUpdates.length - 1;

            return (
              <Link
                key={update.id}
                href={`/updates/${update.slug}`}
                className={`grid grid-cols-1 md:grid-cols-[140px_1fr_120px] gap-3 md:gap-8 py-7 md:py-8 hover:bg-white/45 transition-colors group ${
                  !isLast ? "border-b border-[#0a0a0a]/18" : ""
                }`}
              >
                <time
                  dateTime={update.date}
                  className="text-sm font-semibold text-[#0a0a0a]/48 md:pt-1"
                >
                  {format(parseISO(update.date), "MMM d, yyyy")}
                </time>

                <div>
                  <h2 className="text-xl md:text-2xl font-black leading-tight mb-3 group-hover:text-[#2f6f4e] transition-colors">
                    {update.title}
                  </h2>
                  <p className="text-sm md:text-base text-[#0a0a0a]/62 leading-relaxed max-w-2xl">
                    {update.excerpt}
                  </p>
                </div>

                <div className="flex md:justify-end md:pt-1">
                  <span
                    className={`inline-block h-fit px-3 py-1 text-xs font-bold rounded-full ${config.bgColor} ${config.color}`}
                  >
                    {config.label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
