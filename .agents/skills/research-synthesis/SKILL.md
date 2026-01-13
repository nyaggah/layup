---
name: research-synthesis
description: Synthesizes multiple inputs into patterns, insights, and design briefs. Use when combining feedback, creating briefs, or doing pattern analysis before design work.
---

# Research Synthesis

Combine multiple inputs into patterns, insights, and prioritized design briefs. This phase happens BEFORE design work begins.

## When to Synthesize

| Scenario | Action |
|----------|--------|
| 3+ related intakes on same topic | Synthesize into single brief |
| Vague/exploratory inputs | Synthesize to clarify direction |
| Conflicting stakeholder requests | Synthesize to find common ground |
| Before major design effort | Synthesize to ground the work |

## Workflow

1. Gather related inputs from `layup-amp-ralph/inputs/`
2. Identify patterns and themes
3. Extract jobs-to-be-done
4. Prioritize using impact/effort matrix
5. Create design brief
6. Save to `layup-amp-ralph/synthesis/brief-[topic].md`

## Clarifying Questions

### 1. Synthesis Scope
- A. Single Feature — Related inputs for one area
- B. User Journey — Inputs across a workflow
- C. Product Area — Multiple features in one product
- D. Cross-Product — Patterns across products
- E. Quarterly Theme — Strategic planning

### 2. Primary User Focus
- A. Floor Operators — Technicians doing layup, cure, trim
- B. Production Supervisors — Managing workflow
- C. Operations Staff — Scheduling, planning
- D. Quality Inspectors — QC, documentation
- E. Customers — FiberPortal external users

### 3. Synthesis Goal
- A. Design Brief — Ready for Figma/UX
- B. Problem Prioritization — Rank order of issues
- C. Feature Roadmap — Sequence of work
- D. Research Gaps — What we still need to learn

## Synthesis Methods

### Affinity Mapping

```markdown
## Affinity Groups

### Theme 1: [Name]
- Input: [intake-xxx.md] — [Key point]
- Input: [intake-yyy.md] — [Key point]

**Pattern:** [What these have in common]
```

### Jobs-to-be-Done

```markdown
## Jobs-to-be-Done

### Job 1: [Job Statement]
**When:** [Situation/trigger]
**I want to:** [Motivation/action]
**So I can:** [Expected outcome]

**Evidence:**
- [Quote from intake X]
```

### Impact/Effort Matrix

| Theme | Impact | Effort | Priority | Rationale |
|-------|--------|--------|----------|-----------|
| [Theme 1] | High | Low | P1 | Quick win |
| [Theme 2] | High | High | P2 | Worth investment |

## Design Brief Template

```markdown
# Design Brief: [Topic]

**Date:** YYYY-MM-DD
**Synthesized By:** [Name]
**Scope:** [A-E]
**Primary User:** [A-E]

## Inputs Synthesized

| Input | Date | Key Point |
|-------|------|-----------|
| [intake-xxx.md] | YYYY-MM-DD | [Summary] |

## Context

[2-3 paragraph summary of situation]

## Affinity Themes

### Theme 1: [Name]
[Description with evidence]

## Jobs-to-be-Done

1. **When** [situation], **I want to** [action], **so I can** [outcome]

## Key Insights

1. **[Title]:** [Observation] → [Implication]

## Priority Recommendation

| Theme | Priority | Rationale |
|-------|----------|-----------|
| [Theme 1] | P1 | [Why] |

## User Quotes

> "[Quote]" — [Role]

## Constraints for Design

### Layup Floor UX
- Touch targets ≥ 44px (glove-friendly)
- High contrast for shop lighting
- Minimal text input
- Tablet-first (1024x768 min)

### Connectivity
- [Online-only / Offline-capable / Offline-first]

### Compliance
- AS9100D: [Requirements]
- ITAR: [Requirements]

## Design Questions

- [ ] [Question for UX to explore]

## Success Metrics

- [ ] [How we'll know it works]

## Next Step

- [ ] Ready for Design — Proceed to Figma
- [ ] Needs More Research
- [ ] Needs Stakeholder Review

**Route to:** [design / more-research / stakeholder-review]
```

## Output

Save to: `layup-amp-ralph/synthesis/brief-[topic].md`
