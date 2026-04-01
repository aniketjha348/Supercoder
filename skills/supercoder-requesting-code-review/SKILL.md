---
name: supercoder-requesting-code-review
description: "Use when completing tasks or before merging - prepare and request code review"
triggers:
  - "request review"
  - "ready for review"
  - "create pull request"
  - "before merge"
  - "submit for review"
---

# Supercoder Requesting Code Review

## When To Use

Before:
- Creating a PR
- Merging to main
- Requesting review
- Marking work complete

## Checklist

### 1. Self-Review First

Before requesting others review:
- [ ] All tests pass
- [ ] Lint passes
- [ ] Types check
- [ ] Build succeeds
- [ ] No console.log/debug code
- [ ] No secrets in code
- [ ] Comments updated

### 2. Prepare Summary

Write a clear summary:
- What changed
- Why it changed
- How to test

### 3. Review Your Own Changes

```bash
git diff main..HEAD
```

- Check each changed file
- Verify changes are correct
- Remove debug code

### 4. Create PR/Request

Include:
- Title: Clear description
- Body: What, Why, How to test
- Screenshots (if UI)
- Related issues

## PR Template

```markdown
## Summary
Brief description of changes.

## Changes
- File 1: What changed
- File 2: What changed

## Testing
How to test these changes.

## Checklist
- [ ] Tests pass
- [ ] Lint passes
- [ ] Manual testing done
```

## The Review Flow

```dot
digraph requesting {
    "Self-review" [shape=box];
    "Fix issues" [shape=box];
    "Tests pass?" [shape=diamond];
    "Prepare summary" [shape=box];
    "Create PR" [shape=box];
    "Wait for review" [shape=box];
    "Receive feedback" [shape=box];

    "Self-review" -> "Fix issues";
    "Fix issues" -> "Tests pass?";
    "Tests pass?" -> "Fix issues" [label="no"];
    "Tests pass?" -> "Prepare summary" [label="yes"];
    "Prepare summary" -> "Create PR";
    "Create PR" -> "Wait for review";
    "Wait for review" -> "Receive feedback";
}
```

## Anti-Patterns

- Requesting review without self-review - WRONG
- Leaving failing tests - WRONG
- Not testing manually - WRONG
- Unclear PR description - WRONG
- Not responding to feedback - WRONG

## After Review Received

Use `receiving-code-review` skill to handle feedback.

## Verification Before Request

Run these commands:
```bash
# Tests
npm test

# Lint
npm run lint

# Types
npm run typecheck

# Build
npm run build
```

All must pass before requesting review.
