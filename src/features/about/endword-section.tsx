import { Link } from "react-router"

export function EndWordSection() {
  return (
    <section>
      <br />
      <div className="flex flex-col gap-2 not-prose mt-10">
        <span className="text-sm text-link font-mono tracking-tight">
          Endword.
        </span>
        <h2>Last word to say, thanks</h2>
      </div>

      <p>
        Through every success, collaboration, and challenge, these moments have
        not only defined my career but also shaped my perspective on growth,
        creativity, and resilience. They serve as a reminder that the most
        meaningful achievements often come from overcoming adversity and pushing
        beyond comfort zones.
      </p>

      <p>
        As I continue on this path, I look forward to creating new milestones,
        forging impactful connections, and embracing the next set of challenges
        with the same passion and drive. The journey is far from over, and I’m
        excited to see what’s next.
      </p>

      <p>
        Check my <Link to={"/works"}>works</Link>,{" "}
        <Link to={"/crafts"}>handmade</Link>,{" "}
        <Link to={"/journeys"}>journeys</Link> and{" "}
        <Link to={"/stories"}>stories</Link>. Then{" "}
        <Link to={"/contact"}>contact me</Link> if you want to collaborate and
        make something awesome together.
      </p>

      <p>Thanks for all of your support and attention.</p>

      <div className="flex flex-col not-prose mt-16 gap-3">
        <p className="font-medium">Nyoman Sunima</p>
        <span className="text-sm text-link font-mono tracking-tight">
          Your business & work best partner.
        </span>
      </div>
    </section>
  )
}
