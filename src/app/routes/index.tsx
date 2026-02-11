import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: generatedMetadata({
      title:
        "Software Engineer - Build scalable software & systems | Nyoman Sunima",
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
        <h1>
          Product centric
          <br />
          software engineer.
        </h1>

        <p>
          Helped companies to generate $107M+ in annual revenue and saved over
          $237k in annual infrastructure costs. Led the development team up to
          30% faster using automation and specialized in architecting scalable
          software & systems that handle $2.3B in monthly transactions.
        </p>

        <p>
          Previously worked at{" "}
          <a href="https://www.rimlogistics.com" rel="noopener" target="_blank">
            RIM
          </a>{" "}
          and{" "}
          <a href="https://dimata.com" rel="noopener" target="_blank">
            Dimata
          </a>{" "}
          to transform legacy systems into modern, scalable solutions that help
          businesses to lift their profits, increase efficiencies and reduce the
          costs.
        </p>

        <p>
          Currently, running the{" "}
          <a href={"https://thecoined.site"} rel="noopener" target="_blank">
            coined
          </a>
          , growing the communities at{" "}
          <a href={"https://thegridline.site"} rel="noopener" target="_blank">
            gridline
          </a>{" "}
          &{" "}
          <a href={"https://thescolon.site"} rel="noopener" target="_blank">
            scolon
          </a>
          . Curated list for good design and resources at{" "}
          <a href={"https://heroico.site"} rel="noopener" target="_blank">
            heroico
          </a>{" "}
          &{" "}
          <a href={"https://thegoodie.site"} rel="noopener" target="_blank">
            goodie
          </a>
          .
        </p>

        <p>
          Building open source projects at{" "}
          <a
            href={"https://picosecond.moono.site"}
            rel="noopener"
            target="_blank"
          >
            picosecond
          </a>
          ,{" "}
          <a href={"https://oneday.moono.site"} rel="noopener" target="_blank">
            oneday
          </a>
          ,{" "}
          <a
            href={"https://compobits.moono.site"}
            rel="noopener"
            target="_blank"
          >
            compobits
          </a>{" "}
          &{" "}
          <a href={"https://mailo.moono.site"} rel="noopener" target="_blank">
            mailo
          </a>
          . Shipping businesses & users products at{" "}
          <a href={"https://poockey.site"} rel="noopener" target="_blank">
            poockey
          </a>
          ,{" "}
          <a href={"https://okay.moono.site"} rel="noopener" target="_blank">
            okay
          </a>
          ,{" "}
          <a href={"https://signa.moono.site"} rel="noopener" target="_blank">
            signa
          </a>{" "}
          &{" "}
          <a href={"https://tryhaloo.site"} rel="noopener" target="_blank">
            haloo
          </a>
          .
        </p>

        <p>
          Currently, focus on design & develop projects to ship globally, also
          helping business to create their products. See more of{" "}
          <a href={"/projects"}>what i've shipped</a>,{" "}
          <a href={"/contents"}>the thoughts</a> and{" "}
          <a href={"/contact"}>reach out</a>.
        </p>
      </article>
    </main>
  );
}
