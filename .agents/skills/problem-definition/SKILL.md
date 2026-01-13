---
name: problem-definition
description: Refines inputs into structured problem statements with root cause analysis and impact quantification. Use when defining problems, analyzing issues, or scoping solutions.
---

# Problem Definition

Refine inputs into structured problem statements ready for PRD creation. Accepts floor observations, synthesis briefs, and design artifacts.

## Input Sources

| Source | Location |
|--------|----------|
| Floor Observation | `issues/obs-*.md` |
| Synthesis Brief | `synthesis/brief-*.md` |
| Intake (direct) | `inputs/intake-*.md` |
| Design Artifact | Figma link |

## Workflow

1. Read input from source
2. Attach design artifacts (Figma links, screenshots)
3. Perform root cause analysis (5 Whys)
4. Quantify impact
5. Map systems involved
6. Capture stakeholder input
7. Define solution direction
8. Save to `issues/problem-[slug].md`

## Clarifying Questions

### 1. Primary Tool/System
- A. Part Tracking
- B. Tool Management — Mold checkout, maintenance
- C. Work Order Flow
- D. Quality Inspection
- E. Material Tracking — Prepreg out-time, expiration
- F. Scheduling
- G. Cure Monitoring
- H. Customer Portal

### 2. Primary User
- A. Floor Operators
- B. Production Supervisors
- C. Operations Staff
- D. Quality Inspectors
- E. Customers

### 3. Current State
- A. Fully manual — Paper, whiteboard, verbal
- B. Partial digital — Excel, basic forms
- C. Existing system — Needs improvement
- D. Replacing vendor

### 4. V1 Scope
- A. MVP — Core workflow only
- B. Full feature
- C. Backend/API only
- D. UI only

### 5. Key Constraint
- A. Offline required
- B. ERP integration
- C. Glove-friendly
- D. Mobile-first
- E. Desktop-first
- F. Compliance focus

## Root Cause Analysis

```markdown
## 5 Whys Analysis

**Problem:** [State the observed problem]

1. **Why?** [First-level cause]
2. **Why?** [Dig deeper]
3. **Why?** [Dig deeper]
4. **Why?** [Dig deeper]
5. **Why?** [Root cause]

**Root Cause:** [Summary]
```

## Impact Quantification

| Metric | Value | Notes |
|--------|-------|-------|
| Frequency | X times per day/week | |
| Time Lost | X min per occurrence | |
| Weekly Impact | X hours | |
| Monthly Cost | $X | |
| Quality Risk | Low/Med/High | |
| Compliance Risk | Low/Med/High | |

## Problem Statement Template

```markdown
# Problem: [Short Title]

**Source:** [observation / synthesis / intake] — `[path-to-source]`
**Design Artifacts:** [Figma link or "None yet"]
**Date Defined:** YYYY-MM-DD

## Problem Statement

**Who:** [Primary user role]
**What:** [What they're trying to do]
**Problem:** [What's preventing them]
**Impact:** [Quantified: time, cost, risk]

## Root Cause

[Summary from 5 Whys]

## Impact Summary

| Metric | Value |
|--------|-------|
| Frequency | |
| Time lost per occurrence | |
| Weekly hours | |
| Quality risk | |
| Compliance risk | |

## Systems Affected

- [System 1]: [How affected]

## Stakeholder Quotes

> "[Key quote]" — [Role]

## Solution Direction

**Recommended:** [High-level approach]

**Constraints:**
- [Constraint 1]

## Design Artifacts

| Type | Link | Fidelity | Notes |
|------|------|----------|-------|
| | | | |

## Ready for PRD?

- [ ] Root cause identified
- [ ] Impact quantified
- [ ] Stakeholders consulted
- [ ] Solution direction agreed
- [ ] Constraints documented
- [ ] Design artifacts attached

**Next Step:** Generate PRD → `tasks/prd-[feature].md`
```

## Output

Save to: `issues/problem-[slug].md`
