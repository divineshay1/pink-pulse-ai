const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "",
    features: ["Delayed predictions (15 min)", "Daily accuracy summary", "1 watchlist coin"],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Pulse",
    price: "$29",
    period: "/mo",
    features: [
      "Real-time predictions",
      "Full reasoning breakdown",
      "Unlimited watchlist",
      "Email + push alerts",
    ],
    cta: "Start Pulse",
    highlight: true,
  },
  {
    name: "Pro",
    price: "$79",
    period: "/mo",
    features: [
      "Everything in Pulse",
      "Historical prediction log + accuracy graph",
      "Priority data refresh",
      "API access",
    ],
    cta: "Start Pro",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 text-center">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Simple, transparent pricing
        </h2>
        <p className="mt-3 text-white/50">Cancel anytime. No lock-in.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-3xl p-7 ${
              plan.highlight ? "glass-strong shadow-glow" : "glass"
            }`}
          >
            {plan.highlight && (
              <span className="absolute -top-3 left-7 rounded-full bg-pulse-gradient px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                Most popular
              </span>
            )}
            <h3 className="font-display text-lg font-semibold text-white">{plan.name}</h3>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="font-display text-4xl font-bold text-white">{plan.price}</span>
              <span className="text-sm text-white/40">{plan.period}</span>
            </div>
            <ul className="mt-6 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                  <span className="mt-0.5 text-pulse-pink">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#signup"
              className={`focus-ring mt-8 block rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition ${
                plan.highlight
                  ? "bg-pulse-gradient text-white hover:brightness-110"
                  : "bg-white/5 text-white/90 hover:bg-white/10"
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
