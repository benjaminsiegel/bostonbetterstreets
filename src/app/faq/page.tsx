import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Boston Better Streets Coalition",
  description:
    "Frequently asked questions about the Boston Better Streets Coalition, our mission, and how you can get involved.",
};

const faqs = [
  {
    category: "About Us",
    questions: [
      {
        q: "What is the Boston Better Streets Coalition?",
        a: "We are a grassroots coalition of Boston residents founded in 2024, dedicated to holding the city accountable for its promises on street safety. We track stalled projects, document dangerous conditions, and advocate for safer streets for pedestrians, cyclists, and transit riders.",
      },
      {
        q: "When was BBSC founded?",
        a: "The Boston Better Streets Coalition was founded in 2024 in response to growing frustration with the city's failure to deliver on promised street safety improvements, particularly after the tragic death of Glenn Inghram at Forest Hills in October 2024.",
      },
      {
        q: "Who can join?",
        a: "Anyone who lives, works, studies, or travels in Boston and wants safer, more reliable streets is welcome. You do not need transportation expertise—your experience moving around the city matters.",
      },
      {
        q: "Are you affiliated with any political party?",
        a: "No. We are a non-partisan organization focused solely on street safety and transportation equity. We hold all elected officials accountable regardless of party affiliation.",
      },
    ],
  },
  {
    category: "Our Mission",
    questions: [
      {
        q: "What are your main goals?",
        a: "Our three primary goals are: (1) Track projects that have stalled, documenting the delays and broken promises; (2) Crowd-source a map of dangerous locations across Boston; and (3) Communicate updates on city progress (or lack thereof) to keep residents informed and engaged.",
      },
      {
        q: "Why do you focus on 'stalled' projects?",
        a: "The city often announces ambitious safety plans but fails to follow through. By documenting these stalled projects with timelines and evidence, we prevent the city from claiming progress while nothing actually changes on our streets.",
      },
      {
        q: "What do you mean by 'pain points'?",
        a: "Pain points are locations that residents have identified as dangerous or problematic—dangerous crossings, missing sidewalks, speeding zones, blocked accessibility, bus stop hazards, and more. Our crowd-sourced map helps visualize where these problems exist across the city.",
      },
      {
        q: "Who are you advocating for?",
        a: "We advocate for all Boston residents, but especially those most vulnerable on our streets: families with children, seniors, people with disabilities, cyclists, and transit riders. Everyone deserves to move safely through our city.",
      },
    ],
  },
  {
    category: "The Issues",
    questions: [
      {
        q: "What is Hyde Park Avenue and why is it important?",
        a: "Hyde Park Avenue is a five-mile corridor connecting Readville to Forest Hills. It's one of Boston's most dangerous streets, with a tragic history including the death of Glenn Inghram in 2024. Despite planning that began in 2019, meaningful safety improvements have been repeatedly delayed.",
      },
      {
        q: "Why hasn't the city made more progress on street safety?",
        a: "Multiple factors contribute: election-year political caution, prioritizing suburban commuter traffic over local safety, fear of backlash from anti-bike-lane activists, and a lack of sustained political will. Our goal is to change this calculus by making inaction politically costly.",
      },
      {
        q: "What is Vision Zero and is Boston following it?",
        a: "Vision Zero is a commitment to eliminate all traffic fatalities. Boston adopted Vision Zero in 2015, but deaths have not decreased significantly. The city's slow pace of implementing safety infrastructure shows that Vision Zero remains more aspiration than reality.",
      },
      {
        q: "Why do some residents oppose bike lanes?",
        a: "Opposition typically centers on parking removal and concerns about traffic flow. However, research shows protected bike lanes improve safety for everyone, including drivers. Political opposition often comes from a vocal minority, while the silent majority supports safer streets.",
      },
    ],
  },
  {
    category: "Getting Involved",
    questions: [
      {
        q: "How can I help?",
        a: "There are many ways to get involved: Report pain points on our map, attend city council meetings and public hearings, sign our petitions, share our content on social media, and talk to your neighbors about street safety. Every voice matters.",
      },
      {
        q: "How do I report a dangerous location?",
        a: "Visit our Pain Point Map and click 'Report a Pain Point.' Provide as much detail as possible about the location, type of hazard, and any incidents you've witnessed. Your reports help build the case for change.",
      },
      {
        q: "Do you hold community meetings?",
        a: "Yes, we organize safety walks, attend city hearings, and host community gatherings. Follow us on social media or sign up for our newsletter to stay informed about upcoming events.",
      },
      {
        q: "How can I contact my city councilor about street safety?",
        a: "Visit boston.gov/city-council to find your district councilor. We also track which councilors have been supportive of street safety and which have not. Contact information and sample messages are available on our Take Action page.",
      },
    ],
  },
  {
    category: "The Map & Data",
    questions: [
      {
        q: "How do you verify reported pain points?",
        a: "We review reports for accuracy and combine them with official crash data, media reports, and community feedback. Verified reports are marked as such on the map.",
      },
      {
        q: "Can I trust the project timelines on your site?",
        a: "All our timeline information is sourced from official city documents, news reports, and public meetings. We link to sources wherever possible and update information as new developments occur.",
      },
      {
        q: "Do you share data with the city?",
        a: "Yes, we present our findings at public hearings and submit formal comments on city proposals. Our data has been cited in city council discussions and media coverage.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#f0ece2] text-[#0a0a0a]">
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-14 sm:px-6 md:pb-16 md:pt-20 lg:px-8">
        <header className="max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.13em] text-[#a63d36]">
            Frequently asked questions
          </p>
          <h1 className="mb-6 text-4xl font-extrabold leading-[0.98] tracking-[-0.035em] sm:text-5xl md:text-[4.25rem]">
            Questions, answered plainly.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[#0a0a0a]/65 md:text-xl">
            What the Boston Better Streets Coalition does, what we believe, and how you can help make Boston&apos;s streets safer.
          </p>
        </header>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 md:pb-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
          <aside className="hidden lg:block lg:sticky lg:top-32 lg:self-start">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.12em] text-[#0a0a0a]/42">Browse</p>
            <nav className="space-y-3 border-l border-[#0a0a0a]/15 pl-4" aria-label="FAQ categories">
              {faqs.map((category) => (
                <a
                  key={category.category}
                  href={`#${category.category.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`}
                  className="block text-sm font-semibold text-[#0a0a0a]/58 transition-colors hover:text-[#2f6f4e]"
                >
                  {category.category}
                </a>
              ))}
            </nav>
          </aside>

          <div className="space-y-14 md:space-y-16">
            {faqs.map((category) => (
              <section
                key={category.category}
                id={category.category.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}
                className="scroll-mt-32"
              >
                <div className="mb-4 flex items-center gap-5">
                  <h2 className="text-2xl font-extrabold tracking-[-0.02em] md:text-3xl">
                    {category.category}
                  </h2>
                  <div className="h-px flex-1 bg-[#0a0a0a]/14" aria-hidden="true" />
                </div>

                <div className="border-t border-[#0a0a0a]/16">
                  {category.questions.map((faq) => (
                    <details
                      key={faq.q}
                      className="group border-b border-[#0a0a0a]/16 transition-colors open:bg-white/35"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-1 py-5 marker:content-none [&::-webkit-details-marker]:hidden md:py-6">
                        <span className="pr-4 text-base font-semibold leading-snug md:text-lg">
                          {faq.q}
                        </span>
                        <span className="material-symbols-outlined flex-shrink-0 text-xl text-[#2f6f4e] transition-transform group-open:rotate-45" aria-hidden="true">
                          add
                        </span>
                      </summary>
                      <div className="max-w-3xl px-1 pb-6 pr-12">
                        <p className="leading-relaxed text-[#0a0a0a]/64">{faq.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-16 text-white md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.13em] text-[#d8e2d3]/75">Still wondering?</p>
          <h2 className="mb-5 text-3xl font-extrabold tracking-[-0.025em] md:text-5xl">
            Ask us directly.
          </h2>
          <p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-white/65">
            Reach out with a question, or join neighbors taking action for safer streets.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:bostonbetterstreets@gmail.com"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#397956] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[#448b64] sm:text-base"
            >
              <span className="material-symbols-outlined text-lg" aria-hidden="true">mail</span>
              Contact Us
            </a>
            <Link
              href="/join"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/35 px-7 py-3 text-sm font-bold text-white transition-colors hover:border-white/70 hover:bg-white/8 sm:text-base"
            >
              Join Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
