import contact from "./contact-data.json" with { type: "json" };
import { SocialItem } from "./social-item";

export function SocialSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="font-mono text-foreground/40 text-sm tracking-tight">
          Socials.
        </span>
        <h2 className="mt-2 font-medium text-lg">
          Follow & send me a message.
        </h2>

        <p className="mt-6 text-pretty leading-7">
          You may need to chat and talks with me via social media, community or
          another platform about anything.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-1">
        {contact.socials.map((soc, index) => (
          <SocialItem key={index} social={soc} />
        ))}
      </div>
    </section>
  );
}
