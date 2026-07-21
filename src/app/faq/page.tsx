import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Boston Better Streets Coalition",
  description:
    "What Boston Better Streets Coalition believes, why street-safety projects have stalled, and how residents can help move them forward.",
};

type Source = {
  label: string;
  href: string;
};

type FAQ = {
  q: string;
  answer: ReactNode;
  sources?: Source[];
};

type FAQSection = {
  category: string;
  eyebrow: string;
  questions: FAQ[];
};

const sourceLinkClass =
  "font-semibold text-[#2f6f4e] underline decoration-[#2f6f4e]/30 underline-offset-4 transition-colors hover:decoration-[#2f6f4e]";

const faqs: FAQSection[] = [
  {
    category: "The Coalition",
    eyebrow: "Who we are",
    questions: [
      {
        q: "What is the Boston Better Streets Coalition?",
        answer: (
          <>
            <p>
              We are a resident-led coalition working to make public support for
              safer streets impossible for City Hall to ignore. We track the
              City against its own promises, document what is—or is not—happening
              on the ground, and mobilize people when visible public support can
              move a project forward.
            </p>
            <p>
              BBSC is an emerging volunteer organization, not a large nonprofit.
              We have a small steering committee and are building an advisory
              board and a broader citywide membership.
            </p>
          </>
        ),
      },
      {
        q: "Why does Boston need this coalition now?",
        answer: (
          <>
            <p>
              The latest killing on Tremont Street brought renewed attention to
              a crisis residents have been warning about for years. No one should
              die, be injured, or feel under imminent threat simply while moving
              through a neighborhood street.
            </p>
            <p>
              Boston does not lack plans or expertise. It lacks implementation.
              Residents need a way to turn private frustration into unmistakable,
              organized public demand.
            </p>
          </>
        ),
        sources: [
          {
            label: "Globe: City Hall promises action after the Tremont Street killing",
            href: "https://www.bostonglobe.com/2026/07/17/metro/mayor-wu-street-safety-vigil/",
          },
          {
            label: "The separate Enough Is Enough open letter",
            href: "https://benjaminsiegel.github.io/enough-is-enough/",
          },
        ],
      },
      {
        q: "Who can join?",
        answer: (
          <p>
            Anyone who lives, works, studies, or regularly travels in Boston and
            wants safer, lower-stress streets is welcome. You do not need
            transportation expertise, and you do not need to use every mode of
            travel. Your lived experience of Boston&apos;s streets matters.
          </p>
        ),
      },
      {
        q: "How is BBSC different from existing street-safety organizations?",
        answer: (
          <p>
            Boston already has excellent organizations with deep expertise in
            walking, cycling, transit, disability access, and Vision Zero. BBSC
            does not replace them. We organize residents across transportation
            modes and neighborhoods into a broad political constituency for
            implementation.
          </p>
        ),
        sources: [
          {
            label: "Street-safety and transportation resources",
            href: "/resources",
          },
        ],
      },
    ],
  },
  {
    category: "The Case for Action",
    eyebrow: "What we believe",
    questions: [
      {
        q: "What does a safer street mean?",
        answer: (
          <>
            <p>
              It means children can get to school, disabled people can move
              independently, older adults can cross comfortably, buses are not
              trapped in traffic, people can bike without extreme stress, and
              drivers face fewer dangerous and unpredictable conflicts. Emergency
              access, deliveries, and local businesses must work, too.
            </p>
            <p>
              Boston&apos;s transportation professionals should be free to use the
              full evidence-based toolkit—protected bike lanes, bus lanes,
              daylighting, raised crossings, speed humps, safer signal timing,
              lower speeds, road diets, automated enforcement, and other proven
              designs—in whatever configuration experts determine is appropriate.
            </p>
          </>
        ),
        sources: [
          {
            label: "Federal Highway Administration: proven safety countermeasures",
            href: "https://highways.dot.gov/safety/proven-safety-countermeasures",
          },
        ],
      },
      {
        q: "Is this really just about bike lanes?",
        answer: (
          <p>
            No. Everyone in Boston deserves safer streets whether they walk, use
            a wheelchair or mobility device, take the bus or train, bike, drive,
            or travel in several of those ways. We can share the same goals even
            when we do not share every mode: no preventable deaths or injuries,
            safe trips to school and work, and ordinary travel without constant
            fear.
          </p>
        ),
      },
      {
        q: "Why does BBSC focus on stalled projects?",
        answer: (
          <>
            <p>
              Because the City has already studied many dangerous corridors,
              asked residents what they need, developed designs, and in some cases
              secured funding. When those projects quietly stop, another study or
              announcement is not progress. Construction is progress.
            </p>
            <p>
              BBSC began with the long fight for Hyde Park Avenue. We are now
              building a citywide accountability map that compares official plans
              and promises with the conditions residents see today.
            </p>
          </>
        ),
        sources: [
          {
            label: "Explore the stalled-project accountability map",
            href: "/map",
          },
          {
            label: "Hyde Park Avenue: why residents are still waiting",
            href: "/updates/hyde-park-avenue-city-starts-over",
          },
        ],
      },
      {
        q: "Why have Boston's street-safety projects stalled?",
        answer: (
          <>
            <p>
              The public record shows a political slowdown, not merely the normal
              pace of engineering. Mayor Wu ordered a 30-day review as street
              projects became an election issue in 2025. The Globe later reported
              that she required personal approval for nearly all projects involving
              design changes, bringing most of them to a near standstill.
            </p>
            <p>
              Our conclusion is that a small, unrepresentative group of business
              interests and opponents—including voices from outside Boston—received
              extraordinary access and helped shape the retreat. The chronology
              matters: review, private access, rollbacks, centralized approval,
              then continued delay even after a landslide reelection.
            </p>
          </>
        ),
        sources: [
          {
            label: "Niki Griswold: the citywide slowdown and mayoral approval requirement",
            href: "https://www.bostonglobe.com/2026/03/15/metro/boston-mayor-michelle-wu-streets-cabinet-project-pause/",
          },
          {
            label: "Globe: residents and councilors confront the stalled projects",
            href: "https://www.bostonglobe.com/2026/04/22/metro/boston-city-council-streets-project-slowdown-hearing/",
          },
        ],
      },
      {
        q: "What was the 30-day review?",
        answer: (
          <>
            <p>
              In early 2025, Mayor Wu ordered a review of recent street changes.
              Its recommendations favored “consensus over speed,” additional
              planning, and reconsideration of projects already built or underway.
              The review followed intense lobbying from the Back Bay Association
              and included feedback from the Longwood Collective.
            </p>
            <p>
              Listening is part of good government. The problem is allowing a
              narrow set of well-connected interests to outweigh safety evidence,
              years of prior public process, and the much larger population that
              benefits from a project.
            </p>
          </>
        ),
        sources: [
          {
            label: "Globe: the review, its recommendations, and the lobbying behind it",
            href: "https://www.bostonglobe.com/2025/04/03/metro/boston-new-streets-plan/",
          },
          {
            label: "Streetsblog: the City's 30-day review memo",
            href: "https://mass.streetsblog.org/2025/04/03/boston-releases-30-day-review-memo-of-safety-projects",
          },
        ],
      },
      {
        q: "Is there really broad public support for safer streets?",
        answer: (
          <>
            <p>
              Yes. Internal City polling of roughly 1,600 residents found more
              support than opposition for separated bike lanes even when driving
              or parking space would be removed. It found 60 percent support for
              the Blue Hill Avenue project citywide, compared with 15 percent
              opposition; near the corridor, supporters still outnumbered
              opponents.
            </p>
            <p>
              Four thousand people also signed the separate Enough Is Enough open
              letter in one week. Neither a crowded meeting nor a handful of angry
              emails is a representative poll. Reporters and officials should take
              care not to manufacture a false public divide by repeatedly
              amplifying the same small opposition network.
            </p>
          </>
        ),
        sources: [
          {
            label: "The unpublicized City Hall polling and methodology",
            href: "https://mass.streetsblog.org/2026/04/09/internal-city-hall-polling-reveals-broad-support-for-bike-projects-blue-hill-ave-bus-rapid-transit",
          },
          {
            label: "Globe: 4,000 people demand action",
            href: "https://www.bostonglobe.com/2026/07/17/metro/mayor-wu-street-safety-vigil/",
          },
        ],
      },
      {
        q: "Don't street changes worsen traffic, parking, or business access?",
        answer: (
          <>
            <p>
              A responsible design accounts for traffic, deliveries, disability
              access, emergency response, and local businesses. But preserving
              every existing parking space cannot take priority over preventing
              deaths and injuries, and maximum vehicle speed is not the
              City&apos;s only obligation.
            </p>
            <p>
              Some car trips may become slower. They can also become safer and more
              predictable. Federal guidance finds that well-chosen road diets
              reduce speed differences and “accordion-style” stop-and-go traffic,
              creating more consistent flow; they are also associated with
              substantial crash reductions. The answer is careful, project-specific
              analysis—not refusing to change a dangerous street.
            </p>
          </>
        ),
        sources: [
          {
            label: "FHWA: safety and operational benefits of road diets",
            href: "https://highways.dot.gov/safety/other/road-diets/road-diet-desk-reference/2-why-consider-road-diet",
          },
          {
            label: "FHWA: where road diets are operationally appropriate",
            href: "https://highways.dot.gov/safety/other/road-diets/road-diet-informational-guide/3-road-diet-feasibility-determination",
          },
        ],
      },
      {
        q: "Shouldn't the City wait for community consensus?",
        answer: (
          <>
            <p>
              Public participation matters, but unanimity is not a workable safety
              standard. The City should listen, explain its decisions, measure
              results, and adjust designs. A small number of opponents should not
              have veto power over projects that protect the public.
            </p>
            <p>
              “The community is divided” can become a self-fulfilling media frame:
              a few recurring opponents are quoted until their presence is mistaken
              for representative opinion. Reporters should describe who was heard,
              what evidence exists, and whether opposition reflects the broader
              public—not merely repeat the loudest testimony.
            </p>
          </>
        ),
      },
    ],
  },
  {
    category: "Accountability & Action",
    eyebrow: "Who has power",
    questions: [
      {
        q: "Why is BBSC holding Mayor Wu responsible?",
        answer: (
          <>
            <p>
              Boston has a strong-mayor form of government. The City Council can
              pass laws, approve the budget, hold hearings, and expose delays, but
              it does not run the Streets Cabinet or build projects. The mayor
              appoints the administration and sets its priorities.
            </p>
            <p>
              In this case, the connection is especially direct: current and
              former staff told the Globe that Mayor Wu required her personal
              approval for nearly every street project involving design changes.
              BBSC is independent of any party or candidate. We will support or
              oppose leaders based on what they do—and hold authority accountable
              wherever it sits.
            </p>
          </>
        ),
        sources: [
          {
            label: "Globe: the mayor's direct role in project approvals",
            href: "https://www.bostonglobe.com/2026/03/15/metro/boston-mayor-michelle-wu-streets-cabinet-project-pause/",
          },
          {
            label: "Boston City Council: its legislative, budget, and oversight role",
            href: "https://www.boston.gov/departments/city-council/how-city-council-enacts-laws",
          },
        ],
      },
      {
        q: "What does BBSC actually do?",
        answer: (
          <>
            <p>
              We track promised projects and publish the evidence; organize safety
              walks and community gatherings; mobilize residents to write, attend,
              and testify; and provide rapid response when a project or policy
              needs visible public support.
            </p>
            <p>
              Our members began by organizing around Hyde Park Avenue. Together we
              have mobilized messages and testimony, participated in hearings and
              safety walks, and helped return stalled projects to the public agenda.
              We are still building the citywide organization needed to turn that
              attention into implementation.
            </p>
          </>
        ),
        sources: [
          { label: "Read coalition updates", href: "/updates" },
          { label: "See the accountability map", href: "/map" },
        ],
      },
      {
        q: "What can I do right now?",
        answer: (
          <>
            <p>
              Join the coalition. Tell us how you move around Boston and how you
              are willing to help. We will send occasional updates, urgent action
              alerts, and invitations to events—especially when your voice or
              presence can make a difference.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/join"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#2f6f4e] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#285f43]"
              >
                Join the coalition
              </Link>
              <Link
                href="/map"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#0a0a0a]/20 px-5 py-3 text-sm font-bold text-[#0a0a0a]/75 transition-colors hover:border-[#0a0a0a]/45 hover:text-[#0a0a0a]"
              >
                See what is stalled
              </Link>
            </div>
          </>
        ),
      },
    ],
  },
];

