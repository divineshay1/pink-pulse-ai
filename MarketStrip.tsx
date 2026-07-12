const NEWS = [
  { source: "CoinDesk", headline: "ETF inflows accelerate as BTC holds above key support" },
  { source: "The Block", headline: "Funding rates turn positive across major perpetual markets" },
  { source: "Decrypt", headline: "On-chain volume climbs for the third straight session" },
];

export default function MarketStrip() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-4 md:grid-cols-3">
        {/* Fear & Greed */}
        <div className="glass rounded-2xl p-5">
          <p className="text-xs uppercase tracking-wider text-white/40">Fear &amp; Greed Index</p>
          <div className="mt-3 flex items-end gap-2">
            <span className="font-display text-3xl font-bold text-white">68</span>
            <span className="mb-1 text-sm font-medium text-pulse-up">Greed</span>
          </div>
          <div className="mt-3 h-1.5 w-full rounded-full bg-white/5">
            <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-pulse-down via-yellow-400 to-pulse-up" />
          </div>
        </div>

        {/* Sentiment */}
        <div className="glass rounded-2xl p-5">
          <p className="text-xs uppercase tracking-wider text-white/40">Market Sentiment</p>
          <div className="mt-3 flex items-center gap-3">
            <span className="font-display text-3xl font-bold text-pulse-up">Bullish</span>
          </div>
          <p className="mt-3 text-xs text-white/50">
            64% of tracked signals lean bullish across the last 4 hours.
          </p>
        </div>

        {/* News */}
        <div className="glass rounded-2xl p-5">
          <p className="mb-3 text-xs uppercase tracking-wider text-white/40">Recent news</p>
          <ul className="space-y-2.5">
            {NEWS.map((n) => (
              <li key={n.headline} className="text-xs leading-relaxed text-white/70">
                <span className="font-semibold text-white/90">{n.source}: </span>
                {n.headline}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
