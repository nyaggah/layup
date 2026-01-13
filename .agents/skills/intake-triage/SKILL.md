---
name: intake-triage
description: Captures and classifies inputs from any channel (floor observations, technician feedback, support tickets, feature requests). Use when starting new intake, capturing feedback, or triaging a request.
---

# Intake Triage

Single entry point for capturing inputs from any channel. Classifies, tags, and routes inputs through the Layup workflow.

## Input Channels

| Channel | Description |
|---------|-------------|
| Floor Observation | Direct shop floor issues |
| Technician Feedback | Manufacturing technician input |
| Stakeholder Request | Supervisor/ops/management request |
| User Feedback | FiberPortal customer feedback |
| Support Ticket | Reported issues or bugs |
| Roadmap Item | Planned feature from backlog |

## Workflow

1. Identify the input channel
2. Capture structured intake using template
3. Attach any artifacts (Figma, screenshots, data)
4. Assess priority and scope
5. Save to `inputs/intake-YYYY-MM-DD-[slug].md`

## Clarifying Questions

Ask these to classify the input:

### 1. Input Channel
- A. Floor Observation
- B. Technician Feedback
- C. Stakeholder Request
- D. User Feedback
- E. Support Ticket
- F. Roadmap Item

### 2. Target Product
- A. FiberPortal
- B. MES/Scheduling
- C. QC/Cure Logs
- D. Out-life Tracking
- E. Floor Tools
- F. New Product
- G. Cross-cutting

### 3. Input Type
- A. Pain Point — Something broken or frustrating
- B. Feature Request — New capability needed
- C. Enhancement — Improvement to existing
- D. Bug Report — Not working correctly
- E. Process Issue — Workflow problem
- F. Integration Need — System connection required

### 4. Specificity
- A. Vague — Needs discovery
- B. Specific Problem — Clear issue, solution unclear
- C. Solution Suggested — Has proposed solution
- D. Designed — Has Figma/mockups
- E. Fully Specified — Ready for implementation

### 5. Urgency
- A. Critical — Blocking production now
- B. High — Needs attention this week
- C. Medium — Can wait 2-4 weeks
- D. Low — Nice to have
- E. Scheduled — Tied to specific date

## Intake Template

```markdown
# Intake: [Short Title]

**Date:** YYYY-MM-DD
**Captured By:** [Name]
**Input Channel:** [A-F]
**Target Product:** [A-G]
**Input Type:** [A-F]
**Urgency:** [A-E]

## Source

**From:** [Name, role, or system]
**Contact:** [Email/Slack if follow-up needed]
**Original Request:** [Link or "verbal"]

## Summary

[2-3 sentence summary]

## Detailed Description

[Full description]

## User/Stakeholder Quotes

> "[Direct quote if available]"
> — [Name/Role]

## Artifacts

| Type | Link/Location | Notes |
|------|---------------|-------|
| | | |

## Context

**Who is affected:** [Roles/users impacted]
**Frequency:** [How often this occurs]
**Current workaround:** [How it's handled now]

## Initial Assessment

**Specificity:** [A-E]
**Estimated Scope:** [Small/Medium/Large/Unknown]
**Needs More Discovery:** [Yes/No]

## Related Items

- [Links to related intakes or problems]

## Next Step

- [ ] Needs Synthesis — Combine with other inputs
- [ ] Ready for Design — Needs Figma/UX work
- [ ] Ready for Problem Definition — Can proceed
- [ ] Ready for PRD — Fully specified
- [ ] Duplicate — Consolidate with existing

## Routing

**Route to:** [synthesis / design / problem-definition / prd]
**Priority:** [1-5, lower = higher priority]
```

## Routing Logic

| Specificity | Has Design? | Next Step |
|-------------|-------------|-----------|
| Vague | No | → Synthesis |
| Specific Problem | No | → Synthesis or Design |
| Solution Suggested | No | → Design |
| Designed | Yes | → Problem Definition |
| Fully Specified | Yes/No | → PRD |

## Output

Save to: `inputs/intake-YYYY-MM-DD-[slug].md`
