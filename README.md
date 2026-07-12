# Pink Pulse AI — Step 1: Homepage

Next.js 14 + TypeScript + Tailwind. This is the homepage UI shell — all market
data (BTC price, prediction %, confidence, sentiment, news) is **mocked** for now.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## What's built (Step 1)

- Nav, hero with the "pulse" signature element (animated rings + confidence meter + buy/sell
  pressure gauge + countdown), market sentiment strip, pricing, testimonials, FAQ, footer.
- Theme tokens (pink `#FF4FA3` / purple `#8A2BE2` / charcoal `#121212`) live in
  `tailwind.config.ts` — change once, updates everywhere.
- Glassmorphism utilities (`.glass`, `.glass-strong`) in `app/globals.css`.
- Respects `prefers-reduced-motion`; keyboard focus rings on all interactive elements.

## Next steps (in order)

1. **Live BTC data** — swap the `MOCK` object in `components/Hero.tsx` for a real fetch
   (Coinbase/Binance public endpoints, no key needed for spot price).
2. **Port your signal logic** — bring over the rule-based engine from `kalshi-btc-tool`
   (RSI, VWAP, MTF trend, entry/exit thresholds) into an API route (`app/api/predict/route.ts`)
   so the prediction card reads real signals instead of mock data.
3. **Dashboard page** (`app/dashboard/page.tsx`) — the logged-in view with historical
   predictions, accuracy graph, portfolio tracker.
4. **Auth** (Clerk or Auth.js) — gate the dashboard, wire up Log in / Get started.
5. **Postgres + Stripe** — only once 1–4 work end to end. Don't build billing before
   there's something worth paying for.

## Deploy

Push to GitHub, then import into Vercel (frontend). No env vars needed yet since
everything is mocked — you'll add API keys in step 1–2 above.
