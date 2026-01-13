---
name: layup-prd
description: Generates PRDs optimized for autonomous implementation with Layup shop floor constraints. Use when creating PRDs, writing specs, or planning features.
---

# PRD Generator

Create PRDs optimized for autonomous implementation, considering Layup's manufacturing context and shop floor constraints.

**Important:** This skill creates the PRD. It does NOT implement. Use `amp-ralph` for execution.

## Workflow

1. Read problem definition from `layup-amp-ralph/issues/problem-[slug].md`
2. Review attached design artifacts (Figma)
3. Ask clarifying questions if needed
4. Generate structured PRD with user stories
5. Reference designs in acceptance criteria
6. Save to `layup-amp-ralph/tasks/prd-[feature].md`

## Clarifying Questions

If problem definition is incomplete:

### 1. Core Action
- A. View/read data
- B. Enter/record data
- C. Update existing data
- D. Trigger workflow/action
- E. Multiple

### 2. Data Destination
- A. Stays local only
- B. Syncs to FiberPortal
- C. Syncs to MES/Scheduling
- D. Syncs to QC system
- E. Multiple systems

### 3. Offline Requirement
- A. Must work fully offline
- B. Can queue for later sync
- C. Online-only acceptable
- D. Read-only offline

### 4. Approval Flow
- A. No approval needed
- B. Supervisor approval
- C. QC sign-off required
- D. Multiple approvals

### 5. Compliance
- A. Standard tracking only
- B. AS9100D traceability required
- C. ITAR data handling required
- D. Both AS9100D and ITAR

## PRD Template

```markdown
# PRD: [Feature Name]

**Problem:** `issues/problem-[slug].md`
**Design:** [Figma link or "No designs yet"]
**Primary User:** [Role]
**Goal:** [One sentence success definition]

## Goals

- [ ] [Measurable goal 1]
- [ ] [Measurable goal 2]

## User Stories

### US-001: [Title]

**Description:** As a [role], I want [feature] so that [benefit].

**Design Reference:** [Figma frame link or "N/A"]

**Acceptance Criteria:**

- [ ] [Specific verifiable criterion]
- [ ] Matches design specifications (if Figma provided)
- [ ] Touch targets ≥ 44px (glove-friendly)
- [ ] Works on 1024x768 tablet
- [ ] [If offline] Functions without network
- [ ] [If data entry] Minimal typing required
- [ ] Typecheck passes
- [ ] Lint passes

**Depends On:** [US-XXX or "None"]
**Priority:** [1-5, lower = first]

### US-002: [Title]

...

## Functional Requirements

- **FR-1:** The system must [action]
- **FR-2:** When [trigger], the system must [response]

## Non-Goals

- Will NOT include [feature X]
- Will NOT integrate with [system Y] in V1

## Layup Requirements

### Floor UX
- [ ] Touch targets ≥ 44px
- [ ] High contrast for shop lighting
- [ ] Minimal text input
- [ ] Works with gloves

### Device Support
- [ ] Tablet-first (1024x768 minimum)
- [ ] Handles orientation changes

### Connectivity
- [ ] [Online-only / Offline-capable / Offline-first]
- [ ] Sync strategy: [immediate / queued / manual]
- [ ] Conflict resolution: [last-write-wins / prompt user]

### Compliance
- [ ] AS9100D: [Traceability needs]
- [ ] ITAR: [Data handling needs]
- [ ] Audit trail: [What's logged]

### Integration
- [ ] FiberPortal: [Read/Write/None]
- [ ] MES: [Read/Write/None]
- [ ] QC System: [Read/Write/None]

## Technical Considerations

- **Frontend:** React + TypeScript
- **Backend:** [Go/Python/Node] API
- **Auth:** [How users authenticate on floor]
- **Existing patterns:** [Reference similar features]

## Story Dependencies

- US-002 depends on US-001
- US-003 and US-004 are independent (can parallel)

## Open Questions

- [ ] [Question needing answer]
```

## Story Sizing

Each story should be:
- One logical commit
- Independently testable
- Clear "done" state

## Output

Save to: `layup-amp-ralph/tasks/prd-[feature].md`
