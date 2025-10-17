export function EndWordSection() {
  return (
    <section>
      <br />
      <div className="not-prose mt-10 flex flex-col gap-2">
        <span className="font-mono text-foreground/40 text-sm tracking-tight">
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
        Check my <a href={"/works"}>works</a>, <a href={"/crafts"}>handmade</a>,{" "}
        <a href={"/journeys"}>journeys</a> and <a href={"/stories"}>stories</a>.
        Then <a href={"/contact"}>contact me</a> if you want to collaborate and
        make something awesome together.
      </p>

      <p>Thanks for all of your support and attention.</p>

      <div className="not-prose mt-16 flex flex-col gap-3">
        <p>Nyoman Sunima</p>
        <span className="font-mono text-foreground/40 text-sm tracking-tight">
          Your business & work best partner.
        </span>
      </div>
    </section>
  );
}
