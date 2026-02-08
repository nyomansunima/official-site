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
    <header className="relative flex flex-wrap items-center gap-7 pt-7 pb-5 after:absolute after:bottom-0 after:h-0.5 after:w-full after:bg-[repeating-linear-gradient(to_right,var(--color-foreground)_0px,var(--color-foreground)_5px,transparent_5px,transparent_10px)] after:bg-position-[100%_1px] after:bg-no-repeat">
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contents">Contents</Link>
      <Link href="/contact">Contact</Link>
    </header>
  );
}
