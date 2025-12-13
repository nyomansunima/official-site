type LinkProps = {
  children: React.ReactNode;
  href: string;
};

function Link({ href, children }: LinkProps) {
  return (
    <a
      className="flex items-center justify-center text-foreground/60 text-sm leading-none tracking-normal transition-all duration-300 hover:text-foreground"
      href={href}
    >
      {children}
    </a>
  );
}

export function Header() {
  return (
    <header className="mb-16 flex flex-wrap items-center gap-x-5 gap-y-5 border-border border-b border-dashed pt-12 pb-7">
      <Link href="/">Home</Link>
      <Link href="/works">Works</Link>
      <Link href="/products">Products</Link>
      <Link href="/contents">Contents</Link>
      <Link href="/resources">Resources</Link>
      <Link href="/journeys">Journeys</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </header>
  );
}
