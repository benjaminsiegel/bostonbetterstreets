"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { PainPoint, painPointTypeLabels, painPointTypeColors, severityColors } from "@/data/painPoints";
import { Project } from "@/data/projects";
import { AlertTriangle, MapPin, Layers, Filter } from "lucide-react";

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);
const CircleMarker = dynamic(
  () => import("react-leaflet").then((mod) => mod.CircleMarker),
  { ssr: false }
);

interface StreetMapProps {
  painPoints: PainPoint[];
  projects: Project[];
  className?: string;
  showFilters?: boolean;
  height?: string;
}

type FilterType = "all" | "pain-points" | "projects";

export default function StreetMap({
  painPoints,
  projects,
  className = "",
  showFilters = true,
  height = "600px",
}: StreetMapProps) {
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState<FilterType>("all");
  const [selectedSeverity, setSelectedSeverity] = useState<string>("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Boston center coordinates
  const bostonCenter: [number, number] = [42.3145, -71.0578];

  const filteredPainPoints = painPoints.filter((pp) => {
    if (filter === "projects") return false;
    if (selectedSeverity !== "all" && pp.severity !== selectedSeverity) return false;
    return true;
  });

  const filteredProjects = filter === "pain-points" ? [] : projects;

  if (!mounted) {
    return (
      <div
        className={`bg-gray-100 rounded-lg flex items-center justify-center ${className}`}
        style={{ height }}
      >
        <div className="text-center text-gray-500">
          <MapPin className="w-12 h-12 mx-auto mb-2 animate-pulse" />
          <p>Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      {/* Filter Controls */}
      {showFilters && (
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Show:</span>
            </div>

            <div className="flex gap-2">
              {[
                { value: "all", label: "All" },
                { value: "pain-points", label: "Pain Points" },
                { value: "projects", label: "Projects" },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setFilter(option.value as FilterType)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    filter === option.value
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {filter !== "projects" && (
              <>
                <div className="h-6 w-px bg-gray-200" />
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Severity:</span>
                  <select
                    value={selectedSeverity}
                    onChange={(e) => setSelectedSeverity(e.target.value)}
                    className="text-sm border border-gray-200 rounded-md px-2 py-1"
                  >
                    <option value="all">All</option>
                    <option value="critical">Critical</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
              </>
            )}
          </div>

          {/* Legend */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex flex-wrap gap-4 text-xs">
              <div className="flex items-center gap-4">
                <span className="font-medium text-gray-600">Severity:</span>
                {Object.entries(severityColors).map(([severity, color]) => (
                  <div key={severity} className="flex items-center gap-1">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    <span className="capitalize text-gray-600">{severity}</span>
                  </div>
                ))}
              </div>
              <div className="h-4 w-px bg-gray-200" />
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-blue-600 rounded" />
                <span className="text-gray-600">Projects</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Map Container */}
      <div className="rounded-lg overflow-hidden border border-gray-200" style={{ height }}>
        <MapContainer
          center={bostonCenter}
          zoom={12}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Pain Points */}
          {filteredPainPoints.map((point) => (
            <CircleMarker
              key={point.id}
              center={point.coordinates}
              radius={8 + Math.min(point.reportCount / 20, 10)}
              fillColor={severityColors[point.severity]}
              color={severityColors[point.severity]}
              weight={2}
              opacity={1}
              fillOpacity={0.7}
            >
              <Popup>
                <div className="min-w-[200px]">
                  <div className="flex items-start gap-2 mb-2">
                    <AlertTriangle
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: severityColors[point.severity] }}
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">{point.title}</h3>
                      <span
                        className="inline-block px-2 py-0.5 text-xs rounded-full mt-1"
                        style={{
                          backgroundColor: painPointTypeColors[point.type] + "20",
                          color: painPointTypeColors[point.type],
                        }}
                      >
                        {painPointTypeLabels[point.type]}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{point.description}</p>
                  <div className="text-xs text-gray-500 space-y-1">
                    <p>
                      <strong>Location:</strong> {point.location}
                    </p>
                    <p>
                      <strong>Reports:</strong> {point.reportCount}
                    </p>
                    <p>
                      <strong>Severity:</strong>{" "}
                      <span
                        className="capitalize font-medium"
                        style={{ color: severityColors[point.severity] }}
                      >
                        {point.severity}
                      </span>
                    </p>
                  </div>
                </div>
              </Popup>
            </CircleMarker>
          ))}

          {/* Projects */}
          {filteredProjects.map((project) => (
            <CircleMarker
              key={project.id}
              center={project.coordinates}
              radius={12}
              fillColor="#1e40af"
              color="#1e3a8a"
              weight={3}
              opacity={1}
              fillOpacity={0.8}
            >
              <Popup>
                <div className="min-w-[220px]">
                  <div className="flex items-start gap-2 mb-2">
                    <Layers className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-900">{project.name}</h3>
                      <span
                        className={`inline-block px-2 py-0.5 text-xs rounded-full mt-1 capitalize ${
                          project.status === "stalled"
                            ? "bg-red-100 text-red-700"
                            : project.status === "in-progress"
                            ? "bg-amber-100 text-amber-700"
                            : project.status === "completed"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{project.shortDescription}</p>
                  <div className="text-xs text-gray-500 space-y-1">
                    <p>
                      <strong>Started:</strong> {project.startYear}
                    </p>
                    {project.expectedCompletion && (
                      <p>
                        <strong>Expected:</strong> {project.expectedCompletion}
                      </p>
                    )}
                    <a
                      href={`/projects/${project.slug}`}
                      className="inline-block mt-2 text-blue-600 hover:underline font-medium"
                    >
                      View full details →
                    </a>
                  </div>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>

      {/* Stats below map */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-red-50 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-red-600">
            {painPoints.filter((p) => p.severity === "critical").length}
          </div>
          <div className="text-xs text-red-700">Critical Issues</div>
        </div>
        <div className="bg-amber-50 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-amber-600">
            {painPoints.filter((p) => p.severity === "high").length}
          </div>
          <div className="text-xs text-amber-700">High Priority</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-blue-600">
            {projects.filter((p) => p.status === "stalled").length}
          </div>
          <div className="text-xs text-blue-700">Stalled Projects</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-gray-600">
            {painPoints.reduce((sum, p) => sum + p.reportCount, 0)}
          </div>
          <div className="text-xs text-gray-700">Total Reports</div>
        </div>
      </div>
    </div>
  );
}
