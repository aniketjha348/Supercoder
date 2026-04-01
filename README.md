# Supercoder

**Your AI's Own Software Development Team** - 100+ specialized AI agents for complete software engineering.

![Supercoder](https://img.shields.io/badge/Supercoder-AI%20Team-blue)
![Version](https://img.shields.io/badge/Version-1.2.0-green)
![License](https://img.shields.io/badge/License-MIT-yellow)
![Skills](https://img.shields.io/badge/Skills-97-brightgreen)

## What is Supercoder?

Supercoder gives any AI coding agent a complete software development team with **97+ specialized skills**. It works with **Codex, Claude Code, Cursor, Windsurf, OpenCode, Gemini CLI, Trae, Continue, VS Code**, and more.

## Key Features

- **97+ Skills** - From Python to Game Dev to SWE Pro
- **Subagent Switching** - Delegate to specialized agents
- **Team Memory** - Agents talk to each other via shared memory
- **Skill Auto-Detection** - AI loads relevant skills automatically
- **AI Developer Mode** - Build complete production-ready projects
- **Git Clone + Symlink** - Install via git clone for your AI agent

## Install (Git Clone + Symlink)

### Codex CLI
```bash
git clone https://github.com/aniketjha348/Supercoder.git ~/.codex/supercoder
mkdir -p ~/.agents/skills
ln -s ~/.codex/supercoder/skills ~/.agents/skills/supercoder

# Windows (PowerShell)
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.agents\skills"
cmd /c mklink /J "$env:USERPROFILE\.agents\skills\supercoder" "$env:USERPROFILE\.codex\supercoder\skills"
```

### OpenCode
Add to your `opencode.json`:
```json
{
  "plugin": ["supercoder@git+https://github.com/aniketjha348/Supercoder.git"]
}
```

### Claude Code
```bash
git clone https://github.com/aniketjha348/Supercoder.git ~/.claude/supercoder
mkdir -p ~/.agents/skills
ln -s ~/.claude/supercoder/skills ~/.agents/skills/supercoder
```

### Cursor
```bash
git clone https://github.com/aniketjha348/Supercoder.git ~/.cursor/extensions/supercoder
ln -s ~/.cursor/extensions/supercoder/skills ~/.agents/skills/supercoder
```

### Manual Install (Node)
```bash
git clone https://github.com/aniketjha348/Supercoder.git Supercoder
cd Supercoder
node bin/supercoder.js install codex     # Codex CLI
node bin/supercoder.js install claude    # Claude Code
node bin/supercoder.js install opencode  # OpenCode
node bin/supercoder.js install cursor    # Cursor
node bin/supercoder.js install windsurf  # Windsurf
node bin/supercoder.js install all       # All agents!
```

## Available Skills (100+ Total)

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

### Domain Skills (71+) - WHAT to Build
| Category | Skills |
|----------|--------|
| **Languages** | python, go, java, typescript, rust, cpp |
| **Frameworks** | django, fastapi, spring, react, vue, angular |
| **Databases** | sql, nosql, graphdb, vector, timeseries |
| **Cloud** | kubernetes, terraform, docker, aws, gcp, azure |
| **AI/ML** | llm, rag, ml, mlops, memory, ai |
| **Mobile** | mobile, flutter, react-native |
| **Game Dev** | game-dev |
| **Security** | security, pentest, cryptography |
| **Quality** | tester, reviewer, debugger, performance |
| **Operations** | devops, sre, monitor, incident |
| **Roles** | sde, swe, swe-pro, swe-expert, fullstack, cloud-dev, game-dev, software-dev |
| **Process** | product, scrum, requirements, analyst |

## New: Subagent Switching & Team Communication

### Delegate to Subagents
```
@supercoder-python: Write a data processing function
@supercoder-frontend: Build a React component
@supercoder-db: Design the database
```

### Shared Memory (Agents Talk to Each Other)
```javascript
// Frontend stores UI spec
teamMemory.write('ui_spec', { components: [...] });

// Backend reads it and builds API
const ui = teamMemory.read('ui_spec');
```

See `skills/supercoder-subagent-switching` and `skills/supercoder-team-memory` for details.

## Skill Auto-Detection

Supercoder includes a **manifest.json** that allows AI to automatically detect and load relevant skills based on your request. When you ask for help with a specific task, the AI will:

1. Read `skills/manifest.json`
2. Match keywords in your request
3. Load the appropriate skill(s) automatically

Example: "Build a REST API with authentication" → loads **fastapi** + **security** skills

## CLI Commands

```bash
# From repo (git clone)
node bin/supercoder.js install codex    # Install for specific agent
node bin/supercoder.js install all      # Install for all agents
node bin/supercoder.js list             # List supported agents
node bin/supercoder.js clean            # Remove from all agents
node bin/supercoder.js doctor           # Check health
```

## Project Structure

```
Supercoder/
├── bin/
│   └── supercoder.js          # Main CLI
├── skills/
│   ├── manifest.json          # Skill auto-detection manifest
│   └── supercoder/            # 100+ skills
│       ├── supercoder-brainstorming/
│       ├── supercoder-tool-*/
│       ├── supercoder-python/
│       ├── supercoder-aws/
│       ├── supercoder-gcp/
│       ├── supercoder-azure/
│       └── ...
├── packages/                  # NPM scoped packages
│   ├── supercoder-codex/
│   ├── supercoder-claude/
│   ├── supercoder-gemini/
│   └── supercoder-trae/
├── docs/                      # Documentation
├── package.json
└── README.md
```

## Verify Installation

Start a new session with your AI agent and ask:

> "What tools do you have available?"

You should see Supercoder skills listed.

## AI Auto-Detection Example

When the AI needs to help you, it reads `skills/manifest.json` to find relevant skills:

```
User: "Build a Flutter app with AWS backend"

AI loads:
- supercoder-flutter (keyword: flutter)
- supercoder-aws (keyword: aws)
- supercoder-mobile (keyword: app)
```

## License

MIT

## Author

[aniketjha348](https://github.com/aniketjha348)

## Getting Help

- Issues: https://github.com/aniketjha348/Supercoder/issues
