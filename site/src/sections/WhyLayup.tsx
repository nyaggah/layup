import {
  Section,
  SectionTitle,
  SectionSubtitle,
  Paragraph,
  Highlight,
} from "../components/Section";

export function WhyLayup() {
  return (
    <Section id="layup">
      <SectionTitle>Why This Matters for Layup</SectionTitle>

      <SectionSubtitle>Stage-Appropriate Tooling</SectionSubtitle>
      <Paragraph>From what I can tell, Layup is at the stage where:</Paragraph>
      <ul className="mb-4 ml-6 list-disc space-y-2 text-muted-foreground">
        <li>The team is small</li>
        <li>Everyone wears multiple hats</li>
        <li>
          Speed matters, but so does quality (AS9100D doesn't mess around)
        </li>
        <li>
          You're building internal tools <em>and</em> customer-facing product{" "}
          <em>and</em> manufacturing infrastructure
        </li>
      </ul>
      <Paragraph>
        At this stage, you don't need more process. You need more leverage.
      </Paragraph>
      <Paragraph>
        This workflow isn't about adding overhead. It's about{" "}
        <Highlight>
          capturing the work you're already doing and letting AI handle the
          parts that don't require judgment.
        </Highlight>
      </Paragraph>

      <SectionSubtitle>The Product Engineer Role</SectionSubtitle>
      <Paragraph>
        Reading between the lines of the job description, you're looking for
        someone who can:
      </Paragraph>
      <ul className="mb-4 ml-6 list-disc space-y-2 text-muted-foreground">
        <li>Talk to floor operators and understand their pain</li>
        <li>Translate that into product decisions</li>
        <li>Design interfaces that work in manufacturing environments</li>
        <li>Write code when needed</li>
        <li>Ship end-to-end</li>
      </ul>
      <Paragraph>
        That's a unicorn. Or it's <Highlight>someone with a system</Highlight>.
      </Paragraph>
      <Paragraph>I'm proposing to be that someone, with that system.</Paragraph>

      <SectionSubtitle>What I Actually Bring</SectionSubtitle>
      <div className="my-6 grid gap-4 sm:grid-cols-2">
        {[
          {
            title: "Design sense",
            desc: "I've built consumer products where UX is life or death. Manufacturing floor UX has different constraints, but the same principle: respect the user's context.",
          },
          {
            title: "Technical chops",
            desc: "I can build what I design. This isn't a handoff. It's end-to-end ownership.",
          },
          {
            title: "AI fluency",
            desc: "I've been building with AI tools for the past ~2 years. Not just using them, but building workflows, understanding their limits, learning what works.",
          },
          {
            title: "Curiosity-driven action",
            // desc: "Before any interview, I'm already envisioning what the first week looks like. Hitting the ground running. How to level up the team and processes. This document is that curiosity in action.",
            desc: "I'm already envisioning what the first week looks like. Hitting the ground running. How to level up the team and processes. This document is that curiosity in action.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-lg bg-secondary/30 p-4">
            <div className="mb-2 font-medium text-foreground">{item.title}</div>
            <div className="text-sm text-muted-foreground">{item.desc}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
