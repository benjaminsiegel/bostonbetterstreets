import { Metadata } from "next";
import Link from "next/link";
import {
  Megaphone,
  Mail,
  Users,
  MapPin,
  Share2,
  Calendar,
  ClipboardList,
  ArrowRight,
  Phone,
  Building,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Take Action | Boston Better Streets Coalition",
  description:
    "Join the fight for safer streets in Boston. Contact officials, report issues, attend events, and make your voice heard.",
};

const councilors = [
  { name: "At-Large Councilors", contact: "citycouncil@boston.gov" },
  { name: "District 1 (East Boston, Charlestown)", contact: "district1@boston.gov" },
  { name: "District 2 (South Boston, Chinatown)", contact: "district2@boston.gov" },
  { name: "District 3 (Dorchester)", contact: "district3@boston.gov" },
  { name: "District 4 (Dorchester, Mattapan)", contact: "district4@boston.gov" },
  { name: "District 5 (Hyde Park, Mattapan, Roslindale)", contact: "district5@boston.gov" },
  { name: "District 6 (Jamaica Plain, West Roxbury)", contact: "district6@boston.gov" },
  { name: "District 7 (Roxbury)", contact: "district7@boston.gov" },
  { name: "District 8 (Back Bay, Fenway, Mission Hill)", contact: "district8@boston.gov" },
  { name: "District 9 (Allston, Brighton)", contact: "district9@boston.gov" },
];

