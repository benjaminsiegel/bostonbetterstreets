import { Metadata } from "next";
import Link from "next/link";
import { updates, UpdateType } from "@/data/updates";
import {
  Newspaper,
  AlertTriangle,
  Trophy,
  Calendar,
  ArrowRight,
  Bell,
  XCircle,
} from "lucide-react";
import { format } from "date-fns";

export const metadata: Metadata = {
  title: "Updates | Boston Better Streets Coalition",
  description:
    "Latest news, action alerts, and updates from the Boston Better Streets Coalition.",
};

const typeConfig: Record<
  UpdateType,
  { label: string; color: string; bgColor: string; icon: React.ReactNode }
> = {
  news: {
    label: "News",
    color: "text-blue-700",
    bgColor: "bg-blue-100",
    icon: <Newspaper className="w-4 h-4" />,
  },
  "action-alert": {
    label: "Action Alert",
    color: "text-red-700",
    bgColor: "bg-red-100",
    icon: <AlertTriangle className="w-4 h-4" />,
  },
  victory: {
    label: "Victory",
    color: "text-green-700",
    bgColor: "bg-green-100",
    icon: <Trophy className="w-4 h-4" />,
  },
  setback: {
    label: "Setback",
    color: "text-amber-700",
    bgColor: "bg-amber-100",
    icon: <XCircle className="w-4 h-4" />,
  },
  event: {
    label: "Event",
    color: "text-purple-700",
    bgColor: "bg-purple-100",
    icon: <Calendar className="w-4 h-4" />,
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Newspaper className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">Updates</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            The latest news, action alerts, and updates from our fight for safer
            streets in Boston.
          </p>
        </div>
      </section>

      {/* Action Alert Banner (if any) */}
      {actionAlerts.length > 0 && (
        <section className="bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-4">
              <Bell className="w-6 h-6 flex-shrink-0 animate-pulse" />
              <div className="flex-grow">
                <span className="font-bold">ACTION ALERT:</span>{" "}
                <span>{actionAlerts[0].title}</span>
              </div>
              <Link
                href={`/updates/${actionAlerts[0].slug}`}
                className="flex-shrink-0 px-4 py-2 bg-white text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors"
              >
                Take Action
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Featured Updates */}
      {featuredUpdates.length > 0 && (
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredUpdates.slice(0, 2).map((update) => {
                const config = typeConfig[update.type];
                return (
                  <Link
                    key={update.id}
                    href={`/updates/${update.slug}`}
                    className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors group"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${config.bgColor} ${config.color}`}
                      >
                        {config.icon}
                        {config.label}
                      </span>
                      <span className="text-sm text-gray-500">
                        {format(new Date(update.date), "MMM d, yyyy")}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {update.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{update.excerpt}</p>
                    <span className="inline-flex items-center text-blue-600 font-medium">
                      Read more
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Updates */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Updates</h2>
          <div className="space-y-6">
            {sortedUpdates.map((update) => {
              const config = typeConfig[update.type];
              return (
                <Link
                  key={update.id}
                  href={`/updates/${update.slug}`}
                  className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow group"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${config.bgColor} ${config.color}`}
                        >
                          {config.icon}
                          {config.label}
                        </span>
                        <span className="text-sm text-gray-500">
                          {format(new Date(update.date), "MMMM d, yyyy")}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {update.title}
                      </h3>
                      <p className="text-gray-600">{update.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {update.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 hidden md:block" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Bell className="w-12 h-12 mx-auto mb-4 text-blue-300" />
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get updates delivered to your inbox. Be the first to know about
            action alerts, victories, and opportunities to make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-blue-300 mt-4">
            Join 700+ supporters. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
