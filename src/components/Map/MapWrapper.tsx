"use client";

import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";
import { PainPoint } from "@/data/painPoints";
import { Project } from "@/data/projects";

// Dynamically import the map component to avoid SSR issues with Leaflet
const StreetMap = dynamic(() => import("@/components/Map/StreetMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">
      <div className="text-center text-gray-500">
        <MapPin className="w-12 h-12 mx-auto mb-2 animate-pulse" />
        <p>Loading map...</p>
      </div>
    </div>
  ),
});

interface MapWrapperProps {
  painPoints: PainPoint[];
  projects: Project[];
  height?: string;
  showFilters?: boolean;
}

export default function MapWrapper({
  painPoints,
  projects,
  height = "600px",
  showFilters = true,
}: MapWrapperProps) {
  return (
    <StreetMap
      painPoints={painPoints}
      projects={projects}
      height={height}
      showFilters={showFilters}
    />
  );
}
