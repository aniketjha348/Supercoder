# Supercoder

**Your AI's Own Software Development Team** - 92 specialized AI agents for complete software engineering.

![Supercoder](https://img.shields.io/badge/Supercoder-AI%20Team-blue)
![Version](https://img.shields.io/badge/Version-1.0.0-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

## What is Supercoder?

Supercoder gives any AI coding agent a complete software development team with 92 specialized skills. It works with **Codex, Claude Code, Cursor, Windsurf, OpenCode, Gemini CLI, Trae, Continue, VS Code**, and more.

## Quick Install

```bash
# Clone the repository
git clone https://github.com/aniketjha348/Supercoder.git Supercoder

# Install for specific AI agent
cd Supercoder
node bin/supercoder.js install codex     # Codex CLI
node bin/supercoder.js install claude    # Claude Code
node bin/supercoder.js install cursor   # Cursor
node bin/supercoder.js install windsurf # Windsurf
node bin/supercoder.js install all      # All agents!
```

## Installation per AI Agent

| Agent | Command |
|-------|---------|
| Codex | `node bin/supercoder.js install codex` |
| Claude Code | `node bin/supercoder.js install claude` |
| OpenCode | `node bin/supercoder.js install opencode` |
| Cursor | `node bin/supercoder.js install cursor` |
| Windsurf | `node bin/supercoder.js install windsurf` |
| Gemini CLI | `node bin/supercoder.js install gemini` |
| Trae | `node bin/supercoder.js install trae` |
| Continue | `node bin/supercoder.js install continue` |
| VS Code | `node bin/supercoder.js install vscode` |

## Available Skills (92 Total)

### Process Skills (11) - HOW to Work
These define the development workflow:

| Skill | When to Use |
|-------|-------------|
| **supercoder-brainstorming** | New feature - design first |
| **supercoder-writing-plans** | Create implementation plan |
| **supercoder-test-driven-development** | Write code with TDD |
| **supercoder-executing-plans** | Execute tasks one-by-one |
| **supercoder-systematic-debugging** | Bug/error - root cause first |
| **supercoder-verification-before-completion** | Verify before done |
| **supercoder-receiving-code-review** | Handle feedback |
| **supercoder-requesting-code-review** | Create PR |
| **supercoder-subagent-driven-development** | Use subagents |
| **supercoder-dispatching-parallel-agents** | Parallel execution |
| **supercoder-finishing-a-development-branch** | Merge workflow |

### Tool Skills (18) - File & System Operations
| Skill | Description |
|-------|--------------|
| **supercoder-tool-file-ops** | File read, edit, write, grep, glob |
| **supercoder-tool-agent** | Subagent orchestration |
| **supercoder-tool-vim** | Vim motions and operators |
| **supercoder-tool-system** | Bash and system commands |
| **supercoder-tool-memory** | Memory management |
| **supercoder-tool-reference** | Tool metadata |
| **supercoder-tool-assistant** | Session history |
| **supercoder-tool-bridge** | IPC and remote sessions |
| **supercoder-tool-hooks** | React hooks and permissions |
| **supercoder-tool-cli** | CLI operations |
| **supercoder-tool-services** | Backend services |
| **supercoder-tool-keybindings** | Keyboard shortcuts |
| **supercoder-tool-screens** | Application screens |
| **supercoder-tool-remote** | Remote sessions |
| **supercoder-tool-plugins** | Plugin management |
| **supercoder-tool-state** | Application state |
| **supercoder-tool-ui** | Display and statusline |
| **supercoder-tool-voice** | Voice input processing |

### Domain Skills (63) - WHAT to Build
| Category | Skills |
|----------|--------|
| **Languages** | python, go, java, typescript, rust, cpp |
| **Frameworks** | django, fastapi, spring, react, vue, angular |
| **Databases** | sql, nosql, graphdb, vector, timeseries |
| **Cloud** | kubernetes, terraform, docker |
| **AI/ML** | llm, rag, ml, mlops, memory |
| **Security** | security, pentest, cryptography |
| **Quality** | tester, reviewer, debugger, performance |
| **Operations** | devops, sre, monitor, incident |
| **Process** | product, scrum, requirements, analyst |

## The Complete Workflow

```
User Request → brainstorming → writing-plans → 
test-driven-development → executing-plans → 
verification → requesting-code-review → 
receiving-code-review → finishing-branch
```

## CLI Commands

```bash
supercoder install codex    # Install for specific agent
supercoder install all     # Install for all agents
supercoder list            # List supported agents
supercoder clean           # Remove from all agents
supercoder doctor          # Check health
```

## Project Structure

```
Supercoder/
├── bin/
│   └── supercoder.js      # Main CLI
├── skills/
│   └── supercoder/        # 92 skills
│       ├── supercoder-brainstorming/
│       ├── supercoder-tool-*/
│       └── supercoder-python/
├── .codex/                # Codex installation
├── .claude/               # Claude Code installation
├── .cursor-plugin/       # Cursor installation
├── .opencode/             # OpenCode installation
├── package.json
└── README.md
```

## Verify Installation

Start a new session with your AI agent and ask:

> "What tools do you have available?"

## License

MIT

## Author

[aniketjha348](https://github.com/aniketjha348)

## Getting Help

- Issues: https://github.com/aniketjha348/Supercoder/issues
