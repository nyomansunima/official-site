import { buttonVariants } from "./button";

export function HeroSection() {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="cursor-pointer rounded-full border-2 border-border border-dashed p-0.5 transition-all duration-300 hover:-translate-y-0.5">
          <img
            alt="Nyoman Sunima Profile Avatar"
            className="h-12 w-12 overflow-hidden rounded-full object-cover"
            src="/images/avatar.png"
          />
        </div>
      </div>

      <h1 className="mt-5 text-balance font-medium text-xl leading-tight tracking-tight">
        Product specialized
        <br />
        software engineer
      </h1>

      <p className="mt-3 text-pretty text-foreground/60 leading-relaxed">
        A product engineer based in bali, indonesia.{" "}
        <span className="text-foreground italic">
          {" "}
          Helped companies to generate $207M+ in annual revenue and reduced over
          $1.5M of total development costs.
        </span>
      </p>

      <p className="mt-3 text-pretty text-foreground/60 leading-relaxed">
        Previously worked at{" "}
        <a
          className="text-foreground italic"
          href="https://www.rimlogistics.com"
          rel="noopener"
          target="_blank"
        >
          RIM
        </a>
        ,{" "}
        <a
          className="text-foreground italic"
          href="https://www.withjoy.com"
          rel="noopener"
          target="_blank"
        >
          Joy
        </a>
        ,{" "}
        <a
          className="text-foreground italic"
          href="https://www.procore.com"
          rel="noopener"
          target="_blank"
        >
          Procore
        </a>{" "}
        and{" "}
        <a
          className="text-foreground italic"
          href="https://dimata.com"
          rel="noopener"
          target="_blank"
        >
          Dimata
        </a>{" "}
        to{" "}
        <span className="text-foreground italic">
          built products and transform the legacy systems
        </span>{" "}
        to lift profits, increase efficiencies & reduce the costs.
      </p>

      <div className="mt-3 flex gap-1">
        <a
          className="flex w-full cursor-pointer rounded-xl border border-border border-dashed bg-surface p-1 transition-all duration-300 hover:-translate-y-0.5"
          href={"/"}
        >
          <img
            alt={"Banner"}
            className="h-30 w-full select-none overflow-hidden rounded-lg object-cover object-top"
            src={
              "https://cdn.dribbble.com/userupload/44955246/file/d31438eeeb0e5c6f1fc82914d9a26056.png"
            }
          />
        </a>
      </div>

      <div className="mt-6 flex items-center gap-2">
        <a
          className={buttonVariants({
            size: "default",
            variant: "default",
            className: "transition-all duration-300 hover:-translate-y-0.5",
          })}
          href="https://cal.com/nyomansunima/connects?duration=15"
          rel="noopener"
          target="_blank"
        >
          <svg
            data-icon="inline-start"
            fill="currentColor"
            height={14}
            viewBox="0 0 24 24"
            width={14}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
            <path
              d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
              fill="currentColor"
            />
          </svg>
          Book a call
        </a>
        <a
          className={buttonVariants({
            size: "default",
            variant: "secondary",
            className: "transition-all duration-300 hover:-translate-y-0.5",
          })}
          href="https://api.whatsapp.com/send?phone=6285161619109"
          rel="noopener"
          target="_blank"
        >
          <svg
            data-icon="inline-start"
            fill="currentColor"
            height={14}
            viewBox="0 0 24 24"
            width={14}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
            <path d="M18.894 5.446c3.667 3.127 4.168 8.238 1.152 11.897c-2.842 3.447 -7.965 4.583 -12.231 2.805l-.233 -.101l-4.374 .931l-.033 .005l-.042 .008l-.031 .002l-.01 .003h-.018l-.052 .004l-.024 -.001l-.02 .001l-.033 -.003h-.035l-.022 -.004l-.022 -.002l-.035 -.007l-.034 -.005l-.016 -.004l-.024 -.005l-.049 -.016l-.024 -.005l-.011 -.005l-.022 -.007l-.045 -.02l-.03 -.012l-.011 -.006l-.014 -.006l-.031 -.018l-.045 -.024l-.016 -.011l-.037 -.026l-.04 -.027l-.015 -.013l-.043 -.04l-.025 -.02l-.062 -.07l-.013 -.013l-.011 -.014l-.027 -.04l-.026 -.035a1 1 0 0 1 -.054 -.095l-.006 -.013l-.019 -.045l-.02 -.042l-.004 -.016l-.004 -.01l-.011 -.04l-.013 -.04l-.002 -.014l-.005 -.019l-.005 -.033l-.008 -.042l-.002 -.031l-.003 -.026l-.004 -.054l.001 -.036l.001 -.023l.002 -.053l.004 -.025v-.019l.008 -.036l.005 -.033l.004 -.017l.005 -.023l.018 -.06l.003 -.013l1.15 -3.45l-.022 -.037c-2.21 -3.747 -1.209 -8.392 2.411 -11.118l.23 -.168c3.898 -2.766 9.469 -2.54 13.073 .535m-2.062 5a1 1 0 0 0 -1.387 -.278l-2.318 1.544l-1.42 -1.42a1 1 0 0 0 -1.262 -.124l-3 2a1 1 0 0 0 -.277 1.387l.07 .093a1 1 0 0 0 1.317 .184l2.317 -1.545l1.42 1.42a1 1 0 0 0 1.263 .125l3 -2a1 1 0 0 0 .277 -1.387" />
          </svg>
          Chat now
        </a>
      </div>
    </div>
  );
}
