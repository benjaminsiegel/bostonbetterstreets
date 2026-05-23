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
    label: "Stalled",
    color: "text-white",
    bgColor: "bg-[#b7342c]",
    icon: "warning",
  },
  "in-progress": {
    label: "In Progress",
    color: "text-[#0a0a0a]",
    bgColor: "bg-yellow-400",
    icon: "schedule",
  },
  promised: {
    label: "Promised",
    color: "text-white",
    bgColor: "bg-blue-500",
    icon: "event",
  },
  completed: {
    label: "Completed",
    color: "text-white",
    bgColor: "bg-[#2f6f4e]",
    icon: "check_circle",
  },
  cancelled: {
    label: "Cancelled",
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
    <div className="min-h-screen bg-[#f0ece2] text-[#0a0a0a]">
      <section className="border-b border-[#0a0a0a]/18">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 py-14 md:py-20">
          <p className="text-sm font-bold text-[#b7342c] mb-3">Project Tracker</p>
          <h1 className="text-4xl md:text-6xl font-black leading-none mb-6 max-w-3xl">
            Promised street safety work, tracked in public.
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-[#0a0a0a]/70 max-w-3xl">
            Boston announces safer streets, then lets projects stall, shrink, or disappear. This tracker keeps the timeline visible.
          </p>
        </div>
      </section>

      <section className="border-b border-[#0a0a0a]/18">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#0a0a0a]/18 border border-[#0a0a0a]/18">
            <div className="bg-[#f8f5ed] p-5">
              <div className="text-4xl md:text-5xl font-black text-[#b7342c]">
                {stalledProjects.length}
              </div>
              <div className="text-sm font-semibold text-[#0a0a0a]/55 mt-2">Stalled Projects</div>
            </div>
            <div className="bg-[#f8f5ed] p-5">
              <div className="text-4xl md:text-5xl font-black text-[#8f761e]">
                {inProgressProjects.length}
              </div>
              <div className="text-sm font-semibold text-[#0a0a0a]/55 mt-2">In Progress</div>
            </div>
            <div className="bg-[#f8f5ed] p-5">
              <div className="text-4xl md:text-5xl font-black text-[#0a0a0a]/45">
                {cancelledProjects.length}
              </div>
              <div className="text-sm font-semibold text-[#0a0a0a]/55 mt-2">Cancelled</div>
            </div>
            <div className="bg-[#f8f5ed] p-5">
              <div className="text-4xl md:text-5xl font-black text-[#2f6f4e]">
                {Math.max(...projects.map((p) => new Date().getFullYear() - p.startYear))}+
              </div>
              <div className="text-sm font-semibold text-[#0a0a0a]/55 mt-2">Years of Delays</div>
            </div>
          </div>
        </div>
      </section>

      {projects.filter((p) => p.featured).length > 0 && (
        <section className="py-12 md:py-14">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
            <p className="text-sm font-bold text-[#b7342c] mb-4">Featured</p>
            {projects
              .filter((p) => p.featured)
              .map((project) => (
                <div
                  key={project.id}
                  className="bg-white border border-[#0a0a0a]/18 p-6 md:p-8"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-black leading-tight">
                        {project.name}
                      </h2>
                      <div className="flex items-center gap-2 mt-3 text-[#0a0a0a]/55">
                        <span className="material-symbols-outlined text-lg">location_on</span>
                        <span>{project.location}</span>
                      </div>
                    </div>
                    <span
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold ${statusConfig[project.status].bgColor} ${statusConfig[project.status].color}`}
                    >
                      <span className="material-symbols-outlined text-sm">
                        {statusConfig[project.status].icon}
                      </span>
                      {statusConfig[project.status].label}
                    </span>
                  </div>

                  <p className="text-[#0a0a0a]/70 mb-8 text-lg max-w-3xl">
                    {project.shortDescription}
                  </p>

                  <div className="grid md:grid-cols-3 gap-px bg-[#0a0a0a]/15 border border-[#0a0a0a]/15 mb-8">
                    <div className="bg-[#f8f5ed] p-5">
                      <div className="text-sm font-semibold text-[#0a0a0a]/50 mb-2">Started</div>
                      <div className="text-3xl font-black text-[#2f6f4e]">
                        {project.startYear}
                      </div>
                    </div>
                    <div className="bg-[#f8f5ed] p-5">
                      <div className="text-sm font-semibold text-[#0a0a0a]/50 mb-2">Expected</div>
                      <div className="text-3xl font-black">
                        {project.expectedCompletion || "TBD"}
                      </div>
                    </div>
                    <div className="bg-[#f8f5ed] p-5">
                      <div className="text-sm font-semibold text-[#0a0a0a]/50 mb-2">Delay</div>
                      <div className="text-3xl font-black text-[#b7342c]">
                        {new Date().getFullYear() - project.startYear}+ years
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center px-6 py-3 bg-[#2f6f4e] text-white font-bold rounded-full hover:bg-[#285f43] transition-colors"
                  >
                    <span className="material-symbols-outlined mr-2">arrow_forward</span>
                    Read Full Story
                  </Link>
                </div>
              ))}
          </div>
        </section>
      )}

      <section className="py-12 md:py-14 bg-[#f0ece2]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black text-[#0a0a0a] mb-6">All Projects</h2>

          <div className="border-t border-[#0a0a0a]/20">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="grid md:grid-cols-[1fr_160px_150px] gap-4 md:gap-8 py-6 border-b border-[#0a0a0a]/16 hover:bg-white/45 transition-colors group"
              >
                <div>
                  <h3 className="text-xl font-black group-hover:text-[#2f6f4e] transition-colors mb-2">
                    {project.name}
                  </h3>
                  <p className="text-[#0a0a0a]/62 leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-[#0a0a0a]/45 mt-3">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span>{project.neighborhood}</span>
                  </div>
                </div>
                <span
                  className={`inline-flex items-center justify-center h-fit w-fit md:w-full gap-1 px-3 py-1 rounded-full text-xs font-bold ${statusConfig[project.status].bgColor} ${statusConfig[project.status].color}`}
                >
                  <span className="material-symbols-outlined text-xs">
                    {statusConfig[project.status].icon}
                  </span>
                  {statusConfig[project.status].label}
                </span>
                <div className="text-sm md:text-right text-[#0a0a0a]/50">
                  Started <span className="font-bold text-[#0a0a0a]">{project.startYear}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-[#0a0a0a] text-white">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Know of a Project We&apos;re Missing?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl">
            Help us document every stalled safety project in Boston. Your
            information helps build the case for accountability.
          </p>
          </div>
          <Link
            href="/take-action"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#2f6f4e] text-white font-bold rounded-full hover:bg-[#285f43] transition-colors"
          >
            <span className="material-symbols-outlined mr-2">add</span>
            Submit a Project
          </Link>
        </div>
      </section>
    </div>
  );
}
