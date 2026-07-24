import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { updates, getUpdateBySlug, UpdateType } from "@/lib/updates";
import { projects } from "@/data/projects";
import {
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  Calendar,
  Clock3,
  Share2,
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

  const baseUrl = "https://bostonbetterstreets.org";
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
  const readingMinutes = Math.max(
    1,
    Math.ceil(update.content.trim().split(/\s+/).length / 220),
  );
  const relatedProject = update.relatedProjectId
    ? projects.find((project) => project.id === update.relatedProjectId)
    : null;
  const otherUpdates = updates
    .filter((other) => other.id !== update.id)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f0ece2] text-[#0a0a0a]">
      <article>
        <header className="border-b border-[#0a0a0a]/16">
          <div className="mx-auto max-w-[1180px] px-4 py-10 sm:px-6 md:py-16">
            <Link
              href="/updates"
              className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-[#0a0a0a]/55 transition-colors hover:text-[#2f6f4e]"
            >
              <ArrowLeft className="h-4 w-4" />
              All updates
            </Link>

            <div className="grid gap-7 lg:grid-cols-[130px_minmax(0,900px)] lg:gap-10">
              <div className="hidden border-t border-[#0a0a0a]/30 pt-4 text-xs font-bold uppercase leading-[1.5] tracking-[0.08em] text-[#0a0a0a]/40 lg:block">
                A dispatch from Boston&apos;s streets
              </div>
              <div>
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span
                    className={`inline-flex px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.09em] ${config.bgColor} ${config.color}`}
                  >
                    {config.label}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#0a0a0a]/42">
                    {update.author}
                  </span>
                </div>

                <h1 className="max-w-[940px] text-[2.55rem] font-extrabold leading-[1.01] tracking-[-0.048em] sm:text-5xl md:text-[4.35rem]">
                  {update.title}
                </h1>

                <p className="mt-7 max-w-[780px] text-lg leading-[1.65] text-[#0a0a0a]/66 md:text-xl">
                  {update.excerpt}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#0a0a0a]/14 pt-5 text-sm font-semibold text-[#0a0a0a]/48">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {format(parseISO(update.date), "MMMM d, yyyy")}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="h-4 w-4" />
                    {readingMinutes} min read
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {update.image && (
          <figure className="mx-auto max-w-[1060px] px-4 pt-8 sm:px-6 md:pt-12">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md border border-[#0a0a0a]/18 bg-[#ded8cb]">
              <Image
                src={update.image}
                alt={update.imageAlt || update.title}
                fill
                sizes="(min-width: 1060px) 1060px, 100vw"
                className="object-contain"
                priority
              />
            </div>
          </figure>
        )}

        <section className="py-12 md:py-18">
          <div className="mx-auto grid max-w-[1080px] gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,720px)_250px] lg:items-start lg:gap-20">
            <div>
              <div className="editorial-prose">
                <ReactMarkdown>{update.content}</ReactMarkdown>
              </div>

              <footer className="mt-12 border-t-2 border-[#0a0a0a] pt-6">
                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.1em] text-[#0a0a0a]/42">
                      Filed under
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {update.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-[#0a0a0a]/15 bg-[#e8e2d6] px-3 py-1.5 text-xs font-bold text-[#0a0a0a]/62"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      update.title,
                    )}&url=${encodeURIComponent(
                      `https://bostonbetterstreets.org/updates/${update.slug}`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 border-b border-[#0a0a0a]/30 pb-1 text-sm font-bold text-[#0a0a0a]/65 transition-colors hover:border-[#2f6f4e] hover:text-[#2f6f4e]"
                  >
                    <Share2 className="h-4 w-4" />
                    Share this dispatch
                  </a>
                </div>
              </footer>
            </div>

            <aside className="border-t border-[#0a0a0a]/25 pt-5 lg:sticky lg:top-32">
              {relatedProject && (
                <div className="mb-8 border-b border-[#0a0a0a]/16 pb-8">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.1em] text-[#a63d36]">
                    Related project
                  </p>
                  <Link
                    href={`/projects/${relatedProject.slug}`}
                    className="group block"
                  >
                    <h2 className="text-lg font-extrabold leading-tight transition-colors group-hover:text-[#2f6f4e]">
                      {relatedProject.name}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-[#0a0a0a]/55">
                      {relatedProject.neighborhood}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#2f6f4e]">
                      View project
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </div>
              )}

              {update.type === "action-alert" && (
                <div className="mb-8 bg-[#b7342c] p-5 text-white">
                  <AlertTriangle className="mb-3 h-7 w-7" />
                  <h2 className="font-black">Take action</h2>
                  <p className="mt-2 text-sm leading-relaxed text-white/78">
                    This alert needs your response. Every voice matters.
                  </p>
                  <Link
                    href="/take-action"
                    className="mt-5 inline-flex items-center gap-2 border-b border-white/45 pb-1 text-sm font-bold"
                  >
                    Get involved
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )}

              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#0a0a0a]/40">
                About these updates
              </p>
              <p className="mt-3 text-sm leading-[1.7] text-[#0a0a0a]/58">
                News and field notes from residents organizing for safer, more accessible streets across Boston.
              </p>
            </aside>
          </div>
        </section>
      </article>

      <section className="border-t border-[#0a0a0a]/18 bg-[#e7e2d7]">
        <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 md:py-16">
          <div className="mb-7 flex items-end justify-between border-b border-[#0a0a0a]/28 pb-4">
            <h2 className="text-2xl font-extrabold tracking-[-0.025em]">
              Keep reading
            </h2>
            <Link
              href="/updates"
              className="hidden items-center gap-1 text-sm font-bold text-[#0a0a0a]/55 hover:text-[#2f6f4e] sm:inline-flex"
            >
              All updates
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {otherUpdates.map((other) => (
              <Link
                key={other.id}
                href={`/updates/${other.slug}`}
                className="group border-t-2 border-[#0a0a0a] pt-4"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span
                    className={`px-2 py-1 text-[0.58rem] font-bold uppercase tracking-[0.08em] ${typeConfig[other.type].bgColor} ${typeConfig[other.type].color}`}
                  >
                    {typeConfig[other.type].label}
                  </span>
                  <time className="text-xs font-semibold text-[#0a0a0a]/42">
                    {format(parseISO(other.date), "MMM d, yyyy")}
                  </time>
                </div>
                <h3 className="text-lg font-extrabold leading-[1.2] tracking-[-0.015em] transition-colors group-hover:text-[#2f6f4e]">
                  {other.title}
                </h3>
                <p className="mt-3 line-clamp-2 text-sm leading-[1.6] text-[#0a0a0a]/58">
                  {other.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
