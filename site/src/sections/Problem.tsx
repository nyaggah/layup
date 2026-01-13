import {
  Section,
  SectionTitle,
  SectionSubtitle,
  Paragraph,
  Highlight,
  Quote,
} from "../components/Section";
import { Table } from "../components/Table";

export function Problem() {
  return (
    <Section id="problem">
      <SectionTitle>The Problem (As I Understand It)</SectionTitle>

      <SectionSubtitle>The Universal Bottleneck</SectionSubtitle>
      <Paragraph>
        Every product team I've worked with has the same fundamental constraint:{" "}
        <Highlight>
          the path from fuzzy feedback to working software is too slow and too
          lossy.
        </Highlight>
      </Paragraph>
      <Paragraph>
        For a company like Layup, I'd guess this manifests as:
      </Paragraph>
      <ul className="mb-4 ml-6 list-disc space-y-2 text-muted-foreground">
        <li>
          <Highlight>Problems arrive fragmented.</Highlight> A technician
          mentions the cure log is slow. A production lead asks for a different
          report. QC flags a recurring data entry error. These are symptoms, not
          solutions. Someone needs to connect the dots.
        </li>
        <li>
          <Highlight>Design iteration is expensive.</Highlight> You mock
          something in Figma, get feedback, revise, repeat. Each cycle takes
          time. And translating those mocks into working UI takes even more.
        </li>
        <li>
          <Highlight>Engineers are stretched thin.</Highlight> Even with perfect
          specs, implementation competes with infrastructure, compliance work,
          and whatever fire is burning today.
        </li>
      </ul>
      <Paragraph>
        At an early-stage company with a small team, this is acute. You're
        trying to ship product <em>and</em> build infrastructure <em>and</em>{" "}
        respond to floor feedback <em>and</em> maintain compliance. Something
        always slips.
      </Paragraph>

      <SectionSubtitle>The AI Agent Problem</SectionSubtitle>
      <Paragraph>
        Here's what I've learned building with AI coding tools over the past
        couple years:
      </Paragraph>
      <Paragraph>
        AI agents are <Highlight>great</Highlight> at executing well-specified
        work. They're <Highlight>terrible</Highlight> at:
      </Paragraph>
      <ul className="mb-4 ml-6 list-disc space-y-2 text-muted-foreground">
        <li>Knowing when they're done</li>
        <li>Remembering what they were doing across long tasks</li>
        <li>Making judgment calls about UX</li>
      </ul>
      <Quote author="Anthropic, 'Effective harnesses for long-running agents'">
        "Imagine a software project staffed by engineers working in shifts,
        where each new engineer arrives with no memory of what happened on the
        previous shift."
      </Quote>

      <SectionSubtitle>Manufacturing-Specific Challenges</SectionSubtitle>
      <Paragraph>
        Based on your certifications and what I know about e.g. aerospace
        manufacturing, I'm guessing Layup deals with:
      </Paragraph>
      <Table
        headers={["Constraint", "What It Means for Software"]}
        rows={[
          ["Glove-friendly UI", "Touch targets ≥44px, minimal typing"],
          [
            "Shop floor lighting",
            "High contrast, readable in bright environments",
          ],
          ["Spotty WiFi", "Offline-capable, graceful sync"],
          ["AS9100D / ISO 9001", "Full audit trails, timestamps, user IDs"],
          ["ITAR", "Data handling restrictions, access controls"],
        ]}
      />
      <Paragraph>
        Most software tools ignore these constraints. They're built for people
        at desks with keyboards. That's a problem when your users are on a
        factory floor with composite dust on their gloves.
      </Paragraph>
    </Section>
  );
}