function sectionId(category: string) {
  return category.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and");
}

function SourceLinks({ sources }: { sources: Source[] }) {
  return (
    <div className="mt-6 border-l-2 border-[#2f6f4e]/35 pl-4">
      <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#0a0a0a]/42">
        Read the evidence
      </p>
      <ul className="space-y-2 text-sm leading-relaxed">
        {sources.map((source) => (
          <li key={source.href}>
            <a className={sourceLinkClass} href={source.href}>
              {source.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#f0ece2] text-[#0a0a0a]">
      <section className="border-b border-[#0a0a0a]/12">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-20 lg:px-8">
          <header className="max-w-4xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.13em] text-[#a63d36]">
              A resident guide to safer streets
            </p>
            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-[4.5rem]">
              The questions Boston keeps asking.
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-[#0a0a0a]/66 md:text-xl">
              Who has the power, why promised projects have stalled, what the
              evidence says, and how residents can turn broad support into action.
            </p>
          </header>

          <aside className="rounded-lg border border-[#0a0a0a]/14 bg-[#e4eadf] p-6 md:p-8">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-[#2f6f4e]">
              Our purpose
            </p>
            <p className="text-xl font-bold leading-snug tracking-[-0.015em] md:text-2xl">
              “We seek to make public support for safer streets impossible for
              City Hall to ignore.”
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/join"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#0a0a0a] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#2f6f4e]"
              >
                Join us
              </Link>
              <Link
                href="/map"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#0a0a0a]/25 px-5 py-3 text-sm font-bold transition-colors hover:border-[#0a0a0a]/55"
              >
                View the map
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
          <aside className="hidden lg:block lg:sticky lg:top-32 lg:self-start">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.12em] text-[#0a0a0a]/42">
              Browse 15 questions
            </p>
            <nav className="space-y-4 border-l border-[#0a0a0a]/15 pl-4" aria-label="FAQ categories">
              {faqs.map((category) => (
                <a
                  key={category.category}
                  href={`#${sectionId(category.category)}`}
                  className="block text-sm font-semibold leading-snug text-[#0a0a0a]/58 transition-colors hover:text-[#2f6f4e]"
                >
                  {category.category}
                </a>
              ))}
            </nav>
            <div className="mt-10 border-t border-[#0a0a0a]/14 pt-6">
              <p className="mb-3 text-sm leading-relaxed text-[#0a0a0a]/52">
                Ready to be counted?
              </p>
              <Link className={sourceLinkClass} href="/join">
                Join the coalition
              </Link>
            </div>
          </aside>

          <div className="space-y-16 md:space-y-20">
            {faqs.map((category) => (
              <section
                key={category.category}
                id={sectionId(category.category)}
                className="scroll-mt-32"
              >
                <div className="mb-5">
                  <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.13em] text-[#a63d36]">
                    {category.eyebrow}
                  </p>
                  <div className="flex items-center gap-5">
                    <h2 className="text-2xl font-extrabold tracking-[-0.025em] md:text-3xl">
                      {category.category}
                    </h2>
                    <div className="h-px flex-1 bg-[#0a0a0a]/14" aria-hidden="true" />
                  </div>
                </div>

                <div className="border-t border-[#0a0a0a]/16">
                  {category.questions.map((faq, index) => (
                    <details
                      key={faq.q}
                      className="group border-b border-[#0a0a0a]/16 transition-colors open:bg-white/40"
                      open={category.category === "The Coalition" && index === 0}
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-2 py-5 marker:content-none [&::-webkit-details-marker]:hidden md:px-3 md:py-6">
                        <span className="pr-4 text-base font-bold leading-snug tracking-[-0.01em] md:text-lg">
                          {faq.q}
                        </span>
                        <span
                          className="material-symbols-outlined flex-shrink-0 text-xl text-[#2f6f4e] transition-transform group-open:rotate-45"
                          aria-hidden="true"
                        >
                          add
                        </span>
                      </summary>
                      <div className="max-w-3xl px-2 pb-7 pr-10 md:px-3 md:pr-14">
                        <div className="space-y-4 text-[0.98rem] leading-[1.75] text-[#0a0a0a]/68">
                          {faq.answer}
                        </div>
                        {faq.sources && <SourceLinks sources={faq.sources} />}
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
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.13em] text-[#d8e2d3]/75">
            Agreement is not yet power
          </p>
          <h2 className="mb-5 text-3xl font-extrabold tracking-[-0.03em] md:text-5xl">
            Make your support visible.
          </h2>
          <p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-white/65">
            Join residents across Boston who are ready to show up when a safer
            street needs public support.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/join"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#d8e2d3] px-7 py-3 text-sm font-bold text-[#0a0a0a] transition-colors hover:bg-white sm:text-base"
            >
              Join the coalition
            </Link>
            <a
              href="mailto:bostonbetterstreets@gmail.com"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/35 px-7 py-3 text-sm font-bold text-white transition-colors hover:border-white/70 hover:bg-white/8 sm:text-base"
            >
              Ask a question
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
