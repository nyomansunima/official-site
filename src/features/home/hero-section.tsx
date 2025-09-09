import avatarImg from "./Avatar.webp"

export function HeroSection() {
  return (
    <section className="flex flex-col">
      <div className="flex gap-3 items-center group">
        <div className="p-1 flex justify-center items-center border-2 border-border border-dashed rounded-full cursor-pointer">
          <img
            src={avatarImg}
            height={60}
            width={60}
            alt="Nyoman Sunima Profile"
            className="object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-medium">Nyoman Sunima</h2>
          <span className="text-sm font-mono tracking-tight transition-all duration-300 text-foreground/60">
            Product designer, software engineer & creator
          </span>
          <div className="flex mt-2">
            <span className="text-xs font-mono leading-tight bg-secondary rounded-full px-2 py-1">
              Open to work
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 text-base leading-7 text-pretty mt-10">
        <p>
          Hello, I'am a product designer, software engineer & creator. Building
          apps, saas, sites and tools. Currently working as freelance, building
          my own saas at{" "}
          <a href={"https://moono.site"} target="_blank" className="underline">
            Moono
          </a>{" "}
          and create website templates at{" "}
          <a
            href={"https://creevoo.store"}
            target="_blank"
            className="underline"
          >
            Creevoo
          </a>
          .
        </p>

        <p>
          Founded{" "}
          <a
            href={"https://tryweebo.one"}
            target="_blank"
            className="underline"
          >
            Weebo
          </a>{" "}
          a web design partner for business and{" "}
          <a
            href={"https://usesonibble.site"}
            target="_blank"
            className="underline"
          >
            Sonibble
          </a>{" "}
          an all in one solutions for business growth. Also actively shipping
          open source project at{" "}
          <a
            href={"https://weecraft.site"}
            target="_blank"
            className="underline"
          >
            Weecraft
          </a>
          .
        </p>

        <p>
          Before that, I was a senior software engineer at{" "}
          <a href={"https://dimata.com"} target="_blank" className="underline">
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
            href={"https://thegridline.site"}
            target="_blank"
            className="underline"
          >
            The Gridline
          </a>{" "}
          and developers to grow at{" "}
          <a
            href={"https://thescolon.site"}
            target="_blank"
            className="underline"
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

        <p className="text-sm font-mono tracking-tight text-foreground/40">
          Build {"->"} ship {"->"} launch.
        </p>
      </div>
    </section>
  )
}
