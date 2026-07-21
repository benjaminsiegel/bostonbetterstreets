import type { Metadata } from "next";
import JoinForm from "@/components/JoinForm";

export const metadata: Metadata = {
  title: "Join Us | Boston Better Streets Coalition",
  description:
    "Join Boston residents organizing to make support for safer streets impossible for City Hall to ignore.",
};

const whatToExpect = [
  {
    icon: "mail",
    title: "Occasional updates",
    description: "Clear reporting on what is moving, what is stalled, and why.",
  },
  {
    icon: "campaign",
    title: "Urgent action alerts",
    description: "A note when an email, testimony, or public presence can matter.",
  },
  {
    icon: "groups",
    title: "Event invitations",
    description: "Safety walks, hearings, gatherings, and other chances to act together.",
  },
];

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-[#f0ece2] text-[#0a0a0a]">
      <section className="border-b border-[#0a0a0a]/12">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1fr_0.78fr] lg:items-end lg:gap-20 lg:px-8">
          <header className="max-w-4xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.13em] text-[#a63d36]">
              Join the coalition
            </p>
            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-[4.5rem]">
              Boston agrees. Now we have to show it.
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-[#0a0a0a]/66 md:text-xl">
              If you live, work, study, or regularly travel in Boston, your voice
              belongs here. Tell us how you move and how you might be willing to help.
            </p>
          </header>

          <aside className="rounded-lg border border-[#0a0a0a]/14 bg-[#e4eadf] p-6 md:p-8">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-[#2f6f4e]">
              One shared goal
            </p>
            <p className="text-xl font-bold leading-snug tracking-[-0.015em] md:text-2xl">
              No one should die, be injured, or feel under imminent threat on a
              neighborhood street.
            </p>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.13em] text-[#a63d36]">
              What to expect
            </p>
            <h2 className="mb-8 text-3xl font-extrabold tracking-[-0.03em] md:text-4xl">
              A list that acts.
            </h2>

            <div className="space-y-7">
              {whatToExpect.map((item) => (
                <div key={item.title} className="grid grid-cols-[2.5rem_1fr] gap-4">
                  <span
                    className="material-symbols-outlined mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-[#d8e2d3] text-lg text-[#2f6f4e]"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="mb-1 font-bold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-[#0a0a0a]/58">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-[#0a0a0a]/14 pt-7">
              <p className="text-sm leading-relaxed text-[#0a0a0a]/55">
                BBSC is a volunteer-run coalition. We will use your answers to
                send relevant updates and identify ways members can participate.
                We will not sell your information.
              </p>
            </div>
          </div>

          <JoinForm />
        </div>
      </section>
    </main>
  );
}
