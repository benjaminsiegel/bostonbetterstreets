import { Metadata } from "next";
import Link from "next/link";
import { updates, UpdateType } from "@/data/updates";
import { format } from "date-fns";

export const metadata: Metadata = {
  title: "Updates | Boston Better Streets Coalition",
  description:
    "Latest news, action alerts, and updates from the Boston Better Streets Coalition.",
};

const typeConfig: Record<
  UpdateType,
  { label: string; color: string; bgColor: string; icon: string }
> = {
  news: {
    label: "NEWS",
    color: "text-[#0a0a0a]",
    bgColor: "bg-[#13ec25]",
    icon: "newspaper",
  },
  "action-alert": {
    label: "ACTION ALERT",
    color: "text-white",
    bgColor: "bg-[#ff3b3b]",
    icon: "warning",
  },
  victory: {
    label: "VICTORY",
    color: "text-[#0a0a0a]",
    bgColor: "bg-[#13ec25]",
    icon: "emoji_events",
  },
  setback: {
    label: "SETBACK",
    color: "text-[#0a0a0a]",
    bgColor: "bg-yellow-400",
    icon: "report",
  },
  event: {
    label: "EVENT",
    color: "text-white",
    bgColor: "bg-blue-500",
    icon: "event",
  },
};

export default function UpdatesPage() {
  // Sort updates by date (newest first)
  const sortedUpdates = [...updates].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featuredUpdates = sortedUpdates.filter((u) => u.featured);
  const actionAlerts = sortedUpdates.filter((u) => u.type === "action-alert");

  return (
    <div className="min-h-screen bg-[#f0ece2]">
      {/* Header */}
      <section className="bg-[#0a0a0a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center px-4 py-2 bg-[#13ec25] text-[#0a0a0a] rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <span className="material-symbols-outlined text-sm mr-2">newspaper</span>
            Updates
          </div>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
            Latest
            <br />
            <span className="text-[#13ec25]">Updates</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl">
            The latest news, action alerts, and updates from our fight for safer
            streets in Boston.
          </p>
        </div>
      </section>

      {/* Action Alert Banner (if any) */}
      {actionAlerts.length > 0 && (
        <section className="bg-[#ff3b3b] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-2xl animate-pulse">notifications_active</span>
              <div className="flex-grow">
                <span className="font-bold uppercase tracking-wider">ACTION ALERT:</span>{" "}
                <span>{actionAlerts[0].title}</span>
              </div>
              <Link
                href={`/updates/${actionAlerts[0].slug}`}
                className="flex-shrink-0 px-6 py-2 bg-white text-[#ff3b3b] font-bold uppercase tracking-wider rounded-full hover:bg-[#0a0a0a] hover:text-white transition-colors text-sm"
              >
                Take Action
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Featured Updates */}
      {featuredUpdates.length > 0 && (
        <section className="py-16 bg-[#0a0a0a] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-8">Featured</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredUpdates.slice(0, 2).map((update) => {
                const config = typeConfig[update.type];
                return (
                  <Link
                    key={update.id}
                    href={`/updates/${update.slug}`}
                    className="border border-white/10 p-8 hover:border-[#13ec25] transition-colors group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${config.bgColor} ${config.color}`}
                      >
                        <span className="material-symbols-outlined text-sm">{config.icon}</span>
                        {config.label}
                      </span>
                      <span className="text-sm text-white/50">
                        {format(new Date(update.date), "MMM d, yyyy")}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-tight mb-3 group-hover:text-[#13ec25] transition-colors">
                      {update.title}
                    </h3>
                    <p className="text-white/60 mb-4">{update.excerpt}</p>
                    <span className="inline-flex items-center text-[#13ec25] font-bold uppercase tracking-wider text-sm">
                      Read more
                      <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Updates */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-[#0a0a0a] mb-8">All Updates</h2>
          <div className="space-y-6">
            {sortedUpdates.map((update) => {
              const config = typeConfig[update.type];
              return (
                <Link
                  key={update.id}
                  href={`/updates/${update.slug}`}
                  className="block bg-[#0a0a0a] text-white p-6 hover:shadow-[6px_6px_0px_0px_#13ec25] transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${config.bgColor} ${config.color}`}
                        >
                          <span className="material-symbols-outlined text-xs">{config.icon}</span>
                          {config.label}
                        </span>
                        <span className="text-sm text-white/50">
                          {format(new Date(update.date), "MMMM d, yyyy")}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold uppercase tracking-tight mb-2 group-hover:text-[#13ec25] transition-colors">
                        {update.title}
                      </h3>
                      <p className="text-white/60">{update.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {update.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white/10 text-white/70 text-xs font-bold uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-white/30 group-hover:text-[#13ec25] transition-colors hidden md:block">
                      arrow_forward
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-[#13ec25]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="material-symbols-outlined text-5xl text-[#0a0a0a] mb-6 block">notifications</span>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#0a0a0a] mb-6">
            Stay Informed
          </h2>
          <p className="text-xl text-[#0a0a0a]/70 mb-10">
            Get updates delivered to your inbox. Be the first to know about
            action alerts, victories, and opportunities to make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-6 py-4 bg-[#0a0a0a] text-white placeholder-white/50 border-2 border-[#0a0a0a] focus:outline-none focus:border-white"
            />
            <button className="px-8 py-4 bg-[#0a0a0a] text-white font-bold uppercase tracking-wider hover:bg-white hover:text-[#0a0a0a] transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-[#0a0a0a]/50 mt-6">
            Join 700+ supporters. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
