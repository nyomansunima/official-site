import { Link } from "react-router"
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
          apps, saas, sites and tools. I'am currently working as freelance and
          building my own saas at{" "}
          <Link
            to={"https://moono.space"}
            target="_blank"
            className="underline"
          >
            Moono
          </Link>
          .
        </p>

        <p>
          Founded{" "}
          <Link
            to={"https://tryweebo.one"}
            target="_blank"
            className="underline"
          >
            Weebo
          </Link>{" "}
          the web design partner for business and{" "}
          <Link
            to={"https://usesonibble.site"}
            target="_blank"
            className="underline"
          >
            Sonibble
          </Link>{" "}
          the all in one solutions for business growth. Also actively shipping
          open source project at{" "}
          <Link
            to={"https://weecraft.club"}
            target="_blank"
            className="underline"
          >
            Weecraft
          </Link>
          .
        </p>

        <p>
          Before that, I was a senior software engineer at{" "}
          <Link to={"https://dimata.com"} target="_blank" className="underline">
            Dimata
          </Link>
          , an software company that building enterprise app for business and
          management. Then doing alot of freelance jobs for design a websites,
          building apps, and designing apps.
        </p>

        <p>
          I was actively creating content about business, indie hacking and
          productivity. Then help web designers to grows at{" "}
          <Link
            to={"https://thegridline.site"}
            target="_blank"
            className="underline"
          >
            The Gridline
          </Link>
          , and share devs tips at{" "}
          <Link
            to={"https://thescolon.site"}
            target="_blank"
            className="underline"
          >
            The Scolon
          </Link>
          .
        </p>

        <p>
          Now, my focus is join a good teams to collaborate and building digital
          solutions. Still actively maintain the projects on side, and
          contribute to open source projects.
        </p>

        <p className="text-sm font-mono tracking-tight text-foreground/40">
          Build {"->"} ship {"->"} launch.
        </p>
      </div>
    </section>
  )
}
