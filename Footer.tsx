export default function Footer() {
  const cols = [
    {
      title: "Product",
      links: ["Dashboard", "Pricing", "Blog"],
    },
    {
      title: "Company",
      links: ["About", "Contact"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service"],
    },
  ];
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <span className="font-display text-lg font-semibold text-white">
              Pink Pulse <span className="text-gradient">AI</span>
            </span>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-white/40">
              Probability-based Bitcoin forecasts. Not financial advice — always do your own
              research.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                {col.title}
              </p>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="focus-ring text-sm text-white/60 transition hover:text-white"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/30">
          © {new Date().getFullYear()} Pink Pulse AI. All forecasts are probabilistic, not
          guarantees.
        </div>
      </div>
    </footer>
  );
}
