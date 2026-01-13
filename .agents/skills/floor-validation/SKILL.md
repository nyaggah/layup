---
name: floor-validation
description: Validates completed features with real operators on the manufacturing floor before rollout. Hardware checks, operator testing, compliance verification. Use when validating features, doing floor tests, or pre-rollout checks.
---

# Floor Validation

Validate completed features with real operators on the manufacturing floor before rollout.

## Workflow

1. Deploy feature to staging/test environment
2. Perform hardware/environment checks
3. Run operator testing sessions
4. Verify compliance requirements
5. Collect feedback and make go/no-go decision
6. Document results in `layup-amp-ralph/tasks/validation-[feature].md`

## Pre-Validation Setup

```markdown
## Validation Setup

**Feature:** [Feature name]
**Branch:** [Branch name]
**PRD:** `tasks/prd-[feature].md`
**Date:** YYYY-MM-DD

### Test Environment
- [ ] Deployed to: [staging URL / test device]
- [ ] Test data seeded
- [ ] Accounts created for testers
```

## Step 1: Hardware & Environment Checks

### Device Check

| Check | Pass/Fail | Notes |
|-------|-----------|-------|
| Loads on floor tablet | | |
| Touch targets work with gloves | | |
| Readable in shop lighting | | |
| Orientation changes handled | | |
| Screen resolution (1024x768) | | |

### Network Check

| Check | Pass/Fail | Notes |
|-------|-----------|-------|
| Works on floor WiFi | | |
| Handles WiFi dead zones | | |
| Offline mode (if required) | | |
| Sync recovery after reconnect | | |

### Integration Check

| System | Check | Pass/Fail | Notes |
|--------|-------|-----------|-------|
| FiberPortal | Data flows correctly | | |
| MES | Updates reflected | | |
| QC System | Logs captured | | |

## Step 2: Operator Testing

### Session Setup

```markdown
### Operator Test Session

**Date:** YYYY-MM-DD
**Location:** [Shop floor area]
**Operator:** [Name], [Role]
**Observer:** [Your name]
**Duration:** [X minutes]
```

### Pre-Test Questions

1. How do you currently do [this task]?
2. What's the most annoying part?
3. How long does it typically take?

### Observation Protocol

Watch the operator use the feature. Note:

| Observation | Details |
|-------------|---------|
| Confusion points | Where did they hesitate? |
| Errors made | What did they do wrong? |
| Workarounds | Did they try something unexpected? |
| Speed | How long did the task take? |
| Assistance needed | What did you explain? |

**Do NOT help unless completely stuck.** Observe natural behavior.

### Post-Test Questions

1. How was that compared to your current process?
2. What would make this better?
3. Would you use this? Why/why not?
4. Rating 1-5: How easy was this?

## Step 3: Compliance Verification

### AS9100D Traceability

| Requirement | Verified | Notes |
|-------------|----------|-------|
| Actions logged with timestamp | | |
| User ID captured | | |
| Data changes traceable | | |
| Audit trail accessible | | |

### ITAR Data Handling (if applicable)

| Requirement | Verified | Notes |
|-------------|----------|-------|
| No ITAR data exposed externally | | |
| Access controls enforced | | |

## Step 4: Go/No-Go Decision

### Scoring

| Criterion | Weight | Score (1-5) | Weighted |
|-----------|--------|-------------|----------|
| Operator ease rating (avg) | 3x | | |
| Task completion rate | 2x | | |
| Error rate | 2x | | |
| Hardware compatibility | 1x | | |
| Compliance checks | 1x | | |
| **Total** | | | /45 |

### Decision Criteria

| Score | Decision |
|-------|----------|
| ≥ 36 (80%) | **GO** — Ready for rollout |
| 27-35 (60-79%) | **CONDITIONAL** — Fix issues, re-validate |
| < 27 (< 60%) | **NO-GO** — Major rework needed |

## Validation Report Template

```markdown
# Floor Validation Report: [Feature Name]

**Date:** YYYY-MM-DD
**Feature Branch:** [branch]
**PRD:** `tasks/prd-[feature].md`

## Summary

**Decision:** [GO / CONDITIONAL / NO-GO]
**Score:** [X/45]

## Hardware Checks

| Check | Result |
|-------|--------|
| Tablet compatibility | ✅/❌ |
| Touch/glove usability | ✅/❌ |
| Network/offline | ✅/❌ |
| Integrations | ✅/❌ |

## Operator Testing

**Operators tested:** [X]
**Average ease rating:** [X/5]
**Task completion rate:** [X%]

### Key Findings

1. [Finding 1]
2. [Finding 2]

### Operator Quotes

> "[Quote]" — [Role]

## Compliance

- [x] AS9100D: [Status]
- [x] ITAR: [Status or N/A]

## Issues Found

| Issue | Severity | Fix Required |
|-------|----------|--------------|
| [Issue 1] | High/Med/Low | Before rollout / Later |

## Rollout Plan

- [ ] Fix critical issues: [Date]
- [ ] Training session: [Date]
- [ ] Soft launch (1 shift): [Date]
- [ ] Full rollout: [Date]

**Rollback:** [How to revert if problems]
```

## Output

Save to: `layup-amp-ralph/tasks/validation-[feature].md`
