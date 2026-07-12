export default function Nav() {
  const links = ["Dashboard", "Pricing", "Blog", "FAQ"];
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass-strong mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:mt-4 md:rounded-2xl">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pulse-pink opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-pulse-pink" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            Pink Pulse <span className="text-gradient">AI</span>
          </span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="focus-ring rounded text-sm text-white/70 transition hover:text-white"
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#login"
            className="focus-ring hidden rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition hover:text-white sm:block"
          >
            Log in
          </a>
          <a
            href="#signup"
            className="focus-ring rounded-lg bg-pulse-gradient px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}
