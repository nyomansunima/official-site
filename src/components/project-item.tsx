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
      className="group/item group-hover/list:text-foreground/40 flex items-center gap-x-2 py-1 transition-all duration-300 outline-none"
      data-cuelume-hover="press"
      href={project.href}
      rel="noopener"
      target="_blank"
    >
      <span className="group-hover/item:text-foreground grow transition-all duration-300">
        {project.desc} ( {project.title} )
      </span>
      <span className="text-foreground/20 group-hover/item:text-foreground tracking-tight transition-all duration-300">
        {project.date}
      </span>
    </a>
  );
}
