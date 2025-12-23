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
        q: "How many members do you have?",
        a: "Our petition for Hyde Park Avenue improvements has over 700 signatures, and our community continues to grow. We welcome all Boston residents who share our vision for safer streets.",
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
    <div className="min-h-screen bg-[#f0ece2]">
      {/* Header */}
      <section className="bg-[#0a0a0a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center px-4 py-2 bg-[#13ec25] text-[#0a0a0a] rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <span className="material-symbols-outlined text-sm mr-2">help</span>
            FAQ
          </div>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
            Frequently Asked
            <br />
            <span className="text-[#13ec25]">Questions</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl">
            Everything you need to know about the Boston Better Streets
            Coalition, our mission, and how you can help make our streets safer.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-2xl font-bold uppercase tracking-tight text-[#0a0a0a] mb-8 pb-4 border-b-4 border-[#13ec25]">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <details
                    key={faqIndex}
                    className="group bg-[#0a0a0a] text-white overflow-hidden transition-all hover:shadow-[4px_4px_0px_0px_#13ec25]"
                  >
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <span className="font-bold uppercase tracking-wider pr-4">
                        {faq.q}
                      </span>
                      <span className="material-symbols-outlined text-[#13ec25] flex-shrink-0 group-open:rotate-180 transition-transform">
                        expand_more
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-white/70 leading-relaxed">{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-[#13ec25]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#0a0a0a] mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-[#0a0a0a]/70 mb-10">
            We&apos;re here to help. Reach out to us and we&apos;ll get back to you as
            soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@bostonbetterstreets.org"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0a0a0a] text-white font-bold uppercase tracking-wider rounded-full transition-all shadow-[4px_4px_0px_0px_#fff] hover:shadow-[6px_6px_0px_0px_#fff] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              <span className="material-symbols-outlined mr-2">mail</span>
              Contact Us
            </a>
            <Link
              href="/take-action"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#0a0a0a] text-[#0a0a0a] font-bold uppercase tracking-wider rounded-full hover:bg-[#0a0a0a] hover:text-white transition-all"
            >
              <span className="material-symbols-outlined mr-2">campaign</span>
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
