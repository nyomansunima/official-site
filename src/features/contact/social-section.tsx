import { SocialItem } from "./social-item"
import contact from "./contact-data.json"

export function SocialSection() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-link font-mono tracking-tight">
          Socials.
        </span>
        <h2 className="text-lg font-medium">Follow & send me a message.</h2>
      </div>

      <p className="mt-6 text-pretty leading-7">
        Or, you may need to chat and talks with me via social media, community
        or another platform about anything.
      </p>

      <div className="flex mt-10">
        <ul className="flex flex-wrap items-center gap-2">
          {contact.socials.map((soc, index) => (
            <SocialItem social={soc} key={index} />
          ))}
        </ul>
      </div>
    </section>
  )
}
