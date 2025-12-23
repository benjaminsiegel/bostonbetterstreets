import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Boston Better Streets Coalition",
  description:
    "Partner organizations, useful links, and resources for street safety advocacy in Boston.",
};

const partnerOrganizations = [
  {
    name: "Boston Cyclists Union",
    description:
      "Advocating for better bicycling in Greater Boston through community organizing, education, and policy advocacy.",
    url: "https://bostoncyclistsunion.org",
    focus: ["Cycling", "Advocacy"],
  },
  {
    name: "WalkBoston",
    description:
      "Massachusetts' pedestrian advocacy organization, working to make walking safer and easier across the Commonwealth.",
    url: "https://walkboston.org",
    focus: ["Pedestrian Safety", "Walkability"],
  },
  {
    name: "LivableStreets Alliance",
    description:
      "Creating people-centered communities by transforming streets, transit, and transportation policy in Greater Boston.",
    url: "https://livablestreets.info",
    focus: ["Transit", "Complete Streets"],
  },
  {
    name: "Transportation Alternatives Boston",
    description:
      "Local chapter working to reclaim city streets from cars through advocacy, education, and direct action.",
    url: "https://transalt.org",
    focus: ["Car-Free", "Advocacy"],
  },
  {
    name: "MASSPIRG",
    description:
      "Standing up to powerful interests on issues like transportation, environment, and consumer protection.",
    url: "https://masspirg.org",
    focus: ["Policy", "Consumer Advocacy"],
  },
  {
    name: "Vision Zero Coalition",
    description:
      "Coalition of organizations pushing Boston to deliver on its Vision Zero commitment to eliminate traffic deaths.",
    url: "https://visionzeroboston.org",
    focus: ["Vision Zero", "Safety"],
  },
];

const governmentResources = [
  {
    name: "Boston Transportation Department",
    description:
      "Official city department responsible for transportation planning and street design.",
    url: "https://www.boston.gov/departments/transportation",
  },
  {
    name: "Boston 311",
    description:
      "Report street issues, potholes, signal problems, and other infrastructure concerns.",
    url: "https://www.boston.gov/departments/311",
  },
  {
    name: "Boston City Council",
    description:
      "Find your councilor and attend public hearings on transportation issues.",
    url: "https://www.boston.gov/city-council",
  },
  {
    name: "MBTA",
    description:
      "Massachusetts Bay Transportation Authority - regional transit planning and service.",
    url: "https://www.mbta.com",
  },
  {
    name: "MassDOT",
    description:
      "Massachusetts Department of Transportation - state highway and infrastructure.",
    url: "https://www.mass.gov/orgs/massachusetts-department-of-transportation",
  },
];

const mediaResources = [
  {
    name: "StreetsBlog Mass",
    description:
      "Daily news source covering sustainable transportation and livable streets in Massachusetts.",
    url: "https://mass.streetsblog.org",
  },
  {
    name: "CommonWealth Magazine",
    description:
      "In-depth coverage of Massachusetts policy including transportation and urban planning.",
    url: "https://commonwealthmagazine.org",
  },
  {
    name: "Boston Globe Metro",
    description: "Local news coverage of Boston transportation and development.",
    url: "https://www.bostonglobe.com/metro",
  },
  {
    name: "WBUR",
    description: "NPR news station with extensive coverage of Boston transportation issues.",
    url: "https://www.wbur.org",
  },
];

