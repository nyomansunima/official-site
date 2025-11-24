import { ArticleContent } from "@shared/components";
import avatarImg from "./Avatar.webp";

export function HeroSection() {
  return (
    <section className="flex flex-col">
      <ArticleContent>
        <div className="group not-prose flex items-center gap-3 pb-6">
          <div className="flex cursor-pointer items-center justify-center rounded-full border border-border border-dashed p-1">
            <img
              alt="Nyoman Sunima Profile"
              className="not-prose rounded-full! object-cover"
              height={60}
              src={avatarImg}
              width={60}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-medium text-lg">Nyoman Sunima</h2>
            <span className="font-mono text-foreground/60 text-sm tracking-tight">
              Product designer, software engineer & creator
            </span>
            <div className="mt-2 flex">
              <span className="cursor-pointer rounded-full bg-fuchsia-100 px-2 py-1 font-medium font-mono text-fuchsia-600 text-xs tracking-tight">
                Open to work
              </span>
            </div>
          </div>
        </div>

        <p>
          Hello, I am a product designer, software engineer & creator. Building
          saas, sites, and tools. Currently working as a freelancer, building my
          own saas at{" "}
          <a
            className="underline"
            href={"https://moono.site"}
            rel="noopener"
            target="_blank"
          >
            Moono
          </a>{" "}
          and creating website templates at{" "}
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
          </a>
          , a web design partner for business and{" "}
          <a
            className="underline"
            href={"https://usesonibble.site"}
            rel="noopener"
            target="_blank"
          >
            Sonibble
          </a>
          , a business growth solutions. Also actively shipping open-source
          projects at{" "}
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
          Before that, I was a software engineer at{" "}
          <a
            className="underline"
            href={"https://dimata.com"}
            rel="noopener"
            target="_blank"
          >
            Dimata
          </a>
          , a software company that builds enterprise apps for business and
          management. Then doing a lot of freelance jobs for building websites
          and shipping apps.
        </p>

        <p>
          Recently, building ui components at{" "}
          <a
            className="underline"
            href={"https://picosecond.vercel.app"}
            rel="noopener"
            target="_blank"
          >
            Picosecond
          </a>
          , crafting websites blocks at{" "}
          <a
            className="underline"
            href={"https://onedayui.vercel.app"}
            rel="noopener"
            target="_blank"
          >
            Oneday
          </a>{" "}
          and email templates at{" "}
          <a
            className="underline"
            href={"https://trymailo.vercel.app"}
            rel="noopener"
            target="_blank"
          >
            Mailo
          </a>
          . Also helping web designers to grow at{" "}
          <a
            className="underline"
            href={"https://thegridline.site"}
            rel="noopener"
            target="_blank"
          >
            The Gridline
          </a>{" "}
          and creating contents at{" "}
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
          Now, focus on finding & joining a good team to build products. Still
          actively maintain the projects, contribute to open-source projects,
          and craft something new on the side.
        </p>
      </ArticleContent>
    </section>
  );
}
