import { Metadata } from "next";
import Link from "next/link";
import { painPoints } from "@/data/painPoints";
import { projects } from "@/data/projects";
import { MapPin, Plus, AlertTriangle, Info } from "lucide-react";
import MapWrapper from "@/components/Map/MapWrapper";

export const metadata: Metadata = {
  title: "Pain Point Map | Boston Better Streets Coalition",
  description:
    "Explore our community-sourced map of dangerous intersections, stalled projects, and infrastructure issues across Boston.",
};

export default function MapPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-8 h-8" />
            <h1 className="text-3xl md:text-4xl font-bold">
              Boston Street Safety Map
            </h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            A community-sourced map documenting dangerous crossings, stalled
            projects, and infrastructure failures across the city. Your
            neighbors have reported {painPoints.length} pain points and we&apos;re
            tracking {projects.length} projects.
          </p>
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-amber-800">
              <strong>How to use this map:</strong> Click on any marker to see
              details about that location. Red circles indicate reported pain
              points (larger circles = more reports). Blue squares show tracked
              projects. Use the filters to narrow your view.
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Map */}
          <MapWrapper
            painPoints={painPoints}
            projects={projects}
            height="600px"
            showFilters={true}
          />

          {/* Report CTA */}
          <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  See Something Missing?
                </h2>
                <p className="text-gray-600">
                  Help us document dangerous conditions in your neighborhood.
                  Your report helps build the case for safer streets.
                </p>
              </div>
              <Link
                href="/map/report"
                className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors flex-shrink-0"
              >
                <Plus className="w-5 h-5 mr-2" />
                Report a Pain Point
              </Link>
            </div>
          </div>

          {/* Recent Reports */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Recent Reports
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {painPoints.slice(0, 6).map((point) => (
                <div
                  key={point.id}
                  className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <AlertTriangle
                      className="w-5 h-5 flex-shrink-0"
                      style={{
                        color:
                          point.severity === "critical"
                            ? "#dc2626"
                            : point.severity === "high"
                            ? "#ea580c"
                            : point.severity === "medium"
                            ? "#f59e0b"
                            : "#84cc16",
                      }}
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {point.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {point.location}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span
                          className={`px-2 py-0.5 text-xs rounded-full capitalize ${
                            point.severity === "critical"
                              ? "bg-red-100 text-red-700"
                              : point.severity === "high"
                              ? "bg-orange-100 text-orange-700"
                              : point.severity === "medium"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {point.severity}
                        </span>
                        <span className="text-xs text-gray-500">
                          {point.reportCount} reports
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
