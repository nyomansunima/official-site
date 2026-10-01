import experiences from "~/data/experiences.json";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";

const reversedExperiences = [...experiences].reverse();

interface ExperienceProps {
  exp: {
    url: string;
    company: string;
    role: string;
    date: string;
  };
}

function Experience({ exp }: ExperienceProps) {
  return (
    <a
      className="group/item flex items-center gap-2 py-1 outline-none transition-all duration-300 group-hover/list:text-foreground/40"
      data-cuelume-hover="press"
      href={exp.url}
      rel="noopener"
      target="_blank"
    >
      <span className="transition-all duration-300 group-hover/item:text-foreground">
        {exp.company}
      </span>
      <svg
        className="transition-all duration-300 group-hover/item:text-foreground"
        fill="none"
        height={14}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        width={14}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <path d="M9 9l3 3l-3 3" />
        <path d="M13 9l3 3l-3 3" />
        <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
      </svg>
      <span className="flex grow text-foreground/40 transition-all duration-300 group-hover/item:text-foreground">
        {exp.role}
      </span>
      <span className="text-foreground/20 tracking-tight transition-all duration-300 group-hover/item:text-foreground">
        {exp.date}
      </span>
    </a>
  );
}

function AboutMe() {
  return (
    <div className="flex flex-col">
      <div className="prose">
        <img
          alt="Activity"
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1729709241070/2aa95ebc-0bfd-4362-90cb-3b238cc4ef46.jpeg"
        />
        <p>
          Hello, my name is Nyoman Sunima, a product designer, software engineer
          & creator with a passion for solving problems. Located in Bali,
          Indonesia and work with remotely teams around the world. I loved to
          shipping products, apps, sites and also exploring the technology.
        </p>
        <p>
          It's all start when i'am in a vocational high school (2016) at{" "}
          <a href="https://smknbalimandara.sch.id">Bali Mandara</a>, i'am had a
          lot of interest of design, especially in website. I take the computer
          and networking class, but also learning design & development alone
          with the tutorials. It's bring me a big impact and also guide my life
          into tech industries.
        </p>
        <img
          alt="Research"
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1729709277676/dd474a4c-a2fd-4b98-bcf2-3002c6c4aab5.jpeg"
        />
        <p>
          I spare my time to educate and grow my knowledge into become better
          one and understand the problem really well. I like to read books,
          watching video from other creators and even following the training.
          It's make me understand and have a knowledge to solve the prolem.
          Because i can find some references and see how other people solve and
          do it corectly. So i can see the bigger picture and find the best
          solutions for it.
        </p>
        <img
          alt="Read, write and share"
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1729709291876/a59a6504-a98b-4818-955f-efba3364d5b6.jpeg"
        />
      </div>
      <div className="mt-16 flex flex-col">
        <div className="flex select-none items-center justify-between">
          <span className="text-foreground/40 leading-tight tracking-tight">
            Experiences.
          </span>
        </div>
        <div className="group/list mt-5 flex flex-col gap-1">
          {reversedExperiences.map((exp, i) => (
            <Experience exp={exp} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function AboutDialog() {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <button
            className="flex cursor-pointer select-none items-center gap-1 rounded-full border border-border border-dashed px-3 py-2 font-medium text-foreground text-sm leading-none tracking-tight transition-all duration-300 hover:text-foreground [&>svg]:size-3.5"
            data-cuelume-hover="press"
            type="button"
          >
            <svg
              className="icon icon-tabler icons-tabler-filled icon-tabler-folder-open"
              fill="currentColor"
              height={24}
              viewBox="0 0 24 24"
              width={24}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" stroke="none" />
              <path d="M2 6c0 -.796 .316 -1.558 .879 -2.121c.563 -.563 1.325 -.879 2.121 -.879h4l.099 .005c.229 .023 .444 .124 .608 .288l2.707 2.707h6.586c.796 0 1.558 .316 2.121 .879c.319 .319 .559 .703 .707 1.121l-14.523 0c-.407 0 -.805 .125 -1.14 .356c-.292 .203 -.525 .48 -.674 .801l-.058 .141l-1.379 3.676c-.194 .517 .068 1.093 .585 1.287c.517 .194 1.094 -.068 1.288 -.585l1.134 -3.027c.146 -.39 .519 -.649 .937 -.649h13.002l.217 .012c.216 .024 .426 .082 .624 .173c.054 .025 .107 .053 .159 .083c.199 .115 .377 .263 .525 .439c.188 .222 .325 .482 .403 .762c.077 .28 .092 .573 .045 .859c-.001 .008 -.003 .016 -.005 .024l-.995 5.21c-.131 .686 -.497 1.304 -1.036 1.749c-.47 .389 -1.046 .624 -1.65 .677l-.261 .012h-14.026c-.796 0 -1.558 -.316 -2.121 -.879c-.563 -.563 -.879 -1.325 -.879 -2.121v-11z" />
            </svg>
            About Me
          </button>
        }
      />
      <DialogContent>
        <AboutMe />
      </DialogContent>
    </Dialog>
  );
}
