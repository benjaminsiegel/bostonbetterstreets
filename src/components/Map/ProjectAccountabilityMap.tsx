"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import {
  citywideActions,
  pressPlayUrl,
  stalledProjects,
  statusColors,
  type ActionStatus,
  type ProjectStatus,
  type StalledProject,
} from "@/data/accountabilityMap";

const MapContainer = dynamic(
  () => import("react-leaflet").then((module) => module.MapContainer),
  { ssr: false },
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((module) => module.TileLayer),
  { ssr: false },
);
const CircleMarker = dynamic(
  () => import("react-leaflet").then((module) => module.CircleMarker),
  { ssr: false },
);
const Tooltip = dynamic(
  () => import("react-leaflet").then((module) => module.Tooltip),
  { ssr: false },
);
const ZoomControl = dynamic(
  () => import("react-leaflet").then((module) => module.ZoomControl),
  { ssr: false },
);

const projectStatuses: ProjectStatus[] = [
  "Paused",
  "Limited Progress",
  "Resumed",
  "Cancelled",
];

const actionTone: Record<ActionStatus, string> = {
  Promised: "bg-[#e7d5a0] text-[#4b3510]",
  "Needs proof": "bg-[#ead4d1] text-[#7f2a24]",
  Authorized: "bg-[#d8e2d3] text-[#285f43]",
  "State action": "bg-[#d8e0ea] text-[#29445e]",
  "Existing — verify": "bg-[#dfdcd3] text-[#47453f]",
};

