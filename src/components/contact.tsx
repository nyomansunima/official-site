interface ItemProps {
  href: string;
  title: string;
}

function Item({ href, title }: ItemProps) {
  return (
    <a
      className="group flex items-center gap-2 py-1 text-foreground transition-all duration-300 hover:text-foreground/40"
      data-cuelume-hover="tick"
      href={href}
      rel="noopener"
      target="_blank"
    >
      {title}
    </a>
  );
}

interface SlashItemProps {
  children: React.ReactNode;
  href: string;
}

function SlashItem({ children, href }: SlashItemProps) {
  return (
    <a
      className="flex items-center gap-2 text-foreground/40 leading-tight tracking-tight transition-all duration-300 hover:text-foreground"
      data-cuelume-hover="tick"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

export function ContactSection() {
  return (
    <section className="mt-20 flex flex-col">
      <div className="flex select-none items-center justify-between">
        <span className="leading-tight tracking-tight">Connects.</span>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 text-foreground/20">
        <SlashItem href="https://twitter.com/nyomansunima">Twitter</SlashItem> /
        <SlashItem href="https://linkedin.com/in/nyomansunima">
          Linkedin
        </SlashItem>{" "}
        /<SlashItem href="https://github.com/nyomansunima">Github</SlashItem> /
        <SlashItem href="https://youtube.com/@nyomansunima">Youtube</SlashItem>
      </div>

      <div className="mt-5 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-x-5 gap-y-1 sm:grid-cols-3 sm:gap-x-8">
            <Item
              href="https://producthunt.com/@nyomansunima"
              title="Producthunt"
            />
            <Item href="https://dribbble.com/nyomansunima" title="Dribbble" />
            <Item href="https://threads.net/nyomansunima_" title="Threads" />
            <Item href="https://facebook.com/nyomansunima" title="Facebook" />
            <Item
              href="https://instagram.com/nyomansunima_"
              title="Instagram"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-foreground/40">Find me on:</span>
          <div className="grid grid-cols-2 gap-x-5 gap-y-1 sm:grid-cols-3 sm:gap-x-8">
            <Item href="https://dev.to/nyomansunima" title="Dev.to" />
            <Item href="https://medium.com/@nyomansunima" title="Medium" />
            <Item href="https://substack.com/@nyomansunima" title="Substack" />
          </div>
        </div>
      </div>
    </section>
  );
}
