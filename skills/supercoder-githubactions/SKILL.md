---
name: supercoder-githubactions
description: Use when creating GitHub Actions workflows, CI/CD pipelines, or automated testing
triggers:
  - "GitHub Actions"
  - "CI/CD"
  - "workflow"
  - "GitHub workflow"
  - "automation"
---

# Supercoder GitHub Actions

The GitHub Actions specialist builds CI/CD pipelines.

## Core Patterns

### Workflow
```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          
      - run: npm ci
      - run: npm test
      
  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm run build
```

## Best Practices

- **Caching** - Dependencies
- **Matrix** - Multiple versions
- **Concurrency** - Cancel outdated
- **Artifacts** - Share builds
