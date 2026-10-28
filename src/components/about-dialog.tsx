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
      className="group/item group-hover/list:text-foreground/40 flex items-center gap-2 py-1 transition-all duration-300 outline-none"
      data-cuelume-hover="press"
      href={exp.url}
      rel="noopener"
      target="_blank"
    >
      <span className="group-hover/item:text-foreground transition-all duration-300">
        {exp.company}
      </span>
      <svg
        className="group-hover/item:text-foreground transition-all duration-300"
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
      <span className="text-foreground/40 group-hover/item:text-foreground flex grow transition-all duration-300">
        {exp.role}
      </span>
      <span className="text-foreground/20 group-hover/item:text-foreground tracking-tight transition-all duration-300">
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
        <div className="flex items-center justify-between select-none">
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
            className="hover:text-foreground cursor-pointer leading-relaxed text-pretty transition-all duration-300 outline-none hover:underline focus:ring-0 focus:outline-none"
            data-cuelume-hover="press"
            type="button"
          >
            Read everything about me.
          </button>
        }
      />
      <DialogContent>
        <AboutMe />
      </DialogContent>
    </Dialog>
  );
}
