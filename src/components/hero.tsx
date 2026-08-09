import experiences from "~/data/experiences.json";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";

const reversedExperiences = experiences.reverse();

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
      <span className="flex grow text-foreground/40">{exp.role}</span>
      <span className="text-foreground/20 tracking-tight">{exp.date}</span>
    </a>
  );
}

function AboutMe() {
  return (
    <div className="flex flex-col">
      <div className="prose flex flex-col">
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
        <div className="group/list mt-5 flex flex-col gap-2">
          {reversedExperiences.map((exp, i) => (
            <Experience exp={exp} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function DetailsModal() {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <button
            className="flex cursor-pointer select-none items-center text-foreground/40 text-sm tracking-tight outline-none transition-all duration-300 hover:text-foreground"
            data-cuelume-hover="press"
            type="button"
          >
            ABOUT ME
          </button>
        }
      />
      <DialogContent>
        <AboutMe />
      </DialogContent>
    </Dialog>
  );
}

export function HeroSection() {
  return (
    <section className="flex flex-col">
      <h1 className="font-medium">Nyoman Sunima</h1>

      <p className="mt-3 text-pretty text-foreground/60 leading-relaxed">
        Software engineer based in{" "}
        <span className="text-foreground">Bali, Indonesia</span>. Generated over
        $207M ARR and reduced $1.5M dev costs.
      </p>

      <p className="mt-3 text-pretty text-foreground/60 leading-relaxed">
        Previously worked at{" "}
        <a
          className="text-foreground"
          href="https://www.rimlogistics.com"
          rel="noopener"
          target="_blank"
        >
          RIM
        </a>
        ,{" "}
        <a
          className="text-foreground"
          href="https://www.withjoy.com"
          rel="noopener"
          target="_blank"
        >
          Joy
        </a>
        ,{" "}
        <a
          className="text-foreground"
          href="https://www.procore.com"
          rel="noopener"
          target="_blank"
        >
          Procore
        </a>{" "}
        and{" "}
        <a
          className="text-foreground"
          href="https://dimata.com"
          rel="noopener"
          target="_blank"
        >
          Dimata
        </a>
        .
      </p>

      <div className="mt-6 flex select-none items-center gap-2 text-foreground/10">
        <a
          className="flex select-none items-center text-foreground/40 text-sm tracking-tight transition-all duration-300 hover:text-foreground"
          data-cuelume-hover="press"
          href="https://cal.com/nyomansunima/connects?duration=15"
          rel="noopener"
          target="_blank"
        >
          BOOK A CALL
        </a>{" "}
        /
        <a
          className="flex select-none items-center text-foreground/40 text-sm tracking-tight transition-all duration-300 hover:text-foreground"
          data-cuelume-hover="press"
          href="https://t.me/nyomansunima"
          rel="noopener"
          target="_blank"
        >
          CHAT NOW
        </a>
        /
        <DetailsModal />
      </div>
    </section>
  );
}
