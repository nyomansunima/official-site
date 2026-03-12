interface ItemProps {
  children: React.ReactNode;
  href: string;
}

function Item({ href, children }: ItemProps) {
  return (
    <a
      className="text-foreground text-sm transition-colors duration-300 hover:text-foreground/60"
      href={href}
    >
      {children}
    </a>
  );
}

export function Header() {
  return (
    <header className="flex items-center gap-7 border-border border-b border-dashed pt-7 pb-3">
      <Item href="/">Home</Item>
      <Item href="/projects">Projects</Item>
      <Item href="/contents">Contents</Item>
      <Item href="/contact">Contact</Item>
    </header>
  );
}
