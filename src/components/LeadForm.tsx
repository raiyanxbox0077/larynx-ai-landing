"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const ORDER_VOLUMES = [
  "Under 100 orders/day",
  "100–500 orders/day",
  "500–1,000 orders/day",
  "1,000–2,000 orders/day",
  "Above 2,000 orders/day",
];

const COD_OPTIONS = ["Under 20%", "20–40%", "40–60%", "60–80%", "Above 80%"];

const fieldClass =
  "w-full h-11 rounded-lg border border-input bg-background/60 px-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-ring focus:ring-2 focus:ring-ring/40 focus:outline-none";

const labelClass =
  "mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground";

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    console.log("Larynx AI lead:", payload);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  }

  if (submitted) {
    return (
      <div
        className={
          "rounded-2xl border border-primary/30 bg-card p-6 text-center shadow-2xl shadow-primary/10 " +
          (compact ? "max-w-sm" : "max-w-md")
        }
      >
        <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-primary/15 text-2xl">
          ✓
        </div>
        <h3 className="text-lg font-semibold text-foreground">
          You&apos;re in. Check your WhatsApp.
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We&apos;ve queued your ₹10,000 free credits and sent a setup link to
          the details you provided. An AI voice agent demo call will land on
          your WhatsApp number within the hour.
        </p>
        <p className="mt-4 text-xs text-muted-foreground">
          No card used. No lock-in. Cancel anytime.
        </p>
      </div>
    );
  }

  return (
    <div
      className={
        "rounded-2xl border border-border/70 bg-card p-5 shadow-2xl shadow-black/40 sm:p-6 " +
        (compact ? "max-w-sm" : "max-w-md w-full")
      }
    >
      <div className="mb-4 flex items-center justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-foreground">
            Claim ₹10,000 in free credits
          </p>
          <p className="text-xs text-muted-foreground">
            No card. No lock-in. No setup fee.
          </p>
        </div>
        <span className="rounded-full bg-primary/15 px-2.5 py-1 text-xs font-semibold text-primary">
          Step 1 of 1
        </span>
      </div>

      <form onSubmit={onSubmit} className="space-y-3.5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="e.g. Rohan Mehta"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@yourbrand.in"
            className={fieldClass}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              inputMode="tel"
              autoComplete="tel"
              placeholder="+91 98XXX XXXXX"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="whatsapp" className={labelClass}>
              WhatsApp number
            </label>
            <input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              required
              inputMode="tel"
              placeholder="+91 98XXX XXXXX"
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="volume" className={labelClass}>
            Monthly order volume
          </label>
          <select id="volume" name="volume" required className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select your daily order volume
            </option>
            {ORDER_VOLUMES.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="cod" className={labelClass}>
            COD share of orders
          </label>
          <select id="cod" name="cod" required className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select your COD percentage
            </option>
            {COD_OPTIONS.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>

        <Button
          type="submit"
          size="lg"
          className="mt-2 h-12 w-full rounded-xl bg-primary text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:translate-y-[-1px] active:translate-y-0"
        >
          {loading ? "Allocating credits…" : "Start with ₹10,000 free →"}
        </Button>

        <p className="text-center text-[11px] leading-relaxed text-muted-foreground">
          100% privacy. We never share your data. Money-back if the system
          doesn&apos;t pay for itself during the trial.
        </p>
      </form>
    </div>
  );
}