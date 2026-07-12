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
        <p className="mt-3 text-white/50">Cancel anytime. No