const educationalResources = [
  {
    name: "NACTO Urban Street Design Guide",
    description:
      "National standards for designing safe, accessible streets in urban areas.",
    url: "https://nacto.org/publication/urban-street-design-guide/",
  },
  {
    name: "Strong Towns",
    description:
      "Movement advocating for financially resilient and sustainable communities.",
    url: "https://www.strongtowns.org",
  },
  {
    name: "Parking Reform Network",
    description:
      "Resources on how parking policy shapes our cities and streets.",
    url: "https://parkingreform.org",
  },
  {
    name: "America Walks",
    description: "National walking advocacy organization with resources and research.",
    url: "https://americawalks.org",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[#f0ece2]">
      {/* Header */}
      <section className="bg-[#0a0a0a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center px-4 py-2 bg-[#13ec25] text-[#0a0a0a] rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <span className="material-symbols-outlined text-sm mr-2">link</span>
            Resources
          </div>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
            Tools &
            <br />
            <span className="text-[#13ec25]">Resources</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl">
            Partner organizations, government contacts, and educational materials
            to support your advocacy for safer streets.
          </p>
        </div>
      </section>

      {/* Partner Organizations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-3xl text-[#13ec25]">groups</span>
            <h2 className="text-2xl font-bold uppercase tracking-tight text-[#0a0a0a]">
              Partner Organizations
            </h2>
          </div>
          <p className="text-[#0a0a0a]/70 mb-8 max-w-3xl">
            We work alongside these organizations who share our commitment to
            safer, more accessible streets in Boston and beyond.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerOrganizations.map((org, index) => (
              <a
                key={index}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0a0a0a] text-white p-6 transition-all hover:shadow-[6px_6px_0px_0px_#13ec25] group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold uppercase tracking-wider group-hover:text-[#13ec25] transition-colors">
                    {org.name}
                  </h3>
                  <span className="material-symbols-outlined text-white/50 group-hover:text-[#13ec25] transition-colors">
                    open_in_new
                  </span>
                </div>
                <p className="text-white/60 text-sm mb-4">{org.description}</p>
                <div className="flex flex-wrap gap-2">
                  {org.focus.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#13ec25] text-[#0a0a0a] text-xs font-bold uppercase tracking-wider rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Government Resources */}
      <section className="py-16 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-3xl text-[#13ec25]">account_balance</span>
            <h2 className="text-2xl font-bold uppercase tracking-tight">
              Government Resources
            </h2>
          </div>
          <p className="text-white/70 mb-8 max-w-3xl">
            Official channels for reporting issues, attending hearings, and
            engaging with the city on transportation matters.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {governmentResources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 border border-white/10 hover:border-[#13ec25] transition-colors group"
              >
                <span className="material-symbols-outlined text-[#13ec25]">location_city</span>
                <div>
                  <h3 className="font-bold uppercase tracking-wider group-hover:text-[#13ec25] transition-colors">
                    {resource.name}
                  </h3>
                  <p className="text-white/60 text-sm mt-2">
                    {resource.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Media */}
      <section className="py-16 bg-[#f0ece2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-3xl text-[#0a0a0a]">newspaper</span>
            <h2 className="text-2xl font-bold uppercase tracking-tight text-[#0a0a0a]">
              Media & News
            </h2>
          </div>
          <p className="text-[#0a0a0a]/70 mb-8 max-w-3xl">
            Stay informed about transportation issues in Boston and Massachusetts
            through these news sources.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {mediaResources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 bg-[#0a0a0a] text-white hover:shadow-[4px_4px_0px_0px_#13ec25] transition-all group"
              >
                <span className="material-symbols-outlined text-[#13ec25]">article</span>
                <div>
                  <h3 className="font-bold uppercase tracking-wider group-hover:text-[#13ec25] transition-colors">
                    {resource.name}
                  </h3>
                  <p className="text-white/60 text-sm mt-2">
                    {resource.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Resources */}
      <section className="py-16 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-3xl text-[#13ec25]">school</span>
            <h2 className="text-2xl font-bold uppercase tracking-tight">
              Educational Resources
            </h2>
          </div>
          <p className="text-white/70 mb-8 max-w-3xl">
            Learn more about street design, urban planning, and transportation
            policy from these trusted sources.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {educationalResources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 border border-white/10 hover:border-[#13ec25] transition-colors group"
              >
                <span className="material-symbols-outlined text-[#13ec25]">menu_book</span>
                <div>
                  <h3 className="font-bold uppercase tracking-wider group-hover:text-[#13ec25] transition-colors">
                    {resource.name}
                  </h3>
                  <p className="text-white/60 text-sm mt-2">
                    {resource.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-[#f0ece2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 p-6 border-2 border-[#0a0a0a]">
            <span className="material-symbols-outlined text-[#0a0a0a]">gavel</span>
            <div>
              <h3 className="font-bold uppercase tracking-wider text-[#0a0a0a] mb-2">Disclaimer</h3>
              <p className="text-sm text-[#0a0a0a]/70">
                The Boston Better Streets Coalition is an independent grassroots
                organization. Links to external websites are provided for
                informational purposes only and do not constitute endorsement.
                We are not affiliated with the City of Boston or any government
                agency unless explicitly stated.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
