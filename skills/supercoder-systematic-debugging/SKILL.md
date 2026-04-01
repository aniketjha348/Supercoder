---
name: supercoder-systematic-debugging
description: "Use when encountering any bug, test failure, or unexpected behavior. ALWAYS find root cause before fixing."
triggers:
  - "fix the bug"
  - "debug"
  - "error"
  - "not working"
  - "failed"
  - "crash"
  - "exception"
  - "test failed"
  - "bug"
---

# Supercoder Systematic Debugging

## The Iron Law

```
NO FIXES WITHOUT ROOT CAUSE INVESTIGATION FIRST
```

**Violating this is violating the spirit of debugging.**

## When To Use

- Test failures
- Bugs in production
- Unexpected behavior
- Performance problems
- Build failures
- Integration issues

## The Four Phases

### Phase 1: Root Cause Investigation

**BEFORE attempting ANY fix:**

1. **Read Error Messages Carefully**
   - Don't skip past errors or warnings
   - Read stack traces completely
   - Note line numbers, file paths, error codes

2. **Reproduce Consistently**
   - Can you trigger it reliably?
   - What are the exact steps?
   - If not reproducible → gather more data

3. **Check Recent Changes**
   - What changed recently?
   - Git diff, dependency updates, config changes

4. **Identify Root Cause**
   - What's actually wrong?
   - Not symptoms - root cause

### Phase 2: Verify Hypothesis

1. **Form a hypothesis** - What you think is wrong
2. **Test it** - Confirm or deny
3. **Document findings** - What you learned

### Phase 3: Design Fix

1. **Multiple solutions** - Consider 2-3 approaches
2. **Trade-offs** - What's the impact?
3. **Best approach** - Choose and explain why
4. **Test the fix** - Before implementing

### Phase 4: Implement & Verify

1. **Apply fix** - Write the code
2. **Test** - Verify it works
3. **Check for regressions** - Nothing else broke
4. **Complete** - Document what was fixed

## Checklist

- [ ] Phase 1: Root Cause Investigation complete
- [ ] Phase 2: Hypothesis verified
- [ ] Phase 3: Fix designed
- [ ] Phase 4: Fix implemented and tested
- [ ] No regressions introduced

## Anti-Patterns

- "This looks obvious, let me fix it" - WRONG - find root cause first
- "Let me try this quick fix" - WRONG - no quick fixes
- "I'll just patch this" - WRONG - fix the root cause
- Skipping root cause investigation

## Verification

After fixing:
1. Run tests - all pass
2. Manual testing - works as expected
3. Check logs - no new errors
4. Review - no regressions