export default function TakeActionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-700 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Megaphone className="w-16 h-16 mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Take Action Now
            </h1>
            <p className="text-xl text-red-100 mb-8">
              The city will only act when they hear from you. Every email, every
              phone call, every appearance at a public meeting moves us closer to
              safer streets. Here&apos;s how you can make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Quick Actions (5 minutes or less)
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Email the Mayor
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Let Mayor Wu know you expect action on street safety.
              </p>
              <a
                href="mailto:mayor@boston.gov?subject=Demand Action on Street Safety&body=Dear Mayor Wu,%0D%0A%0D%0AI am a Boston resident writing to urge immediate action on street safety. The delays on projects like Hyde Park Avenue are unacceptable. Someone was killed there, and the city's response has been more studies and more delays.%0D%0A%0D%0AI demand that the city:%0D%0A- Implement safety improvements immediately, not in 2026%0D%0A- Prioritize pedestrian and cyclist safety over traffic flow%0D%0A- Follow through on Vision Zero commitments%0D%0A%0D%0ASincerely,%0D%0A[Your Name]%0D%0A[Your Neighborhood]"
                className="inline-flex items-center text-red-600 font-semibold hover:underline"
              >
                Send Email
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Report a Pain Point
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Document dangerous locations on our community map.
              </p>
              <Link
                href="/map"
                className="inline-flex items-center text-blue-600 font-semibold hover:underline"
              >
                Open Map
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Share2 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Share on Social Media
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Spread the word about our campaign to your network.
              </p>
              <div className="flex gap-2">
                <a
                  href="https://twitter.com/intent/tweet?text=Boston%20must%20deliver%20on%20its%20promises%20for%20safer%20streets.%20Join%20the%20%40BostonBetterSt%20coalition%20and%20demand%20action.%20%23SaferBostonStreets&url=https://bostonbetterstreets.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700"
                >
                  Share on X
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Your Councilor */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Building className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              Contact Your City Councilor
            </h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Your city councilor represents you on transportation issues. Let them
            know you expect them to fight for safer streets. Find your district
            at{" "}
            <a
              href="https://www.boston.gov/city-council"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              boston.gov/city-council
            </a>
            .
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {councilors.map((councilor, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white rounded-lg border border-gray-200 p-4"
              >
                <span className="font-medium text-gray-900">{councilor.name}</span>
                <a
                  href={`mailto:${councilor.contact}?subject=Support Street Safety Improvements&body=Dear Councilor,%0D%0A%0D%0AI am a constituent writing to urge your support for street safety improvements in our district and across Boston.%0D%0A%0D%0AThe delays on projects like Hyde Park Avenue are unacceptable. I urge you to:%0D%0A- Press the administration for immediate action%0D%0A- Support funding for safety infrastructure%0D%0A- Attend community meetings on transportation%0D%0A%0D%0AThank you for your service.%0D%0A%0D%0ASincerely,%0D%0A[Your Name]`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Send Email
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Messages */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <ClipboardList className="w-8 h-8 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              Sample Messages
            </h2>
          </div>
          <p className="text-gray-600 mb-8">
            Feel free to use or adapt these messages when contacting officials.
            Personal stories are especially powerful.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">
                To Mayor Wu&apos;s Office
              </h3>
              <div className="bg-white rounded border border-gray-200 p-4 text-sm text-gray-700 italic">
                Dear Mayor Wu,
                <br />
                <br />
                I am a Boston resident writing about the unacceptable delays in
                street safety improvements, particularly on Hyde Park Avenue.
                <br />
                <br />
                Glenn Inghram was killed in a crosswalk at Forest Hills. Over 700
                residents have signed a petition demanding action. Yet the city
                has chosen to delay safety designs until 2026.
                <br />
                <br />
                This is not acceptable. I urge you to:
                <br />
                - Implement Alternative 2 immediately
                <br />
                - Direct BTD to prioritize safety over traffic flow
                <br />
                - Publicly commit to a timeline for improvements
                <br />
                <br />
                How many more tragedies must occur before the city acts?
                <br />
                <br />
                Sincerely,
                <br />
                [Your Name, Your Neighborhood]
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">
                To Your City Councilor
              </h3>
              <div className="bg-white rounded border border-gray-200 p-4 text-sm text-gray-700 italic">
                Dear Councilor [Name],
                <br />
                <br />
                As your constituent, I am writing to urge your active support for
                street safety improvements in our district.
                <br />
                <br />
                [INSERT PERSONAL EXPERIENCE: Describe a dangerous location you
                navigate, a near-miss you witnessed, or how street conditions
                affect your daily life.]
                <br />
                <br />
                The administration&apos;s slow pace on projects like Hyde Park
                Avenue is unacceptable. I urge you to:
                <br />
                - Press for immediate implementation of safety designs
                <br />
                - Support budget allocations for street safety
                <br />
                - Hold public hearings to increase accountability
                <br />
                <br />
                Will you champion this issue?
                <br />
                <br />
                Sincerely,
                <br />
                [Your Name, Your Address]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Other Ways to Help
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <Calendar className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Attend Hearings</h3>
              <p className="text-gray-600 text-sm">
                Show up at city council and BTD meetings. Your presence matters.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <Users className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">
                Talk to Neighbors
              </h3>
              <p className="text-gray-600 text-sm">
                Spread the word in your community. Many don&apos;t know about these
                issues.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <Phone className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Call 311</h3>
              <p className="text-gray-600 text-sm">
                Report specific issues like broken signals, potholes, and blocked
                crosswalks.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <ClipboardList className="w-8 h-8 text-amber-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Document Issues</h3>
              <p className="text-gray-600 text-sm">
                Take photos and videos of dangerous conditions. Evidence is
                powerful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
            <Link
              href="/updates"
              className="text-blue-600 font-medium hover:underline"
            >
              View all updates
            </Link>
          </div>
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-8 text-center">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No Upcoming Events Scheduled
            </h3>
            <p className="text-gray-600 mb-4">
              Check back soon for community meetings, safety walks, and other
              events.
            </p>
            <p className="text-sm text-gray-500">
              Sign up for our newsletter to be notified of new events.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Every Voice Matters
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Politicians pay attention when they hear from constituents. Your
            single email, your one phone call, your presence at a hearing—it all
            adds up. Don&apos;t underestimate your power.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:mayor@boston.gov?subject=Demand Action on Street Safety"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Email the Mayor Now
              <Mail className="w-5 h-5 ml-2" />
            </a>
            <Link
              href="/map"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-bold rounded-lg border border-blue-600 hover:bg-blue-600 transition-colors"
            >
              Report a Pain Point
              <MapPin className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
