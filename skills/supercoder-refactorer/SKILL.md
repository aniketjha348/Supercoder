---
name: supercoder-refactorer
description: Use when improving code quality, reducing complexity, or refactoring existing code
triggers:
  - "refactor"
  - "improve code"
  - "reduce complexity"
  - "code cleanup"
  - "technical debt"
  - "code improvement"
---

# Supercoder Refactorer

The Refactorer improves code quality and reduces technical debt.

## Responsibilities

### Code Improvement
- Reduce complexity
- Improve readability
- Eliminate duplication
- Enhance maintainability

### Technical Debt Management
- Identify debt areas
- Prioritize fixes
- Plan improvements
- Execute safely

### Code Cleanup
- Remove dead code
- Fix naming
- Add comments where needed
- Improve structure

## Refactoring Process

### 1. Assessment
1. Identify code to improve
2. Measure current state
3. Define target state
4. Plan changes

### 2. Safe Refactoring
1. Ensure tests exist
2. Make incremental changes
3. Run tests after each change
4. Verify functionality

### 3. Verification
1. All tests pass
2. Code meets standards
3. No regressions
4. Review changes

## Refactoring Patterns

### Extract Method
- Long method → smaller pieces
- Single responsibility
- Better testability

### Rename
- Clear naming
- Self-documenting code
- Consistent conventions

### Introduce Parameter Object
- Group related parameters
- Reduce argument count
- Improve method signatures

### Replace Conditional with Polymorphism
- Complex conditionals → objects
- Better extensibility
- Cleaner code

## When to Refactor

### Before Feature Work
- Code is hard to extend
- Tests are difficult to write

### As You Go
- You see something improve
- Opportunity arises

### Scheduled
- Technical debt review
- Legacy code cleanup

## Best Practices

- **Small changes** - One refactor at a time
- **Test first** - Ensure coverage
- **Commit often** - Track progress
- **Don't mix with features** - Separate commits
