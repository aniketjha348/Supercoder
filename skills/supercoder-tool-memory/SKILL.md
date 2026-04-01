---
name: supercoder-tool-memory
description: Use when storing, retrieving, or managing conversation context and session memory
triggers:
  - "remember"
  - "memory"
  - "context"
  - "session"
  - "store"
---

# Supercoder Memory Management

## Available Tools

### MemoryStoreTool
- Store information for later
- Tag and categorize
- Set expiry if needed

### MemoryRetrieveTool
- Retrieve stored information
- Search by tags
- Get recent context

## Usage

### Store Important Info
```
- Project conventions
- User preferences
- Architecture decisions
- API endpoints
```

### Retrieve Context
- At session start
- When working on related tasks
- To recall previous decisions

## Best Practices

- **Store decisions** - Don't rely on memory
- **Tag for search** - Easy retrieval
- **Keep concise** - Only key points
- **Use for context** - Recall previous work
