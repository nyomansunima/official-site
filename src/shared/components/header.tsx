type LinkProps = {
  href: string;
  children: React.ReactNode;
};

function Link({ href, children }: LinkProps) {
  return (
    <a
      className="flex text-foreground/60 text-sm leading-tight transition-all duration-300 hover:text-foreground"
      href={href}
    >
      {children}
    </a>
  );
}

export function Header() {
  return (
    <header className="flex flex-wrap items-center gap-x-7 gap-y-3 border-border border-b border-dashed py-6 pt-10">
      <Link href="/">Home</Link>
      <Link href="/works">Works</Link>
      <Link href="/crafts">Crafts</Link>
      <Link href="/journeys">Journeys</Link>
      <Link href="/stories">Stories</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/about">About</Link>
    </header>
  );
}
