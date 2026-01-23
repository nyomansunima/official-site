import projects from "./projects-data.json" with { type: "json" };

interface ProjectData {
  title: string;
  link: string;
  desc: string;
}

interface ProjectItemProps {
  project: ProjectData;
}

interface ProjectGroupData {
  title: string;
  list: ProjectData[];
}

interface ProjectGroupProps {
  group: ProjectGroupData;
}

function ProjectItem({ project }: ProjectItemProps) {
  const { title, link, desc } = project;

  return (
    <a
      className="flex flex-col gap-x-2 gap-y-1 py-2 md:flex-row md:items-center"
      href={link}
      target="_blank"
    >
      <div className="flex items-center gap-2">
        <svg
          className="fill-foreground/40"
          height="10"
          viewBox="0 0 24 24"
          width="10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5Z" />
        </svg>

        <span>{title}</span>
        <span className="hidden md:block">-</span>
      </div>
      <span className="ml-4 text-foreground/60 md:ml-0">{desc}</span>
    </a>
  );
}

function ProjectGroup({ group }: ProjectGroupProps) {
  const { title, list } = group;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-foreground/60">{title}:</h2>

      <div className="flex flex-col gap-1">
        {list.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-20">
        {projects.map((group, i) => (
          <ProjectGroup group={group} key={i} />
        ))}
      </div>
    </div>
  );
}
