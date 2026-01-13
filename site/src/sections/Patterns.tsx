import {
  Section,
  SectionTitle,
  SectionSubtitle,
  Paragraph,
  Highlight,
  Quote,
} from "../components/Section";

export function Patterns() {
  return (
    <Section id="patterns">
      <SectionTitle>The Patterns</SectionTitle>

      <SectionSubtitle>What Actually Works with AI Agents</SectionSubtitle>
      <Paragraph>
        The breakthrough came from an unlikely source: a technique called "Ralph
        Wiggum" (yes, from The Simpsons).
      </Paragraph>
      <Quote author={<a href="https://ghuntley.com/ralph/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Geoffrey Huntley, ghuntley.com/ralph</a>}>
        "Ralph is a technique. In its purest form, Ralph is a Bash loop."
      </Quote>
      <Paragraph>Here's what that means in practice:</Paragraph>
      <ol className="mb-4 ml-6 list-decimal space-y-2 text-muted-foreground">
        <li>Give an AI agent a list of discrete, well-specified tasks</li>
        <li>Run the agent in a loop, one task per iteration</li>
        <li>Each iteration: pick a task, implement it, test it, commit it</li>
        <li>Memory persists through files (not the AI's context)</li>
        <li>Continue until all tasks are done</li>
      </ol>
      <Paragraph>
        <Highlight>Why it works:</Highlight> By forcing fresh context per task
        and using files for memory, the agent avoids both failure modes. Each
        iteration has a clear, bounded goal.
      </Paragraph>

      <SectionSubtitle>Human-AI Collaboration, Not Replacement</SectionSubtitle>
      <Paragraph>Here's my mental model for where AI fits:</Paragraph>
      <div className="my-6 grid gap-3">
        {[
          {
            phase: "Observing the floor",
            owner: "Human",
            why: "You can't automate noticing things",
          },
          {
            phase: "Structuring feedback",
            owner: "AI-assisted",
            why: "Tedious, repetitive, pattern-matchable",
          },
          {
            phase: "Design decisions",
            owner: "Human",
            why: "Taste and judgment",
          },
          {
            phase: "Writing specs",
            owner: "AI-assisted",
            why: "Structured documentation",
          },
          {
            phase: "Implementation",
            owner: "AI (autonomous)",
            why: "Well-specified execution",
          },
          {
            phase: "Validation",
            owner: "Human",
            why: "Only people can validate UX",
          },
        ].map((row) => (
          <div
            key={row.phase}
            className="flex items-center gap-4 rounded-lg bg-secondary/30 p-4"
          >
            <div className="min-w-[140px] font-medium text-foreground">
              {row.phase}
            </div>
            <div
              className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                row.owner === "Human"
                  ? "bg-blue-500/20 text-blue-400"
                  : row.owner === "AI (autonomous)"
                    ? "bg-primary/20 text-primary"
                    : "bg-purple-500/20 text-purple-400"
              }`}
            >
              {row.owner}
            </div>
            <div className="text-sm text-muted-foreground">{row.why}</div>
          </div>
        ))}
      </div>
      <Paragraph>
        The key insight:{" "}
        <Highlight>
          AI is excellent at executing well-specified work. Humans are excellent
          at judgment calls.
        </Highlight>{" "}
        Separate those concerns and you get leverage.
      </Paragraph>
    </Section>
  );
}
