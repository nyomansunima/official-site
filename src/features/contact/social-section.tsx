import { SocialItem } from "./social-item"
import contact from "./contact-data.json"

export function SocialSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <span className="text-sm text-foreground/40 font-mono tracking-tight">
          Socials.
        </span>
        <h2 className="text-lg font-medium mt-2">
          Follow & send me a message.
        </h2>

        <p className="mt-6 text-pretty leading-7">
          Or, you may need to chat and talks with me via social media, community
          or another platform about anything.
        </p>
      </div>

      <div className="flex flex-col gap-1 mt-10">
        {contact.socials.map((soc, index) => (
          <SocialItem social={soc} key={index} />
        ))}
      </div>
    </section>
  )
}
