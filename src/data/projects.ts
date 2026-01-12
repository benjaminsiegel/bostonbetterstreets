export type ProjectStatus = "stalled" | "in-progress" | "promised" | "completed" | "cancelled";

export interface Project {
  id: string;
  name: string;
  slug: string;
  location: string;
  neighborhood: string;
  status: ProjectStatus;
  description: string;
  shortDescription: string;
  startYear: number;
  expectedCompletion?: string;
  actualCompletion?: string;
  coordinates: [number, number]; // [lat, lng]
  timeline: TimelineEvent[];
  keyIssues: string[];
  communityImpact: string;
  featured?: boolean;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  type: "started" | "paused" | "resumed" | "milestone" | "setback" | "tragedy" | "stalled";
}

export const projects: Project[] = [
  {
    id: "hyde-park-avenue",
    name: "Hyde Park Avenue Complete Streets",
    slug: "hyde-park-avenue",
    location: "Hyde Park Avenue (Readville to Forest Hills)",
    neighborhood: "Hyde Park / Jamaica Plain",
    status: "stalled",
    description: `Hyde Park Avenue is a critical five-mile artery connecting Readville to Forest Hills. Planning for a "complete streets" redesign began in 2019 with the goal of making the corridor safer for all users—pedestrians, cyclists, and transit riders.

The project was shelved during the COVID-19 pandemic and only formally restarted in 2023. The urgency shifted from theoretical to tragic in October 2024, when Forest Hills resident Glenn Inghram was killed by an MBTA bus in a crosswalk outside Forest Hills Station.

In response, over 700 residents signed a petition demanding immediate safety improvements, leading the Boston Transportation Department to present two "Early Action" alternatives in May 2025 for a segment scheduled for repaving.

Despite overwhelming local support for Alternative 2 (a "road diet" reducing the street to three lanes with painted bike lanes), the Wu administration announced in July 2025 that it would proceed with repaving only, implementing neither alternative and delaying safety designs until at least 2026.`,
    shortDescription: "A six-year battle for safer streets on one of Boston's most dangerous corridors.",
    startYear: 2019,
    expectedCompletion: "Originally 2022, now 2026+",
    coordinates: [42.2987, -71.1138],
    featured: true,
    timeline: [
      {
        date: "2019",
        title: "Project Initiated",
        description: "Complete streets planning begins for Hyde Park Avenue corridor.",
        type: "started"
      },
      {
        date: "March 2020",
        title: "Project Shelved",
        description: "Planning paused indefinitely due to COVID-19 pandemic.",
        type: "paused"
      },
      {
        date: "2023",
        title: "Project Restarts",
        description: "Project formally restarts after three-year hiatus.",
        type: "resumed"
      },
      {
        date: "October 2024",
        title: "Tragedy Strikes",
        description: "Glenn Inghram killed by MBTA bus in crosswalk outside Forest Hills Station.",
        type: "tragedy"
      },
      {
        date: "November 2024",
        title: "Community Response",
        description: "Over 700 residents sign petition demanding immediate safety improvements.",
        type: "milestone"
      },
      {
        date: "April 2025",
        title: "Safety Walk",
        description: "Residents organize Safety Walk to document hazards along the corridor.",
        type: "milestone"
      },
      {
        date: "May 2025",
        title: "Alternatives Presented",
        description: "BTD presents two 'Early Action' alternatives for segment scheduled for repaving.",
        type: "milestone"
      },
      {
        date: "July 2025",
        title: "Administration Delays",
        description: "Wu administration announces repaving only—neither safety alternative implemented.",
        type: "stalled"
      },
      {
        date: "October 2025",
        title: "City Council Hearing",
        description: "Massive hearing where parents testify about harrowing daily commutes.",
        type: "milestone"
      }
    ],
    keyIssues: [
      "No protected bike lanes despite high cyclist traffic",
      "Dangerous crosswalks with inadequate signal timing",
      "High speeds due to wide lanes and lack of traffic calming",
      "Poor transit access for Route 32 bus riders",
      "Four times higher pedestrian crash rate in communities of color along corridor"
    ],
    communityImpact: "Route 32 bus riders—predominantly from Black and brown communities—face dangerous conditions accessing stops. Families report 'harrowing' school commutes."
  },
  {
    id: "mass-ave-cambridge-line",
    name: "Mass Ave Protected Bike Lanes",
    slug: "mass-ave-cambridge-line",
    location: "Massachusetts Avenue (Boston/Cambridge line)",
    neighborhood: "Back Bay / South End",
    status: "stalled",
    description: "Protected bike lane project that has been in planning for years with minimal progress.",
    shortDescription: "Long-delayed protected bike lane project on a critical corridor.",
    startYear: 2020,
    expectedCompletion: "TBD",
    coordinates: [42.3505, -71.0897],
    timeline: [
      {
        date: "2020",
        title: "Project Announced",
        description: "City announces plans for protected bike infrastructure.",
        type: "started"
      },
      {
        date: "2023",
        title: "Design Phase",
        description: "Design work begins but progresses slowly.",
        type: "resumed"
      },
      {
        date: "2025",
        title: "Still in Planning",
        description: "Project remains in design phase with no construction timeline.",
        type: "stalled"
      }
    ],
    keyIssues: [
      "High-traffic corridor with no bike protection",
      "Multiple cyclist injuries reported",
      "Conflicts between parked cars and bike lanes"
    ],
    communityImpact: "Cyclists forced to ride in mixed traffic on one of Boston's busiest streets."
  },
  {
    id: "blue-hill-avenue",
    name: "Blue Hill Avenue Transit Priority",
    slug: "blue-hill-avenue",
    location: "Blue Hill Avenue (Mattapan to Roxbury)",
    neighborhood: "Mattapan / Dorchester / Roxbury",
    status: "in-progress",
    description: "Bus rapid transit improvements along Blue Hill Avenue to improve service for the 28 bus—one of the MBTA's busiest routes.",
    shortDescription: "Bus rapid transit improvements for the heavily-used Route 28 corridor.",
    startYear: 2021,
    expectedCompletion: "2026",
    coordinates: [42.2871, -71.0858],
    timeline: [
      {
        date: "2021",
        title: "Planning Begins",
        description: "City and MBTA begin planning for transit priority improvements.",
        type: "started"
      },
      {
        date: "2024",
        title: "Design Approved",
        description: "Design phase completed and approved.",
        type: "milestone"
      },
      {
        date: "2025",
        title: "Partial Implementation",
        description: "Some transit signal priority installed, but full project delayed.",
        type: "resumed"
      }
    ],
    keyIssues: [
      "Route 28 is one of slowest, most crowded bus routes",
      "Pedestrian safety concerns at multiple crossings",
      "Community concerns about displacement and parking"
    ],
    communityImpact: "Tens of thousands of daily transit riders depend on improvements to the 28 bus for reliable commutes."
  },
  {
    id: "melnea-cass-boulevard",
    name: "Melnea Cass Boulevard Redesign",
    slug: "melnea-cass-boulevard",
    location: "Melnea Cass Boulevard",
    neighborhood: "Roxbury / South End",
    status: "stalled",
    description: "Comprehensive redesign of this major boulevard to improve safety and accessibility.",
    shortDescription: "Stalled redesign of a dangerous boulevard in Roxbury.",
    startYear: 2018,
    expectedCompletion: "Originally 2023, now TBD",
    coordinates: [42.3332, -71.0742],
    timeline: [
      {
        date: "2018",
        title: "Project Initiated",
        description: "City begins planning for boulevard redesign.",
        type: "started"
      },
      {
        date: "2020",
        title: "Pandemic Pause",
        description: "Project delayed due to COVID-19.",
        type: "paused"
      },
      {
        date: "2024",
        title: "Minimal Progress",
        description: "Project remains largely on paper with little construction.",
        type: "stalled"
      }
    ],
    keyIssues: [
      "Wide lanes encourage speeding",
      "Poor pedestrian crossings",
      "No protected bike infrastructure"
    ],
    communityImpact: "Residents face dangerous conditions crossing to access transit and businesses."
  },
  {
    id: "centre-street-west-roxbury",
    name: "Centre Street Bike Lanes",
    slug: "centre-street-west-roxbury",
    location: "Centre Street, West Roxbury",
    neighborhood: "West Roxbury",
    status: "cancelled",
    description: "Proposed bike lanes that were cancelled after significant political opposition.",
    shortDescription: "Bike lane project cancelled after political backlash.",
    startYear: 2022,
    coordinates: [42.2798, -71.1577],
    timeline: [
      {
        date: "2022",
        title: "Project Proposed",
        description: "City proposes bike lanes as part of repaving project.",
        type: "started"
      },
      {
        date: "2023",
        title: "Political Opposition",
        description: "Vocal opposition from some residents and local politicians.",
        type: "setback"
      },
      {
        date: "2024",
        title: "Project Cancelled",
        description: "City backs down from bike lane implementation.",
        type: "stalled"
      }
    ],
    keyIssues: [
      "Political pressure overrode safety considerations",
      "Set precedent for opposition tactics",
      "Cyclists still have no safe route"
    ],
    communityImpact: "Cancellation emboldened opposition to safety projects citywide."
  },
  {
    id: "columbia-road",
    name: "Columbia Road Complete Streets",
    slug: "columbia-road",
    location: "Columbia Road (Uphams Corner to Franklin Park)",
    neighborhood: "Dorchester / Roxbury",
    status: "stalled",
    description: `Columbia Road is a wide, fast boulevard connecting Uphams Corner to Franklin Park through the heart of Dorchester. Despite being identified as a high-crash corridor years ago, meaningful safety improvements have been repeatedly delayed.

The street's design prioritizes vehicle throughput over the safety of the predominantly Black and brown residents who live along it. Wide lanes encourage speeding, crosswalks are poorly marked, and pedestrians must navigate multiple lanes of fast-moving traffic to access transit, schools, and businesses.

Community advocates have pushed for a complete redesign including protected bike lanes, improved crosswalks, and traffic calming measures. The city has conducted studies and held community meetings, but implementation remains perpetually "in planning."`,
    shortDescription: "A dangerous corridor through Dorchester where safety improvements remain stuck in planning.",
    startYear: 2020,
    expectedCompletion: "TBD",
    coordinates: [42.3156, -71.0674],
    timeline: [
      {
        date: "2020",
        title: "Safety Study Initiated",
        description: "City begins studying safety improvements for Columbia Road corridor.",
        type: "started"
      },
      {
        date: "2022",
        title: "Community Meetings",
        description: "Multiple community meetings held to gather input on redesign options.",
        type: "milestone"
      },
      {
        date: "2024",
        title: "Design Stalled",
        description: "Despite community input, project remains in planning with no construction timeline.",
        type: "stalled"
      }
    ],
    keyIssues: [
      "Wide lanes encourage dangerous speeding",
      "Inadequate crosswalks on a busy pedestrian corridor",
      "No protected bike infrastructure despite community demand",
      "Disproportionate crash rates affecting communities of color"
    ],
    communityImpact: "Residents in surrounding neighborhoods face daily danger crossing to access transit, schools, and Franklin Park."
  },
  {
    id: "street-calming-cameras",
    name: "Street Calming & Camera Enforcement",
    slug: "street-calming-cameras",
    location: "Citywide",
    neighborhood: "All Neighborhoods",
    status: "stalled",
    description: `Boston has long lagged peer cities in deploying proven traffic calming measures and automated enforcement technology. While cities like New York have installed hundreds of speed cameras and seen dramatic reductions in traffic deaths, Boston has moved at a glacial pace.

Massachusetts law now permits automated speed enforcement in school zones and work zones, but implementation has been minimal. The city has also been slow to deploy physical traffic calming measures like speed tables, raised crosswalks, and curb extensions—interventions that cost little and save lives.

The administration has cited various bureaucratic hurdles, but the real barrier appears to be political will. Every delay costs lives on Boston streets.`,
    shortDescription: "Citywide traffic calming and camera enforcement programs stuck in bureaucratic limbo.",
    startYear: 2022,
    expectedCompletion: "TBD",
    coordinates: [42.3601, -71.0589],
    timeline: [
      {
        date: "2022",
        title: "State Authorization",
        description: "Massachusetts authorizes automated speed enforcement in school and work zones.",
        type: "milestone"
      },
      {
        date: "2023",
        title: "Pilot Announced",
        description: "City announces plans for speed camera pilot program.",
        type: "started"
      },
      {
        date: "2024",
        title: "Minimal Deployment",
        description: "Only a handful of cameras deployed while other cities move ahead.",
        type: "setback"
      },
      {
        date: "2025",
        title: "Program Stalled",
        description: "Expansion of camera program and traffic calming remains limited.",
        type: "stalled"
      }
    ],
    keyIssues: [
      "Speed cameras proven to reduce crashes but barely deployed",
      "Physical traffic calming measures underutilized",
      "Bureaucratic delays while peer cities move forward",
      "Lack of political will to implement proven safety measures"
    ],
    communityImpact: "Every month of delay means more preventable crashes and deaths on Boston streets."
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(p => p.featured);
};

export const getProjectsByStatus = (status: ProjectStatus): Project[] => {
  return projects.filter(p => p.status === status);
};
