interface ProjectItemProps {
  project: {
    desc: string;
    href: string;
    icon: string;
    title: string;
    date: string;
  };
}

export function ProjectItem({ project }: ProjectItemProps) {
  return (
    <a
      className="group/item flex items-center gap-x-2 py-1 outline-none transition-all duration-300 group-hover/list:text-foreground/40"
      data-cuelume-hover="press"
      href={project.href}
      rel="noopener"
      target="_blank"
    >
      <span className="grow transition-all duration-300 group-hover/item:text-foreground">
        {project.desc} ( {project.title} )
      </span>
      <span className="text-foreground/20 tracking-tight transition-all duration-300 group-hover/item:text-foreground">
        {project.date}
      </span>
    </a>
  );
}
