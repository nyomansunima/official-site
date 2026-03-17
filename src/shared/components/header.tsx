interface ItemProps {
  children: React.ReactNode;
  href: string;
}

function Item({ href, children }: ItemProps) {
  return (
    <a
      className="text-foreground tracking-tight transition-colors duration-300 hover:text-accent"
      href={href}
    >
      {children}
    </a>
  );
}

export function Header() {
  return (
    <header className="flex items-center gap-5 pt-7 pb-3">
      <Item href="/">Home</Item>
      <Item href="/projects">Projects</Item>
      <Item href="/thoughts">Thoughts</Item>
      <Item href="/contact">Contact</Item>
    </header>
  );
}
