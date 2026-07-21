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
  corridors?: [number, number][][];
  areas?: [number, number][][];
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
  source?: string;
};

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
    corridors: [
      [
        [42.344, -71.077],
        [42.3408, -71.081],
        [42.3368, -71.0854],
        [42.332, -71.0896],
      ],
    ],
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
    corridors: [
      [
        [42.3192, -71.0822],
        [42.309, -71.0829],
        [42.2982, -71.0872],
        [42.2855, -71.0908],
        [42.2688, -71.0934],
      ],
    ],
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
    corridors: [
      [
        [42.3458, -71.0942],
        [42.3453, -71.0982],
        [42.3445, -71.1023],
        [42.3438, -71.1057],
      ],
    ],
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
    corridors: [
      [
        [42.3047, -71.101],
        [42.3069, -71.091],
        [42.3094, -71.079],
        [42.3095, -71.066],
        [42.3135, -71.057],
        [42.3202, -71.052],
      ],
    ],
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
    corridors: [
      [
        [42.359, -71.0588],
        [42.3567, -71.0599],
        [42.3536, -71.0618],
        [42.3515, -71.0628],
      ],
    ],
    areas: [
      [
        [42.3592, -71.0612],
        [42.3584, -71.0577],
        [42.355, -71.059],
        [42.3513, -71.0612],
        [42.3523, -71.0645],
        [42.356, -71.064],
        [42.3592, -71.0612],
      ],
    ],
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
    corridors: [
      [
        [42.3192, -71.0988],
        [42.3158, -71.101],
        [42.312, -71.1035],
      ],
    ],
    areas: [
      [
        [42.3185, -71.1001],
        [42.3165, -71.0978],
        [42.3122, -71.101],
        [42.3115, -71.1045],
        [42.315, -71.105],
        [42.3185, -71.1001],
      ],
    ],
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
    corridors: [
      [
        [42.3007, -71.1133],
        [42.291, -71.1165],
        [42.281, -71.1195],
        [42.269, -71.123],
        [42.2555, -71.126],
        [42.2378, -71.1308],
      ],
    ],
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
    corridors: [
      [
        [42.3222, -71.1065],
        [42.3162, -71.1105],
        [42.3096, -71.114],
        [42.3027, -71.1152],
        [42.2945, -71.1156],
      ],
    ],
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
    corridors: [
      [
        [42.336, -71.1035],
        [42.332, -71.102],
        [42.3275, -71.1007],
      ],
      [
        [42.3333, -71.106],
        [42.3316, -71.1016],
        [42.3308, -71.0986],
      ],
    ],
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
    corridors: [
      [
        [42.3653, -71.061],
        [42.3606, -71.0572],
        [42.355, -71.055],
        [42.3518, -71.049],
        [42.3482, -71.043],
        [42.348, -71.037],
      ],
    ],
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
    corridors: [
      [
        [42.3339, -71.078],
        [42.3305, -71.0824],
        [42.3256, -71.0868],
        [42.3222, -71.0895],
      ],
      [
        [42.329, -71.095],
        [42.3243, -71.0902],
        [42.3195, -71.0845],
      ],
      [
        [42.3205, -71.081],
        [42.3138, -71.0825],
        [42.3058, -71.0852],
      ],
    ],
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
    corridors: [
      [
        [42.3715, -71.043],
        [42.3692, -71.0395],
        [42.3675, -71.0367],
      ],
      [
        [42.3692, -71.0435],
        [42.3692, -71.0357],
      ],
    ],
    areas: [
      [
        [42.3718, -71.0437],
        [42.3722, -71.0382],
        [42.3698, -71.0353],
        [42.367, -71.0374],
        [42.3673, -71.0425],
        [42.3718, -71.0437],
      ],
    ],
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
    corridors: [
      [
        [42.2905, -71.1284],
        [42.2872, -71.13],
        [42.284, -71.1316],
      ],
      [
        [42.2883, -71.133],
        [42.2872, -71.13],
        [42.2865, -71.1268],
      ],
    ],
    areas: [
      [
        [42.2907, -71.131],
        [42.2894, -71.1269],
        [42.2857, -71.1262],
        [42.2838, -71.1307],
        [42.2862, -71.1335],
        [42.2907, -71.131],
      ],
    ],
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
    corridors: [
      [
        [42.338, -71.081],
        [42.335, -71.0785],
        [42.3318, -71.076],
      ],
      [
        [42.3365, -71.074],
        [42.3335, -71.078],
        [42.3305, -71.081],
      ],
    ],
    areas: [
      [
        [42.3385, -71.0822],
        [42.3385, -71.0732],
        [42.3333, -71.0717],
        [42.3293, -71.0764],
        [42.3302, -71.0826],
        [42.3385, -71.0822],
      ],
    ],
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
    corridors: [
      [
        [42.3564, -71.0714],
        [42.3561, -71.0664],
        [42.3527, -71.066],
        [42.3525, -71.071],
        [42.3564, -71.0714],
      ],
    ],
    areas: [
      [
        [42.3571, -71.073],
        [42.3575, -71.066],
        [42.3518, -71.0654],
        [42.3515, -71.0723],
        [42.3571, -71.073],
      ],
    ],
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
    corridors: [
      [
        [42.3623, -71.1475],
        [42.3621, -71.139],
        [42.3624, -71.1315],
        [42.3625, -71.124],
      ],
    ],
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
      "Publish every fatal-crash street review, the fixes it triggers, and the delivery date.",
  },
  {
    id: "blocked-lanes",
    title: "Enforcement of blocked bike lanes and crosswalks",
    scope: "City",
    status: "Needs proof",
    description:
      "Show that stepped-up enforcement is real, sustained, and applied to every vehicle.",
  },
  {
    id: "bus-lane-cameras",
    title: "Camera ticketing in bus lanes and bus stops",
    scope: "City + MBTA",
    status: "Authorized",
    description:
      "Use the camera authority Massachusetts has already granted on the highest-delay corridors.",
    source:
      "https://malegislature.gov/Laws/SessionLaws/Acts/2024/Chapter363",
  },
  {
    id: "speed-cameras",
    title: "Automated speed-safety cameras",
    scope: "State",
    status: "State action",
    description:
      "Win state authority for a privacy-protective program on Boston's most dangerous streets.",
    source: "https://malegislature.gov/Bills/194/S2344",
  },
  {
    id: "truck-side-guards",
    title: "Truck side guards and direct-vision standards",
    scope: "City",
    status: "Existing — verify",
    description:
      "Audit Boston's existing side-guard rule and expand safer-vehicle standards where possible.",
    source:
      "https://www.boston.gov/departments/innovation-and-technology/2013-truck-side-guard-pilot",
  },
  {
    id: "vision-zero",
    title: "A credible path to Vision Zero by 2030",
    scope: "City",
    status: "Needs proof",
    description:
      "Turn Boston's 2030 goal into yearly build targets the public can check.",
    source: "https://www.boston.gov/departments/transportation/vision-zero",
  },
  {
    id: "project-updates",
    title: "Timely, public project updates",
    scope: "City",
    status: "Needs proof",
    description:
      "Give every project one public record instead of forcing residents to chase answers.",
  },
  {
    id: "streets-cabinet-capacity",
    title: "Streets Cabinet authority and delivery capacity",
    scope: "City",
    status: "Promised",
    description:
      "Name the two senior staff assigned to delivery and make their authority clear.",
  },
  {
    id: "quick-builds",
    title: "Immediate fixes on the high-crash network",
    scope: "City",
    status: "Needs proof",
    description:
      "Reduce risk now while permanent projects move through design and construction.",
  },
  {
    id: "funding-delivery",
    title: "Protect awarded funds and restore capital delivery",
    scope: "City",
    status: "Needs proof",
    description:
      "Stop preventable delays from forfeiting outside funds and years of completed work.",
  },
];
