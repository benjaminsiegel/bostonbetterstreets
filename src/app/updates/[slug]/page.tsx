import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { updates, getUpdateBySlug, UpdateType } from "@/data/updates";
import { projects } from "@/data/projects";
import {
  ArrowLeft,
  Calendar,
  User,
  Share2,
  Newspaper,
  AlertTriangle,
  Trophy,
  XCircle,
  CalendarDays,
  ArrowRight,
} from "lucide-react";
import { format } from "date-fns";

interface UpdatePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return updates.map((update) => ({
    slug: update.slug,
  }));
}

export async function generateMetadata({ params }: UpdatePageProps): Promise<Metadata> {
  const { slug } = await params;
  const update = getUpdateBySlug(slug);

  if (!update) {
    return {
      title: "Update Not Found | Boston Better Streets Coalition",
    };
  }

  return {
    title: `${update.title} | Boston Better Streets Coalition`,
    description: update.excerpt,
  };
}

const typeConfig: Record<
  UpdateType,
  { label: string; color: string; bgColor: string; icon: React.ReactNode }
> = {
  news: {
    label: "News",
    color: "text-blue-700",
    bgColor: "bg-blue-100",
    icon: <Newspaper className="w-5 h-5" />,
  },
  "action-alert": {
    label: "Action Alert",
    color: "text-red-700",
    bgColor: "bg-red-100",
    icon: <AlertTriangle className="w-5 h-5" />,
  },
  victory: {
    label: "Victory",
    color: "text-green-700",
    bgColor: "bg-green-100",
    icon: <Trophy className="w-5 h-5" />,
  },
  setback: {
    label: "Setback",
    color: "text-amber-700",
    bgColor: "bg-amber-100",
    icon: <XCircle className="w-5 h-5" />,
  },
  event: {
    label: "Event",
    color: "text-purple-700",
    bgColor: "bg-purple-100",
    icon: <CalendarDays className="w-5 h-5" />,
  },
};

export default async function UpdatePage({ params }: UpdatePageProps) {
  const { slug } = await params;
  const update = getUpdateBySlug(slug);

  if (!update) {
    notFound();
  }

  const config = typeConfig[update.type];
  const relatedProject = update.relatedProjectId
    ? projects.find((p) => p.id === update.relatedProjectId)
    : null;

  // Get other updates
  const otherUpdates = updates
    .filter((u) => u.id !== update.id)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section
        className={`py-12 ${
          update.type === "action-alert"
            ? "bg-gradient-to-br from-red-700 to-red-800"
            : update.type === "victory"
            ? "bg-gradient-to-br from-green-700 to-green-800"
            : update.type === "setback"
            ? "bg-gradient-to-br from-amber-700 to-amber-800"
            : "bg-gradient-to-br from-blue-900 to-blue-800"
        } text-white`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/updates"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all updates
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-white/20`}
            >
              {config.icon}
              {config.label}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">{update.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-white/80">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{format(new Date(update.date), "MMMM d, yyyy")}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{update.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8">
                <div className="prose max-w-none text-gray-700">
                  {update.content.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {update.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600 font-medium">Share:</span>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        update.title
                      )}&url=${encodeURIComponent(
                        `https://bostonbetterstreets.org/updates/${update.slug}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Share2 className="w-5 h-5 text-gray-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Related Project */}
              {relatedProject && (
                <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6">
                  <h3 className="font-bold text-gray-900 mb-3">
                    Related Project
                  </h3>
                  <Link
                    href={`/projects/${relatedProject.slug}`}
                    className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                  >
                    <div className="font-semibold text-gray-900 mb-1">
                      {relatedProject.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {relatedProject.neighborhood}
                    </div>
                  </Link>
                </div>
              )}

              {/* Take Action */}
              {update.type === "action-alert" && (
                <div className="bg-red-600 rounded-lg p-5 text-white mb-6">
                  <AlertTriangle className="w-8 h-8 mb-3" />
                  <h3 className="font-bold mb-2">Take Action</h3>
                  <p className="text-red-100 text-sm mb-4">
                    This alert needs your response. Every voice matters.
                  </p>
                  <Link
                    href="/take-action"
                    className="inline-flex items-center w-full justify-center px-4 py-2 bg-white text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors"
                  >
                    Get Involved
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              )}

              {/* Other Updates */}
              <div className="bg-white rounded-lg border border-gray-200 p-5">
                <h3 className="font-bold text-gray-900 mb-4">More Updates</h3>
                <div className="space-y-4">
                  {otherUpdates.map((other) => (
                    <Link
                      key={other.id}
                      href={`/updates/${other.slug}`}
                      className="block hover:bg-gray-50 rounded-lg p-2 -mx-2 transition-colors"
                    >
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium mb-1 ${typeConfig[other.type].bgColor} ${typeConfig[other.type].color}`}
                      >
                        {typeConfig[other.type].label}
                      </span>
                      <div className="font-medium text-gray-900 text-sm">
                        {other.title}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {format(new Date(other.date), "MMM d, yyyy")}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
