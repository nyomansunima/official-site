import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: generatedMetadata({
      title: "Product Engineer - Build Software & Systems | Nyoman Sunima",
      description:
        "Helped businesses to create their software, websites, automations and workflows that lift the profits, increase efficiencies and reduce the costs",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col">
      <article className="prose">
        <div className="not-prose">
          <img
            alt="Nyoman Sunima"
            className="cursor-pointer overflow-hidden transition-all duration-300 hover:scale-95"
            height={52}
            src="/images/avatar.png"
            width={52}
          />
        </div>
        <p>
          Hello, my name is <i>"nyoman sunima"</i>. A product engineer based in
          bali, indonesia. Currently working as freelancer.
        </p>

        <p>
          I've successfully helped companies to generate $207M+ in annual
          revenue, saved over $237K in annual infrastructure costs and led the
          development team up to 30% faster.
        </p>

        <p>
          Previously worked at{" "}
          <a
            href="https://www.rimlogistics.com"
            rel="noopener"
            target="_blank"
            className="italic"
          >
            RIM
          </a>
          ,{" "}
          <a
            href="https://www.withjoy.com"
            rel="noopener"
            target="_blank"
            className="italic"
          >
            Joy
          </a>
          ,{" "}
          <a
            href="https://www.procore.com"
            rel="noopener"
            target="_blank"
            className="italic"
          >
            Procore
          </a>{" "}
          and{" "}
          <a
            href="https://dimata.com"
            rel="noopener"
            target="_blank"
            className="italic"
          >
            Dimata
          </a>{" "}
          to built products and transform legacy systems into scalable solutions
          that help businesses to lift their profits, increase efficiencies &
          reduce the costs.
        </p>

        <p>
          Running the{" "}
          <a
            href={"https://thecoined.site"}
            rel="noopener"
            target="_blank"
            className="italic"
          >
            Coined
          </a>
          , growing the communities at{" "}
          <a
            href={"https://thegridline.site"}
            rel="noopener"
            target="_blank"
            className="italic"
          >
            Gridline
          </a>{" "}
          &{" "}
          <a
            href={"https://thescolon.site"}
            rel="noopener"
            target="_blank"
            className="italic"
          >
            Scolon
          </a>
          . Curated list for good design and resources at{" "}
          <a
            href={"https://heroico.site"}
            rel="noopener"
            target="_blank"
            className="italic"
          >
            Heroico
          </a>{" "}
          &{" "}
          <a
            href={"https://thegoodie.site"}
            rel="noopener"
            target="_blank"
            className="italic"
          >
            Goodie
          </a>
          .
        </p>

        <p>
          Building open source projects at{" "}
          <a
            href={"https://picosecond.moono.site"}
            rel="noopener"
            target="_blank"
            className="italic"
          >
            Picosecond
          </a>
          ,{" "}
          <a
            href={"https://oneday.moono.site"}
            rel="noopener"
            target="_blank"
            className="italic"
          >
            Oneday
          </a>
          ,{" "}
          <a
            href={"https://compobits.moono.site"}
            rel="noopener"
            target="_blank"
            className="italic"
          >
            Compobits
          </a>{" "}
          &{" "}
          <a
            href={"https://mailo.moono.site"}
            rel="noopener"
            target="_blank"
            className="italic"
          >
            Mailo
          </a>
          . Shipping businesses & users products at{" "}
          <a
            href={"https://poockey.site"}
            rel="noopener"
            target="_blank"
            className="italic"
          >
            Poockey
          </a>
          ,{" "}
          <a
            href={"https://okay.moono.site"}
            rel="noopener"
            target="_blank"
            className="italic"
          >
            Okay
          </a>
          ,{" "}
          <a
            href={"https://signa.moono.site"}
            rel="noopener"
            target="_blank"
            className="italic"
          >
            Signa
          </a>{" "}
          &{" "}
          <a
            href={"https://tryhaloo.site"}
            rel="noopener"
            target="_blank"
            className="italic"
          >
            Haloo
          </a>
          .
        </p>

        <p>
          Currently, focus on design & develop projects to ship globally, also
          helping business to create their products. See more of{" "}
          <a href={"/projects"}>what i've shipped</a>,{" "}
          <a href={"/thoughts"}>my thoughts</a> and{" "}
          <a href={"/contact"}>reach out</a> for collaboration.
        </p>
      </article>
    </main>
  );
}
