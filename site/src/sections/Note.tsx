import { Section, Paragraph, Highlight } from "../components/Section";

export function Note() {
  return (
    <Section>
      <div className="rounded-lg border-primary/50 bg-primary/5 px-6 py-5">
        <h2 className="mb-4 text-lg font-medium">A Note Before We Begin</h2>
        <Paragraph>
          I don't work at Layup (yet). I've never walked your shop floor, seen
          your MES system, or watched a technician navigate a cure log on a
          tablet while wearing nitrile gloves.
        </Paragraph>
        <Paragraph>
          I don't know how your team works today. What's smooth, what's painful,
          how you're already using AI. Those are gaps I'd fill in week one.
        </Paragraph>
        <Paragraph>
          What I do have is over a decade in design, product and engineering.
          I've read the{" "}
          <a
            href="https://jobs.lever.co/layup/b299b2a2-8bcb-4684-bc30-85b969faa1d5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            Sr. Product Engineer
          </a>{" "}
          posting, dug into what's public about Layup, and I'm pattern-matching
          against every product org I've built inside.
        </Paragraph>
        <Paragraph>
          <Highlight>I'm making assumptions. Some will be wrong.</Highlight>{" "}
          That's the point. This document shows you how I think and work.
        </Paragraph>
      </div>
    </Section>
  );
}

export function TLDR() {
  return (
    <Section>
      <div className="rounded-lg border border-border bg-secondary/30 px-6 py-5">
        <h2 className="mb-4 text-lg font-medium">TL;DR</h2>
        <Paragraph>
          I want to bring AI-native product development to Layup. Not AI as a
          feature, but AI as a force multiplier for the entire build loop:
          research, spec, code, validate.
        </Paragraph>
        <Paragraph>
          This proposal (and the system that generated it) is a working demo.
          Agentic workflows, autonomous implementation from PRDs, tight feedback
          loops with the floor. Faster iterations, fewer handoffs, better tools
          for the people doing the work.
        </Paragraph>
      </div>
    </Section>
  );
}
