import {
  Section,
  SectionTitle,
  SectionSubtitle,
  Paragraph,
  Highlight,
} from "../components/Section";
import { Table } from "../components/Table";

export function WhyAmp() {
  return (
    <Section id="amp">
      <SectionTitle>Why Amp</SectionTitle>

      <Paragraph>
        This is where I need to explain the tool that makes this practical.
      </Paragraph>
      <Paragraph>
        <a
          href="https://ampcode.com"
          className="text-primary underline underline-offset-4 hover:text-primary/80"
        >
          Amp
        </a>{" "}
        is an AI coding agent that's different from Claude Code or Cursor in
        one key way:{" "}
        <Highlight>it uses different models for different tasks.</Highlight>
      </Paragraph>

      <SectionSubtitle>Curated Models Per Task</SectionSubtitle>
      <Table
        headers={["Task", "Model", "Why"]}
        rows={[
          ["Complex reasoning & planning", "GPT-5.1 (Oracle)", "Best at multi-step analysis"],
          ["Fast code search", "Gemini 3 Flash", "Optimized for retrieval"],
          ["Implementation", "Claude Opus 4.5", "Best code generation"],
          ["Quick edits", "Claude Haiku 4.5", "Fast and cheap"],
          ["Code review", "Gemini 3 Pro", "Good at pattern detection"],
        ]}
      />
      <Paragraph>
        Claude Code uses Claude for everything. Cursor uses one model with
        rules.{" "}
        <Highlight>
          Amp orchestrates the right model for each subtask, and can run them in
          parallel.
        </Highlight>
      </Paragraph>

      <SectionSubtitle>Native Handoffs</SectionSubtitle>
      <Paragraph>
        Amp also has a feature called{" "}
        <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-sm">
          autoHandoff
        </code>
        : when the context window fills up, it automatically summarizes and
        hands off to a fresh instance. No bash loops required.
      </Paragraph>
      <Paragraph>
        This is the difference between "AI coding tool" and "AI coding system."
      </Paragraph>

      <div className="my-8 grid gap-4 sm:grid-cols-3">
        {[
          {
            tool: "Claude Code",
            desc: "Single model for everything",
          },
          {
            tool: "Cursor",
            desc: "One model + rules",
          },
          {
            tool: "Amp",
            desc: "Right model per task, parallel execution, native handoffs",
            highlight: true,
          },
        ].map((item) => (
          <div
            key={item.tool}
            className={`rounded-lg border p-4 ${
              item.highlight
                ? "border-primary bg-primary/5"
                : "border-border bg-card"
            }`}
          >
            <div
              className={`mb-2 font-medium ${item.highlight ? "text-primary" : "text-foreground"}`}
            >
              {item.tool}
            </div>
            <div className="text-sm text-muted-foreground">{item.desc}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
