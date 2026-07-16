import { Dialog, DialogContent, DialogTrigger } from "./dialog";

function DetailsModal() {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <span
            className="flex cursor-pointer items-center text-foreground/40 tracking-tight outline-none transition-all duration-300 hover:text-foreground"
            data-cuelume-hover="tick"
          >
            About me
          </span>
        }
      />
      <DialogContent>
        <div className="prose max-w-full">
          <h1>Few words.</h1>
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
