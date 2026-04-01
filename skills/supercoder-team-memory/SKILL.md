# Supercoder Team Memory

Inter-agent shared memory for team collaboration.

## Overview

All Supercoder agents share a common memory space to communicate and collaborate. This enables:
- Passing context between agents
- Sharing design decisions
- Coordinating on complex tasks

## Usage

### Read/Write from Any Agent

```javascript
// Store data (any agent)
teamMemory.write('key', { data: 'value', from: 'agent-name' });

// Read data (any agent)
const data = teamMemory.read('key');

// List all keys
const keys = teamMemory.keys();

// Clear specific key
teamMemory.clear('key');

// Clear all
teamMemory.clearAll();
```

### Team Communication

```javascript
// Agent A: Stores design
teamMemory.write('api_design', {
  endpoints: ['/users', '/posts'],
  auth: 'jwt',
  database: 'postgresql'
});

// Agent B: Reads and uses design
const design = teamMemory.read('api_design');
// Now builds API matching the design

// Agent C: Adds database schema
teamMemory.write('db_schema', {
  users: { id: 'uuid', email: 'string' },
  posts: { id: 'uuid', user_id: 'uuid' }
});
```

### Query Patterns

```javascript
// Get all data from an agent
teamMemory.fromAgent('python');

// Get recent entries (last 10)
teamMemory.recent(10);

// Search by key pattern
teamMemory.search('api_*');

// Get all keys
teamMemory.all();
```

## Storage

Data is stored in:
- **Codex**: `~/.agents/skills/supercoder/team-memory.json`
- **Claude**: `~/.claude/skills/supercoder/team-memory.json`
- **OpenCode**: `~/.config/opencode/skills/supercoder/team-memory.json`

## Best Practices

1. **Use descriptive keys**: `api_design`, `db_schema`, `ui_spec`
2. **Include context**: Who wrote it, when, what task
3. **Clear after use**: Remove temporary data when done
4. **Atomic updates**: Read-modify-write pattern

## Example: Fullstack Project

```
Task: Build a blog app

1. @supercoder-frontend → stores ui_spec
2. @supercoder-backend → reads ui_spec, builds API, stores api_spec  
3. @supercoder-db → reads api_spec, creates schema
4. @supercoder-reviewer → reads all specs, reviews everything
```

```javascript
// Frontend stores UI spec
teamMemory.write('ui_spec', {
  pages: ['home', 'blog', 'post'],
  components: ['Header', 'PostCard', 'CommentForm'],
  state: 'react-context'
});

// Backend reads and matches
const ui = teamMemory.read('ui_spec');
// Creates /api/posts, /api/comments matching UI needs
teamMemory.write('api_spec', {
  endpoints: [...],
  auth: 'jwt'
});

// Database creates matching schema
const api = teamMemory.read('api_spec');
// Creates posts, comments tables
```
