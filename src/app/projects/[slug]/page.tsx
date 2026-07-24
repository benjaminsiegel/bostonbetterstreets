import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug, ProjectStatus } from "@/data/projects";
import { painPoints } from "@/data/painPoints";
import {
  MapPin,
  Calendar,
  Clock,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Share2,
  CheckCircle,
  XCircle,
  Users,
} from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Boston Better Streets Coalition",
    };
  }

  return {
    title: `${project.name} | Boston Better Streets Coalition`,
    description: project.shortDescription,
  };
}

const statusConfig: Record<
  ProjectStatus,
  { label: string; color: string; bgColor: string; icon: React.ReactNode }
> = {
  stalled: {
    label: "Stalled",
    color: "text-white",
    bgColor: "bg-[#b7342c]",
    icon: <AlertTriangle className="h-4 w-4" />,
  },
  "in-progress": {
    label: "In Progress",
    color: "text-[#0a0a0a]",
    bgColor: "bg-[#e7d5a0]",
    icon: <Clock className="h-4 w-4" />,
  },
  promised: {
    label: "Promised",
    color: "text-[#0a0a0a]",
    bgColor: "bg-[#b8c7d8]",
    icon: <Calendar className="h-4 w-4" />,
  },
  completed: {
    label: "Completed",
    color: "text-white",
    bgColor: "bg-[#2f6f4e]",
    icon: <CheckCircle className="h-4 w-4" />,
  },
  cancelled: {
    label: "Cancelled",
    color: "text-white",
    bgColor: "bg-[#0a0a0a]/58",
    icon: <XCircle className="h-4 w-4" />,
  },
};

