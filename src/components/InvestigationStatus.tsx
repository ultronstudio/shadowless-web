/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useMemo, useState } from "react";

interface Stage {
  id: string;
  label: string;
  status: "completed" | "active" | "locked";
  description: string;
}

const STAGES: Stage[] = [
  {
    id: "stage-1",
    label: "Foundation Laid",
    status: "completed",
    description: "Initial Contact",
  },
  {
    id: "stage-2",
    label: "Environmental Decay",
    status: "completed",
    description: "Residual Activity Logged",
  },
  {
    id: "stage-3",
    label: "Soundscape Integration",
    status: "active",
    description: "Deepening Shadows",
  },
  {
    id: "stage-4",
    label: "██████",
    status: "locked",
    description: "Total Eclipse",
  },
];

const GLITCH_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&*".split("");
const GLITCH_DURATION = 600;
const GLITCH_INTERVAL = 30;

function useGlitchText(text: string, isActive: boolean) {
  const [display, setDisplay] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setDisplay(text);
      setIsScrambling(false);
      return;
    }

    setIsScrambling(true);
    const endTime = Date.now() + GLITCH_DURATION;

    const interval = window.setInterval(() => {
      const now = Date.now();
      if (now >= endTime) {
        window.clearInterval(interval);
        setDisplay(text);
        setIsScrambling(false);
        return;
      }

      setDisplay((prev) => {
        const next = prev
          .split("")
          .map(() => GLITCH_CHARACTERS[Math.floor(Math.random() * GLITCH_CHARACTERS.length)])
          .join("");
        return next.slice(0, Math.max(text.length, 1)).padEnd(text.length, " ");
      });
    }, GLITCH_INTERVAL);

    return () => {
      window.clearInterval(interval);
      setDisplay(text);
      setIsScrambling(false);
    };
  }, [text, isActive]);

  return { display, isScrambling };
}

function StageRow({ stage }: { stage: Stage }) {
  const [isHovering, setIsHovering] = useState(false);

  const { display } = useGlitchText(stage.label, isHovering);

  const statusStyles = useMemo(() => {
    switch (stage.status) {
      case "completed":
        return {
          indicator: "bg-zinc-500",
          label: "text-zinc-500/70",
          description: "text-zinc-600/70",
        };
      case "active":
        return {
          indicator: "bg-red-500 animate-pulse",
          label: "text-red-200",
          description: "text-red-400",
        };
      case "locked":
      default:
        return {
          indicator: "bg-zinc-800 border border-zinc-600",
          label: "text-zinc-400/80",
          description: "text-zinc-500/70",
        };
    }
  }, [stage.status]);

  return (
    <li
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="group relative flex items-start gap-4 rounded border border-zinc-800 bg-black/50 p-4 transition-colors duration-300 hover:border-red-500/50"
    >
      <span
        className={`relative mt-1 inline-flex h-3 w-3 shrink-0 items-center justify-center rounded-full shadow-[0_0_8px_rgba(255,17,17,0.35)] ${statusStyles.indicator}`}
      >
        <span className="sr-only">{stage.status}</span>
      </span>
      <div className="flex flex-1 flex-col">
        <span
          className={`font-mono text-sm uppercase tracking-[0.35em] transition-colors duration-300 ${statusStyles.label}`}
        >
          {display}
        </span>
        <span className={`mt-1 text-xs tracking-[0.25em] text-zinc-500 ${statusStyles.description}`}>
          {stage.description}
        </span>
      </div>
      <span className="whitespace-nowrap font-mono text-[0.65rem] uppercase tracking-[0.35em] text-zinc-600">
        {stage.status === "active" ? "Manifestation Estimate: Oct??ber 202X" : stage.status === "locked" ? "Manifestation Estimate: ???" : "Filed"}
      </span>
      <span className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-red-900/10 blur" aria-hidden />
      </span>
    </li>
  );
}

export default function InvestigationStatus() {
  return (
    <section className="relative overflow-hidden rounded-lg border border-zinc-900 bg-gradient-to-br from-black via-zinc-950 to-black/90 p-6 text-zinc-200 shadow-[0_0_30px_rgba(255,0,0,0.08)]">
      <div className="mb-4 flex flex-col gap-1 text-left">
        <h2 className="font-mono text-xs uppercase tracking-[0.5em] text-red-400/90">Case File: Shadowless // Status Report</h2>
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.4em] text-zinc-500">
          Access Level: Restricted // Eyes Only
        </p>
      </div>

      <div className="relative mb-6 h-px w-full overflow-hidden bg-zinc-800">
        <span className="absolute inset-0 w-1/3 animate-[scan_2s_linear_infinite] bg-red-500/30 blur" aria-hidden />
      </div>

      <ol className="flex flex-col gap-3">
        {STAGES.map((stage) => (
          <StageRow key={stage.id} stage={stage} />
        ))}
      </ol>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(300%);
          }
        }
      `}</style>
    </section>
  );
}
