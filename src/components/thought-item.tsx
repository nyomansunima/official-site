interface ThoughtItemProps {
  thought: {
    title: string;
    url: string;
    date: string;
    type: string;
  };
}

export function ThoughtItem({ thought }: ThoughtItemProps) {
  return (
    <a
      className="group/item group-hover/list:text-foreground/40 flex items-center gap-2 py-1 transition-all duration-300 outline-none"
      data-cuelume-hover="press"
      href={thought.url}
      rel="noopener"
      target="_blank"
    >
      <span className="group-hover/item:text-foreground flex grow transition-all duration-300">
        {thought.title}
      </span>
      <span className="text-foreground/20 group-hover/item:text-foreground tracking-tight transition-all duration-300">
        {thought.date}
      </span>
    </a>
  );
}
