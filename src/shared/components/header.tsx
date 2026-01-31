interface LinkProps {
  children: React.ReactNode;
  href: string;
}

function Link({ href, children }: LinkProps) {
  return (
    <a
      className="flex items-center justify-center text-foreground/60 text-sm leading-none tracking-normal transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-foreground"
      href={href}
    >
      {children}
    </a>
  );
}

export function Header() {
  return (
    <header className="flex flex-wrap items-center gap-x-7 gap-y-5 pt-7 sm:pt-12 pb-10">
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contents">Contents</Link>
      <Link href="/contact">Contact</Link>
    </header>
  );
}
