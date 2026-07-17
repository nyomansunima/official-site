import { Dialog, DialogContent, DialogTrigger } from "./dialog";

const experiences = [
  {
    company: "Dimata",
    date: "07/19",
    role: "Software engineer",
    url: "https://dimata.com",
  },
  {
    company: "Procore",
    date: "02/22",
    role: "Senior software engineer",
    url: "https://procore.com",
  },
  {
    company: "Joy",
    date: "02/24",
    role: "Senior product engineer",
    url: "https://withjoy.com",
  },
  {
    company: "RIM",
    date: "07/24",
    role: "Senior software engineer",
    url: "https://rimlogistics.com",
  },
].reverse();

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
      href={exp.url}
      rel="noopener"
      target="_blank"
    >
      <svg
        className="text-foreground/20"
        fill="currentColor"
        height={10}
        viewBox="0 0 24 24"
        width={10}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
      </svg>
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

function DetailsModal() {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <button
            className="flex cursor-pointer items-center text-foreground/40 tracking-tight outline-none transition-all duration-300 hover:text-foreground"
            data-cuelume-hover="tick"
            type="button"
          >
            About me
          </button>
        }
      />
      <DialogContent>
        <div className="flex flex-col">
          <div className="flex items-center justify-between border-border border-b border-dashed pb-2">
            <span className="text-foreground/40 leading-tight tracking-tight">
              Few words.
            </span>
          </div>

          <div className="mt-5">
            <div className="rounded-xl border border-border border-dashed bg-surface p-1">
              <img
                alt="Others"
                className="overflow-hidden rounded-lg"
                src="/images/meta-image.png"
              />
            </div>

            <p className="mt-3 text-pretty text-foreground/60 leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur nisi, sunt, mollitia, nam quo tenetur praesentium
              velit dolor impedit debitis dicta et odio quos hic unde. Ullam
              sequi ipsum illum, expedita consequatur totam. Eos suscipit
              laborum, iste explicabo repellendus doloribus voluptatibus nulla
              voluptatum autem nihil inventore, amet impedit ut at?
            </p>
            <p className="mt-3 text-pretty text-foreground/60 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              quibusdam modi iste doloremque nam esse eius at molestiae
              accusamus excepturi!
            </p>
          </div>
        </div>
        <div className="mt-16 flex flex-col">
          <div className="flex items-center justify-between border-border border-b border-dashed pb-2">
            <span className="text-foreground/40 leading-tight tracking-tight">
              Experiences.
            </span>
          </div>
          <div className="group/list mt-5 flex flex-col gap-2">
            {experiences.map((exp, i) => (
              <Experience exp={exp} key={i} />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function HeroSection() {
  return (
    <section className="flex flex-col">
      <div className="flex">
        <div className="cursor-pointer rounded-full border border-border border-dashed p-0.5 transition-all duration-300 hover:-translate-y-0.5">
          <img
            alt="Nyoman Sunima Profile Avatar"
            className="h-11 w-11 overflow-hidden rounded-full object-cover"
            src="/images/avatar.png"
          />
        </div>
      </div>

      <p className="mt-3 text-pretty text-foreground/60 leading-relaxed">
        Hello, I'am <span className="text-foreground">Nyoman Sunima</span> a
        product specialized software engineer. Based in{" "}
        <span className="text-foreground">Bali, Indonesia</span>.
      </p>

      <p className="mt-3 text-pretty text-foreground/60 leading-relaxed">
        Helped companies to generate $207M+ in annual revenue and reduced over
        $1.5M of total development costs. Previously worked at{" "}
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

      <div className="mt-6 flex items-center gap-2 text-foreground/10">
        <a
          className="flex items-center text-foreground/40 tracking-tight transition-all duration-300 hover:text-foreground"
          data-cuelume-hover="tick"
          href="https://cal.com/nyomansunima/connects?duration=15"
          rel="noopener"
          target="_blank"
        >
          Book a call
        </a>{" "}
        /
        <a
          className="flex items-center text-foreground/40 tracking-tight transition-all duration-300 hover:text-foreground"
          data-cuelume-hover="tick"
          href="https://api.whatsapp.com/send?phone=6285161619109"
          rel="noopener"
          target="_blank"
        >
          Chat now
        </a>
        /
        <DetailsModal />
      </div>
    </section>
  );
}
