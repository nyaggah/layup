---
name: amp-ralph
description: Executes PRDs autonomously using continuous agent execution. Converts PRD to JSON, creates branch, implements stories, commits, tracks progress. Use when executing a PRD, running autonomous implementation, or implementing a spec.
---

# Amp-Ralph: Autonomous PRD Execution

Execute PRDs using continuous agent execution for Layup Parts manufacturing tools.

**This is the only fully autonomous phase.** Once started, it runs until all stories are complete or blocked.

## Execution Flow

1. Convert PRD to `prd.json`
2. Create/checkout feature branch
3. Implement stories in dependency order
4. Use Oracle for planning complex stories
5. Use Task tool for parallel independent stories
6. Run quality checks + Layup-specific checks
7. Commit after each story passes
8. Track progress in `progress.txt`
9. Continue until all stories complete

## Step 1: Convert PRD to JSON

Read from `layup-amp-ralph/tasks/prd-[feature].md` and create `prd.json` in workspace root:

```json
{
  "project": "[Project Name]",
  "branchName": "feature/[feature-name]",
  "description": "[Feature description]",
  "layupContext": {
    "offlineRequired": true,
    "complianceAS9100D": true,
    "complianceITAR": false,
    "integrations": ["FiberPortal", "MES"]
  },
  "userStories": [
    {
      "id": "US-001",
      "title": "[Story title]",
      "description": "As a [user], I want [feature] so that [benefit]",
      "acceptanceCriteria": ["Criterion 1", "Touch targets ≥ 44px"],
      "dependsOn": [],
      "priority": 1,
      "passes": false,
      "notes": ""
    }
  ]
}
```

## Step 2: Setup

1. Check if on correct branch from `prd.json.branchName`
2. If not, create from main/master or checkout existing
3. Initialize `progress.txt`:

```markdown
# Progress Log

Feature: [Feature name]
Branch: [Branch name]
Started: [Date]

## Layup Context
- Offline: [Yes/No]
- AS9100D: [Yes/No]
- ITAR: [Yes/No]

## Codebase Patterns

(Patterns discovered during implementation)

---

## Story Log
```

## Step 3: Story Selection

1. Read `prd.json`
2. Find stories where `passes: false`
3. Filter to stories whose `dependsOn` are all `passes: true`
4. Sort by priority
5. Select highest priority eligible story

## Step 4: Planning (Complex Stories)

Before implementing complex stories, consult Oracle:

```
I need to implement: [Story title]

Layup context:
- Floor tablet UI (1024x768, touch targets ≥ 44px)
- [Offline requirement if applicable]
- [Compliance requirement if applicable]

Acceptance criteria:
- [criterion 1]
- [criterion 2]

Please review the codebase and suggest:
1. Which files need changes
2. Implementation approach
3. Potential issues
```

## Step 5: Implementation Rules

1. **Follow existing patterns** — Read nearby code first
2. **Minimal changes** — Only change what's needed
3. **Run checks frequently** — Typecheck, lint, test
4. **Commit atomically** — One story = one commit

## Step 6: Quality Checks

Before marking a story complete:

### Standard Checks

```bash
pnpm run typecheck   # or tsc, cargo check, etc.
pnpm run lint        # or eslint, cargo clippy, etc.
pnpm run test        # if tests exist
```

### Layup-Specific Checks

- [ ] Touch targets ≥ 44px
- [ ] Tablet layout works (1024x768)
- [ ] Glove-friendly (minimal text input)
- [ ] High contrast for shop lighting
- [ ] Offline works (if required)
- [ ] Syncs to correct system
- [ ] No compliance violations

## Step 7: Commit (Conventional Commits)

```bash
git add -A
git commit -m "<type>(<scope>): <description>

<body>

Refs: [US-XXX] - [Story title]"
```

Types: `feat`, `fix`, `refactor`, `docs`, `style`, `test`, `chore`

Example:
```bash
git commit -m "feat(cure-log): add offline queue for log entries

Entries saved to IndexedDB when offline, synced on reconnect.

Refs: [US-003] - Offline cure log entry"
```

## Step 8: Update State

### Update prd.json

```json
{
  "id": "US-001",
  "passes": true,
  "notes": "Used existing Button component, added offline sync"
}
```

### Append to progress.txt

```markdown
## [Date] - US-001: [Story Title]

**Implemented:**
- What was done

**Files changed:**
- path/to/file.ts

**Layup checks:**
- [x] Touch targets ≥ 44px
- [x] Tablet layout verified

**Learnings:**
- Patterns discovered
```

## Step 9: Parallel Execution

When multiple stories are eligible and independent, use the Task tool to spawn parallel workers.

## Step 10: Continue or Complete

After each story:
1. Check if ALL stories have `passes: true`
2. If yes: Report completion
3. If no: Continue to next eligible story

## Handling Failures

If stuck, add notes and move on:

```json
{
  "id": "US-003",
  "passes": false,
  "notes": "BLOCKED: [reason]. Needs human review."
}
```

## Completion Report

```markdown
## Execution Complete

**Branch:** feature/[name]
**Stories completed:** X of Y
**Blocked stories:** [list any]

### Layup Compliance
- [x] All touch targets ≥ 44px
- [x] Tablet-verified
- [x] Offline requirements met

### Commits
- feat(scope): description (Refs: [US-001])

### Next Step
Run `floor-validation` skill to test with operators.
```
