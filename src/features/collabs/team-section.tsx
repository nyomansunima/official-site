import { Link } from "react-router"

export function TeamSection() {
  return (
    <section className="mt-24">
      <div className="flex flex-col not-prose">
        <span className="text-sm font-mono text-foreground/60 tracking-tight">
          Dedicated Teams.
        </span>
        <h2 className="py-2">For your business scale.</h2>
      </div>

      <p>
        I build something that may help you in the future. When your business
        scale, and growing. Here you can expect and helping you in the middle of
        night.
      </p>

      <ul>
        <li>
          <Link to="https://tryweebo.one" target="_blank">
            Weebo
          </Link>
        </li>
        <li>
          <Link to="https://usesonibble.site" target="_blank">
            Sonibble
          </Link>
        </li>
        <li>
          <Link to="https://weecraft.site" target="_blank">
            Weecraft
          </Link>
        </li>
        <li>
          <Link to="https://moono.site" target="_blank">
            Moono
          </Link>
        </li>
        <li>
          <Link to="https://roastto.site" target="_blank">
            Roast to site.
          </Link>
        </li>
        <li>Coming more</li>
      </ul>
    </section>
  )
}
