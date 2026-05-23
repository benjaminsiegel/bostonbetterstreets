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
    <div className="min-h-screen bg-[#f0ece2]">
      {/* Header */}
      <section className="bg-[#0a0a0a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center px-4 py-2 bg-[#2f6f4e] text-white rounded-full text-xs font-bold mb-6">
            <span className="material-symbols-outlined text-sm mr-2">link</span>
            Resources
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tools &
            <br />
            <span className="text-[#2f6f4e]">Resources</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl">
            Partner organizations and government contacts to support your
            advocacy for safer streets.
          </p>
        </div>
      </section>

      {/* Partner Organizations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-3xl text-[#2f6f4e]">groups</span>
            <h2 className="text-2xl font-bold text-[#0a0a0a]">
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
                className="bg-[#0a0a0a] text-white p-6 transition-all hover:shadow-[6px_6px_0px_0px_#2f6f4e] group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold group-hover:text-[#2f6f4e] transition-colors">
                    {org.name}
                  </h3>
                  <span className="material-symbols-outlined text-white/50 group-hover:text-[#2f6f4e] transition-colors">
                    open_in_new
                  </span>
                </div>
                <p className="text-white/60 text-sm mb-4">{org.description}</p>
                <div className="flex flex-wrap gap-2">
                  {org.focus.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#2f6f4e] text-white text-xs font-bold rounded-full"
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
            <span className="material-symbols-outlined text-3xl text-[#2f6f4e]">account_balance</span>
            <h2 className="text-2xl font-bold">
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
                className="flex items-start gap-4 p-6 border border-white/10 hover:border-[#2f6f4e] transition-colors group"
              >
                <span className="material-symbols-outlined text-[#2f6f4e]">location_city</span>
                <div>
                  <h3 className="font-bold group-hover:text-[#2f6f4e] transition-colors">
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
              <h3 className="font-bold text-[#0a0a0a] mb-2">Disclaimer</h3>
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
