import type { Metadata } from "next";
import ProjectAccountabilityMap from "@/components/Map/ProjectAccountabilityMap";

export const metadata: Metadata = {
  title: "Street Safety Accountability Map | Boston Better Streets Coalition",
  description:
    "A working map of Boston's stalled street-safety projects and the citywide actions needed to prevent serious crashes.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function AccountabilityMapPage() {
  return (
    <div className="bg-[#f0ece2]">
      <section className="border-b border-white/10 bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-7xl px-4 py-11 sm:px-6 md:py-14 lg:px-8">
          <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_350px] lg:items-end lg:gap-16">
            <div>
              <div className="mb-5 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#d8e2d3]/78">
                <span className="h-px w-8 bg-[#8cb29a]" aria-hidden="true" />
                Private working draft · not linked or indexed
              </div>
              <h1 className="max-w-[850px] text-[2.8rem] font-extrabold leading-[0.96] tracking-[-0.04em] sm:text-[3.7rem] md:text-[4.5rem]">
                Promises need proof.
              </h1>
              <p className="mt-6 max-w-[760px] text-base leading-[1.7] text-white/66 md:text-lg">
                Seventeen stalled street and transportation projects, placed back on the map—and a public checklist for the citywide actions that make every neighborhood safer.
              </p>
            </div>

            <div className="border-l border-white/15 pl-5 sm:pl-6">
              <p className="text-sm font-semibold leading-[1.65] text-white/78">
                “We owe Louisa more than our grief. We owe her action.”
              </p>
              <p className="mt-3 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white/38">
                Mayor Michelle Wu · City Hall vigil · July 16, 2026
              </p>
              <a
                href="#citywide-actions"
                className="mt-5 inline-flex items-center gap-1.5 border-b border-white/25 pb-0.5 text-xs font-bold text-white/68 transition-colors hover:border-white hover:text-white xl:hidden"
              >
                Review citywide commitments
                <span className="material-symbols-outlined text-sm" aria-hidden="true">south</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] py-5 sm:px-5 sm:py-7 lg:px-7">
        <ProjectAccountabilityMap />
      </section>

      <section className="border-t border-[#0a0a0a]/10 bg-[#e7e2d7]">
        <div className="mx-auto grid max-w-7xl gap-7 px-4 py-10 sm:px-6 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12 lg:px-8">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#a63d36]">
            Draft framing
          </p>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-extrabold tracking-[-0.025em] text-[#0a0a0a] md:text-3xl">
              A promise is not a safety intervention.
            </h2>
            <p className="mt-4 text-sm leading-[1.75] text-[#0a0a0a]/62 md:text-base">
              Boston should be measured by what changes on the street: projects moving, funding protected, dangerous behavior deterred, crash findings published, and interim fixes installed while permanent work advances. This draft makes those outcomes visible in one place.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
