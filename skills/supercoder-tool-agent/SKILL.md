---
name: supercoder-tool-agent
description: Use when you need to spawn subagents or delegate work to handle independent tasks
triggers:
  - "spawn agent"
  - "delegate"
  - "subagent"
  - "create worker"
  - "fork"
---

# Supercoder Agent Orchestration

## Available Tools

### Spawn Agent
- Create a subagent for specific task
- Give clear instructions
- Define scope and files
- Set verification requirements

## Usage

### Spawn Template
```
Task: [description]
Files: [file1, file2]
Requirements:
- [requirement 1]
- [requirement 2]
Verification: [how to verify]
```

### Track Progress
- Use TodoWrite for agent tasks
- Monitor completion
- Verify results

## Best Practices

- **Clear boundaries** - Each agent knows their scope
- **Specific instructions** - Don't leave room for ambiguity
- **Verify results** - Check agent's work
- **Handle failures** - Retry or reassign if needed
