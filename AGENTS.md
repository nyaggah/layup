# Layup Parts — Project AGENTS.md Template

This file provides Layup-specific context for any project. Copy to your project root and adapt as needed.

> **Global vs Project:** Layup-wide context (company, compliance, floor UX) can also live in `~/.ampcode/skills/` for automatic inclusion. This template is for project-specific customization.

## Company Context

| Attribute | Detail |
|-----------|--------|
| **Company** | Layup Parts — composite tooling & parts manufacturing |
| **Mission** | Deliver composite parts faster (2 weeks vs 2-6 months) |
| **Location** | Huntington Beach, CA |
| **Certifications** | AS9100D, ISO 9001:2015, ITAR compliant |

### Manufacturing Process

```
3D Print Tooling → Layup → Bag → Cure (oven/autoclave) → CNC Trim → Inspect → Ship
```

## Tech Stack

| Layer | Stack |
|-------|-------|
| **Frontend** | React + TypeScript |
| **Backend** | Go, Python, or Node.js |
| **UI Libraries** | MUI, Radix, or Tailwind |
| **Design** | Figma |

## Floor UX Constraints

All tools built for shop floor use MUST follow:

- **Touch targets:** ≥ 44px (glove-friendly)
- **Contrast:** High contrast for shop lighting
- **Input:** Minimal text input (dropdowns, buttons, scanners)
- **Resolution:** Tablet-first, 1024x768 minimum
- **Connectivity:** Spotty WiFi — offline capability often required
- **Sync:** Must handle reconnection gracefully

## Compliance Requirements

- **AS9100D:** Full traceability (audit trails, timestamps, user IDs)
- **ITAR:** Data handling restrictions where applicable
- **Logging:** All state changes must be auditable

## Systems

| System | Purpose |
|--------|---------|
| **FiberPortal** | Customer-facing ordering platform |
| **MES/Scheduling** | Production planning |
| **QC/Cure Logs** | Quality documentation |
| **Out-life Tracking** | Material expiration |

## Workflow

This repo uses a 7-phase workflow for building internal tools:

1. **Intake Triage** → Capture and classify inputs
2. **Research Synthesis** → Combine inputs into design briefs
3. **Design** → UX/UI in Figma (external)
4. **Problem Definition** → Structured problem statements
5. **PRD Generation** → Spec for autonomous implementation
6. **Build (amp-ralph)** → Autonomous code execution
7. **Floor Validation** → Test with real operators

Phases 1-5 and 7 are **interactive** (require user input).
Phase 6 is **autonomous** (continuous agent execution).

### Workflow Artifacts

Workflow artifacts are stored at the project root:

| Directory | Contents |
|-----------|----------|
| `inputs/` | Triaged inputs (`intake-*.md`) |
| `synthesis/` | Research briefs (`brief-*.md`) |
| `issues/` | Problem definitions (`problem-*.md`) |
| `tasks/` | PRDs and validation reports |

## Commands

```bash
# Per-project — check project README or package.json
pnpm typecheck
pnpm lint
pnpm test
```

## Commit Convention

All commits follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

<body>

Refs: [US-XXX] - <story title>
```

Types: `feat`, `fix`, `refactor`, `docs`, `style`, `test`, `chore`
