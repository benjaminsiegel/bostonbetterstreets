export type PainPointType =
  | "dangerous-crossing"
  | "missing-sidewalk"
  | "no-bike-lane"
  | "speeding"
  | "poor-lighting"
  | "blocked-accessibility"
  | "dangerous-intersection"
  | "bus-stop-hazard";

export type PainPointSeverity = "critical" | "high" | "medium" | "low";

export interface PainPoint {
  id: string;
  title: string;
  type: PainPointType;
  severity: PainPointSeverity;
  location: string;
  neighborhood: string;
  description: string;
  coordinates: [number, number]; // [lat, lng]
  reportedDate: string;
  reportCount: number;
  verified: boolean;
  relatedProjectId?: string;
}

export const painPointTypeLabels: Record<PainPointType, string> = {
  "dangerous-crossing": "Dangerous Crossing",
  "missing-sidewalk": "Missing Sidewalk",
  "no-bike-lane": "No Bike Lane",
  "speeding": "Speeding Zone",
  "poor-lighting": "Poor Lighting",
  "blocked-accessibility": "Blocked Accessibility",
  "dangerous-intersection": "Dangerous Intersection",
  "bus-stop-hazard": "Bus Stop Hazard"
};

export const painPointTypeColors: Record<PainPointType, string> = {
  "dangerous-crossing": "#dc2626",
  "missing-sidewalk": "#f59e0b",
  "no-bike-lane": "#7c3aed",
  "speeding": "#ef4444",
  "poor-lighting": "#6b7280",
  "blocked-accessibility": "#0891b2",
  "dangerous-intersection": "#dc2626",
  "bus-stop-hazard": "#ea580c"
};

export const severityColors: Record<PainPointSeverity, string> = {
  critical: "#dc2626",
  high: "#ea580c",
  medium: "#f59e0b",
  low: "#84cc16"
};

