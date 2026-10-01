interface WorkItemProps {
  work: {
    date: string;
    url: string;
    img: string;
    title: string;
  };
}

export function WorkItem({ work }: WorkItemProps) {
  return (
    <a
      className="group/item relative flex cursor-pointer flex-col outline-none transition-all duration-300"
      data-cuelume-hover="press"
      href={work.url}
      rel="noopener"
      target="_blank"
    >
      <img
        alt={work.title}
        className="aspect-4/3 w-full overflow-hidden rounded-lg object-cover object-top"
        src={work.img}
      />
      <div className="absolute inset-x-4 top-3 flex justify-between text-center">
        <span className="text-white tracking-tight mix-blend-difference transition-all duration-300 group-hover/item:text-white sm:text-white/0">
          {work.title}
        </span>
        <span className="text-white tracking-tight mix-blend-difference transition-all duration-300 group-hover/item:text-white sm:text-white/0">
          {work.date}
        </span>
      </div>
    </a>
  );
}
