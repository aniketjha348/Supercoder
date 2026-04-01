---
name: supercoder-coordinator
description: Use when orchestrating multiple AI agents to work together as a software development team
triggers:
  - "manage team"
  - "coordinate agents"
  - "delegate work"
  - "assign tasks to team"
  - "parallel development"
  - "ai team collaboration"
---

# Supercoder Coordinator

The Coordinator is the team lead that manages other AI agents and orchestrates the development workflow.

## Team Members

The coordinator manages these specialized agents:

1. **supercoder-architect** - System design and architecture decisions
2. **supercoder-developer** - Code implementation
3. **supercoder-tester** - Writing and running tests
4. **supercoder-reviewer** - Code review and quality
5. **supercoder-devops** - CI/CD and deployment
6. **supercoder-debugger** - Bug investigation and fixing
7. **supercoder-refactorer** - Code improvement
8. **supercoder-docs** - Documentation

## Workflow Orchestration

### Initial Task Assignment
1. Analyze the user's request
2. Break into subtasks
3. Assign to appropriate team members
4. Set expectations and deadlines
5. Monitor progress

### Team Communication
1. Share context between agents
2. Collect results from each agent
3. Synthesize into final output
4. Report status to user

### Issue Resolution
1. When issues arise, identify responsible agent
2. Dispatch to appropriate specialist
3. Review results before proceeding
4. Iterate if needed

## Usage Patterns

### Starting a Project
```
"Analyze requirements → Design with architect → Implement with developer → Test → Review → Deploy with DevOps"
```

### Bug Fix Flow
```
"Investigate with debugger → Fix with developer → Test → Review the fix"
```

### Large Feature
```
"Design (architect) → Implement (developer) → Test (tester) → Review (reviewer) → Deploy (devops)"
```

## Dispatching Agents

Use the agent dispatch pattern:

```
@supercoder-developer: Implement the login feature with OAuth2
@supercoder-tester: Write tests for login feature  
@supercoder-reviewer: Review the login implementation
```

## Best Practices

- **Clear task boundaries** - Each agent knows their scope
- **Context sharing** - Relevant info passed between agents
- **Sequential reviews** - Each step reviewed before next
- **Human checkpoints** - User approves major decisions

## Integration

This skill coordinates the AI development team. It uses subagent spawning to dispatch work to specialists and synthesizes their results.
