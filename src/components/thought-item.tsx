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
      className="group/item flex items-center gap-2 py-1 outline-none transition-all duration-300 group-hover/list:text-foreground/40"
      data-cuelume-hover="press"
      href={thought.url}
      rel="noopener"
      target="_blank"
    >
      <span className="flex grow transition-all duration-300 group-hover/item:text-foreground">
        {thought.title}
      </span>
      <span className="text-foreground/20 tracking-tight transition-all duration-300 group-hover/item:text-foreground">
        {thought.date}
      </span>
    </a>
  );
}
