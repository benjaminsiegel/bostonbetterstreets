import Link from "next/link";
import {
  MapPin,
  AlertTriangle,
  Users,
  Clock,
  ArrowRight,
  Shield,
  Baby,
  Accessibility,
  Bike,
  Bus,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-red-600 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4 mr-2" />
              700+ residents demanding action
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Boston&apos;s Streets Are <span className="text-red-400">Broken Promises</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-4 leading-relaxed">
              The city promised safer streets. Instead, we got studies, delays, and tragedy.
            </p>

            <p className="text-lg text-blue-200 mb-8 max-w-2xl">
              We are a grassroots coalition tracking the projects that have stalled,
              the promises that were broken, and the lives that hang in the balance
              while Boston plays politics with pedestrian safety.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/take-action"
                className="inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
              >
                Take Action Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/30 transition-colors"
              >
                See Stalled Projects
              </Link>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L48 45.7C96 41 192 33 288 35.3C384 38 480 52 576 55C672 58 768 52 864 43.3C960 35 1056 23 1152 21.7C1248 20 1344 28 1392 32.3L1440 37V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-800">6+</div>
              <div className="text-sm text-gray-600 mt-1">Years of Delays</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600">700+</div>
              <div className="text-sm text-gray-600 mt-1">Petition Signatures</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600">12+</div>
              <div className="text-sm text-gray-600 mt-1">Stalled Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800">0</div>
              <div className="text-sm text-gray-600 mt-1">Promises Kept</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Streets for Everyone
            </h2>
            <p className="text-lg text-gray-600">
              Boston must be a city where people of all ages and abilities can walk,
              bike, and take transit safely—without fear of reckless driving enabled
              by a lack of enforcement and infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Baby className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">For Families</h3>
              <p className="text-sm text-gray-600">
                Parents shouldn&apos;t have to fear walking their children to school.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Accessibility className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">For All Abilities</h3>
              <p className="text-sm text-gray-600">
                Accessible infrastructure benefits everyone in our community.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Bike className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">For Cyclists</h3>
              <p className="text-sm text-gray-600">
                Protected bike lanes save lives. Paint is not protection.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Bus className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">For Transit Riders</h3>
              <p className="text-sm text-gray-600">
                Bus riders deserve safe access to stops without risking their lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project: Hyde Park Avenue */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">
                <Clock className="w-4 h-4 mr-2" />
                Featured Project
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Hyde Park Avenue: A Six-Year Battle
              </h2>
              <p className="text-gray-600 mb-4">
                Planning for a &quot;complete streets&quot; redesign began in <strong>2019</strong>.
                In October 2024, Forest Hills resident <strong>Glenn Inghram was killed</strong> by
                an MBTA bus in a crosswalk. Over 700 residents signed a petition demanding action.
              </p>
              <p className="text-gray-600 mb-4">
                The city&apos;s response? More delays. In July 2025, the Wu administration announced
                it would proceed with <strong>repaving only</strong>—implementing neither safety
                alternative and delaying designs until at least 2026.
              </p>

              <blockquote className="border-l-4 border-red-500 pl-4 my-6 italic text-gray-700">
                &quot;Hyde Park Avenue is not a road but a moat—a dangerous, high-speed barrier
                residents must swim across daily just to reach transit or their children&apos;s
                schools, while the city insists on studying the currents for another year.&quot;
              </blockquote>

              <Link
                href="/projects/hyde-park-avenue"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800"
              >
                Read the full story
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="font-bold text-gray-900 mb-6">Timeline of Inaction</h3>
              <div className="space-y-4">
                {[
                  { year: "2019", event: "Complete streets planning begins", status: "started" },
                  { year: "2020", event: "Project shelved due to COVID", status: "paused" },
                  { year: "2023", event: "Project formally restarts", status: "resumed" },
                  { year: "Oct 2024", event: "Glenn Inghram killed in crosswalk", status: "tragedy" },
                  { year: "May 2025", event: "City presents two alternatives", status: "progress" },
                  { year: "Jul 2025", event: "City chooses neither—repaving only", status: "stalled" },
                  { year: "2026+", event: "Safety designs delayed indefinitely", status: "unknown" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`w-3 h-3 rounded-full mt-1.5 mr-4 flex-shrink-0 ${
                      item.status === "tragedy" ? "bg-red-500" :
                      item.status === "stalled" ? "bg-amber-500" :
                      item.status === "unknown" ? "bg-gray-400" :
                      "bg-blue-500"
                    }`} />
                    <div>
                      <span className="font-semibold text-gray-900">{item.year}:</span>
                      <span className="text-gray-600 ml-2">{item.event}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Teaser */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Explore the Pain Point Map
              </h2>
              <p className="text-blue-100 mb-6">
                Our community-sourced map documents dangerous intersections, stalled
                projects, and broken infrastructure across Boston. See where your
                neighbors have reported issues and add your own experiences.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-red-400" />
                  <span>Report dangerous crossings and intersections</span>
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-amber-400" />
                  <span>Track stalled and promised projects</span>
                </li>
                <li className="flex items-center">
                  <Users className="w-5 h-5 mr-3 text-green-400" />
                  <span>See what your community has documented</span>
                </li>
              </ul>
              <Link
                href="/map"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Open the Map
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="bg-blue-800/50 rounded-2xl p-4 aspect-video flex items-center justify-center border border-blue-700">
              <div className="text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-blue-300" />
                <p className="text-blue-200">Interactive Map Preview</p>
                <p className="text-sm text-blue-300 mt-2">
                  Click to explore the full map
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Political Reality */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Why Progress Has Stalled
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p>
                The stagnation of street safety improvements is a microcosm of the
                political tensions defining the current administration:
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start">
                  <Shield className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-900">Election-Year Politics:</strong> Internal
                    guidance suggested minimizing &quot;oxygen&quot; for street design during the
                    2025 election cycle to avoid backlash seen in other neighborhoods.
                  </span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-6 h-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-900">Regional vs. Local:</strong> The
                    administration has prioritized regional traffic flow for suburban
                    commuters over safety for local residents.
                  </span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-900">Equity Paradox:</strong> Data shows
                    residents in Black and brown communities are four times more likely
                    to be struck by cars and most reliant on delayed bus routes.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Enough Delays. Enough Excuses.
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join 700+ Boston residents demanding the city deliver on its promises
            for safer streets. Your voice matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/take-action"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-red-50 transition-colors"
            >
              Take Action Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/map"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-500 text-white font-bold rounded-lg hover:bg-red-400 border border-white/30 transition-colors"
            >
              Report a Pain Point
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
