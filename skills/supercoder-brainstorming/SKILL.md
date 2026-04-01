---
name: supercoder-brainstorming
description: "You MUST use this before any creative work - creating features, building components, adding functionality, or modifying behavior. Explores user intent, requirements and design before implementation."
triggers:
  - "create new feature"
  - "build new"
  - "add functionality"
  - "design new"
  - "implement new"
  - "build a"
  - "create a"
  - "add a"
  - "implement"
---

# Supercoder Brainstorming

Turn ideas into fully formed designs and specs through collaborative dialogue.

## The Rule

**DO NOT write any code, scaffold any project, or take any implementation action until you have presented a design and the user has approved it.**

## Workflow

```dot
digraph brainstorming {
    "Analyze request" [shape=box];
    "Ask questions" [shape=box];
    "Propose approaches" [shape=box];
    "Present design" [shape=box];
    "User approves?" [shape=diamond];
    "Write spec doc" [shape=box];
    "Invoke writing-plans" [shape=doublecircle];

    "Analyze request" -> "Ask questions";
    "Ask questions" -> "Propose approaches";
    "Propose approaches" -> "Present design";
    "Present design" -> "User approves?";
    "User approves?" -> "Write spec doc" [label="yes"];
    "User approves?" -> "Present design" [label="no, revise"];
    "Write spec doc" -> "Invoke writing-plans";
}
```

## Checklist

1. **Analyze the request** - Break down what user wants
2. **Ask clarifying questions** - One at a time, understand scope
3. **Propose 2-3 approaches** - With trade-offs and recommendation
4. **Present design** - Scale to complexity, get approval
5. **Write design doc** - Save to `docs/superpowers/specs/YYYY-MM-DD-<topic>-design.md`
6. **Get user review** - Ask user to review spec before proceeding
7. **Invoke writing-plans** - Transition to implementation

## Key Principles

- **One question at a time** - Don't overwhelm
- **Multiple choice preferred** - Easier for user
- **YAGNI ruthlessly** - Remove unnecessary features
- **Explore alternatives** - Always propose options
- **Incremental validation** - Get approval before moving on

## After Design Approved

- Write spec to `docs/superpowers/specs/YYYY-MM-DD-<topic>-design.md`
- Commit to git
- Ask user to review
- Only proceed once approved
- Then invoke `writing-plans` skill

## Anti-Patterns

- "This is too simple to need a design" - EVERY project needs design
- "Let me just write some code first" - VIOLATION - design first
- Skipping questions - Understand before implementing
