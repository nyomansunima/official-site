interface ItemProps {
  children: React.ReactNode;
  href: string;
}

function Item({ href, children }: ItemProps) {
  return (
    <a
      className="text-foreground/60 tracking-tighter transition-colors duration-300 hover:text-foreground"
      href={href}
    >
      {children}
    </a>
  );
}

export function Header() {
  return (
    <header className="flex items-center gap-5 pt-7 pb-3 border-b border-border border-dashed">
      <Item href="/">Home</Item>
      <Item href="/projects">Projects</Item>
      <Item href="/contents">Contents</Item>
      <Item href="/contact">Contact</Item>
    </header>
  );
}
