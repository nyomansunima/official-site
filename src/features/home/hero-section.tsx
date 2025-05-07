import { NewsletterForm } from "@features/newsletter"
import Image from "next/image"
import * as React from "react"

export function HeroSection() {
  return (
    <section className="flex flex-col">
      <div className="flex gap-3 items-center group">
        <picture className="p-1 flex justify-center items-center border-2 border-border group-hover:border-link border-dashed rounded-full cursor-pointer group transition-all duration-300 hover:-translate-y-1">
          <Image
            src={"/images/avatar.png"}
            height={60}
            width={60}
            quality={100}
            alt="Nyoman Sunima Profile"
            className="object-cover rounded-full"
          />
        </picture>
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-medium">Nyoman Sunima</h2>
          <span className="text-sm text-foreground/60 font-mono tracking-tight transition-all duration-300 group-hover:text-link">
            Product designer, software engineer & creator
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-6 text-base leading-7 text-pretty mt-6 text-foreground/60">
        <p>
          Hello, I loves to craft solutions for global audiences.{" "}
          <span className="text-foreground">
            Shipping great products or services with simplicity, better user
            experience, and target specific
          </span>
          .
        </p>

        <p>
          <span className="text-foreground">
            Focus on crafting design, saas, goodies, sites, contents
          </span>{" "}
          to solve problems & help business grow.{" "}
          <span className="text-foreground">
            Talks about indie hacking, product shipping, productivity and
            business
          </span>
          .
        </p>

        <p>
          <span className="text-foreground">
            Currently craft a product, services and building the brands
          </span>
          . The next plans is building high value business that bring bigger
          impact to the world .
        </p>

        <p>
          Build {"->"} ship {"->"}{" "}
          <span className="text-foreground">launch</span>.
        </p>
      </div>

      <div className="flex flex-col mt-16 gap-6">
        <p>Join my newsletter to get weekly updates.</p>
        <NewsletterForm />
      </div>
    </section>
  )
}
