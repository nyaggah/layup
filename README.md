![Ralph](ralph.avif)

# Layup Parts — AI Skills & Workflow Template

A 7-phase AI-augmented workflow system for autonomous product development at Layup Parts. Captures feedback from the shop floor and takes it all the way to validated, deployed features—using AI agents for structured execution while keeping humans in the loop for judgment calls.

Built as a demonstration of the "Joe + AI @ Layup" approach: human direction and taste combined with AI-powered execution. See [nyaggah.github.io/layup/](https://nyaggah.github.io/opaque_id/) for the full rationale.

## Installation

### Per-Project (Recommended)

Copy `.agents/` and `AGENTS.md` to your project root:

```bash
cp -r /path/to/this-repo/.agents /path/to/your-project/
cp /path/to/this-repo/AGENTS.md /path/to/your-project/
```

Then customize `AGENTS.md` for project-specific commands, stack details, etc.

### Global (Layup-wide context)

For company-wide context that applies to all projects:

```bash
cp -r .agents/skills ~/.ampcode/skills/
```

Skills in `~/.ampcode/skills/` are available in every project automatically.

## Directory Structure

```
your-project/
├── AGENTS.md              # Layup context (customize per project)
├── .agents/skills/        # Workflow skills
│   ├── intake-triage/
│   ├── research-synthesis/
│   ├── problem-definition/
│   ├── layup-prd/
│   ├── amp-ralph/
│   └── floor-validation/
├── inputs/                # Triaged inputs
├── synthesis/             # Research briefs
├── issues/                # Problem definitions
└── tasks/                 # PRDs and validation reports
```

## Workflow Overview

```
Input Channels → Triage → Synthesis → Design → Problem Definition → PRD → Build → Validation
```

| Phase         | Skill                | Type           | Output                  |
| ------------- | -------------------- | -------------- | ----------------------- |
| 1. Triage     | `intake-triage`      | Interactive    | `inputs/intake-*.md`    |
| 2. Synthesize | `research-synthesis` | Interactive    | `synthesis/brief-*.md`  |
| 3. Design     | _(Figma)_            | External       | Figma links             |
| 4. Define     | `problem-definition` | Interactive    | `issues/problem-*.md`   |
| 5. Spec       | `layup-prd`          | Interactive    | `tasks/prd-*.md`        |
| 6. Build      | `amp-ralph`          | **Autonomous** | Working code            |
| 7. Validate   | `floor-validation`   | Interactive    | `tasks/validation-*.md` |

## Using Skills

Skills load automatically when you use trigger phrases:

```
"New intake from technician about cure log issues"
→ Loads intake-triage skill

"Synthesize the recent cure log feedback"
→ Loads research-synthesis skill

"Define the problem from synthesis/brief-cure-log.md"
→ Loads problem-definition skill

"Create PRD from issues/problem-cure-log.md"
→ Loads layup-prd skill

"Execute PRD tasks/prd-cure-log.md"
→ Loads amp-ralph skill (autonomous)

"Validate the cure-log feature"
→ Loads floor-validation skill
```

## Quick Start

1. **Capture:** "Intake: technician reported cure log takes too long"
2. **Synthesize:** "Synthesize inputs related to cure logging"
3. **Design:** Create Figma flows (external)
4. **Define:** "Define problem from synthesis/brief-cure-log.md"
5. **Spec:** "Create PRD from issues/problem-cure-log.md"
6. **Build:** "Execute PRD tasks/prd-cure-log.md" _(autonomous)_
7. **Validate:** "Run floor validation for cure-log"

## Files Generated

| Pattern                         | Purpose                   |
| ------------------------------- | ------------------------- |
| `inputs/intake-YYYY-MM-DD-*.md` | Triaged inputs            |
| `synthesis/brief-*.md`          | Research synthesis        |
| `issues/problem-*.md`           | Problem definitions       |
| `tasks/prd-*.md`                | Product requirements      |
| `tasks/validation-*.md`         | Floor validation reports  |
| `prd.json`                      | Amp-ralph execution state |
| `progress.txt`                  | Amp-ralph progress log    |

## See Also

- [RFC.md](RFC.md) — Full background, rationale, and lineage
- [AGENTS.md](AGENTS.md) — Layup context template
- [.agents/skills/](.agents/skills/) — Skill definitions

## Author

**Joe Nyaggah**

- [nyaggah.com](https://nyaggah.com/)
- [github.com/nyaggah](https://github.com/nyaggah)