function ProjectCard({ project, onClose }: { project: StalledProject; onClose: () => void }) {
  return (
    <article className="absolute inset-x-3 bottom-3 z-[500] max-w-[440px] rounded-lg border border-[#0a0a0a]/12 bg-[#f7f3ea]/96 p-5 shadow-[0_18px_45px_rgba(10,10,10,.18)] backdrop-blur md:inset-x-auto md:bottom-5 md:left-5 md:w-[390px]">
      <div className="mb-3 flex items-start justify-between gap-5">
        <div>
          <div className="mb-2 flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#0a0a0a]/55">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: statusColors[project.status] }}
              aria-hidden="true"
            />
            {project.status}
          </div>
          <h3 className="text-xl font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0a0a0a]">
            {project.name}
          </h3>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="-mr-1 -mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-full text-[#0a0a0a]/55 transition-colors hover:bg-[#0a0a0a]/7 hover:text-[#0a0a0a]"
        >
          <span className="material-symbols-outlined text-xl" aria-hidden="true">close</span>
        </button>
      </div>
      <p className="mb-3 text-xs font-semibold text-[#0a0a0a]/52">{project.location}</p>
      <p className="text-sm leading-[1.6] text-[#0a0a0a]/68">{project.description}</p>
      {project.website && (
        <a
          href={project.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 border-b border-[#0a0a0a]/25 pb-0.5 text-xs font-bold text-[#0a0a0a]/72 transition-colors hover:border-[#2f6f4e] hover:text-[#2f6f4e]"
        >
          City project page
          <span className="material-symbols-outlined text-sm" aria-hidden="true">north_east</span>
        </a>
      )}
    </article>
  );
}
export default function ProjectAccountabilityMap() {
  const [selectedProject, setSelectedProject] = useState<StalledProject | null>(null);
  const [statusFilter, setStatusFilter] = useState<ProjectStatus | "All">("All");

  const visibleProjects = useMemo(
    () =>
      statusFilter === "All"
        ? stalledProjects
        : stalledProjects.filter((project) => project.status === statusFilter),
    [statusFilter],
  );

  const counts = useMemo(
    () =>
      stalledProjects.reduce<Record<ProjectStatus, number>>(
        (result, project) => {
          result[project.status] += 1;
          return result;
        },
        { Paused: 0, "Limited Progress": 0, Resumed: 0, Cancelled: 0 },
      ),
    [],
  );

  return (
    <div className="grid border-y border-[#0a0a0a]/10 bg-[#e8e3d8] xl:grid-cols-[minmax(0,1fr)_420px]">
      <section className="min-w-0 border-[#0a0a0a]/10 xl:border-r" aria-labelledby="map-title">
        <div className="flex flex-col gap-4 border-b border-[#0a0a0a]/10 bg-[#f0ece2] px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 id="map-title" className="text-base font-extrabold tracking-[-0.01em] text-[#0a0a0a]">
              Seventeen promises, across Boston
            </h2>
            <p className="mt-1 text-xs leading-5 text-[#0a0a0a]/52">
              Select a status or tap any circle for the project record.
            </p>
          </div>

          <div className="flex flex-wrap gap-2" aria-label="Filter projects by status">
            <button
              type="button"
              onClick={() => setStatusFilter("All")}
              className={`rounded-full px-3 py-1.5 text-[0.66rem] font-bold transition-colors ${
                statusFilter === "All"
                  ? "bg-[#0a0a0a] text-white"
                  : "bg-[#0a0a0a]/6 text-[#0a0a0a]/62 hover:bg-[#0a0a0a]/10"
              }`}
            >
              All 17
            </button>
            {projectStatuses.map((status) => (
              <button
                type="button"
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.66rem] font-bold transition-colors ${
                  statusFilter === status
                    ? "bg-[#0a0a0a] text-white"
                    : "bg-[#0a0a0a]/6 text-[#0a0a0a]/62 hover:bg-[#0a0a0a]/10"
                }`}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: statusColors[status] }}
                  aria-hidden="true"
                />
                {status} {counts[status]}
              </button>
            ))}
          </div>
        </div>

        <div className="relative h-[590px] overflow-hidden bg-[#ddd8cd] md:h-[680px] xl:h-[760px]">
          <MapContainer
            center={[42.325, -71.081]}
            zoom={12}
            minZoom={10}
            maxZoom={17}
            zoomControl={false}
            scrollWheelZoom
            style={{ height: "100%", width: "100%", background: "#ddd8cd" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            <ZoomControl position="bottomright" />

            {visibleProjects.map((project) => {
              const color = statusColors[project.status];
              const isSelected = selectedProject?.id === project.id;

              return (
                <CircleMarker
                  key={project.id}
                  center={project.coordinates}
                  radius={isSelected ? 16 : 11}
                  pathOptions={{
                    color: "#f7f3ea",
                    weight: isSelected ? 4 : 3,
                    opacity: 1,
                    fillColor: color,
                    fillOpacity: 0.94,
                  }}
                  eventHandlers={{
                    click: () => setSelectedProject(project),
                  }}
                >
                  <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                    <div className="max-w-[210px] py-0.5">
                      <strong>{project.shortName}</strong>
                      <br />
                      <span>{project.status}</span>
                    </div>
                  </Tooltip>
                </CircleMarker>
              );
            })}
          </MapContainer>

          <div className="pointer-events-none absolute left-4 top-4 z-[400] rounded-md border border-[#0a0a0a]/10 bg-[#f7f3ea]/92 px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-[#0a0a0a]/56 shadow-sm backdrop-blur sm:left-6 sm:top-6">
            Status snapshot · July 21, 2026
          </div>

          {selectedProject && (
            <ProjectCard project={selectedProject} onClose={() => setSelectedProject(null)} />
          )}
        </div>

        <div className="flex flex-col gap-3 border-t border-[#0a0a0a]/10 bg-[#f0ece2] px-4 py-4 text-xs leading-5 text-[#0a0a0a]/52 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>Representative points show each corridor or project area; Better Buffers is citywide.</p>
          <a
            href={pressPlayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-none items-center gap-1.5 font-bold text-[#0a0a0a]/68 transition-colors hover:text-[#2f6f4e]"
          >
            Open Press Play source
            <span className="material-symbols-outlined text-sm" aria-hidden="true">north_east</span>
          </a>
        </div>
      </section>

      <aside id="citywide-actions" className="bg-[#f0ece2] xl:max-h-[856px] xl:overflow-y-auto" aria-labelledby="citywide-heading">
        <div className="border-b border-[#0a0a0a]/10 bg-[#0a0a0a] px-5 py-7 text-white sm:px-7">
          <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#d8e2d3]/72">
            Beyond the map
          </p>
          <h2 id="citywide-heading" className="text-2xl font-extrabold leading-[1.05] tracking-[-0.025em]">
            Citywide actions that cannot wait
          </h2>
          <p className="mt-4 text-sm leading-[1.65] text-white/62">
            Project delivery matters. So do the rules, enforcement, funding, and public accountability that shape every street.
          </p>
        </div>

        <div className="divide-y divide-[#0a0a0a]/10">
          {citywideActions.map((action, index) => (
            <details key={action.id} className="group px-5 sm:px-7" open={index < 2}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-5 marker:content-none">
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className={`rounded px-2 py-1 text-[0.58rem] font-bold uppercase tracking-[0.08em] ${actionTone[action.status]}`}>
                      {action.status}
                    </span>
                    <span className="text-[0.6rem] font-bold uppercase tracking-[0.1em] text-[#0a0a0a]/38">
                      {action.scope}
                    </span>
                  </div>
                  <h3 className="text-sm font-extrabold leading-[1.3] tracking-[-0.01em] text-[#0a0a0a]">
                    {action.title}
                  </h3>
                </div>
                <span className="material-symbols-outlined mt-1 flex-none text-lg text-[#0a0a0a]/42 transition-transform group-open:rotate-45" aria-hidden="true">
                  add
                </span>
              </summary>
              <div className="-mt-1 pb-6">
                <p className="text-sm leading-[1.65] text-[#0a0a0a]/62">{action.description}</p>
                <div className="mt-4 border-l-2 border-[#2f6f4e]/45 pl-3">
                  <p className="mb-1 text-[0.6rem] font-bold uppercase tracking-[0.1em] text-[#2f6f4e]">
                    What proof looks like
                  </p>
                  <p className="text-xs leading-[1.6] text-[#0a0a0a]/58">{action.measure}</p>
                </div>
                {action.source && (
                  <a
                    href={action.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 border-b border-[#0a0a0a]/20 pb-0.5 text-[0.68rem] font-bold text-[#0a0a0a]/58 transition-colors hover:border-[#2f6f4e] hover:text-[#2f6f4e]"
                  >
                    Source
                    <span className="material-symbols-outlined text-xs" aria-hidden="true">north_east</span>
                  </a>
                )}
              </div>
            </details>
          ))}
        </div>
      </aside>
    </div>
  );
}
