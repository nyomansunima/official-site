import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: generatedMetadata({
      title:
        "Product Engineer - Build scalable softwares & systems | Nyoman Sunima",
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
          I've successfully helped businesses to create their software,
          websites, automations and workflows that lift the profits, increase
          efficiencies and reduce the costs.
        </p>

        <p>
          Running the{" "}
          <a
            className="underline"
            href={"https://thecoined.site"}
            rel="noopener"
            target="_blank"
          >
            coined
          </a>
          , growing the communities at{" "}
          <a
            className="underline"
            href={"https://thegridline.site"}
            rel="noopener"
            target="_blank"
          >
            gridline
          </a>{" "}
          &{" "}
          <a
            className="underline"
            href={"https://thescolon.site"}
            rel="noopener"
            target="_blank"
          >
            scolon
          </a>
          . Curated list for good design and resources at{" "}
          <a
            className="underline"
            href={"https://heroico.site"}
            rel="noopener"
            target="_blank"
          >
            heroico
          </a>{" "}
          &{" "}
          <a
            className="underline"
            href={"https://thegoodie.site"}
            rel="noopener"
            target="_blank"
          >
            goodie
          </a>
          .
        </p>

        <p>
          Building open source projects at{" "}
          <a
            className="underline"
            href={"https://picosecond.moono.site"}
            rel="noopener"
            target="_blank"
          >
            picosecond
          </a>
          ,{" "}
          <a
            className="underline"
            href={"https://oneday.moono.site"}
            rel="noopener"
            target="_blank"
          >
            oneday
          </a>
          ,{" "}
          <a
            className="underline"
            href={"https://compobits.moono.site"}
            rel="noopener"
            target="_blank"
          >
            compobits
          </a>{" "}
          &{" "}
          <a
            className="underline"
            href={"https://mailo.moono.site"}
            rel="noopener"
            target="_blank"
          >
            mailo
          </a>
          . Shipping businesses & users products at{" "}
          <a
            className="underline"
            href={"https://poockey.site"}
            rel="noopener"
            target="_blank"
          >
            poockey
          </a>
          ,{" "}
          <a
            className="underline"
            href={"https://okay.moono.site"}
            rel="noopener"
            target="_blank"
          >
            okay
          </a>
          ,{" "}
          <a
            className="underline"
            href={"https://signa.moono.site"}
            rel="noopener"
            target="_blank"
          >
            signa
          </a>{" "}
          &{" "}
          <a
            className="underline"
            href={"https://tryhaloo.site"}
            rel="noopener"
            target="_blank"
          >
            haloo
          </a>
          .
        </p>

        <p>
          Currently, focus on design & develop projects to ship globally, also
          helping business to create their products. See more of{" "}
          <a className="underline" href={"/projects"}>
            what i've shipped
          </a>
          ,{" "}
          <a className="underline" href={"/contents"}>
            the thoughts
          </a>{" "}
          and{" "}
          <a className="underline" href={"/contact"}>
            reach out
          </a>
          .
        </p>
      </article>
    </main>
  );
}
