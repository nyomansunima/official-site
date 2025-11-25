import { ArticleContent } from "@shared/components";
import avatarImg from "./Avatar.webp";

export function HeroSection() {
  return (
    <section className="flex flex-col">
      <ArticleContent>
        <div className="not-prose flex">
          <div className="flex cursor-pointer items-center justify-center rounded-full border border-border border-dashed p-1">
            <img
              alt="Nyoman Sunima Profile"
              className="not-prose rounded-full! object-cover"
              height={48}
              src={avatarImg}
              width={48}
            />
          </div>
        </div>

        <h2>Nyoman Sunima</h2>

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
