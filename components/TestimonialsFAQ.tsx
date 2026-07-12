const TESTIMONIALS = [
  {
    quote:
      "The reasoning behind each call is what sold me — I can see exactly why it says what it says.",
    name: "R. Delgado",
    role: "Pulse subscriber",
  },
  {
    quote: "Finally a tool that gives probabilities instead of promises. Checks out against my own charts.",
    name: "K. Iwamoto",
    role: "Pro subscriber",
  },
  {
    quote: "The accuracy graph keeps it honest — I can see the misses, not just the wins.",
    name: "T. Osei",
    role: "Pulse subscriber",
  },
];

const FAQS = [
  {
    q: "Is this financial advice?",
    a: "No. Pink Pulse AI produces probability-based forecasts from market data. It never guarantees outcomes, and it isn't a substitute for your own research or a licensed advisor.",
  },
  {
    q: "What data feeds the predictions?",
    a: "Live price, volume, and order-flow data from major exchanges, combined with technical indicators like RSI, MACD, VWAP, and funding rates.",
  },
  {
    q: "How often does the forecast update?",
    a: "Every 15 minutes by default on the free plan, and in real time on Pulse and Pro.",
  },
  {
    q: "Can I see how accurate past predictions were?",
    a: "Yes — every plan includes a historical prediction log. Pulse and Pro add a full accuracy graph and win-rate breakdown.",
  },
];

export default function TestimonialsFAQ() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-10 text-center font-display text-3xl font-bold text-white sm:text-4xl">
          What subscribers say
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="glass rounded-2xl p-6">
              <blockquote className="text-sm leading-relaxed text-white/70">"{t.quote}"</blockquote>
              <figcaption className="mt-4 text-xs text-white/40">
                <span className="font-semibold text-white/70">{t.name}</span> · {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="mb-10 text-center font-display text-3xl font-bold text-white sm:text-4xl">
          Frequently asked questions
        </h2>
        <div className="space-y-3">
          {FAQS.map((f) => (
            <details key={f.q} className="glass group rounded-2xl p-5 open:shadow-glow">
              <summary className="focus-ring flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-white">
                {f.q}
                <span className="ml-4 text-white/40 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
