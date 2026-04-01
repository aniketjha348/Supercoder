---
name: using-supercoder
description: Use when starting any conversation to understand the available AI development team and capabilities
---

# Using Supercoder

Supercoder is your **AI Software Development Team** - 64+ specialized AI agents that work together to build software.

## Workflow Skills (The Development Process)

These skills define HOW you work - they chain together:

| Skill | When | Purpose |
|-------|------|---------|
| **brainstorming** | New feature request | Explore → Questions → Design → Approval |
| **writing-plans** | After design approved | Break into tasks → Create plan |
| **test-driven-development** | Writing any code | Tests first → Implement → Refactor |
| **executing-plans** | Implementing plan | Task-by-task → Verify |
| **systematic-debugging** | Bug/error | Root cause first → 4 phases → Fix |
| **verification-before-completion** | Before claiming done | Run tests → Verify → Confirm |
| **receiving-code-review** | Getting feedback | Understand → Verify → Fix |
| **requesting-code-review** | Before merge | Prepare → Summary → Request |
| **subagent-driven-development** | Multi-task work | Spawn agents → Coordinate |
| **dispatching-parallel-agents** | Parallel tasks | Dispatch → Wait → Integrate |
| **finishing-a-development-branch** | Ready to merge | Verify → Choose strategy → PR |

## The Complete Workflow

```
1. User requests something new
   ↓
2. brainstorming skill triggers
   - Ask questions one at a time
   - Propose 2-3 approaches
   - Present design, get approval
   ↓
3. writing-plans skill triggers
   - Break design into tasks
   - Define dependencies
   - Save to docs/superpowers/plans/
   ↓
4. test-driven-development skill triggers
   - Write failing test first (RED)
   - Write minimal code (GREEN)
   - Refactor (REFACTOR)
   ↓
5. executing-plans skill triggers
   - Implement tasks one by one
   - Verify after each task
   - Track progress with todos
   ↓
6. verification-before-completion skill triggers
   - Run all tests
   - Run lint & typecheck
   - Build check
   - Manual verification
   ↓
7. requesting-code-review skill triggers
   - Self-review first
   - Prepare summary
   - Create PR
   ↓
8. receiving-code-review skill triggers
   - Understand feedback
   - Verify claims
   - Implement fixes
   - Respond to reviewer
   ↓
9. finishing-a-development-branch skill triggers
   - Choose merge strategy
   - Create PR
   - Merge when approved
```

## Your AI Team (64+ Specialists)

### Team Lead
- **supercoder-coordinator** - Orchestrates the team, assigns tasks

### Process Skills (HOW)
- **supercoder-brainstorming** - Design before building
- **supercoder-writing-plans** - Create implementation plans
- **supercoder-test-driven-development** - TDD workflow
- **supercoder-executing-plans** - Execute task-by-task
- **supercoder-systematic-debugging** - Root cause first
- **supercoder-verification-before-completion** - Verify before done
- **supercoder-receiving-code-review** - Handle feedback
- **supercoder-requesting-code-review** - Prepare for review
- **supercoder-subagent-driven-development** - Use subagents
- **supercoder-dispatching-parallel-agents** - Parallel execution
- **supercoder-finishing-a-development-branch** - Merge workflow

### Process Skills (HOW)
- **supercoder-brainstorming** - Design before building
- **supercoder-writing-plans** - Create implementation plans
- **supercoder-test-driven-development** - TDD workflow
- **supercoder-executing-plans** - Execute task-by-task
- **supercoder-systematic-debugging** - Root cause first
- **supercoder-verification-before-completion** - Verify before done
- **supercoder-receiving-code-review** - Handle feedback
- **supercoder-requesting-code-review** - Prepare for review
- **supercoder-subagent-driven-development** - Use subagents
- **supercoder-dispatching-parallel-agents** - Parallel execution
- **supercoder-finishing-a-development-branch** - Merge workflow

### Requirements & Analysis
- **supercoder-requirements** - Gather and document requirements
- **supercoder-analyst** - Business and data analysis

### Design
- **supercoder-architect** - System design
- **supercoder-ux** - User experience design
- **supercoder-database** - Database design
- **supercoder-api** - API design
- **supercoder-security-arch** - Security architecture

### Implementation
- **supercoder-developer** - Code implementation
- **supercoder-frontend** - React, Vue, Angular
- **supercoder-backend** - Node, Python, Go, Rust
- **supercoder-mobile** - iOS, Android, Flutter, React Native
- **supercoder-data** - Data pipelines, ETL
- **supercoder-ml** - Machine learning

### Quality
- **supercoder-tester** - Testing & QA
- **supercoder-reviewer** - Code review
- **supercoder-security** - Security auditing
- **supercoder-performance** - Performance optimization
- **supercoder-accessibility** - Accessibility (a11y)

### Operations
- **supercoder-devops** - CI/CD & deployment
- **supercoder-sre** - Site reliability
- **supercoder-monitor** - Monitoring & alerts
- **supercoder-incident** - Incident response

### Maintenance
- **supercoder-debugger** - Bug investigation
- **supercoder-refactorer** - Code improvement
- **supercoder-docs** - Documentation

### Process
- **supercoder-product** - Product management
- **supercoder-scrum** - Agile facilitation

### Tool Skills
- **supercoder-tool-file-ops** - File operations
- **supercoder-tool-agent** - Agent orchestration
- **supercoder-tool-vim** - Vim editing
- **supercoder-tool-voice** - Voice input
- **supercoder-tool-ui** - Display
- **supercoder-tool-system** - System commands

## How It Works

1. **Tell Supercoder what you want** - Describe your project or task
2. **Coordinator analyzes** - Breaks into tasks and assigns to specialists
3. **Specialists execute** - Each handles their domain
4. **Review and iterate** - Quality checks before completion
5. **Deliver result** - Working software with tests and docs

## Installation

### Quick Install (npm)
```bash
npm install -g supercoder
supercoder install codex
```

### Manual Install

#### Codex (Global)
Skills are in: `~/.agents/skills/supercoder/`

#### Claude Code
```bash
/plugin install supercoder@claude-plugins-official
```

#### OpenCode
```json
{
  "plugin": ["supercoder@git+https://github.com/aniketjha348/supercoder-tool-code.git"]
}
```

#### Cursor
Search "supercoder" in marketplace

## Example Workflows

### New Feature
```
"Build a user authentication system"
→ Requirements gathers needs
→ Architect designs
→ Database designs schema
→ API designs endpoints
→ Frontend builds UI
→ Backend implements API
→ Tester writes tests
→ Security audits
→ Reviewer checks quality
→ DevOps sets up deployment
→ Monitor configures alerts
```

### Bug Fix
```
"Fix the login timeout bug"
→ Debugger investigates
→ Developer fixes
→ Tester verifies
→ Security reviews
→ Reviewer approves
```

### Refactor
```
"Clean up the legacy API code"
→ Requirements documents scope
→ Refactorer improves
→ Database optimizes queries
→ Performance tests
→ Reviewer validates
```

## Philosophy

- **Specialization** - Each agent is expert in their domain
- **Collaboration** - Agents work together seamlessly
- **Quality** - Multiple review stages ensure best results
- **Automation** - Repetitive tasks automated
- **Complete** - Full software development lifecycle
