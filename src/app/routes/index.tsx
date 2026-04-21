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
        <p>
          🖐️ Hello, my name is <i>"nyoman sunima"</i> . A product engineer based
          in bali, indonesia. Currently working as freelancer.
        </p>

        <p>
          I've successfully helped companies to generate $207M+ in annual
          revenue, saved over $237K in annual infrastructure costs and led the
          development team up to 30% faster 🎉.
        </p>

        <p>
          Previously worked at{" "}
          <a
            className="italic"
            href="https://www.rimlogistics.com"
            rel="noopener"
            target="_blank"
          >
            RIM
          </a>
          ,{" "}
          <a
            className="italic"
            href="https://www.withjoy.com"
            rel="noopener"
            target="_blank"
          >
            Joy
          </a>
          ,{" "}
          <a
            className="italic"
            href="https://www.procore.com"
            rel="noopener"
            target="_blank"
          >
            Procore
          </a>{" "}
          and{" "}
          <a
            className="italic"
            href="https://dimata.com"
            rel="noopener"
            target="_blank"
          >
            Dimata
          </a>{" "}
          to built products and transform the legacy systems to lift profits,
          increase efficiencies & reduce the costs.
        </p>

        <p>
          Running the{" "}
          <a
            className="italic"
            href={"https://thecoined.site"}
            rel="noopener"
            target="_blank"
          >
            Coined
          </a>
          , growing the communities at{" "}
          <a
            className="italic"
            href={"https://thegridline.site"}
            rel="noopener"
            target="_blank"
          >
            Gridline
          </a>{" "}
          &{" "}
          <a
            className="italic"
            href={"https://thescolon.site"}
            rel="noopener"
            target="_blank"
          >
            Scolon
          </a>
          . Curated list for good design and resources at{" "}
          <a
            className="italic"
            href={"https://heroico.site"}
            rel="noopener"
            target="_blank"
          >
            Heroico
          </a>{" "}
          &{" "}
          <a
            className="italic"
            href={"https://thegoodie.site"}
            rel="noopener"
            target="_blank"
          >
            Goodie
          </a>
          .
        </p>

        <p>
          Building open source projects at{" "}
          <a
            className="italic"
            href={"https://picosecond.moono.site"}
            rel="noopener"
            target="_blank"
          >
            Picosecond
          </a>
          ,{" "}
          <a
            className="italic"
            href={"https://oneday.moono.site"}
            rel="noopener"
            target="_blank"
          >
            Oneday
          </a>
          ,{" "}
          <a
            className="italic"
            href={"https://compobits.moono.site"}
            rel="noopener"
            target="_blank"
          >
            Compobits
          </a>{" "}
          &{" "}
          <a
            className="italic"
            href={"https://mailo.moono.site"}
            rel="noopener"
            target="_blank"
          >
            Mailo
          </a>
          . Shipping businesses & users products at{" "}
          <a
            className="italic"
            href={"https://poockey.site"}
            rel="noopener"
            target="_blank"
          >
            Poockey
          </a>
          ,{" "}
          <a
            className="italic"
            href={"https://okay.moono.site"}
            rel="noopener"
            target="_blank"
          >
            Okay
          </a>
          ,{" "}
          <a
            className="italic"
            href={"https://signa.moono.site"}
            rel="noopener"
            target="_blank"
          >
            Signa
          </a>{" "}
          &{" "}
          <a
            className="italic"
            href={"https://tryhaloo.site"}
            rel="noopener"
            target="_blank"
          >
            Haloo
          </a>
          .
        </p>

        <p>
          Currently, focus on design & develop projects to ship globally, also
          helping business to create their products. See more of{" "}
          <a className="italic" href={"/projects"}>
            what i've shipped
          </a>
          ,{" "}
          <a className="italic" href={"/thoughts"}>
            my thoughts
          </a>{" "}
          and{" "}
          <a className="italic" href={"/contact"}>
            reach out
          </a>{" "}
          for collaboration 📮.
        </p>
      </article>
    </main>
  );
}
