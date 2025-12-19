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
    color: "text-red-700",
    bgColor: "bg-red-100",
    icon: <AlertTriangle className="w-5 h-5" />,
  },
  "in-progress": {
    label: "In Progress",
    color: "text-amber-700",
    bgColor: "bg-amber-100",
    icon: <Clock className="w-5 h-5" />,
  },
  promised: {
    label: "Promised",
    color: "text-blue-700",
    bgColor: "bg-blue-100",
    icon: <Calendar className="w-5 h-5" />,
  },
  completed: {
    label: "Completed",
    color: "text-green-700",
    bgColor: "bg-green-100",
    icon: <CheckCircle className="w-5 h-5" />,
  },
  cancelled: {
    label: "Cancelled",
    color: "text-gray-700",
    bgColor: "bg-gray-100",
    icon: <XCircle className="w-5 h-5" />,
  },
};

const timelineTypeColors: Record<string, string> = {
  started: "bg-blue-500",
  paused: "bg-gray-400",
  resumed: "bg-green-500",
  milestone: "bg-blue-500",
  setback: "bg-amber-500",
  tragedy: "bg-red-600",
  stalled: "bg-red-500",
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedPainPoints = painPoints.filter(
    (pp) => pp.relatedProjectId === project.id
  );

  const status = statusConfig[project.status];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section
        className={`py-12 ${
          project.status === "stalled"
            ? "bg-gradient-to-br from-red-900 to-red-800"
            : project.status === "in-progress"
            ? "bg-gradient-to-br from-amber-800 to-amber-700"
            : "bg-gradient-to-br from-gray-800 to-gray-700"
        } text-white`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all projects
          </Link>

          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {project.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/80">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>Started {project.startYear}</span>
                </div>
              </div>
            </div>

            <span
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-base font-semibold ${status.bgColor} ${status.color}`}
            >
              {status.icon}
              {status.label}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Column */}
            <div className="lg:col-span-2">
              {/* Summary Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                  <div className="text-sm text-gray-500 mb-1">Started</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {project.startYear}
                  </div>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                  <div className="text-sm text-gray-500 mb-1">Expected</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {project.expectedCompletion || "TBD"}
                  </div>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                  <div className="text-sm text-gray-500 mb-1">Delay</div>
                  <div className="text-2xl font-bold text-red-600">
                    {new Date().getFullYear() - project.startYear}+ years
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  About This Project
                </h2>
                <div className="prose max-w-none text-gray-600">
                  {project.description.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Timeline of Events
                </h2>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
                  <div className="space-y-6">
                    {project.timeline.map((event, index) => (
                      <div key={index} className="relative pl-10">
                        <div
                          className={`absolute left-2 w-4 h-4 rounded-full ${timelineTypeColors[event.type] || "bg-gray-400"}`}
                        />
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-gray-900">
                              {event.date}
                            </span>
                            {event.type === "tragedy" && (
                              <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded-full">
                                Tragedy
                              </span>
                            )}
                            {event.type === "stalled" && (
                              <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded-full">
                                Stalled
                              </span>
                            )}
                          </div>
                          <h3 className="font-semibold text-gray-800">
                            {event.title}
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Issues */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Key Issues
                </h2>
                <ul className="space-y-3">
                  {project.keyIssues.map((issue, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Community Impact */}
              <div className="bg-amber-50 rounded-lg border border-amber-200 p-6">
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-amber-600 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      Community Impact
                    </h2>
                    <p className="text-gray-700">{project.communityImpact}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Take Action */}
              <div className="bg-red-600 rounded-lg p-6 text-white mb-6">
                <h3 className="text-lg font-bold mb-3">Take Action</h3>
                <p className="text-red-100 text-sm mb-4">
                  Help us push for progress on this project. Your voice matters.
                </p>
                <Link
                  href="/take-action"
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors"
                >
                  Get Involved
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              {/* Share */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Share This Project
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Help spread the word about this stalled project.
                </p>
                <button className="inline-flex items-center justify-center w-full px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </button>
              </div>

              {/* Related Pain Points */}
              {relatedPainPoints.length > 0 && (
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Related Pain Points
                  </h3>
                  <div className="space-y-3">
                    {relatedPainPoints.map((point) => (
                      <div
                        key={point.id}
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <AlertTriangle
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          style={{
                            color:
                              point.severity === "critical"
                                ? "#dc2626"
                                : point.severity === "high"
                                ? "#ea580c"
                                : "#f59e0b",
                          }}
                        />
                        <div>
                          <div className="font-medium text-gray-900 text-sm">
                            {point.title}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {point.reportCount} reports
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/map"
                    className="inline-flex items-center text-blue-600 text-sm font-medium mt-4 hover:underline"
                  >
                    View on map
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-12 bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Other Tracked Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.slug}`}
                  className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow"
                >
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium mb-2 ${statusConfig[p.status].bgColor} ${statusConfig[p.status].color}`}
                  >
                    {statusConfig[p.status].label}
                  </span>
                  <h3 className="font-bold text-gray-900 mb-1">{p.name}</h3>
                  <p className="text-sm text-gray-500">{p.neighborhood}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
