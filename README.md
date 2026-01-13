![Ralph](ralph.avif)

# Layup Parts — AI Skills & Workflow Template

A 7-phase AI-augmented workflow system for autonomous product development at Layup Parts. Captures feedback from the shop floor and takes it all the way to validated, deployed features using AI agents for structured execution while keeping humans in the loop for judgment calls.

Built as a demonstration of the "Joe + AI @ Layup" approach: human direction and taste combined with AI-powered execution. See [nyaggah.github.io/layup/](https://nyaggah.github.io/layup/) for the full rationale.

## Installation

### New Project

```bash
# Copy layup workflow into your project
cp -r /path/to/layup/.amp your-project/
cp -r /path/to/layup/.agents your-project/
cp /path/to/layup/AGENTS.md your-project/  # or merge with existing

# Start Amp
cd your-project
amp
```

### Existing Project

```bash
# Create directories if needed
mkdir -p your-project/.amp your-project/.agents/skills

# Merge the .amp directory (settings)
cp /path/to/layup/.amp/settings.json your-project/.amp/

# Merge the .agents directory (skills)
cp -r /path/to/layup/.agents/skills/* your-project/.agents/skills/

# Merge AGENTS.md guidance (append or integrate manually)
cat /path/to/layup/AGENTS.md >> your-project/AGENTS.md
```

Then customize `AGENTS.md` for project-specific commands, stack details, etc.

### Global (Layup-wide context)

For company-wide context that applies to all projects:

```bash
# Global AGENTS.md
$HOME/.config/amp/AGENTS.md
# or
$HOME/.config/AGENTS.md
```

## Directory Structure

```
your-project/
├── .amp/                  # Amp project settings
│   └── settings.json      # Handoff, permissions, etc.
├── .agents/skills/        # Workflow skills
│   ├── intake-triage/
│   ├── research-synthesis/
│   ├── problem-definition/
│   ├── layup-prd/
│   ├── amp-ralph/
│   └── floor-validation/
├── AGENTS.md              # Layup context (customize per project)
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

## Configuration

### .amp/settings.json

```json
{
  "amp.experimental.autoHandoff": { "context": 90 },
  "amp.permissions": [
    { "tool": "Bash", "matches": { "cmd": "*git push*" }, "action": "ask" },
    { "tool": "Bash", "matches": { "cmd": "*git commit*" }, "action": "allow" },
    { "tool": "*", "action": "allow" }
  ]
}
```

- **autoHandoff**: Automatically continues in a new thread at 90% context usage (enables Ralph-style continuous execution)
- **permissions**: Allows commits without prompts, asks before push, allows all other tools

## See Also

- [RFC](https://nyaggah.github.io/layup/) — Full background, rationale, and lineage
- [AGENTS.md](AGENTS.md) — Layup context template
- [.agents/skills/](.agents/skills/) — Skill definitions

## Author

**Joe Nyaggah**

- [nyaggah.com](https://nyaggah.com/)
- [github.com/nyaggah](https://github.com/nyaggah)