const timelineTypeColors: Record<string, string> = {
  started: "bg-[#b8c7d8]",
  paused: "bg-[#0a0a0a]/42",
  resumed: "bg-[#2f6f4e]",
  milestone: "bg-[#b8c7d8]",
  setback: "bg-[#e7d5a0]",
  tragedy: "bg-[#b7342c]",
  stalled: "bg-[#b7342c]",
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedPainPoints = painPoints.filter(
    (point) => point.relatedProjectId === project.id,
  );
  const status = statusConfig[project.status];
  const otherProjects = projects.filter((item) => item.id !== project.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f0ece2] text-[#0a0a0a]">
      <header className="border-b border-[#0a0a0a]/16">
        <div className="mx-auto max-w-[1120px] px-4 py-10 sm:px-6 md:py-16">
          <Link
            href="/projects"
            className="mb-9 inline-flex items-center gap-2 text-sm font-bold text-[#0a0a0a]/55 transition-colors hover:text-[#2f6f4e]"
          >
            <ArrowLeft className="h-4 w-4" />
            All tracked projects
          </Link>

          <div className="flex flex-col gap-7 md:flex-row md:items-start md:justify-between">
            <div className="max-w-[800px]">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.13em] text-[#a63d36]">
                Project accountability file
              </p>
              <h1 className="text-4xl font-extrabold leading-[0.99] tracking-[-0.04em] sm:text-5xl md:text-[4rem]">
                {project.name}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-[1.65] text-[#0a0a0a]/67">
                {project.shortDescription}
              </p>
            </div>
            <span
              className={`inline-flex w-fit items-center gap-2 rounded-md px-3 py-2 text-xs font-bold uppercase tracking-[0.07em] ${status.bgColor} ${status.color}`}
            >
              {status.icon}
              {status.label}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#0a0a0a]/14 pt-5 text-sm font-semibold text-[#0a0a0a]/50">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {project.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Started {project.startYear}
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1120px] px-4 py-12 sm:px-6 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,740px)_260px] lg:items-start lg:gap-16">
          <div>
            <section className="mb-12 grid grid-cols-3 gap-px border border-[#0a0a0a]/15 bg-[#0a0a0a]/15">
              {[
                ["Started", String(project.startYear), "text-[#2f6f4e]"],
                ["Expected", project.expectedCompletion || "TBD", "text-[#0a0a0a]"],
                ["Delay", `${new Date().getFullYear() - project.startYear}+ years`, "text-[#b7342c]"],
              ].map(([label, value, color]) => (
                <div key={label} className="bg-[#f8f5ed] p-4 sm:p-5">
                  <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.09em] text-[#0a0a0a]/42">
                    {label}
                  </p>
                  <p className={`text-xl font-extrabold tracking-[-0.02em] sm:text-2xl ${color}`}>
                    {value}
                  </p>
                </div>
              ))}
            </section>

            <section className="border-t-2 border-[#0a0a0a] pt-6">
              <h2 className="mb-5 text-2xl font-extrabold tracking-[-0.025em]">
                About this project
              </h2>
              <div className="space-y-5 text-base leading-[1.75] text-[#0a0a0a]/70">
                {project.description.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="mt-12 border-t-2 border-[#0a0a0a] pt-6">
              <h2 className="mb-7 text-2xl font-extrabold tracking-[-0.025em]">
                Timeline
              </h2>
              <div className="relative">
                <div className="absolute bottom-0 left-[7px] top-0 w-px bg-[#0a0a0a]/20" />
                <div className="space-y-7">
                  {project.timeline.map((event) => (
                    <div key={`${event.date}-${event.title}`} className="relative pl-8">
                      <span
                        className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-[#f0ece2] ${timelineTypeColors[event.type] || "bg-[#0a0a0a]/42"}`}
                      />
                      <div className="border-l-2 border-[#0a0a0a]/12 bg-[#f8f5ed] p-5">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#0a0a0a]/46">
                            {event.date}
                          </span>
                          {(event.type === "tragedy" || event.type === "stalled") && (
                            <span className="bg-[#b7342c] px-2 py-1 text-[0.58rem] font-bold uppercase tracking-[0.07em] text-white">
                              {event.type}
                            </span>
                          )}
                        </div>
                        <h3 className="font-extrabold tracking-[-0.01em]">
                          {event.title}
                        </h3>
                        <p className="mt-2 text-sm leading-[1.65] text-[#0a0a0a]/62">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-12 border-t-2 border-[#0a0a0a] pt-6">
              <h2 className="mb-5 text-2xl font-extrabold tracking-[-0.025em]">
                Key issues
              </h2>
              <ul className="divide-y divide-[#0a0a0a]/14 border-y border-[#0a0a0a]/14">
                {project.keyIssues.map((issue) => (
                  <li key={issue} className="flex items-start gap-3 py-4">
                    <AlertTriangle className="mt-0.5 h-5 w-5 flex-none text-[#b7342c]" />
                    <span className="text-sm leading-[1.65] text-[#0a0a0a]/70">{issue}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10 rounded-md border border-[#0a0a0a]/14 bg-[#e4eadf] p-6">
              <div className="flex items-start gap-4">
                <Users className="h-7 w-7 flex-none text-[#2f6f4e]" />
                <div>
                  <h2 className="text-lg font-extrabold">Community impact</h2>
                  <p className="mt-3 text-sm leading-[1.7] text-[#0a0a0a]/68">
                    {project.communityImpact}
                  </p>
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-8 lg:sticky lg:top-32">
            <section className="rounded-md bg-[#b7342c] p-6 text-white">
              <h2 className="text-lg font-extrabold">Help move this project</h2>
              <p className="mt-3 text-sm leading-[1.65] text-white/78">
                Public pressure can turn a stalled promise into work on the street.
              </p>
              <Link
                href="/take-action"
                className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-[#b7342c] transition-colors hover:bg-[#f0ece2]"
              >
                Take action
                <ArrowRight className="h-4 w-4" />
              </Link>
            </section>

            <section className="border-t border-[#0a0a0a]/25 pt-5">
              <h2 className="text-sm font-extrabold">Share this project</h2>
              <p className="mt-2 text-sm leading-[1.6] text-[#0a0a0a]/55">
                Help neighbors understand what was promised and what is still missing.
              </p>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  project.name,
                )}&url=${encodeURIComponent(
                  `https://bostonbetterstreets.org/projects/${project.slug}`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 border-b border-[#0a0a0a]/25 pb-1 text-sm font-bold text-[#0a0a0a]/65 hover:border-[#2f6f4e] hover:text-[#2f6f4e]"
              >
                <Share2 className="h-4 w-4" />
                Share
              </a>
            </section>

            {relatedPainPoints.length > 0 && (
              <section className="border-t border-[#0a0a0a]/25 pt-5">
                <h2 className="text-sm font-extrabold">Related pain points</h2>
                <div className="mt-4 divide-y divide-[#0a0a0a]/12">
                  {relatedPainPoints.map((point) => (
                    <div key={point.id} className="py-3">
                      <p className="text-sm font-bold leading-snug">{point.title}</p>
                      <p className="mt-1 text-xs text-[#0a0a0a]/48">
                        {point.reportCount} reports
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/map"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#2f6f4e]"
                >
                  View on map
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </section>
            )}
          </aside>
        </div>
      </main>

      <section className="border-t border-[#0a0a0a]/16 bg-[#e7e2d7]">
        <div className="mx-auto max-w-[1120px] px-4 py-12 sm:px-6 md:py-16">
          <div className="mb-7 flex items-end justify-between border-b border-[#0a0a0a]/25 pb-4">
            <h2 className="text-2xl font-extrabold tracking-[-0.025em]">
              Other tracked projects
            </h2>
            <Link
              href="/projects"
              className="hidden items-center gap-1 text-sm font-bold text-[#0a0a0a]/55 hover:text-[#2f6f4e] sm:inline-flex"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {otherProjects.map((item) => (
              <Link
                key={item.id}
                href={`/projects/${item.slug}`}
                className="group rounded-md border border-[#0a0a0a]/15 bg-[#f8f5ed] p-5"
              >
                <span
                  className={`inline-flex items-center gap-1 rounded px-2 py-1 text-[0.58rem] font-bold uppercase tracking-[0.07em] ${statusConfig[item.status].bgColor} ${statusConfig[item.status].color}`}
                >
                  {statusConfig[item.status].label}
                </span>
                <h3 className="mt-4 font-extrabold leading-snug transition-colors group-hover:text-[#2f6f4e]">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-[#0a0a0a]/48">{item.neighborhood}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
