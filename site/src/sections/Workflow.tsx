import { useState } from "react";
import {
  Section,
  SectionTitle,
  Paragraph,
  Highlight,
} from "../components/Section";
import { CodeBlock } from "../components/CodeBlock";

const phases = [
  {
    number: 1,
    name: "Intake Triage",
    owner: "Human-guided AI",
    description:
      "Capture raw inputs from any channel: floor observations, support tickets, Slack messages. Structure them consistently.",
    output: "inputs/intake-*.md",
  },
  {
    number: 2,
    name: "Research Synthesis",
    owner: "Human-guided AI",
    description:
      "Combine multiple inputs into patterns. 'Three technicians mentioned cure log loading time' becomes a design brief.",
    output: "synthesis/brief-*.md",
  },
  {
    number: 3,
    name: "Design",
    owner: "Human (Figma)",
    description:
      "UX decisions stay with humans. Especially for shop floor interfaces where physical constraints matter.",
    output: "Figma links",
  },
  {
    number: 4,
    name: "Problem Definition",
    owner: "Human-guided AI",
    description:
      "Structure the problem: current state, desired state, root cause, constraints, compliance requirements.",
    output: "issues/problem-*.md",
  },
  {
    number: 5,
    name: "PRD Generation",
    owner: "Human-guided AI",
    description:
      "Produce implementation-ready specs with user stories, acceptance criteria, and floor UX constraints baked in.",
    output: "tasks/prd-*.md",
  },
  {
    number: 6,
    name: "Autonomous Build",
    owner: "AI (Autonomous)",
    description:
      "The magic phase. AI implements stories one by one, runs quality checks, commits when tests pass, and hands off when context fills.",
    output: "Working code + commits",
    isAutonomous: true,
  },
  {
    number: 7,
    name: "Floor Validation",
    owner: "Human",
    description:
      "Before rollout: test with real operators, on real hardware, under real conditions.",
    output: "tasks/validation-*.md",
  },
];

export function Workflow() {
  const [activePhase, setActivePhase] = useState<number | null>(null);

  return (
    <Section id="workflow">
      <SectionTitle>The Workflow</SectionTitle>

      <Paragraph>
        What I've built (and what I'm proposing) is a 7-phase workflow that takes
        feedback from the floor all the way to validated, deployed features:
      </Paragraph>

      <div className="my-8 flex items-center gap-2 overflow-x-auto pb-4">
        {["Intake", "Synthesis", "Design", "Problem", "PRD", "Build", "Validate"].map(
          (step, i) => (
            <div key={step} className="flex items-center">
              <div
                className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium ${
                  i === 5
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {step}
              </div>
              {i < 6 && (
                <div className="mx-1 text-muted-foreground/50">→</div>
              )}
            </div>
          )
        )}
      </div>

      <div className="space-y-3">
        {phases.map((phase) => (
          <div
            key={phase.number}
            className={`cursor-pointer rounded-lg border transition-all ${
              phase.isAutonomous
                ? "border-primary bg-primary/5"
                : "border-border bg-card"
            } ${activePhase === phase.number ? "ring-2 ring-primary/50" : ""}`}
            onClick={() =>
              setActivePhase(activePhase === phase.number ? null : phase.number)
            }
          >
            <div className="flex items-center gap-4 p-4">
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-medium ${
                  phase.isAutonomous
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {phase.number}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-foreground">
                    {phase.name}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs ${
                      phase.owner === "Human"
                        ? "bg-blue-500/20 text-blue-400"
                        : phase.owner === "AI (Autonomous)"
                          ? "bg-primary/20 text-primary"
                          : "bg-purple-500/20 text-purple-400"
                    }`}
                  >
                    {phase.owner}
                  </span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                {activePhase === phase.number ? "−" : "+"}
              </div>
            </div>
            {activePhase === phase.number && (
              <div className="border-t border-border/50 px-4 py-4">
                <p className="mb-3 text-sm text-muted-foreground">
                  {phase.description}
                </p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-muted-foreground/70">Output:</span>
                  <code className="rounded bg-secondary px-1.5 py-0.5 font-mono">
                    {phase.output}
                  </code>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <Paragraph>
        <Highlight>Each phase produces artifacts that feed the next.</Highlight>{" "}
        Traceability from "technician said X" to "deployed feature Y."
      </Paragraph>

      <CodeBlock title="Example: A day in the workflow">
        {`# Morning: capture feedback from standup
> "Intake: technician reported cure log takes too long to load"
→ Creates structured intake document

# Afternoon: synthesize after gathering multiple inputs  
> "Synthesize inputs related to cure logging"
→ Creates design brief

# (Design happens in Figma)

# Next day: define and spec
> "Create PRD from the cure log synthesis"
→ AI asks clarifying questions, produces implementation-ready spec

# Evening: let it run
> "Execute PRD for cure-log-optimization"
→ Creates branch, implements, commits, tracks progress
→ Wake up to a PR ready for review

# Before deploy: validate
> "Run floor validation for cure-log feature"
→ Structured testing checklist with real operators`}
      </CodeBlock>
    </Section>
  );
}
