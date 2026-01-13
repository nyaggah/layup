import { Section, Paragraph, Highlight } from "../components/Section";

export function Closing() {
  return (
    <Section>
      {/* <div className="rounded-lg border-l-2 border-primary/50 bg-primary/5 p-8 text-center"> */}
      <div className="rounded-lg bg-primary/5 p-8 text-center">
        <h2 className="mb-4 text-2xl font-semibold">What Happens Next</h2>
        <Paragraph>If this resonates, I'd love to talk through:</Paragraph>
        <ul className="mb-6 space-y-2 text-muted-foreground">
          <li>Where my assumptions are wrong</li>
          <li>What problems are actually top of mind</li>
          <li>
            How this approach might fit (or not fit) your current workflow
          </li>
        </ul>
        <Paragraph>
          If it doesn't resonate, at least you've seen how I think.
        </Paragraph>
        <Paragraph>
          Either way: <Highlight>thanks for reading.</Highlight> And thanks for
          making composite tooling faster. 2 weeks instead of 2-6 months is the
          kind of improvement that compounds.
        </Paragraph>
        <div className="mt-8 border-t border-border pt-6">
          <p className="text-sm italic text-muted-foreground">
            Built with Amp. Edited by a human. Shipped before the interview.
          </p>
          <p className="mt-4 text-lg font-medium">— Joe</p>
        </div>
      </div>
    </Section>
  );
}
