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
    <div className="min-h-screen bg-[#f0ece2] text-[#0a0a0a]">
      <section className="border-b border-[#0a0a0a]/18">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 py-14 md:py-20">
          <div className="max-w-4xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#b7342c] mb-4">
              Take action
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-[-0.05em] leading-[0.96] mb-7">
              Help move safer streets forward.
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-[#0a0a0a]/70 max-w-3xl">
              The city will only act when they hear from you. Every email, every
              phone call, every appearance at a public meeting moves us closer to
              safer streets. Here&apos;s how you can make a difference.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#b7342c] mb-3">
            Five minutes or less
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.04em] mb-8">
            Quick actions
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#f8f5ed] border border-[#0a0a0a]/16 rounded-md p-7">
              <div className="w-12 h-12 bg-[#b7342c] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-white text-2xl">mail</span>
              </div>
              <h3 className="text-lg font-extrabold mb-3">
                Email the Mayor
              </h3>
              <p className="text-[#0a0a0a]/64 text-sm leading-relaxed mb-6">
                Let Mayor Wu know you expect action on street safety.
              </p>
              <a
                href="mailto:mayor@boston.gov?subject=Demand Action on Street Safety&body=Dear Mayor Wu,%0D%0A%0D%0AI am a Boston resident writing to urge immediate action on street safety. The delays on projects like Hyde Park Avenue are unacceptable. Someone was killed there, and the city's response has been more studies and more delays.%0D%0A%0D%0AI demand that the city:%0D%0A- Implement safety improvements immediately, not in 2026%0D%0A- Prioritize pedestrian and cyclist safety over traffic flow%0D%0A- Follow through on Vision Zero commitments%0D%0A%0D%0ASincerely,%0D%0A[Your Name]%0D%0A[Your Neighborhood]"
                className="inline-flex items-center text-[#2f6f4e] font-bold hover:underline"
              >
                Send Email
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </a>
            </div>

            <div className="bg-[#f8f5ed] border border-[#0a0a0a]/16 rounded-md p-7">
              <div className="w-12 h-12 bg-[#2f6f4e] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-white text-2xl">share</span>
              </div>
              <h3 className="text-lg font-extrabold mb-3">
                Share on Social Media
              </h3>
              <p className="text-[#0a0a0a]/64 text-sm leading-relaxed mb-6">
                Spread the word about our campaign to your network.
              </p>
              <a
                href="https://twitter.com/intent/tweet?text=Boston%20must%20deliver%20on%20its%20promises%20for%20safer%20streets.%20Join%20the%20%40BostonBetterSt%20coalition%20and%20demand%20action.%20%23SaferBostonStreets&url=https://bostonbetterstreets.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-3 bg-[#2f6f4e] text-white font-bold rounded-lg text-sm hover:bg-[#285f43] transition-colors"
              >
                Share on X
              </a>
            </div>

            <div className="bg-[#f8f5ed] border border-[#0a0a0a]/16 rounded-md p-7">
              <div className="w-12 h-12 bg-[#2f6f4e] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-white text-2xl">call</span>
              </div>
              <h3 className="text-lg font-extrabold mb-3">
                Call 311
              </h3>
              <p className="text-[#0a0a0a]/64 text-sm leading-relaxed mb-6">
                Report specific issues like broken signals, potholes, and blocked crosswalks.
              </p>
              <a
                href="tel:311"
                className="inline-flex items-center text-[#2f6f4e] font-bold hover:underline"
              >
                Call Now
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#0a0a0a] text-white">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#8fba9f] mb-3">
            Local representation
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.04em] mb-5">
            Contact your city councilor
          </h2>
          <p className="text-white/70 mb-8 max-w-3xl">
            Your city councilor represents you on transportation issues. Let them
            know you expect them to fight for safer streets. Find your district
            at{" "}
            <a
              href="https://www.boston.gov/city-council"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2f6f4e] underline"
            >
              boston.gov/city-council
            </a>
            .
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {councilors.map((councilor) => (
              <div
                key={councilor.contact}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-white/16 rounded-md p-4 hover:border-[#8fba9f] transition-colors"
              >
                <span className="font-medium">{councilor.name}</span>
                <a
                  href={`mailto:${councilor.contact}?subject=Support Street Safety Improvements&body=Dear Councilor,%0D%0A%0D%0AI am a constituent writing to urge your support for street safety improvements in our district and across Boston.%0D%0A%0D%0AThe delays on projects like Hyde Park Avenue are unacceptable. I urge you to:%0D%0A- Press the administration for immediate action%0D%0A- Support funding for safety infrastructure%0D%0A- Attend community meetings on transportation%0D%0A%0D%0AThank you for your service.%0D%0A%0D%0ASincerely,%0D%0A[Your Name]`}
                  className="text-[#2f6f4e] font-bold text-sm hover:underline"
                >
                  Send Email
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#b7342c] mb-3">
            A place to start
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.04em] mb-5">
            Sample messages
          </h2>
          <p className="text-[#0a0a0a]/70 mb-8">
            Feel free to use or adapt these messages when contacting officials.
            Personal stories are especially powerful.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0a0a0a] text-white rounded-md p-7 md:p-8">
              <h3 className="font-extrabold mb-6 flex items-center">
                <span className="material-symbols-outlined text-[#2f6f4e] mr-3">person</span>
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

            <div className="bg-[#0a0a0a] text-white rounded-md p-7 md:p-8">
              <h3 className="font-extrabold mb-6 flex items-center">
                <span className="material-symbols-outlined text-[#2f6f4e] mr-3">groups</span>
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

      <section className="py-14 md:py-20 bg-[#0a0a0a] text-white">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.04em] mb-8">
            Other ways to help
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "event", title: "Attend Hearings", desc: "Show up at city council and BTD meetings. Your presence matters." },
              { icon: "groups", title: "Talk to Neighbors", desc: "Spread the word in your community. Many don't know about these issues." },
              { icon: "photo_camera", title: "Document Issues", desc: "Take photos and videos of dangerous conditions. Evidence is powerful." },
              { icon: "volunteer_activism", title: "Volunteer", desc: "Join our team and help with outreach, research, and organizing." },
            ].map((item) => (
              <div key={item.title} className="border border-white/16 rounded-md p-6 hover:border-[#8fba9f] transition-colors">
                <span className="material-symbols-outlined text-[#2f6f4e] text-3xl mb-4 block">{item.icon}</span>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.04em]">Upcoming events</h2>
            <Link
              href="/updates"
              className="text-[#0a0a0a] font-bold hover:text-[#2f6f4e] transition-colors flex items-center"
            >
              View all updates
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </Link>
          </div>
          <div className="bg-[#f8f5ed] border border-[#0a0a0a]/16 rounded-md p-10 md:p-12 text-center">
            <span className="material-symbols-outlined text-5xl text-[#2f6f4e] mb-4 block">event</span>
            <h3 className="text-lg font-extrabold mb-3">
              No Upcoming Events Scheduled
            </h3>
            <p className="text-[#0a0a0a]/64 mb-6">
              Check back soon for community meetings, safety walks, and other events.
            </p>
            <p className="text-sm text-[#0a0a0a]/45">
              Sign up for our newsletter to be notified of new events.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#2f6f4e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-[-0.04em] text-white mb-6">
            Every voice matters.
          </h2>
          <p className="text-lg md:text-xl text-white/75 leading-relaxed mb-10 max-w-2xl mx-auto">
            Politicians pay attention when they hear from constituents. Your
            single email, your one phone call, your presence at a hearing—it all
            adds up. Don&apos;t underestimate your power.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:mayor@boston.gov?subject=Demand Action on Street Safety"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0a0a0a] text-white font-bold rounded-lg text-lg hover:bg-[#171717] transition-colors"
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
