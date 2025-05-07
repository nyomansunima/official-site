import Link from "next/link"
import * as React from "react"

export function TeamSection() {
  return (
    <section className="mt-24 prose-p:text-foreground/60">
      <div className="flex flex-col not-prose group">
        <span className="text-sm font-mono text-foreground/60 tracking-tight transition-all duration-300 group-hover:text-link">
          Dedicated Teams.
        </span>
        <h2 className="py-2">For your business scale.</h2>
      </div>

      <p>
        I build something that may help you in the future,{" "}
        <span className="text-foreground">
          when your business scale, and growing
        </span>
        . Here you can expect and helping you in the middle of night.
      </p>

      <ul>
        <li>
          <Link
            href="https://tryweebo.one"
            target="_blank"
            className="text-foreground !font-normal no-underline"
          >
            Weebo.
          </Link>
        </li>
        <li>
          <Link
            href="https://usesonibble.site"
            target="_blank"
            className="text-foreground !font-normal no-underline"
          >
            Sonibble.
          </Link>
        </li>
        <li>
          <Link
            href="https://roastto.site"
            target="_blank"
            className="text-foreground !font-normal no-underline"
          >
            Roast to site.
          </Link>
        </li>
        <li>Coming more.</li>
      </ul>
    </section>
  )
}
