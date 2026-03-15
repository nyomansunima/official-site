interface ItemProps {
  children: React.ReactNode;
  href: string;
}

function Item({ href, children }: ItemProps) {
  return (
    <a
      className="text-foreground tracking-tighter transition-colors duration-300 hover:text-accent text-sm"
      href={href}
    >
      {children}
    </a>
  );
}

export function Header() {
  return (
    <header className="flex items-center gap-5 pt-7 pb-3 border-b border-primary border-dashed relative before:absolute before:inset-x-0 before:-bottom-1 before:border-b before:border-primary before:border-dashed">
      <Item href="/">Home</Item>
      <Item href="/projects">Projects</Item>
      <Item href="/contents">Contents</Item>
      <Item href="/contact">Contact</Item>
    </header>
  );
}
