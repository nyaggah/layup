import {
  Section,
  SectionTitle,
  SectionSubtitle,
  Paragraph,
} from "../components/Section";
import { CodeBlock } from "../components/CodeBlock";
import { Table } from "../components/Table";

export function Technical() {
  return (
    <Section id="technical">
      <SectionTitle>Technical Details</SectionTitle>

      <SectionSubtitle>Skills-Based Architecture</SectionSubtitle>
      <Paragraph>
        The workflow is implemented as Amp Skills: specialized instruction sets
        that load when triggered:
      </Paragraph>
      <CodeBlock title=".agents/skills/">
        {`├── intake-triage/         # Capture and structure feedback
├── research-synthesis/    # Combine inputs into patterns
├── problem-definition/    # Structure problems for solving
├── layup-prd/            # Generate implementation specs
├── amp-ralph/            # Autonomous implementation
└── floor-validation/     # Pre-deploy testing checklist`}
      </CodeBlock>
      <Paragraph>
        Each skill knows about Layup's constraints: floor UX rules, compliance
        requirements, tech stack conventions.
      </Paragraph>

      <SectionSubtitle>Artifact-Driven State</SectionSubtitle>
      <Paragraph>
        Each phase produces markdown artifacts at predictable paths:
      </Paragraph>
      <CodeBlock>
        {`inputs/intake-2026-01-12-cure-log.md    → Raw, structured input
synthesis/brief-cure-log.md             → Design brief
issues/problem-cure-log.md              → Problem statement
tasks/prd-cure-log.md                   → Implementation spec
tasks/validation-cure-log.md            → Testing results`}
      </CodeBlock>
      <Paragraph>
        These serve as both documentation and state. Pick up work at any phase
        by reading the relevant artifact.
      </Paragraph>

      <SectionSubtitle>Autonomous Execution</SectionSubtitle>
      <Paragraph>
        The amp-ralph skill manages autonomous implementation:
      </Paragraph>
      <ol className="mb-4 ml-6 list-decimal space-y-2 text-muted-foreground">
        <li>
          Convert PRD to{" "}
          <code className="rounded bg-secondary px-1 font-mono text-xs">
            prd.json
          </code>{" "}
          (structured task list)
        </li>
        <li>Create feature branch</li>
        <li>
          For each incomplete story:
          <ul className="ml-4 mt-2 list-disc space-y-1">
            <li>Read acceptance criteria</li>
            <li>Implement the change</li>
            <li>Run typecheck, lint, tests</li>
            <li>If passing: commit, mark complete</li>
            <li>
              Append learnings to{" "}
              <code className="rounded bg-secondary px-1 font-mono text-xs">
                progress.txt
              </code>
            </li>
          </ul>
        </li>
        <li>Auto-handoff when context fills</li>
        <li>Continue until all stories pass</li>
      </ol>

      <Table
        headers={["File", "Purpose"]}
        rows={[
          ["prd.json", "Task list with completion status"],
          ["progress.txt", "Cross-context memory"],
          ["Git history", "Full audit trail"],
        ]}
      />

      <SectionSubtitle>Lineage & Prior Art</SectionSubtitle>
      <Paragraph>I didn't invent this. I'm standing on shoulders:</Paragraph>
      <ul className="mb-4 ml-6 list-disc space-y-2 text-muted-foreground">
        <li>
          <strong>
            <a
              href="https://ghuntley.com/ralph/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Geoffrey Huntley
            </a>
          </strong>{" "}
          — Originated the Ralph Wiggum pattern
        </li>
        <li>
          <strong>
            <a
              href="https://github.com/snarktank/ralph"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Ryan Carson / snarktank/ralph
            </a>
          </strong>{" "}
          — Built the reference implementation
        </li>
        <li>
          <strong>
            <a
              href="https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Anthropic
            </a>
          </strong>{" "}
          — Validated the pattern in their long-running agents research
        </li>
        <li>
          <strong>
            <a
              href="https://github.com/nyaggah/amp-ralph"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              nyaggah/amp-ralph
            </a>
          </strong>{" "}
          — Adapted Ralph for Amp's native capabilities.{" "}
          <em className="text-foreground">Hey, that's me!</em>
        </li>
      </ul>
      <Paragraph>
        Also learned from{" "}
        <a
          href="https://www.youtube.com/watch?v=_IK18goX4X8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-4 hover:text-primary/80"
        >
          Matt Pocock
        </a>{" "}
        and{" "}
        <a
          href="https://www.youtube.com/watch?v=RpvQH0r0ecM"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-4 hover:text-primary/80"
        >
          Greg Isenberg / Ryan Carson
        </a>{" "}
        who documented these patterns in video.
      </Paragraph>
    </Section>
  );
}
