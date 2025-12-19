import { Metadata } from "next";
import Link from "next/link";
import { projects, ProjectStatus } from "@/data/projects";
import {
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowRight,
  MapPin,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Stalled Projects | Boston Better Streets Coalition",
  description:
    "Track the street safety projects that Boston has promised but failed to deliver. See the timeline of delays and broken promises.",
};

const statusConfig: Record<
  ProjectStatus,
  { label: string; color: string; bgColor: string; icon: React.ReactNode }
> = {
  stalled: {
    label: "Stalled",
    color: "text-red-700",
    bgColor: "bg-red-100",
    icon: <AlertTriangle className="w-4 h-4" />,
  },
  "in-progress": {
    label: "In Progress",
    color: "text-amber-700",
    bgColor: "bg-amber-100",
    icon: <Clock className="w-4 h-4" />,
  },
  promised: {
    label: "Promised",
    color: "text-blue-700",
    bgColor: "bg-blue-100",
    icon: <Calendar className="w-4 h-4" />,
  },
  completed: {
    label: "Completed",
    color: "text-green-700",
    bgColor: "bg-green-100",
    icon: <CheckCircle className="w-4 h-4" />,
  },
  cancelled: {
    label: "Cancelled",
    color: "text-gray-700",
    bgColor: "bg-gray-100",
    icon: <XCircle className="w-4 h-4" />,
  },
};

export default function ProjectsPage() {
  const stalledProjects = projects.filter((p) => p.status === "stalled");
  const inProgressProjects = projects.filter((p) => p.status === "in-progress");
  const cancelledProjects = projects.filter((p) => p.status === "cancelled");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tracking Boston&apos;s <span className="text-red-400">Broken Promises</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            These are the street safety projects that were promised, started, and
            then stalled. We document the delays so the city can&apos;t pretend
            they&apos;re making progress.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600">
                {stalledProjects.length}
              </div>
              <div className="text-sm text-gray-600 mt-1">Stalled Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600">
                {inProgressProjects.length}
              </div>
              <div className="text-sm text-gray-600 mt-1">In Progress</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-600">
                {cancelledProjects.length}
              </div>
              <div className="text-sm text-gray-600 mt-1">Cancelled</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">
                {Math.max(...projects.map((p) => new Date().getFullYear() - p.startYear))}+
              </div>
              <div className="text-sm text-gray-600 mt-1">Years of Delays</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      {projects.filter((p) => p.featured).length > 0 && (
        <section className="py-12 bg-red-50 border-b border-red-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-4">
              Featured Project
            </h2>
            {projects
              .filter((p) => p.featured)
              .map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                          {project.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-2 text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span>{project.location}</span>
                        </div>
                      </div>
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${statusConfig[project.status].bgColor} ${statusConfig[project.status].color}`}
                      >
                        {statusConfig[project.status].icon}
                        {statusConfig[project.status].label}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-6 text-lg">
                      {project.shortDescription}
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-500">Started</div>
                        <div className="text-xl font-bold text-gray-900">
                          {project.startYear}
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-500">Expected</div>
                        <div className="text-xl font-bold text-gray-900">
                          {project.expectedCompletion || "TBD"}
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-500">Delay</div>
                        <div className="text-xl font-bold text-red-600">
                          {new Date().getFullYear() - project.startYear}+ years
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Read Full Story
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* All Projects */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ${statusConfig[project.status].bgColor} ${statusConfig[project.status].color}`}
                  >
                    {statusConfig[project.status].icon}
                    {statusConfig[project.status].label}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{project.neighborhood}</span>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <div className="text-gray-500">
                    Started: <span className="font-medium">{project.startYear}</span>
                  </div>
                  <div className="text-blue-600 font-medium group-hover:underline flex items-center">
                    View details
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Know of a Project We&apos;re Missing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Help us document every stalled safety project in Boston. Your
            information helps build the case for accountability.
          </p>
          <Link
            href="/take-action"
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Submit a Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
