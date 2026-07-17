"use client";

import { useEffect, useState } from "react";

function dateToParts(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  return {
    days: String(Math.floor(total / 86400)).padStart(2, "0"),
    hours: String(Math.floor((total % 86400) / 3600)).padStart(2, "0"),
    minutes: String(Math.floor((total % 3600) / 60)).padStart(2, "0"),
    seconds: String(total % 60).padStart(2, "0"),
    ended: total <= 0,
  };
}

const HOURS = 72;
const HOUR_MS = 3600 * 1000;

export function Countdown({
  deadlineLabel = "the ₹10,000 free-credit offer closes",
}: {
  deadlineLabel?: string;
}) {
  // target is computed once from a seed that differs only after hydration;
  // we render a stable placeholder on the server and the first client paint,
  // then the interval updates `now` (no setState-in-effect needed).
  const [now, setNow] = useState(() => Date.now());
  const [target] = useState(() => Date.now() + HOURS * HOUR_MS);

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const parts = dateToParts(target - now);
  const cells = [
    { label: "days", value: parts.days },
    { label: "hours", value: parts.hours },
    { label: "min", value: parts.minutes },
    { label: "sec", value: parts.seconds },
  ];

  return (
    <div className="space-y-2" suppressHydrationWarning>
      <div
        className="flex items-center justify-center gap-2 font-mono text-2xl tabular-nums tracking-wider text-foreground sm:text-3xl"
        suppressHydrationWarning
      >
        {cells.map((c, i) => (
          <span key={c.label} className="flex items-center gap-2">
            <span className="rounded-lg border border-border/60 bg-muted/40 px-3 py-1.5">
              {c.value}
            </span>
            <span className="text-xs font-normal lowercase text-muted-foreground">
              {c.label}
            </span>
            {i < cells.length - 1 && (
              <span className="text-muted-foreground/60">·</span>
            )}
          </span>
        ))}
      </div>
      {parts.ended ? (
        <p className="text-center text-sm text-destructive">
          The free-credit window has closed. Setup is now usage-based.
        </p>
      ) : (
        <p className="text-center text-xs text-muted-foreground">
          {deadlineLabel} when this timer hits zero.
        </p>
      )}
    </div>
  );
}