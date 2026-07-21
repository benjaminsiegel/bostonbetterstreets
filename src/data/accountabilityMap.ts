export type ProjectStatus =
  | "Paused"
  | "Limited Progress"
  | "Resumed"
  | "Cancelled";

export type StalledProject = {
  id: string;
  name: string;
  shortName: string;
  status: ProjectStatus;
  description: string;
  location: string;
  coordinates: [number, number];
  website?: string;
};

export type ActionStatus =
  | "Promised"
  | "Needs proof"
  | "Authorized"
  | "State action"
  | "Existing — verify";

export type CitywideAction = {
  id: string;
  title: string;
  scope: "City" | "City + MBTA" | "State";
  status: ActionStatus;
  description: string;
  measure: string;
  source?: string;
};

export const pressPlayUrl =
  "https://app.notion.com/p/pressplayontransportation/Press-Play-on-Transportation-3374eb75300c807494e2f6446632e826?source=copy_link";

export const statusColors: Record<ProjectStatus, string> = {
  Paused: "#b7342c",
  "Limited Progress": "#c58a25",
  Resumed: "#2f6f4e",
  Cancelled: "#62605a",
};

// Statuses and descriptions are a July 21, 2026 snapshot of the Press Play tracker.
// Coordinates are representative points for each corridor or project area.
export const stalledProjects: StalledProject[] = [
  {
    id: "tremont-columbus",
    name: "Tremont Street Phase II / Columbus Avenue",
    shortName: "Tremont / Columbus",
    status: "Paused",
    description:
      "Improves pedestrian safety and closes gaps in the bicycle network by reducing travel lanes and adding separated bike lanes.",
    location: "Lower Roxbury / South End",
    coordinates: [42.337, -71.085],
    website:
      "https://www.boston.gov/departments/transportation/tremont-columbus-bus-lanes",
  },
  {
    id: "blue-hill-avenue",
    name: "Blue Hill Avenue Center-Running Bus Lane",
    shortName: "Blue Hill Avenue",
    status: "Limited Progress",
    description:
      "Full corridor redesign to prioritize faster bus service, safer walking and biking, and expanded green space.",
    location: "Roxbury / Dorchester / Mattapan",
    coordinates: [42.296, -71.087],
    website:
      "https://www.boston.gov/departments/transportation/project/blue-hill-avenue-transportation-action-plan",
  },
  {
    id: "boylston-fenway",
    name: "Boylston Street / Fenway",
    shortName: "Boylston / Fenway",
    status: "Paused",
    description:
      "Adds separated bike lanes and shortens pedestrian crossings to enhance safety.",
    location: "Fenway",
    coordinates: [42.3447, -71.101],
    website: "https://www.boston.gov/departments/transportation/boylston-street",
  },
  {
    id: "columbia-road",
    name: "Columbia Road Transportation Action Plan",
    shortName: "Columbia Road",
    status: "Paused",
    description:
      "Redesigns the corridor to improve transit reliability, increase safety, and add new tree canopy and greenery.",
    location: "Dorchester / Roxbury",
    coordinates: [42.3075, -71.067],
    website:
      "https://www.boston.gov/departments/transportation/project/columbia-road-transportation-action-plan",
  },
  {
    id: "downtown-crossing",
    name: "Downtown Crossing Street Improvements",
    shortName: "Downtown Crossing",
    status: "Paused",
    description:
      "Reconstructs streets to be more accessible, better lit, and safer for pedestrians.",
    location: "Downtown",
    coordinates: [42.3554, -71.0607],
    website:
      "https://www.boston.gov/departments/public-works/project/downtown-crossing-street-improvements",
  },
  {
    id: "egleston-square",
    name: "Egleston Square Redesign",
    shortName: "Egleston Square",
    status: "Paused",
    description:
      "Reconstructs streets to be safer for bicyclists and pedestrians, and improves the public realm.",
    location: "Roxbury / Jamaica Plain",
    coordinates: [42.3143, -71.1019],
    website:
      "https://www.boston.gov/departments/transportation/project/egleston-square-redesign",
  },
  {
    id: "hyde-park-avenue",
    name: "Hyde Park Avenue Multimodal Corridor",
    shortName: "Hyde Park Avenue",
    status: "Paused",
    description:
      "Bus, bike, and signal improvements to speed up transit between Forest Hills and Wolcott Square.",
    location: "Forest Hills to Readville",
    coordinates: [42.282, -71.119],
    website:
      "https://www.boston.gov/departments/transportation/project/hyde-park-avenue-multimodal-corridor",
  },
  {
    id: "jp-centre-south",
    name: "Jamaica Plain Centre / South Transportation Action Plan",
    shortName: "JP Centre / South",
    status: "Paused",
    description:
      "Reconstructs Centre and South Streets to improve the public realm and bike and pedestrian safety.",
    location: "Jamaica Plain",
    coordinates: [42.3095, -71.114],
    website:
      "https://www.boston.gov/departments/transportation/project/jamaica-plain-centre-south-transportation-action-plan",
  },
  {
    id: "mission-hill",
    name: "Mission Hill: Parker / Terrace Streets",
    shortName: "Mission Hill",
    status: "Paused",
    description:
      "Widens sidewalks and creates safer bike connections to improve neighborhood accessibility.",
    location: "Mission Hill",
    coordinates: [42.3318, -71.1015],
    website:
      "https://www.boston.gov/departments/transportation/project/mission-hill-transportation-planning-terrace-and-parker-street",
  },
  {
    id: "north-station-seaport",
    name: "North Station to Seaport Multimodal Corridor",
    shortName: "North Station–Seaport",
    status: "Cancelled",
    description:
      "Would create direct, high-quality bus service between North Station, South Station, and the Seaport.",
    location: "Downtown / Seaport",
    coordinates: [42.352, -71.049],
    website:
      "https://www.boston.gov/departments/transportation/north-station-seaport-multimodal-corridor",
  },
  {
    id: "roxbury-resilient-corridors",
    name: "Roxbury Resilient Corridors",
    shortName: "Roxbury Corridors",
    status: "Paused",
    description:
      "Transforms Melnea Cass, Malcolm X, and Warren Boulevards into safer, greener, and more transit-efficient streets.",
    location: "Roxbury",
    coordinates: [42.324, -71.083],
    website:
      "https://www.boston.gov/departments/transportation/project/roxbury-resilient-corridors",
  },
  {
    id: "maverick-square",
    name: "Maverick Square Transportation Action Plan",
    shortName: "Maverick Square",
    status: "Paused",
    description:
      "Improves safety, connectivity, and public space surrounding Maverick Station.",
    location: "East Boston",
    coordinates: [42.3691, -71.0395],
    website:
      "https://www.boston.gov/departments/transportation/project/maverick-square-transportation-action-plan",
  },
  {
    id: "roslindale-square",
    name: "Roslindale Square Transportation Action Plan",
    shortName: "Roslindale Square",
    status: "Paused",
    description:
      "Develops plans for new crosswalks, public spaces, and safer transit access in the square.",
    location: "Roslindale",
    coordinates: [42.287, -71.13],
  },
  {
    id: "lower-roxbury",
    name: "Lower Roxbury Neighborhood Safety Improvements",
    shortName: "Lower Roxbury",
    status: "Paused",
    description:
      "Installs speed humps, raised crosswalks, and contraflow bike lanes to make residential streets safer for walking and rolling.",
    location: "Lower Roxbury",
    coordinates: [42.334, -71.0775],
    website:
      "https://www.boston.gov/departments/transportation/project/lower-roxbury-neighborhood-traffic-calming",
  },
  {
    id: "connect-downtown",
    name: "Connect Downtown: Public Garden Crossings",
    shortName: "Public Garden Crossings",
    status: "Paused",
    description:
      "Improves pedestrian crossings and bike lanes at the busy intersections surrounding the Public Garden.",
    location: "Back Bay / Downtown",
    coordinates: [42.354, -71.0702],
    website:
      "https://www.boston.gov/departments/streets-cabinet/project/connect-downtown-public-garden-crossings",
  },
  {
    id: "western-avenue",
    name: "Western Avenue Better Bike Lanes",
    shortName: "Western Avenue",
    status: "Paused",
    description:
      "Provides interim separated bike lanes and intersection safety improvements.",
    location: "Allston / Brighton",
    coordinates: [42.3624, -71.134],
    website:
      "https://www.boston.gov/departments/transportation/project/western-avenue-better-bike-lanes",
  },
  {
    id: "better-buffers",
    name: "Better Buffers",
    shortName: "Better Buffers",
    status: "Limited Progress",
    description:
      "Installs concrete bike-lane barriers to increase safety and reduce maintenance costs.",
    location: "Citywide program",
    coordinates: [42.3482, -71.078],
    website: "https://www.boston.gov/departments/transportation/better-buffers",
  },
];
export const citywideActions: CitywideAction[] = [
  {
    id: "street-design-review",
    title: "Street-design review after serious crashes",
    scope: "City",
    status: "Promised",
    description:
      "Make an independent street-design analysis standard after fatal and serious crashes—not an exceptional response after public pressure.",
    measure:
      "Publish the protocol, responsible team, findings, and deadlines for corrective work.",
  },
  {
    id: "blocked-lanes",
    title: "Enforcement of blocked bike lanes and crosswalks",
    scope: "City",
    status: "Needs proof",
    description:
      "The mayor says enforcement of bike-lane, crosswalk, and double-parking violations has increased.",
    measure:
      "Release weekly citation and towing totals by violation and location, including City and police vehicles.",
  },
  {
    id: "bus-lane-cameras",
    title: "Camera ticketing in bus lanes and bus stops",
    scope: "City + MBTA",
    status: "Authorized",
    description:
      "Massachusetts law now authorizes bus-mounted and bus-stop cameras. Boston and the MBTA should implement them on the highest-delay corridors.",
    measure:
      "Name launch corridors, a public-awareness period, an equity review, and a start date.",
    source:
      "https://malegislature.gov/Laws/SessionLaws/Acts/2024/Chapter363",
  },
  {
    id: "speed-cameras",
    title: "Automated speed-safety cameras",
    scope: "State",
    status: "State action",
    description:
      "Boston still needs state authorization for a privacy-protective municipal speed-camera program focused on the most dangerous streets.",
    measure:
      "Pass enabling legislation, then publish Boston's proposed locations, safeguards, and evaluation plan.",
    source: "https://malegislature.gov/Bills/194/S2344",
  },
  {
    id: "truck-side-guards",
    title: "Truck side guards and direct-vision standards",
    scope: "City",
    status: "Existing — verify",
    description:
      "Boston requires side guards and visibility equipment on large City-owned and City-contracted vehicles. Compliance and enforcement should be public and expanded where possible.",
    measure:
      "Publish inspection totals, exemptions, violations, contractor compliance, and a plan for safer vehicle procurement.",
    source:
      "https://www.boston.gov/departments/innovation-and-technology/2013-truck-side-guard-pilot",
  },
  {
    id: "vision-zero",
    title: "A credible path to Vision Zero by 2030",
    scope: "City",
    status: "Needs proof",
    description:
      "Boston's adopted goal is to eliminate fatal and serious traffic crashes by 2030. The remaining work needs annual, measurable delivery targets.",
    measure:
      "Publish yearly targets for high-crash locations, safety projects, speed humps, raised crossings, and protected-lane miles.",
    source: "https://www.boston.gov/departments/transportation/vision-zero",
  },
  {
    id: "project-updates",
    title: "Timely, public project updates",
    scope: "City",
    status: "Needs proof",
    description:
      "Residents should not need hearings, records requests, or press coverage to learn whether a safety project has moved, changed, lost funding, or died.",
    measure:
      "Maintain one public dashboard with an owner, budget, next milestone, decision log, and update date for every project.",
  },
  {
    id: "streets-cabinet-capacity",
    title: "Streets Cabinet authority and delivery capacity",
    scope: "City",
    status: "Promised",
    description:
      "The mayor assigned two senior staff members to accelerate policy, planning, and capital delivery. Their mandate should be concrete and transparent.",
    measure:
      "Name the staff, define their authority, and publish the projects and deadlines they are accountable for.",
  },
  {
    id: "quick-builds",
    title: "Immediate fixes on the high-crash network",
    scope: "City",
    status: "Needs proof",
    description:
      "Long capital projects cannot be the only response. Proven quick-build changes should reduce risk while permanent work is designed and funded.",
    measure:
      "Publish a 90-day package of daylighting, hardened protection, signal changes, raised crossings, and speed management.",
  },
  {
    id: "funding-delivery",
    title: "Protect awarded funds and restore capital delivery",
    scope: "City",
    status: "Needs proof",
    description:
      "Several projects carry state or federal funding and years of completed community and design work. Starting over can add delay and put outside funding at risk.",
    measure:
      "Disclose every funding deadline and publish a recovery schedule before any award is lost.",
  },
];
