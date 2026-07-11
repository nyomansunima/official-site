import { useMediaQuery } from "~/libs/use-media-query";
import { Button } from "./button";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "./drawer";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";

const featured: ProjectData[] = [
  {
    icon: "https://coined.vercel.app/favicon.ico",
    title: "Coined",
    href: "https://www.thecoined.site",
    desc: "Helping business build, ship faster & scale",
  },
  {
    icon: "https://www.poockey.site/favicon.ico",
    title: "Poockey",
    href: "https://www.poockey.site",
    desc: "All in one tool for personal finances",
  },
  {
    icon: "https://signa.moono.site/favicon.ico",
    title: "Signa",
    href: "https://signa.moono.site",
    desc: "Sign documents with no headache",
  },
  {
    icon: "https://s3-new.macosicons.com/macosicons/parse/macOSicons_lfznh2ZAJq_lowResPng-aeeddac5ba.png",
    title: "Creevoo",
    href: "https://www.creevoo.store",
    desc: "Building stunning website templates",
  },
  {
    icon: "https://okay.moono.site/favicon.ico",
    title: "Okay",
    href: "https://okay.moono.site",
    desc: "one tool for business transactions",
  },
];

const projects: ProjectData[] = [
  {
    icon: "https://coined.vercel.app/favicon.ico",
    title: "Coined",
    href: "https://www.thecoined.site",
    desc: "helping business build, ship faster & scale",
  },
  {
    icon: "https://www.poockey.site/favicon.ico",
    title: "Poockey",
    href: "https://www.poockey.site",
    desc: "all in one tool for personal finances",
  },
  {
    icon: "https://signa.moono.site/favicon.ico",
    title: "Signa",
    href: "https://signa.moono.site",
    desc: "sign documents with no headache",
  },
  {
    icon: "https://www.tryhaloo.site/favicon.ico",
    title: "Haloo",
    href: "https://www.tryhaloo.site",
    desc: "testimonials manager for business",
  },
  {
    icon: "https://okay.moono.site/favicon.ico",
    title: "Okay",
    href: "https://okay.moono.site",
    desc: "one tool for business transactions",
  },
  {
    icon: "https://thegoodie.site/favicon.ico",
    title: "Goodie",
    href: "https://thegoodie.site",
    desc: "indie hackers tools collections",
  },
  {
    icon: "https://s3-new.macosicons.com/macosicons/parse/macOSicons_lfznh2ZAJq_lowResPng-aeeddac5ba.png",
    title: "Creevoo",
    href: "https://www.creevoo.store",
    desc: "building stunning website templates",
  },
  {
    icon: "https://heroico.site/favicon.ico",
    title: "Heroico",
    href: "https://heroico.site",
    desc: "website design, brand & apps inspirations",
  },
  {
    icon: "https://oneday.moono.site/favicon.ico",
    title: "Oneday",
    href: "https://oneday.moono.site",
    desc: "website blocks & component collections",
  },
  {
    icon: "https://picosecond.moono.site/favicon.ico",
    title: "Picosecond",
    href: "https://picosecond.moono.site",
    desc: "seriously making ui for apps",
  },
  {
    icon: "https://mailo.moono.site/favicon.ico",
    title: "Mailo",
    href: "https://mailo.moono.site",
    desc: "react email components blocks",
  },
];

interface ProjectData {
  desc: string;
  href: string;
  icon: string;
  title: string;
}

interface ProjectProps {
  project: ProjectData;
}

function Project({ project }: ProjectProps) {
  return (
    <HoverCard>
      <HoverCardTrigger
        render={
          <a
            className="group relative flex h-13 w-13 items-center gap-2 outline-none transition-all duration-300"
            href={project.href}
            rel="noopener"
            target="_blank"
          >
            <span className="absolute h-13 w-13 rotate-12 scale-80 rounded-2xl border border-border border-dashed bg-background transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-2 group-hover:scale-95" />
            <span className="absolute h-13 w-13 scale-80 rounded-2xl border border-border border-dashed bg-background transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:scale-95" />
            <div className="absolute rounded-2xl border border-border border-dashed bg-background p-2 transition-all duration-200 group-hover:-translate-y-0.5">
              <img
                alt={project.title}
                className="overflow-hidden rounded-lg object-cover transition-all duration-300 group-hover:-rotate-6"
                height={44}
                src={project.icon}
                width={44}
              />
            </div>
          </a>
        }
      />
      <HoverCardContent>
        <div className="relative flex select-none flex-col">
          <h3 className="text-foreground">{project.title}</h3>
          <span className="text-foreground/40">{project.desc}</span>

          <svg
            className="absolute -top-2 -right-2 text-foreground/20"
            fill="currentColor"
            height={14}
            viewBox="0 0 24 24"
            width={14}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
            <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
          </svg>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

function ProjectList() {
  return (
    <div className="flex w-full justify-between gap-3">
      {featured.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </div>
  );
}

function MoreProjects() {
  return (
    <>
      <h2 className="-mx-4 border-border border-b border-dashed px-3 pb-2 font-medium tracking-tight sm:-mt-3">
        Projects.
      </h2>
      <div className="no-scrollbar max-h-[65vh] w-full overflow-y-auto py-3 sm:max-h-[60vh]">
        <div className="flex w-full flex-wrap gap-6">
          {projects.map((project, i) => (
            <Project key={i} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}

function MoreProjectsButton({ ...props }) {
  return (
    <Button
      className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
      variant="text"
      {...props}
    >
      <svg
        fill="currentColor"
        height={14}
        viewBox="0 0 24 24"
        width={14}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <path
          d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm0 5a1 1 0 0 1 .993 .883l.007 .117v5.585l2.293 -2.292a1 1 0 0 1 1.32 -.083l.094 .083a1 1 0 0 1 .083 1.32l-.083 .094l-4 4a1.008 1.008 0 0 1 -.112 .097l-.11 .071l-.114 .054l-.105 .035l-.149 .03l-.117 .006l-.075 -.003l-.126 -.017l-.111 -.03l-.111 -.044l-.098 -.052l-.092 -.064l-.094 -.083l-4 -4a1 1 0 0 1 1.32 -1.497l.094 .083l2.293 2.292v-5.585a1 1 0 0 1 1 -1z"
          fill="currentColor"
        />
      </svg>
      See more
    </Button>
  );
}

function MoreProjectsModal() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog>
        <DialogTrigger render={<MoreProjectsButton />} />
        <DialogContent showCloseButton={false}>
          <MoreProjects />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer>
      <DrawerTrigger render={<MoreProjectsButton />} />
      <DrawerContent>
        <MoreProjects />
      </DrawerContent>
    </Drawer>
  );
}

export function ProjectSection() {
  return (
    <div className="mt-16 flex flex-col">
      <h1 className="text-balance font-medium text-xl leading-tight tracking-tighter">
        Projects.
      </h1>

      <div className="mt-5 flex w-full">
        <ProjectList />
      </div>

      <div className="mt-5 flex justify-center border-border border-t border-dashed pt-3">
        <MoreProjectsModal />
      </div>
    </div>
  );
}
