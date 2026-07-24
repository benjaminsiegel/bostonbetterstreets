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
    name: "Vision Zero Coalition",
    description:
      "Coalition of organizations pushing Boston to deliver on its Vision Zero commitment to eliminate traffic deaths.",
    url: "https://visionzeroboston.org",
    focus: ["Vision Zero", "Safety"],
  },
  {
    name: "StreetsBlog Mass",
    description:
      "Daily news source covering sustainable transportation and livable streets in Massachusetts.",
    url: "https://mass.streetsblog.org",
    focus: ["News", "Transportation"],
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

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[#f0ece2] text-[#0a0a0a]">
      <header className="border-b border-[#0a0a0a]/16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end lg:gap-16 lg:px-8">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.13em] text-[#a63d36]">
              Resources
            </p>
            <h1 className="text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-[4.5rem]">
              Tools for safer-streets advocacy.
            </h1>
          </div>
          <p className="border-l-2 border-[#2f6f4e] pl-6 text-lg leading-[1.65] text-[#0a0a0a]/68">
            Partner organizations and government contacts to support your advocacy for safer streets.
          </p>
        </div>
      </header>

      {/* Partner Organizations */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.13em] text-[#a63d36]">
            Community expertise
          </p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-[-0.03em]">
            Partner organizations
          </h2>
          <p className="mb-9 max-w-3xl leading-[1.7] text-[#0a0a0a]/65">
            We work alongside these organizations who share our commitment to
            safer, more accessible streets in Boston and beyond.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {partnerOrganizations.map((org) => (
              <a
                key={org.name}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[250px] flex-col rounded-md border border-[#0a0a0a]/15 bg-[#f8f5ed] p-6 transition-colors hover:border-[#2f6f4e]"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3 className="font-extrabold tracking-[-0.01em] transition-colors group-hover:text-[#2f6f4e]">
                    {org.name}
                  </h3>
                  <span className="material-symbols-outlined text-lg text-[#0a0a0a]/35 transition-colors group-hover:text-[#2f6f4e]">
                    open_in_new
                  </span>
                </div>
                <p className="mb-5 text-sm leading-[1.7] text-[#0a0a0a]/60">{org.description}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {org.focus.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-[#d8e2d3] px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.06em] text-[#0a0a0a]/68"
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
      <section className="bg-[#0a0a0a] py-14 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.13em] text-[#d8e2d3]/75">
            Public agencies
          </p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-[-0.03em]">
            Government resources
          </h2>
          <p className="mb-9 max-w-3xl leading-[1.7] text-white/65">
            Official channels for reporting issues, attending hearings, and
            engaging with the city on transportation matters.
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {governmentResources.map((resource) => (
              <a
                key={resource.name}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-md border border-white/14 p-6 transition-colors hover:border-[#8cb29a]"
              >
                <span className="material-symbols-outlined text-[#8cb29a]">location_city</span>
                <div>
                  <h3 className="font-extrabold transition-colors group-hover:text-[#d8e2d3]">
                    {resource.name}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.65] text-white/58">
                    {resource.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-[#f0ece2] py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 rounded-md border border-[#0a0a0a]/18 bg-[#f8f5ed] p-6">
            <span className="material-symbols-outlined text-[#2f6f4e]">gavel</span>
            <div>
              <h3 className="mb-2 font-extrabold">Disclaimer</h3>
              <p className="text-sm leading-[1.65] text-[#0a0a0a]/62">
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
