import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { updates, getUpdateBySlug, UpdateType } from "@/lib/updates";
import { projects } from "@/data/projects";
import {
  ArrowLeft,
  Calendar,
  Share2,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { format, parseISO } from "date-fns";
import ReactMarkdown from "react-markdown";

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

  const baseUrl = "https://bostonbetterstreets.vercel.app";
  const imageUrl = update.image ? `${baseUrl}${update.image}` : `${baseUrl}/images/og-default.jpg`;

  return {
    title: `${update.title} | Boston Better Streets Coalition`,
    description: update.excerpt,
    openGraph: {
      title: update.title,
      description: update.excerpt,
      url: `${baseUrl}/updates/${update.slug}`,
      siteName: "Boston Better Streets Coalition",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: update.imageAlt || update.title,
        },
      ],
      type: "article",
      publishedTime: update.date,
      authors: [update.author],
    },
    twitter: {
      card: "summary_large_image",
      title: update.title,
      description: update.excerpt,
      images: [imageUrl],
    },
  };
}

const typeConfig: Record<
  UpdateType,
  { label: string; color: string; bgColor: string }
> = {
  news: {
    label: "News",
    color: "text-[#0a0a0a]",
    bgColor: "bg-[#d8e2d3]",
  },
  "action-alert": {
    label: "Action Alert",
    color: "text-white",
    bgColor: "bg-[#b7342c]",
  },
  victory: {
    label: "Victory",
    color: "text-white",
    bgColor: "bg-[#2f6f4e]",
  },
  setback: {
    label: "Setback",
    color: "text-[#0a0a0a]",
    bgColor: "bg-[#e7d5a0]",
  },
  event: {
    label: "Event",
    color: "text-[#0a0a0a]",
    bgColor: "bg-[#b8c7d8]",
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
    <div className="min-h-screen bg-[#f0ece2] text-[#0a0a0a]">
      <article>
        <header className="border-b border-[#0a0a0a]/18">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 py-10 md:py-14">
          <Link
            href="/updates"
            className="inline-flex items-center text-[#0a0a0a]/60 hover:text-[#2f6f4e] mb-8 transition-colors font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to dispatches
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold ${config.bgColor} ${config.color}`}
            >
              {config.label}
            </span>
            <span className="text-sm font-semibold text-[#0a0a0a]/48">
              {update.author}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-[1.02] max-w-4xl mb-6">
            {update.title}
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-[#0a0a0a]/68 max-w-3xl mb-7">
            {update.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-[#0a0a0a]/55">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{format(parseISO(update.date), "MMMM d, yyyy")}</span>
            </div>
          </div>
        </div>
        </header>

        {update.image && (
          <figure className="max-w-[1120px] mx-auto px-4 sm:px-6 pt-8 md:pt-10">
            <div className="relative w-full min-h-[280px] md:min-h-[520px] bg-[#e8e2d6] border border-[#0a0a0a]/18 overflow-hidden">
              <Image
                src={update.image}
                alt={update.imageAlt || update.title}
                fill
                className="object-contain p-3 md:p-5"
                priority
              />
            </div>
          </figure>
        )}

        <section className="py-10 md:py-14">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-[minmax(0,720px)_260px] gap-10 lg:gap-16 items-start">
              <div className="bg-white border border-[#0a0a0a]/16 p-6 md:p-10">
                <div className="prose prose-lg max-w-none prose-p:text-[#0a0a0a]/75 prose-p:leading-relaxed prose-headings:text-[#0a0a0a] prose-headings:font-black prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-a:text-[#2f6f4e] prose-a:font-semibold prose-a:underline prose-strong:text-[#0a0a0a]">
                  <ReactMarkdown>{update.content}</ReactMarkdown>
                </div>

                <div className="mt-10 pt-6 border-t border-[#0a0a0a]/14">
                  <div className="flex flex-wrap gap-2">
                    {update.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#f0ece2] text-[#0a0a0a]/65 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[#0a0a0a]/14">
                  <div className="flex items-center gap-4">
                    <span className="text-[#0a0a0a]/60 font-medium">Share:</span>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        update.title
                      )}&url=${encodeURIComponent(
                        `https://bostonbetterstreets.org/updates/${update.slug}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#f0ece2] rounded-lg hover:bg-[#d8e2d3] transition-colors"
                    >
                      <Share2 className="w-5 h-5 text-[#0a0a0a]/70" />
                    </a>
                  </div>
                </div>
              </div>

              <aside className="space-y-6 lg:sticky lg:top-32">
              {relatedProject && (
                <div className="bg-white border border-[#0a0a0a]/16 p-5">
                  <h3 className="font-bold text-[#0a0a0a] mb-3">
                    Related Project
                  </h3>
                  <Link
                    href={`/projects/${relatedProject.slug}`}
                    className="block bg-[#f0ece2] p-4 hover:bg-[#d8e2d3] transition-colors"
                  >
                    <div className="font-semibold text-[#0a0a0a] mb-1">
                      {relatedProject.name}
                    </div>
                    <div className="text-sm text-[#0a0a0a]/55">
                      {relatedProject.neighborhood}
                    </div>
                  </Link>
                </div>
              )}

              {update.type === "action-alert" && (
                <div className="bg-[#b7342c] p-5 text-white">
                  <AlertTriangle className="w-8 h-8 mb-3" />
                  <h3 className="font-bold mb-2">Take Action</h3>
                  <p className="text-white/80 text-sm mb-4">
                    This alert needs your response. Every voice matters.
                  </p>
                  <Link
                    href="/take-action"
                    className="inline-flex items-center w-full justify-center px-4 py-2 bg-white text-[#b7342c] font-semibold rounded-lg hover:bg-[#f0ece2] transition-colors"
                  >
                    Get Involved
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              )}

              <div className="bg-white border border-[#0a0a0a]/16 p-5">
                <h3 className="font-bold text-[#0a0a0a] mb-4">More dispatches</h3>
                <div className="space-y-4">
                  {otherUpdates.map((other) => (
                    <Link
                      key={other.id}
                      href={`/updates/${other.slug}`}
                      className="block hover:bg-[#f0ece2] p-2 -mx-2 transition-colors"
                    >
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium mb-1 ${typeConfig[other.type].bgColor} ${typeConfig[other.type].color}`}
                      >
                        {typeConfig[other.type].label}
                      </span>
                      <div className="font-medium text-[#0a0a0a] text-sm">
                        {other.title}
                      </div>
                      <div className="text-xs text-[#0a0a0a]/50 mt-1">
                        {format(parseISO(other.date), "MMM d, yyyy")}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              </aside>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
