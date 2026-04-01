# Supercoder Subagent Switching

Switch between specialized subagents for different tasks.

## How It Works

Use this skill to delegate tasks to specialized subagents and switch between them.

## Usage

### Delegate to Subagent
```
@supercoder-python: Write a function to process data
@supercoder-frontend: Build a React component
@supercoder-db: Design the database schema
```

### Query Shared Memory
```
@memory: What did the frontend agent build?
@memory: Show me the API design
```

### Switch Context
```
@switch: python   # Switch to Python agent
@switch: frontend # Switch to Frontend agent
```

## Available Subagents

| Subagent | Purpose |
|----------|---------|
| `python` | Python development, data science |
| `javascript` / `js` | JavaScript, Node.js |
| `typescript` | TypeScript development |
| `frontend` | React, Vue, UI development |
| `backend` | API, server-side development |
| `database` / `db` | Database design, queries |
| `devops` | CI/CD, deployment |
| `ai` | AI/ML integration |
| `security` | Security auditing |
| `reviewer` | Code review |
| `tester` | Testing, QA |

## Shared Memory

All subagents share a common memory:

```javascript
// Store findings
memory.set('api_design', { endpoints: [...], auth: 'jwt' });

// Retrieve from other agent
const design = memory.get('api_design');
```

## Team Communication Pattern

When multiple agents need to collaborate:

1. **Frontend Agent** stores UI design in memory
2. **Backend Agent** reads UI design, builds API
3. **Database Agent** reads API design, creates schema
4. **Reviewer Agent** checks everything

```javascript
// In frontend task
memory.set('ui_spec', { components: [...], state: {...} });

// In backend task  
const uiSpec = memory.get('ui_spec');
// Build API to match UI needs
memory.set('api_endpoints', [...]);

// In database task
const api = memory.get('api_endpoints');
// Design DB to support API
```
