interface LinkProps {
  children: React.ReactNode;
  href: string;
}

function Link({ href, children }: LinkProps) {
  return (
    <a
      className="flex items-center justify-center text-sm leading-none tracking-normal transition-colors duration-300 hover:text-foreground/60"
      href={href}
    >
      {children}
    </a>
  );
}

export function Header() {
  return (
    <header className="flex flex-wrap items-center gap-7 border-foreground border-b border-dashed pt-7 pb-5">
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contents">Contents</Link>
      <Link href="/contact">Contact</Link>
    </header>
  );
}
