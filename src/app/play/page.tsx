import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boston: No Safe Crossing | Boston Better Streets Coalition",
  description:
    "Play our game and experience the challenge of crossing Hyde Park Avenue safely.",
};

export default function PlayPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-white/60 hover:text-[#2f6f4e] transition-colors text-sm font-bold mb-4"
          >
            <span className="material-symbols-outlined mr-2 text-lg">
              arrow_back
            </span>
            Back to site
          </Link>
          <h1 className="text-3xl md:text-5xl font-black mb-3">
            Boston: <span className="text-[#d8e2d3]">No Safe Crossing</span>
          </h1>
          <p className="text-white/60 max-w-2xl">
            Experience what it&apos;s like to cross Hyde Park Avenue. Get every
            pedestrian safely across the street while dodging speeding traffic.
          </p>
        </div>

        {/* Game Frame */}
        <div className="border-4 border-white shadow-[8px_8px_0px_0px_#2f6f4e] bg-[#191919]">
          <iframe
            src="/game/index.html"
            title="Boston: No Safe Crossing game"
            className="w-full aspect-[1064/1000] border-0"
            allow="autoplay"
          />
        </div>

        {/* Instructions */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-[#191919] border-2 border-white/20 p-6">
            <h2 className="text-lg font-bold mb-3 text-[#d8e2d3]">
              How to Play
            </h2>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#2f6f4e]">→</span>
                Use arrow keys or on-screen controls to move
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2f6f4e]">→</span>
                Guide pedestrians safely across the avenue
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2f6f4e]">→</span>
                Avoid speeding cars and trucks
              </li>
            </ul>
          </div>

          <div className="bg-[#191919] border-2 border-white/20 p-6">
            <h2 className="text-lg font-bold mb-3 text-[#e7d5a0]">
              Why This Matters
            </h2>
            <p className="text-white/70 text-sm mb-4">
              Hyde Park Avenue is one of Boston&apos;s most dangerous streets.
              Residents report cars routinely going 50mph, running red lights,
              and ignoring crosswalks.
            </p>
            <Link
              href="/projects/hyde-park-avenue"
              className="inline-flex items-center text-[#2f6f4e] font-bold text-sm hover:underline"
            >
              Learn more about Hyde Park Avenue
              <span className="material-symbols-outlined ml-1 text-sm">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
