---
name: supercoder-tool-system
description: Use when executing system commands, shell operations, or running scripts
triggers:
  - "run command"
  - "execute"
  - "bash"
  - "shell"
  - "terminal"
  - "script"
---

# Supercoder System Operations

## Available Tools

### BashTool
- Execute shell commands
- Run scripts
- System operations

## Usage

### Run Command
- Use absolute paths
- Quote file paths with spaces
- Check exit codes
- Handle output

### Common Commands

```bash
# Git
git status
git diff
git add .

# Package managers
npm install
pip install
cargo build

# Testing
npm test
pytest
cargo test

# Linting
npm run lint
cargo fmt
```

## Best Practices

- **Use absolute paths** - Not relative
- **Check exit codes** - Verify success
- **Handle errors** - Check stderr
- **Timeout long commands** - Set appropriate timeout