// Sample pain points - in production, these would come from Supabase
export const painPoints: PainPoint[] = [
  {
    id: "pp-1",
    title: "Forest Hills Station Crosswalk",
    type: "dangerous-crossing",
    severity: "critical",
    location: "Hyde Park Ave at Forest Hills Station",
    neighborhood: "Jamaica Plain",
    description: "Extremely dangerous crosswalk where Glenn Inghram was killed in October 2024. Signal timing is inadequate and drivers frequently run red lights.",
    coordinates: [42.3005, -71.1138],
    reportedDate: "2024-10-15",
    reportCount: 147,
    verified: true,
    relatedProjectId: "hyde-park-avenue"
  },
  {
    id: "pp-2",
    title: "Hyde Park Ave / American Legion Highway",
    type: "dangerous-intersection",
    severity: "critical",
    location: "Hyde Park Ave at American Legion Highway",
    neighborhood: "Hyde Park",
    description: "Complex intersection with poor visibility, high speeds, and confusing lane markings. Multiple near-misses reported weekly.",
    coordinates: [42.2791, -71.1215],
    reportedDate: "2024-08-20",
    reportCount: 89,
    verified: true,
    relatedProjectId: "hyde-park-avenue"
  },
  {
    id: "pp-3",
    title: "Route 32 Bus Stop - Cummins Highway",
    type: "bus-stop-hazard",
    severity: "high",
    location: "Hyde Park Ave at Cummins Highway",
    neighborhood: "Mattapan",
    description: "Bus stop on high-speed corridor with no safe crossing. Riders forced to cross four lanes of fast-moving traffic.",
    coordinates: [42.2702, -71.1187],
    reportedDate: "2024-09-10",
    reportCount: 56,
    verified: true,
    relatedProjectId: "hyde-park-avenue"
  },
  {
    id: "pp-4",
    title: "Mass Ave / Boylston Intersection",
    type: "dangerous-intersection",
    severity: "high",
    location: "Massachusetts Ave at Boylston Street",
    neighborhood: "Back Bay",
    description: "Heavy pedestrian and cyclist traffic with aggressive drivers. Multiple conflicts between turning vehicles and crosswalks.",
    coordinates: [42.3505, -71.0859],
    reportedDate: "2024-07-15",
    reportCount: 112,
    verified: true,
    relatedProjectId: "mass-ave-cambridge-line"
  },
  {
    id: "pp-5",
    title: "Blue Hill Ave / Warren Street",
    type: "speeding",
    severity: "high",
    location: "Blue Hill Avenue at Warren Street",
    neighborhood: "Roxbury",
    description: "Drivers regularly exceed 40mph in 25mph zone. Wide lanes and lack of traffic calming enable dangerous speeds.",
    coordinates: [42.3124, -71.0831],
    reportedDate: "2024-06-01",
    reportCount: 78,
    verified: true,
    relatedProjectId: "blue-hill-avenue"
  },
  {
    id: "pp-6",
    title: "Melnea Cass / Tremont",
    type: "dangerous-crossing",
    severity: "critical",
    location: "Melnea Cass Boulevard at Tremont Street",
    neighborhood: "Roxbury",
    description: "Wide boulevard crossing with inadequate crossing time. Particularly dangerous for seniors and those with mobility challenges.",
    coordinates: [42.3325, -71.0789],
    reportedDate: "2024-05-20",
    reportCount: 94,
    verified: true,
    relatedProjectId: "melnea-cass-boulevard"
  },
  {
    id: "pp-7",
    title: "Centre Street Missing Bike Lane",
    type: "no-bike-lane",
    severity: "medium",
    location: "Centre Street, West Roxbury",
    neighborhood: "West Roxbury",
    description: "No safe cycling infrastructure after bike lane project was cancelled. Cyclists forced into traffic or onto narrow sidewalks.",
    coordinates: [42.2798, -71.1577],
    reportedDate: "2024-04-10",
    reportCount: 45,
    verified: true,
    relatedProjectId: "centre-street-west-roxbury"
  },
  {
    id: "pp-8",
    title: "Dorchester Ave / Andrew Square",
    type: "dangerous-intersection",
    severity: "high",
    location: "Dorchester Avenue at Andrew Square",
    neighborhood: "South Boston",
    description: "Chaotic intersection with poor pedestrian infrastructure. Construction has made conditions even more hazardous.",
    coordinates: [42.3294, -71.0573],
    reportedDate: "2024-11-05",
    reportCount: 67,
    verified: true
  },
  {
    id: "pp-9",
    title: "Columbus Ave - Poor Lighting",
    type: "poor-lighting",
    severity: "medium",
    location: "Columbus Avenue near Jackson Square",
    neighborhood: "Jamaica Plain",
    description: "Several blocks with broken or inadequate street lighting. Pedestrians report feeling unsafe after dark.",
    coordinates: [42.3231, -71.0998],
    reportedDate: "2024-10-01",
    reportCount: 34,
    verified: true
  },
  {
    id: "pp-10",
    title: "Washington Street Accessibility",
    type: "blocked-accessibility",
    severity: "high",
    location: "Washington Street, Chinatown",
    neighborhood: "Chinatown",
    description: "Sidewalks frequently blocked by delivery vehicles, forcing wheelchair users and parents with strollers into the street.",
    coordinates: [42.3516, -71.0625],
    reportedDate: "2024-09-25",
    reportCount: 52,
    verified: true
  }
];

export const getPainPointsByType = (type: PainPointType): PainPoint[] => {
  return painPoints.filter(p => p.type === type);
};

export const getPainPointsBySeverity = (severity: PainPointSeverity): PainPoint[] => {
  return painPoints.filter(p => p.severity === severity);
};

export const getPainPointsByNeighborhood = (neighborhood: string): PainPoint[] => {
  return painPoints.filter(p => p.neighborhood.toLowerCase() === neighborhood.toLowerCase());
};
