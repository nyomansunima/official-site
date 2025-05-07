import * as React from "react"

export function BenefitSection() {
  return (
    <section className="mt-24 prose-p:text-foreground/60">
      <div className="flex flex-col not-prose group">
        <span className="text-sm font-mono text-foreground/60 tracking-tight transition-all duration-300 group-hover:text-link">
          Benefits.
        </span>
        <h2 className="py-2">More than just works, it's a journey.</h2>
      </div>

      <p>
        From the beginning to end,{" "}
        <span className="text-foreground">
          I will guide you through every step of the process
        </span>{" "}
        , ensuring that your project is{" "}
        <span className="text-foreground">
          completed on time and within budget
        </span>
        .
      </p>

      <p>
        <span className="text-foreground">
          You will get the stunning result and benefits
        </span>{" "}
        to work with me.{" "}
        <span className="text-foreground">
          Stopping you from confussion, anxiety, and stress
        </span>
        . Here are some of the benefits you can expect:
      </p>

      <ul>
        <li>Seamless Communication</li>
        <li>24/7 Support</li>
        <li>Cost-Effective</li>
        <li>Scalability</li>
        <li>Flexibility</li>
        <li>Customization</li>
        <li>Security</li>
        <li>Reliability</li>
        <li>Dedicated Teams</li>
        <li>Optimized for Business</li>
      </ul>

      <p>
        So what's stopping you from this jelly drill and enjoying your project
        creation.
      </p>
    </section>
  )
}
