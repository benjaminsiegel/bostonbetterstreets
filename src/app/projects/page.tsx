import { Metadata } from "next";
import Link from "next/link";
import { projects, ProjectStatus } from "@/data/projects";

export const metadata: Metadata = {
  title: "Stalled Projects | Boston Better Streets Coalition",
  description:
    "Track the street safety projects that Boston has promised but failed to deliver. See the timeline of delays and broken promises.",
};

const statusConfig: Record<
  ProjectStatus,
  { label: string; color: string; bgColor: string; icon: string }
> = {
  stalled: {
    label: "STALLED",
    color: "text-white",
    bgColor: "bg-[#ff3b3b]",
    icon: "warning",
  },
  "in-progress": {
    label: "IN PROGRESS",
    color: "text-[#0a0a0a]",
    bgColor: "bg-yellow-400",
    icon: "schedule",
  },
  promised: {
    label: "PROMISED",
    color: "text-white",
    bgColor: "bg-blue-500",
    icon: "event",
  },
  completed: {
    label: "COMPLETED",
    color: "text-[#0a0a0a]",
    bgColor: "bg-[#13ec25]",
    icon: "check_circle",
  },
  cancelled: {
    label: "CANCELLED",
    color: "text-white",
    bgColor: "bg-gray-500",
    icon: "cancel",
  },
};

export default function ProjectsPage() {
  const stalledProjects = projects.filter((p) => p.status === "stalled");
  const inProgressProjects = projects.filter((p) => p.status === "in-progress");
  const cancelledProjects = projects.filter((p) => p.status === "cancelled");

  return (
    <div className="min-h-screen bg-[#f0ece2]">
      {/* Header */}
      <section className="bg-[#0a0a0a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center px-4 py-2 bg-[#ff3b3b] text-white rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <span className="material-symbols-outlined text-sm mr-2">construction</span>
            Project Tracker
          </div>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
            Tracking Boston&apos;s
            <br />
            <span className="text-[#ff3b3b]">Broken Promises</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl">
            These are the street safety projects that were promised, started, and
            then stalled. We document the delays so the city can&apos;t pretend
            they&apos;re making progress.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#ff3b3b]">
                {stalledProjects.length}
              </div>
              <div className="text-sm font-bold uppercase tracking-wider text-white/60 mt-2">Stalled Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-yellow-400">
                {inProgressProjects.length}
              </div>
              <div className="text-sm font-bold uppercase tracking-wider text-white/60 mt-2">In Progress</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white/50">
                {cancelledProjects.length}
              </div>
              <div className="text-sm font-bold uppercase tracking-wider text-white/60 mt-2">Cancelled</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#13ec25]">
                {Math.max(...projects.map((p) => new Date().getFullYear() - p.startYear))}+
              </div>
              <div className="text-sm font-bold uppercase tracking-wider text-white/60 mt-2">Years of Delays</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      {projects.filter((p) => p.featured).length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center px-4 py-2 bg-[#ff3b3b] text-white rounded-full text-xs font-bold uppercase tracking-wider mb-8">
              <span className="material-symbols-outlined text-sm mr-2">star</span>
              Featured Project
            </div>
            {projects
              .filter((p) => p.featured)
              .map((project) => (
                <div
                  key={project.id}
                  className="bg-[#0a0a0a] text-white p-8 md:p-12 shadow-[8px_8px_0px_0px_#13ec25]"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-3 text-white/60">
                        <span className="material-symbols-outlined text-lg">location_on</span>
                        <span>{project.location}</span>
                      </div>
                    </div>
                    <span
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider ${statusConfig[project.status].bgColor} ${statusConfig[project.status].color}`}
                    >
                      <span className="material-symbols-outlined text-sm">
                        {statusConfig[project.status].icon}
                      </span>
                      {statusConfig[project.status].label}
                    </span>
                  </div>

                  <p className="text-white/70 mb-8 text-lg max-w-3xl">
                    {project.shortDescription}
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="border border-white/10 p-6">
                      <div className="text-sm font-bold uppercase tracking-wider text-white/50 mb-2">Started</div>
                      <div className="text-3xl font-bold text-[#13ec25]">
                        {project.startYear}
                      </div>
                    </div>
                    <div className="border border-white/10 p-6">
                      <div className="text-sm font-bold uppercase tracking-wider text-white/50 mb-2">Expected</div>
                      <div className="text-3xl font-bold">
                        {project.expectedCompletion || "TBD"}
                      </div>
                    </div>
                    <div className="border border-white/10 p-6">
                      <div className="text-sm font-bold uppercase tracking-wider text-white/50 mb-2">Delay</div>
                      <div className="text-3xl font-bold text-[#ff3b3b]">
                        {new Date().getFullYear() - project.startYear}+ years
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center px-8 py-4 bg-[#13ec25] text-[#0a0a0a] font-bold uppercase tracking-wider rounded-full transition-all shadow-[4px_4px_0px_0px_#fff] hover:shadow-[6px_6px_0px_0px_#fff] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                  >
                    <span className="material-symbols-outlined mr-2">arrow_forward</span>
                    Read Full Story
                  </Link>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* All Projects */}
      <section className="py-16 bg-[#f0ece2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-[#0a0a0a] mb-8">All Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="bg-[#0a0a0a] text-white p-6 transition-all hover:shadow-[6px_6px_0px_0px_#13ec25] group"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-[#13ec25] transition-colors">
                    {project.name}
                  </h3>
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex-shrink-0 ${statusConfig[project.status].bgColor} ${statusConfig[project.status].color}`}
                  >
                    <span className="material-symbols-outlined text-xs">
                      {statusConfig[project.status].icon}
                    </span>
                    {statusConfig[project.status].label}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-white/50 mb-4">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span>{project.neighborhood}</span>
                </div>

                <p className="text-white/60 mb-6 line-clamp-2">
                  {project.shortDescription}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <div className="text-white/50">
                    Started: <span className="font-bold text-[#13ec25]">{project.startYear}</span>
                  </div>
                  <div className="text-[#13ec25] font-bold uppercase tracking-wider flex items-center group-hover:translate-x-1 transition-transform">
                    View details
                    <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#13ec25]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#0a0a0a] mb-6">
            Know of a Project We&apos;re Missing?
          </h2>
          <p className="text-xl text-[#0a0a0a]/70 mb-10">
            Help us document every stalled safety project in Boston. Your
            information helps build the case for accountability.
          </p>
          <Link
            href="/take-action"
            className="inline-flex items-center px-10 py-5 bg-[#0a0a0a] text-white font-bold uppercase tracking-wider rounded-full text-lg transition-all shadow-[6px_6px_0px_0px_#fff] hover:shadow-[8px_8px_0px_0px_#fff] hover:translate-x-[-2px] hover:translate-y-[-2px]"
          >
            <span className="material-symbols-outlined mr-2">add</span>
            Submit a Project
          </Link>
        </div>
      </section>
    </div>
  );
}
