import { Metadata } from "next";
import Link from "next/link";

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
    <div className="min-h-screen bg-[#f0ece2]">
      {/* Hero */}
      <section className="bg-[#0a0a0a] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-[#ff3b3b] text-white rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <span className="material-symbols-outlined text-sm mr-2">campaign</span>
              Take Action
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight mb-6">
              Take Action
              <br />
              <span className="text-[#13ec25]">Now</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl">
              The city will only act when they hear from you. Every email, every
              phone call, every appearance at a public meeting moves us closer to
              safer streets. Here&apos;s how you can make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-[#f0ece2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-[#0a0a0a] mb-8">
            Quick Actions <span className="text-[#0a0a0a]/50">(5 minutes or less)</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#0a0a0a] text-white p-8 shadow-[6px_6px_0px_0px_#13ec25]">
              <div className="w-14 h-14 bg-[#ff3b3b] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-white text-2xl">mail</span>
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-3">
                Email the Mayor
              </h3>
              <p className="text-white/60 text-sm mb-6">
                Let Mayor Wu know you expect action on street safety.
              </p>
              <a
                href="mailto:mayor@boston.gov?subject=Demand Action on Street Safety&body=Dear Mayor Wu,%0D%0A%0D%0AI am a Boston resident writing to urge immediate action on street safety. The delays on projects like Hyde Park Avenue are unacceptable. Someone was killed there, and the city's response has been more studies and more delays.%0D%0A%0D%0AI demand that the city:%0D%0A- Implement safety improvements immediately, not in 2026%0D%0A- Prioritize pedestrian and cyclist safety over traffic flow%0D%0A- Follow through on Vision Zero commitments%0D%0A%0D%0ASincerely,%0D%0A[Your Name]%0D%0A[Your Neighborhood]"
                className="inline-flex items-center text-[#13ec25] font-bold uppercase tracking-wider hover:underline"
              >
                Send Email
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </a>
            </div>

            <div className="bg-[#0a0a0a] text-white p-8 shadow-[6px_6px_0px_0px_#13ec25]">
              <div className="w-14 h-14 bg-[#13ec25] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#0a0a0a] text-2xl">share</span>
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-3">
                Share on Social Media
              </h3>
              <p className="text-white/60 text-sm mb-6">
                Spread the word about our campaign to your network.
              </p>
              <a
                href="https://twitter.com/intent/tweet?text=Boston%20must%20deliver%20on%20its%20promises%20for%20safer%20streets.%20Join%20the%20%40BostonBetterSt%20coalition%20and%20demand%20action.%20%23SaferBostonStreets&url=https://bostonbetterstreets.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-[#0a0a0a] font-bold uppercase tracking-wider rounded-full text-sm hover:bg-[#13ec25] transition-colors"
              >
                Share on X
              </a>
            </div>

            <div className="bg-[#0a0a0a] text-white p-8 shadow-[6px_6px_0px_0px_#13ec25]">
              <div className="w-14 h-14 bg-[#13ec25] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#0a0a0a] text-2xl">call</span>
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-3">
                Call 311
              </h3>
              <p className="text-white/60 text-sm mb-6">
                Report specific issues like broken signals, potholes, and blocked crosswalks.
              </p>
              <a
                href="tel:311"
                className="inline-flex items-center text-[#13ec25] font-bold uppercase tracking-wider hover:underline"
              >
                Call Now
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Your Councilor */}
      <section className="py-16 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-3xl text-[#13ec25]">account_balance</span>
            <h2 className="text-2xl font-bold uppercase tracking-tight">
              Contact Your City Councilor
            </h2>
          </div>
          <p className="text-white/70 mb-8 max-w-3xl">
            Your city councilor represents you on transportation issues. Let them
            know you expect them to fight for safer streets. Find your district
            at{" "}
            <a
              href="https://www.boston.gov/city-council"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#13ec25] underline"
            >
              boston.gov/city-council
            </a>
            .
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {councilors.map((councilor, index) => (
              <div
                key={index}
                className="flex items-center justify-between border border-white/10 p-4 hover:border-[#13ec25] transition-colors"
              >
                <span className="font-medium">{councilor.name}</span>
                <a
                  href={`mailto:${councilor.contact}?subject=Support Street Safety Improvements&body=Dear Councilor,%0D%0A%0D%0AI am a constituent writing to urge your support for street safety improvements in our district and across Boston.%0D%0A%0D%0AThe delays on projects like Hyde Park Avenue are unacceptable. I urge you to:%0D%0A- Press the administration for immediate action%0D%0A- Support funding for safety infrastructure%0D%0A- Attend community meetings on transportation%0D%0A%0D%0AThank you for your service.%0D%0A%0D%0ASincerely,%0D%0A[Your Name]`}
                  className="text-[#13ec25] font-bold uppercase tracking-wider text-sm hover:underline"
                >
                  Send Email
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Messages */}
      <section className="py-16 bg-[#f0ece2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-3xl text-[#0a0a0a]">edit_note</span>
            <h2 className="text-2xl font-bold uppercase tracking-tight text-[#0a0a0a]">
              Sample Messages
            </h2>
          </div>
          <p className="text-[#0a0a0a]/70 mb-8">
            Feel free to use or adapt these messages when contacting officials.
            Personal stories are especially powerful.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0a0a0a] text-white p-8">
              <h3 className="font-bold uppercase tracking-wider mb-6 flex items-center">
                <span className="material-symbols-outlined text-[#13ec25] mr-3">person</span>
                To Mayor Wu&apos;s Office
              </h3>
              <div className="bg-white/5 border border-white/10 p-6 text-sm text-white/70 italic leading-relaxed">
                Dear Mayor Wu,
                <br /><br />
                I am a Boston resident writing about the unacceptable delays in
                street safety improvements, particularly on Hyde Park Avenue.
                <br /><br />
                Glenn Inghram was killed in a crosswalk at Forest Hills. Over 700
                residents have signed a petition demanding action. Yet the city
                has chosen to delay safety designs until 2026.
                <br /><br />
                This is not acceptable. I urge you to:
                <br />
                - Implement Alternative 2 immediately
                <br />
                - Direct BTD to prioritize safety over traffic flow
                <br />
                - Publicly commit to a timeline for improvements
                <br /><br />
                How many more tragedies must occur before the city acts?
                <br /><br />
                Sincerely,
                <br />
                [Your Name, Your Neighborhood]
              </div>
            </div>

            <div className="bg-[#0a0a0a] text-white p-8">
              <h3 className="font-bold uppercase tracking-wider mb-6 flex items-center">
                <span className="material-symbols-outlined text-[#13ec25] mr-3">groups</span>
                To Your City Councilor
              </h3>
              <div className="bg-white/5 border border-white/10 p-6 text-sm text-white/70 italic leading-relaxed">
                Dear Councilor [Name],
                <br /><br />
                As your constituent, I am writing to urge your active support for
                street safety improvements in our district.
                <br /><br />
                [INSERT PERSONAL EXPERIENCE: Describe a dangerous location you
                navigate, a near-miss you witnessed, or how street conditions
                affect your daily life.]
                <br /><br />
                The administration&apos;s slow pace on projects like Hyde Park
                Avenue is unacceptable. I urge you to:
                <br />
                - Press for immediate implementation of safety designs
                <br />
                - Support budget allocations for street safety
                <br />
                - Hold public hearings to increase accountability
                <br /><br />
                Will you champion this issue?
                <br /><br />
                Sincerely,
                <br />
                [Your Name, Your Address]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold uppercase tracking-tight mb-8">
            Other Ways to Help
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "event", title: "Attend Hearings", desc: "Show up at city council and BTD meetings. Your presence matters." },
              { icon: "groups", title: "Talk to Neighbors", desc: "Spread the word in your community. Many don't know about these issues." },
              { icon: "photo_camera", title: "Document Issues", desc: "Take photos and videos of dangerous conditions. Evidence is powerful." },
              { icon: "volunteer_activism", title: "Volunteer", desc: "Join our team and help with outreach, research, and organizing." },
            ].map((item, index) => (
              <div key={index} className="border border-white/10 p-6 hover:border-[#13ec25] transition-colors">
                <span className="material-symbols-outlined text-[#13ec25] text-3xl mb-4 block">{item.icon}</span>
                <h3 className="font-bold uppercase tracking-wider mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-[#f0ece2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-[#0a0a0a]">Upcoming Events</h2>
            <Link
              href="/updates"
              className="text-[#0a0a0a] font-bold uppercase tracking-wider hover:text-[#13ec25] transition-colors flex items-center"
            >
              View all updates
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </Link>
          </div>
          <div className="bg-[#0a0a0a] text-white p-12 text-center">
            <span className="material-symbols-outlined text-5xl text-white/30 mb-4 block">event</span>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-3">
              No Upcoming Events Scheduled
            </h3>
            <p className="text-white/60 mb-6">
              Check back soon for community meetings, safety walks, and other events.
            </p>
            <p className="text-sm text-white/40">
              Sign up for our newsletter to be notified of new events.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#13ec25]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-[#0a0a0a] mb-6">
            Every Voice
            <br />
            Matters
          </h2>
          <p className="text-xl text-[#0a0a0a]/70 mb-10 max-w-2xl mx-auto">
            Politicians pay attention when they hear from constituents. Your
            single email, your one phone call, your presence at a hearing—it all
            adds up. Don&apos;t underestimate your power.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:mayor@boston.gov?subject=Demand Action on Street Safety"
              className="inline-flex items-center justify-center px-10 py-5 bg-[#0a0a0a] text-white font-bold uppercase tracking-wider rounded-full text-lg transition-all shadow-[6px_6px_0px_0px_#fff] hover:shadow-[8px_8px_0px_0px_#fff] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              <span className="material-symbols-outlined mr-2">mail</span>
              Email the Mayor Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
