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
            className="flex cursor-pointer select-none items-center text-foreground/40 text-sm tracking-tight outline-none transition-all duration-300 hover:text-foreground"
            data-cuelume-hover="tick"
            type="button"
          >
            ABOUT ME
          </button>
        }
      />
      <DialogContent>
        <div className="flex flex-col">
          <div className="flex select-none items-center justify-between border-border border-b border-dashed pb-2">
            <span className="text-foreground/40 leading-tight tracking-tight">
              Few words.
            </span>
          </div>

          <div className="mt-5">
            <div className="select-none rounded-xl border border-border border-dashed bg-surface p-1">
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
          <div className="flex select-none items-center justify-between border-border border-b border-dashed pb-2">
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
        <div className="cursor-pointer select-none rounded-full border border-border border-dashed p-0.5 transition-all duration-300 hover:-translate-y-0.5">
          <img
            alt="Nyoman Sunima Profile Avatar"
            className="h-11 w-11 overflow-hidden rounded-full object-cover"
            src="/images/avatar.png"
          />
        </div>
      </div>

      <div className="mt-5 flex select-none items-center gap-2 border-border border-b border-dashed pb-3">
        <h1 className="font-medium leading-tight tracking-tight">
          Nyoman Sunima
        </h1>
        <svg
          className="text-blue-500"
          fill="currentColor"
          height={16}
          viewBox="0 0 24 24"
          width={16}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" stroke="none" />
          <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
        </svg>
      </div>

      <p className="mt-3 text-pretty text-foreground/60 leading-relaxed">
        Specialized software engineer crafting consumer products for businesses.
        Based in <span className="text-foreground">Bali, Indonesia</span>.
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

      <div className="mt-6 flex select-none items-center gap-2 text-foreground/10">
        <a
          className="flex select-none items-center text-foreground/40 text-sm tracking-tight transition-all duration-300 hover:text-foreground"
          data-cuelume-hover="tick"
          href="https://cal.com/nyomansunima/connects?duration=15"
          rel="noopener"
          target="_blank"
        >
          BOOK A CALL
        </a>{" "}
        /
        <a
          className="flex select-none items-center text-foreground/40 text-sm tracking-tight transition-all duration-300 hover:text-foreground"
          data-cuelume-hover="tick"
          href="https://api.whatsapp.com/send?phone=6285161619109"
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
