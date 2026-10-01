import { AboutDialog } from "./about-dialog";

export function HeroSection() {
  return (
    <section className="flex flex-col">
      <h1 className="font-medium">Nyoman Sunima</h1>

      <p className="mt-6 text-pretty leading-relaxed">
        Software engineer based in Bali, Indonesia. Crafting consumer products
        for a global market. Driven over $207M in ARR and cut $1.5M in
        production costs.
      </p>

      <p className="mt-3 text-pretty leading-relaxed">
        Currently contributed at{" "}
        <a
          href="https://balimmo-construction.com"
          rel="noopener"
          target="_blank"
        >
          Balimmo
        </a>{" "}
        to build saas for property. Previously working at{" "}
        <a href="https://www.rimlogistics.com" rel="noopener" target="_blank">
          RIM
        </a>
        ,{" "}
        <a href="https://www.withjoy.com" rel="noopener" target="_blank">
          Joy
        </a>
        ,{" "}
        <a href="https://www.procore.com" rel="noopener" target="_blank">
          Procore
        </a>{" "}
        and{" "}
        <a href="https://www.dimata.com" rel="noopener" target="_blank">
          Dimata
        </a>
        .
      </p>

      <div className="mt-6 flex select-none items-center gap-1.5 text-foreground/10">
        <a
          className="flex select-none items-center gap-1 rounded-full bg-primary px-3 py-2 font-medium text-primary-foreground text-sm leading-none tracking-tight transition-all duration-300 [&>svg]:size-3.5"
          data-cuelume-hover="press"
          href="https://cal.com/nyomansunima/connects?duration=15"
          rel="noopener"
          target="_blank"
        >
          <svg
            className="icon icon-tabler icons-tabler-filled icon-tabler-square-rounded-check"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
            <path
              d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
              fill="currentColor"
            />
          </svg>
          Book a Call
        </a>{" "}
        <a
          className="flex select-none items-center gap-1 rounded-full bg-secondary px-3 py-2 font-medium text-secondary-foreground text-sm leading-none tracking-tight transition-all duration-300 hover:text-foreground [&>svg]:size-3.5"
          data-cuelume-hover="press"
          href="https://t.me/nyomansunima"
          rel="noopener"
          target="_blank"
        >
          <svg
            className="icon icon-tabler icons-tabler-filled icon-tabler-brand-messenger"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
            <path d="M18.894 5.446c3.667 3.127 4.168 8.238 1.152 11.897c-2.842 3.447 -7.965 4.583 -12.231 2.805l-.233 -.101l-4.374 .931l-.033 .005l-.042 .008l-.031 .002l-.01 .003h-.018l-.052 .004l-.024 -.001l-.02 .001l-.033 -.003h-.035l-.022 -.004l-.022 -.002l-.035 -.007l-.034 -.005l-.016 -.004l-.024 -.005l-.049 -.016l-.024 -.005l-.011 -.005l-.022 -.007l-.045 -.02l-.03 -.012l-.011 -.006l-.014 -.006l-.031 -.018l-.045 -.024l-.016 -.011l-.037 -.026l-.04 -.027l-.015 -.013l-.043 -.04l-.025 -.02l-.062 -.07l-.013 -.013l-.011 -.014l-.027 -.04l-.026 -.035a1 1 0 0 1 -.054 -.095l-.006 -.013l-.019 -.045l-.02 -.042l-.004 -.016l-.004 -.01l-.011 -.04l-.013 -.04l-.002 -.014l-.005 -.019l-.005 -.033l-.008 -.042l-.002 -.031l-.003 -.026l-.004 -.054l.001 -.036l.001 -.023l.002 -.053l.004 -.025v-.019l.008 -.036l.005 -.033l.004 -.017l.005 -.023l.018 -.06l.003 -.013l1.15 -3.45l-.022 -.037c-2.21 -3.747 -1.209 -8.392 2.411 -11.118l.23 -.168c3.898 -2.766 9.469 -2.54 13.073 .535m-2.062 5a1 1 0 0 0 -1.387 -.278l-2.318 1.544l-1.42 -1.42a1 1 0 0 0 -1.262 -.124l-3 2a1 1 0 0 0 -.277 1.387l.07 .093a1 1 0 0 0 1.317 .184l2.317 -1.545l1.42 1.42a1 1 0 0 0 1.263 .125l3 -2a1 1 0 0 0 .277 -1.387" />
          </svg>
          Chat Now
        </a>
        <AboutDialog />
      </div>
    </section>
  );
}
