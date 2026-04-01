---
name: supercoder-tool-file-ops
description: Use when performing file operations - reading, editing, writing, searching, or globbing files
triggers:
  - "read file"
  - "edit file"
  - "write file"
  - "search in files"
  - "find files"
  - "grep"
  - "glob"
---

# Supercoder File Operations

## Available Tools

### Read File
- Read file contents with line numbers
- Use offset/limit for large files

### Edit File
- Replace specific text
- Use exact match
- Verify after editing

### Write File
- Create new files
- Overwrite existing files
- Use absolute paths

### Glob
- Find files by pattern
- `**/*.ts` for all TypeScript
- `src/**/*.js` in src directory

### Grep
- Search content with regex
- Find all occurrences
- Filter by file patterns

## Best Practices

- **Always read before editing** - Get exact content
- **Use absolute paths** - Avoid ambiguity
- **Test patterns first** - Verify glob/grep on small scope
- **Verify after changes** - Read to confirm

## Common Patterns

### Read and Edit
```
1. Read file
2. Edit specific section
3. Verify changes
```

### Search and Replace
```
1. Grep to find all occurrences
2. Read relevant files
3. Edit each file
4. Verify all changes
```
