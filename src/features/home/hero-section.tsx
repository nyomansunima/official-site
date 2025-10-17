import avatarImg from "./Avatar.webp";

export function HeroSection() {
  return (
    <section className="flex flex-col">
      <div className="group flex items-center gap-3">
        <div className="flex cursor-pointer items-center justify-center rounded-full border-2 border-border border-dashed p-1">
          <img
            alt="Nyoman Sunima Profile"
            className="rounded-full object-cover"
            height={60}
            src={avatarImg}
            width={60}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-medium text-lg">Nyoman Sunima</h2>
          <span className="font-mono text-foreground/60 text-sm tracking-tight transition-all duration-300">
            Product designer, software engineer & creator
          </span>
          <div className="mt-2 flex">
            <span className="rounded-full bg-secondary px-2 py-1 font-mono text-xs leading-tight">
              Open to work
            </span>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-6 text-pretty text-base leading-7">
        <p>
          Hello, I'am a product designer, software engineer & creator. Building
          apps, saas, sites and tools. Currently working as freelance, building
          my own saas at{" "}
          <a
            className="underline"
            href={"https://moono.site"}
            rel="noopener"
            target="_blank"
          >
            Moono
          </a>{" "}
          and create website templates at{" "}
          <a
            className="underline"
            href={"https://creevoo.store"}
            rel="noopener"
            target="_blank"
          >
            Creevoo
          </a>
          .
        </p>

        <p>
          Founded{" "}
          <a
            className="underline"
            href={"https://tryweebo.site"}
            rel="noopener"
            target="_blank"
          >
            Weebo
          </a>{" "}
          a web design partner for business and{" "}
          <a
            className="underline"
            href={"https://usesonibble.site"}
            rel="noopener"
            target="_blank"
          >
            Sonibble
          </a>{" "}
          an all in one solutions for business growth. Also actively shipping
          open source project at{" "}
          <a
            className="underline"
            href={"https://weecraft.site"}
            rel="noopener"
            target="_blank"
          >
            Weecraft
          </a>
          .
        </p>

        <p>
          Before that, I was a senior software engineer at{" "}
          <a
            className="underline"
            href={"https://dimata.com"}
            rel="noopener"
            target="_blank"
          >
            Dimata
          </a>
          , a software company that building enterprise app for business and
          management. Then doing alot of freelance jobs for building a websites
          and shipping apps.
        </p>

        <p>
          I was actively documenting my journeys and share tips about design,
          development, business, money and productivity. Also helping web
          designers to grows at{" "}
          <a
            className="underline"
            href={"https://thegridline.site"}
            rel="noopener"
            target="_blank"
          >
            The Gridline
          </a>{" "}
          and developers to grow at{" "}
          <a
            className="underline"
            href={"https://thescolon.site"}
            rel="noopener"
            target="_blank"
          >
            The Scolon
          </a>
          .
        </p>

        <p>
          Now, focus on finding & join a good team to building products. Still
          actively maintain the projects, contribute to open source projects and
          crafting something new on the side.
        </p>

        <p className="font-mono text-foreground/40 text-sm tracking-tight">
          Build {"->"} ship {"->"} launch.
        </p>
      </div>
    </section>
  );
}
