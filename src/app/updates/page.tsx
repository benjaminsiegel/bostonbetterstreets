import { Metadata } from "next";
import Link from "next/link";
import { updates, UpdateType } from "@/lib/updates";
import { format } from "date-fns";

export const metadata: Metadata = {
  title: "Updates | Boston Better Streets Coalition",
  description:
    "Latest news, action alerts, and updates from the Boston Better Streets Coalition.",
};

const typeConfig: Record<UpdateType, { label: string; color: string; bgColor: string }> = {
  news: { label: "News", color: "text-[#0a0a0a]", bgColor: "bg-[#13ec25]" },
  "action-alert": { label: "Action Alert", color: "text-white", bgColor: "bg-[#e24037]" },
  victory: { label: "Victory", color: "text-[#0a0a0a]", bgColor: "bg-[#13ec25]" },
  setback: { label: "Setback", color: "text-[#0a0a0a]", bgColor: "bg-[#ffe9ad]" },
  event: { label: "Event", color: "text-[#0a0a0a]", bgColor: "bg-[#abc1e8]" },
};

export default function UpdatesPage() {
  const sortedUpdates = [...updates].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-[#f0ece2] text-[#020202]">
      <section className="max-w-[1280px] mx-auto px-6 py-9 pb-24">
        <h1 className="sr-only">Updates</h1>

        <div className="bg-white border-2 border-[#0a0a0a] shadow-[6px_6px_0px_0px_#0a0a0a]">
          {sortedUpdates.map((update, index) => {
            const config = typeConfig[update.type];
            const isLast = index === sortedUpdates.length - 1;

            return (
              <Link
                key={update.id}
                href={`/updates/${update.slug}`}
                className={`grid grid-cols-1 md:grid-cols-[128px_130px_1fr_32px] gap-4 md:gap-6 p-6 hover:bg-[#dbf3d0] transition-colors group ${
                  !isLast ? "border-b-2 border-[#0a0a0a]" : ""
                }`}
              >
                <time
                  dateTime={update.date}
                  className="text-sm font-bold uppercase text-[#0a0a0a]/60 md:pt-1"
                >
                  {format(new Date(update.date), "MMM d, yyyy")}
                </time>

                <div className="md:pt-1">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${config.bgColor} ${config.color}`}
                  >
                    {config.label}
                  </span>
                </div>

                <div>
                  <h2 className="text-lg md:text-xl font-bold uppercase tracking-tight leading-tight mb-2 group-hover:text-[#0a0a0a]">
                    {update.title}
                  </h2>
                  <p className="text-sm text-[#0a0a0a]/60 leading-relaxed line-clamp-2">
                    {update.excerpt}
                  </p>
                </div>

                <span
                  className="hidden md:flex items-center justify-center text-[#0a0a0a]/30 group-hover:text-[#13ec25] transition-colors text-2xl"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
