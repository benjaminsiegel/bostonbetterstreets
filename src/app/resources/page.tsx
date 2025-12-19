import { Metadata } from "next";
import {
  ExternalLink,
  Users,
  Newspaper,
  Building,
  BookOpen,
  Scale,
  MapPin,
} from "lucide-react";

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
          <p className="text-xl text-green-100 max-w-3xl">
            Partner organizations, government contacts, and educational materials
            to support your advocacy for safer streets.
          </p>
        </div>
      </section>

      {/* Partner Organizations */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              Partner Organizations
            </h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-3xl">
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
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {org.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                </div>
                <p className="text-gray-600 text-sm mb-4">{org.description}</p>
                <div className="flex flex-wrap gap-2">
                  {org.focus.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
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
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Building className="w-8 h-8 text-amber-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              Government Resources
            </h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-3xl">
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
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                    {resource.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {resource.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Media */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Newspaper className="w-8 h-8 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">Media & News</h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-3xl">
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
                className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow group"
              >
                <Newspaper className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {resource.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {resource.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Resources */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              Educational Resources
            </h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-3xl">
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
                className="flex items-start gap-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
              >
                <BookOpen className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                    {resource.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {resource.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-12 bg-gray-100 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <Scale className="w-6 h-6 text-gray-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Disclaimer</h3>
              <p className="text-sm text-gray-600">
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
