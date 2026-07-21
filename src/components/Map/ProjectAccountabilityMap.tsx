"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import {
  citywideActions,
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
const Polyline = dynamic(
  () => import("react-leaflet").then((module) => module.Polyline),
  { ssr: false },
);
const Polygon = dynamic(
  () => import("react-leaflet").then((module) => module.Polygon),
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

const bostonProjectBounds: [[number, number], [number, number]] = [
  [42.234, -71.151],
  [42.374, -71.032],
];

const projectStatuses: ProjectStatus[] = [
  "Paused",
  "Limited Progress",
  "Resumed",
  "Cancelled",
];

const actionStatusColors: Record<ActionStatus, string> = {
  Promised: "#c58a25",
  "Needs proof": "#b7342c",
  Authorized: "#2f6f4e",
  "State action": "#567898",
  "Existing — verify": "#62605a",
};

function ProjectCard({ project, onClose }: { project: StalledProject; onClose: () => void }) {
  return (
    <article className="absolute inset-x-3 bottom-3 z-[500] max-w-[440px] rounded-md border border-[#0a0a0a]/14 bg-[#f7f3ea]/97 p-5 shadow-[0_18px_45px_rgba(10,10,10,.18)] backdrop-blur md:inset-x-auto md:bottom-5 md:left-5 md:w-[390px]">
      <div className="mb-3 flex items-start justify-between gap-5">
        <div>
          <div className="mb-2 flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#0a0a0a]/52">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: statusColors[project.status] }}
              aria-hidden="true"
            />
            {project.status} · {project.location}
          </div>
          <h3 className="text-xl font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0a0a0a]">
            {project.name}
          </h3>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="-mr-1 -mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-full text-[#0a0a0a]/50 transition-colors hover:bg-[#0a0a0a]/7 hover:text-[#0a0a0a]"
        >
          <span className="material-symbols-outlined text-xl" aria-hidden="true">close</span>
        </button>
      </div>
      <p className="text-sm leading-[1.6] text-[#0a0a0a]/66">{project.description}</p>
      {project.website && (
        <a
          href={project.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 border-b border-[#0a0a0a]/25 pb-0.5 text-xs font-bold text-[#0a0a0a]/68 transition-colors hover:border-[#2f6f4e] hover:text-[#2f6f4e]"
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

  const roadProjects = stalledProjects.filter(
    (project) => project.corridors?.length && !project.areas?.length,
  );
  const areaProjects = stalledProjects.filter((project) => project.areas?.length);
  const betterBuffers = stalledProjects.find((project) => project.id === "better-buffers");

  return (
    <div className="border-y border-[#0a0a0a]/10 bg-[#f0ece2]">
      <section aria-labelledby="map-title">
        <div className="border-b border-[#0a0a0a]/10 px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-2 text-[0.62rem] font-bold uppercase tracking-[0.13em] text-[#a63d36]">
                The project map
              </p>
              <h2 id="map-title" className="text-xl font-extrabold tracking-[-0.02em] text-[#0a0a0a] md:text-2xl">
                Ten corridors, six project areas, one citywide program
              </h2>
              <p className="mt-2 text-xs leading-5 text-[#0a0a0a]/50">
                Select a highlighted road or shaded area to open its project record.
              </p>
            </div>

            <label className="flex max-w-sm flex-col gap-1.5 text-[0.6rem] font-bold uppercase tracking-[0.1em] text-[#0a0a0a]/45">
              Find a project
              <select
                value={selectedProject?.id ?? ""}
                onChange={(event) => {
                  const project = stalledProjects.find((item) => item.id === event.target.value);
                  setSelectedProject(project ?? null);
                }}
                className="min-h-10 rounded-md border border-[#0a0a0a]/14 bg-[#f7f3ea] px-3 text-xs font-semibold normal-case tracking-normal text-[#0a0a0a]/72 outline-none focus:border-[#2f6f4e]"
              >
                <option value="">Choose from all 17 projects</option>
                {stalledProjects.map((project) => (
                  <option key={project.id} value={project.id}>
                    {project.shortName} — {project.status}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#0a0a0a]/8 pt-4 text-[0.65rem] font-semibold text-[#0a0a0a]/52">
            {projectStatuses.map((status) => (
              <span key={status} className="inline-flex items-center gap-1.5">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: statusColors[status] }}
                  aria-hidden="true"
                />
                {status} {counts[status]}
              </span>
            ))}
          </div>
        </div>

        <div className="relative h-[570px] overflow-hidden bg-[#ddd8cd] md:h-[690px] xl:h-[730px]">
          <MapContainer
            bounds={bostonProjectBounds}
            boundsOptions={{ padding: [14, 14] }}
            minZoom={10}
            maxZoom={17}
            zoomSnap={0.25}
            zoomControl={false}
            scrollWheelZoom
            style={{ height: "100%", width: "100%", background: "#ddd8cd" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            <ZoomControl position="bottomright" />

            {areaProjects.flatMap((project) =>
              project.areas!.map((area, areaIndex) => {
                const color = statusColors[project.status];
                const isSelected = selectedProject?.id === project.id;

                return (
                  <Polygon
                    key={`${project.id}-area-${areaIndex}`}
                    positions={area}
                    pathOptions={{
                      color,
                      weight: isSelected ? 4 : 2.5,
                      opacity: 0.9,
                      fillColor: color,
                      fillOpacity: isSelected ? 0.34 : 0.18,
                      lineJoin: "round",
                    }}
                    eventHandlers={{ click: () => setSelectedProject(project) }}
                  >
                    <Tooltip sticky direction="top" offset={[0, -7]} opacity={1}>
                      <div className="max-w-[210px] py-0.5">
                        <strong>{project.shortName}</strong>
                        <br />
                        <span>{project.status} · Project area</span>
                      </div>
                    </Tooltip>
                  </Polygon>
                );
              }),
            )}

            {roadProjects.flatMap((project) =>
              project.corridors!.flatMap((corridor, corridorIndex) => {
                const color = statusColors[project.status];
                const isSelected = selectedProject?.id === project.id;
                const key = `${project.id}-${corridorIndex}`;

                return [
                  <Polyline
                    key={`${key}-casing`}
                    positions={corridor}
                    pathOptions={{
                      color: isSelected ? "#0a0a0a" : "#f7f3ea",
                      weight: isSelected ? 13 : 10,
                      opacity: 0.9,
                      lineCap: "round",
                      lineJoin: "round",
                      interactive: false,
                    }}
                  />,
                  <Polyline
                    key={`${key}-line`}
                    positions={corridor}
                    pathOptions={{
                      color,
                      weight: isSelected ? 7 : 5,
                      opacity: 0.94,
                      lineCap: "round",
                      lineJoin: "round",
                      dashArray: project.status === "Cancelled" ? "8 7" : undefined,
                    }}
                    eventHandlers={{ click: () => setSelectedProject(project) }}
                  >
                    <Tooltip sticky direction="top" offset={[0, -7]} opacity={1}>
                      <div className="max-w-[210px] py-0.5">
                        <strong>{project.shortName}</strong>
                        <br />
                        <span>{project.status}</span>
                      </div>
                    </Tooltip>
                  </Polyline>,
                ];
              }),
            )}
          </MapContainer>

          <div className="pointer-events-none absolute left-4 top-4 z-[400] rounded-md border border-[#0a0a0a]/10 bg-[#f7f3ea]/94 px-3 py-2 text-[0.6rem] font-bold uppercase tracking-[0.1em] text-[#0a0a0a]/54 shadow-sm backdrop-blur sm:left-6 sm:top-6">
            Status snapshot · July 21, 2026
          </div>

          {betterBuffers && (
            <button
              type="button"
              onClick={() => setSelectedProject(betterBuffers)}
              className="absolute right-4 top-4 z-[400] max-w-[190px] rounded-md border border-[#0a0a0a]/12 bg-[#f7f3ea]/95 px-3 py-2.5 text-left shadow-sm backdrop-blur transition-colors hover:bg-white sm:right-6 sm:top-6"
            >
              <span className="mb-1 flex items-center gap-1.5 text-[0.55rem] font-bold uppercase tracking-[0.1em] text-[#0a0a0a]/44">
                <span className="h-2 w-2 rounded-full bg-[#c58a25]" aria-hidden="true" />
                Citywide program
              </span>
              <span className="block text-xs font-extrabold text-[#0a0a0a]">Better Buffers</span>
            </button>
          )}

          {selectedProject && (
            <ProjectCard project={selectedProject} onClose={() => setSelectedProject(null)} />
          )}
        </div>

        <div className="flex flex-col gap-2 border-t border-[#0a0a0a]/10 px-4 py-3.5 text-[0.66rem] leading-5 text-[#0a0a0a]/44 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>Map geometry is an editorial guide; City project plans define exact limits.</p>
          <p>10 corridors · 6 project areas · 1 citywide program</p>
        </div>
      </section>

      <aside id="citywide-actions" className="border-t border-[#0a0a0a]/10" aria-labelledby="citywide-heading">
        <div className="flex flex-col gap-3 border-b border-[#0a0a0a]/10 px-5 py-7 sm:px-7 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div>
            <p className="mb-3 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#a63d36]">
              Citywide ledger
            </p>
            <h2 id="citywide-heading" className="text-2xl font-extrabold leading-[1.04] tracking-[-0.025em] text-[#0a0a0a] md:text-3xl">
              Commitments that reach every street
            </h2>
          </div>
          <p className="max-w-[430px] text-sm leading-[1.65] text-[#0a0a0a]/52 lg:text-right">
            Ten promises and policies to track alongside the construction map.
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          {citywideActions.map((action, index) => (
            <article
              key={action.id}
              className={`grid grid-cols-[28px_minmax(0,1fr)] gap-3 border-b border-[#0a0a0a]/10 px-5 py-5 sm:px-7 lg:px-8 ${
                index % 2 === 0 ? "md:border-r" : ""
              }`}
            >
              <span className="pt-0.5 text-[0.62rem] font-bold tabular-nums text-[#0a0a0a]/28">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="mb-2 flex flex-wrap items-center gap-2 text-[0.58rem] font-bold uppercase tracking-[0.09em]">
                  <span className="inline-flex items-center gap-1.5" style={{ color: actionStatusColors[action.status] }}>
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: actionStatusColors[action.status] }}
                      aria-hidden="true"
                    />
                    {action.status}
                  </span>
                  <span className="text-[#0a0a0a]/34">{action.scope}</span>
                </div>
                <h3 className="text-sm font-extrabold leading-[1.3] tracking-[-0.01em] text-[#0a0a0a]">
                  {action.title}
                </h3>
                <p className="mt-2 text-xs leading-[1.55] text-[#0a0a0a]/55">{action.description}</p>
                {action.source && (
                  <a
                    href={action.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Source for ${action.title}`}
                    className="mt-3 inline-flex items-center gap-1 border-b border-[#0a0a0a]/14 pb-0.5 text-[0.6rem] font-bold uppercase tracking-[0.08em] text-[#0a0a0a]/38 transition-colors hover:border-[#2f6f4e] hover:text-[#2f6f4e]"
                  >
                    Source
                    <span className="material-symbols-outlined text-[0.7rem]" aria-hidden="true">north_east</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </aside>
    </div>
  );
}
