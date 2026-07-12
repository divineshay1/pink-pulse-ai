"use client";

import { useEffect, useState } from "react";

const MOCK = {
  price: 71482.16,
  change24h: 2.34,
  direction: "UP" as "UP" | "DOWN",
  probUp: 82,
  probDown: 18,
  confidence: "High",
  risk: "Medium",
  reason:
    "Strong bullish momentum, rising volume, RSI recovering from oversold, positive funding rates, support holding.",
};

function useCountdown(seconds: number) {
  const [remaining, setRemaining] = useState(seconds);
  useEffect(() => {
    const id = setInterval(() => {
      setRemaining((r) => (r <= 0 ? seconds : r - 1));
    }, 1000);
    return () => clearInterval(id);
  }, [seconds]);
  const m = Math.floor(remaining / 60)
    .toString()
    .padStart(2, "0");
  const s = (remaining % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function ConfidenceMeter({ value }: { value: number }) {
  const circumference = 2 * Math.PI * 42;
  const offset = circumference - (value / 100) * circumference;
  return (
    <div className="relative flex h-28 w-28 items-center justify-center">
      <svg className="h-28 w-28 -rotate-90" viewBox="0 0 96 96">
        <circle cx="48" cy="48" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
        <circle
          cx="48"
          cy="48"
          r="42"
          fill="none"
          stroke="url(#gradMeter)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
        />
        <defs>
          <linearGradient id="gradMeter" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF4FA3" />
            <stop offset="100%" stopColor="#8A2BE2" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="font-mono text-xl font-bold text-white">{value}%</span>
        <span className="text-[10px] uppercase tracking-wider text-white/50">confidence</span>
      </div>
    </div>
  );
}

function PressureGauge({ probUp, probDown }: { probUp: number; probDown: number }) {
  return (
    <div className="w-full">
      <div className="mb-1.5 flex justify-between text-xs font-medium">
        <span className="text-pulse-up">Buy pressure {probUp}%</span>
        <span className="text-pulse-down">Sell pressure {probDown}%</span>
      </div>
      <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-pulse-up to-emerald-400 transition-all duration-1000"
          style={{ width: `${probUp}%` }}
        />
        <div
          className="h-full bg-gradient-to-r from-rose-500 to-pulse-down transition-all duration-1000"
          style={{ width: `${probDown}%` }}
        />
      </div>
    </div>
  );
}

export default function Hero() {
  const countdown = useCountdown(15 * 60);
  const isUp = MOCK.direction === "UP";

  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 md:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-pulse-up" />
            Live market read, updated every 15 minutes
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Bitcoin's next move,
            <br />
            <span className="text-gradient">stated as a probability.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/60">
            Pink Pulse AI reads volume, momentum, funding rates, and order-flow
            structure in real time and turns it into a probability — with the
            reasoning shown, not hidden. No promises. No guarantees. Just odds
            you can check for yourself.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            
              href="#signup"
              className="focus-ring rounded-lg bg-pulse-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
            >
              Start free
            </a>
            
              href="#dashboard-preview"
              className="focus-ring glass rounded-lg px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              See it live
            </a>
          </div>
          <p className="mt-4 text-xs text-white/40">
            Probability-based forecasts, not financial advice. Bitcoin is volatile — trade at your own risk.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="pulse-ring" />
          <div className="pulse-ring delay-1" />
          <div className="pulse-ring delay-2" />

          <div className="glass-strong relative rounded-3xl p-6 shadow-glowPurple">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/40">BTC / USD</p>
                <p className="font-mono text-3xl font-bold text-white">
                  ${MOCK.price.toLocaleString()}
                </p>
                <p
                  className={`mt-0.5 text-sm font-medium ${
                    MOCK.change24h >= 0 ? "text-pulse-up" : "text-pulse-down"
                  }`}
                >
                  {MOCK.change24h >= 0 ? "+" : ""}
                  {MOCK.change24h}% (24h)
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-wider text-white/40">Next update</p>
                <p className="font-mono text-lg font-semibold text-white">{countdown}</p>
              </div>
            </div>

            <div className="my-5 h-px w-full bg-white/10" />

            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/40">AI read</p>
                <p
                  className={`font-display text-2xl font-bold ${
                    isUp ? "text-pulse-up" : "text-pulse-down"
                  }`}
                >
                  {isUp ? "▲ UP" : "▼ DOWN"}
                </p>
                <p className="mt-1 text-xs text-white/50">
                  Confidence: <span className="text-white/80">{MOCK.confidence}</span> · Risk:{" "}
                  <span className="text-white/80">{MOCK.risk}</span>
                </p>
              </div>
              <ConfidenceMeter value={MOCK.probUp} />
            </div>

            <div className="mt-5">
              <PressureGauge probUp={MOCK.probUp} probDown={MOCK.probDown} />
            </div>

            <p className="mt-5 rounded-xl bg-white/5 p-3 text-xs leading-relaxed text-white/60">
              <span className="font-semibold text-white/80">Why: </span>
              {MOCK.reason}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
