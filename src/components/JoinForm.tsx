"use client";

import { FormEvent, useState } from "react";

const travelOptions = [
  "Walk",
  "Wheelchair or mobility device",
  "Bus",
  "Subway or commuter rail",
  "Bicycle",
  "E-bike or scooter",
  "Drive",
  "Passenger",
  "Other",
];

const participationOptions = [
  "Attend community events",
  "Contact elected officials",
  "Attend or testify at hearings",
  "Help research stalled projects",
  "Document street conditions",
  "Volunteer with organizing",
  "Share my story publicly",
  "Help with communications",
];

function toggleItem(item: string, items: string[], setItems: (items: string[]) => void) {
  setItems(items.includes(item) ? items.filter((value) => value !== item) : [...items, item]);
}

export default function JoinForm() {
  const [travelModes, setTravelModes] = useState<string[]>([]);
  const [participation, setParticipation] = useState<string[]>([]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const neighborhood = String(form.get("neighborhood") || "").trim();

    const body = [
      "I'd like to join the Boston Better Streets Coalition.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Neighborhood or connection to Boston: ${neighborhood}`,
      `How I travel: ${travelModes.length ? travelModes.join(", ") : "Not specified"}`,
      `I may be willing to: ${participation.length ? participation.join(", ") : "Not specified"}`,
    ].join("\n");

    window.location.href = `mailto:bostonbetterstreets@gmail.com?subject=${encodeURIComponent(
      "Join the Boston Better Streets Coalition",
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="rounded-lg border border-[#0a0a0a]/14 bg-white/70 p-5 shadow-[0_18px_50px_rgba(10,10,10,0.08)] sm:p-8 md:p-10">
      <div className="mb-8 border-b border-[#0a0a0a]/12 pb-7">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[#2f6f4e]">
          Add your voice
        </p>
        <h2 className="text-2xl font-extrabold tracking-[-0.025em] sm:text-3xl">
          Tell us how you want to take part.
        </h2>
      </div>

      <form className="space-y-9" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-bold" htmlFor="name">
            Name
            <input
              required
              autoComplete="name"
              className="mt-2 w-full rounded-md border border-[#0a0a0a]/22 bg-white px-4 py-3 font-normal outline-none transition-colors placeholder:text-[#0a0a0a]/30 focus:border-[#2f6f4e] focus:ring-2 focus:ring-[#2f6f4e]/15"
              id="name"
              name="name"
              placeholder="Your name"
              type="text"
            />
          </label>

          <label className="block text-sm font-bold" htmlFor="email">
            Email
            <input
              required
              autoComplete="email"
              className="mt-2 w-full rounded-md border border-[#0a0a0a]/22 bg-white px-4 py-3 font-normal outline-none transition-colors placeholder:text-[#0a0a0a]/30 focus:border-[#2f6f4e] focus:ring-2 focus:ring-[#2f6f4e]/15"
              id="email"
              name="email"
              placeholder="you@example.com"
              type="email"
            />
          </label>
        </div>

        <label className="block text-sm font-bold" htmlFor="neighborhood">
          Neighborhood or connection to Boston
          <input
            required
            autoComplete="address-level3"
            className="mt-2 w-full rounded-md border border-[#0a0a0a]/22 bg-white px-4 py-3 font-normal outline-none transition-colors placeholder:text-[#0a0a0a]/30 focus:border-[#2f6f4e] focus:ring-2 focus:ring-[#2f6f4e]/15"
            id="neighborhood"
            name="neighborhood"
            placeholder="Hyde Park, work in Back Bay, study in Fenway…"
            type="text"
          />
        </label>

        <fieldset>
          <legend className="text-sm font-bold">How do you travel in Boston?</legend>
          <p className="mb-4 mt-1 text-sm leading-relaxed text-[#0a0a0a]/48">
            Select all that apply.
          </p>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {travelOptions.map((option) => (
              <label
                key={option}
                className="flex cursor-pointer items-start gap-3 rounded-md border border-[#0a0a0a]/14 bg-white px-3.5 py-3 text-sm font-medium transition-colors hover:border-[#2f6f4e]/55 has-checked:border-[#2f6f4e] has-checked:bg-[#e4eadf]"
              >
                <input
                  checked={travelModes.includes(option)}
                  className="mt-0.5 h-4 w-4 accent-[#2f6f4e]"
                  onChange={() => toggleItem(option, travelModes, setTravelModes)}
                  type="checkbox"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-bold">How might you be willing to help?</legend>
          <p className="mb-4 mt-1 text-sm leading-relaxed text-[#0a0a0a]/48">
            This is not a commitment. It helps us send relevant invitations.
          </p>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {participationOptions.map((option) => (
              <label
                key={option}
                className="flex cursor-pointer items-start gap-3 rounded-md border border-[#0a0a0a]/14 bg-white px-3.5 py-3 text-sm font-medium transition-colors hover:border-[#2f6f4e]/55 has-checked:border-[#2f6f4e] has-checked:bg-[#e4eadf]"
              >
                <input
                  checked={participation.includes(option)}
                  className="mt-0.5 h-4 w-4 accent-[#2f6f4e]"
                  onChange={() => toggleItem(option, participation, setParticipation)}
                  type="checkbox"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <button
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#2f6f4e] px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-[#285f43]"
            type="submit"
          >
            Prepare my signup email
            <span className="material-symbols-outlined text-lg" aria-hidden="true">
              arrow_forward
            </span>
          </button>
          <p className="mt-3 text-center text-xs leading-relaxed text-[#0a0a0a]/48">
            This opens your email app with your answers. Review the message and
            press send to finish joining.
          </p>
        </div>
      </form>
    </div>
  );
}
