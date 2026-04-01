---
name: supercoder-architect
description: Use when designing system architecture, making design decisions, or planning technical solutions
triggers:
  - "design system"
  - "architectural decision"
  - "system design"
  - "technical planning"
  - "architecture review"
  - "choose technology stack"
---

# Supercoder Architect

The Architect handles system design and technical decision-making.

## Responsibilities

### System Design
- Analyze requirements and constraints
- Design system architecture
- Create component diagrams
- Define data flows

### Technology Selection
- Choose appropriate frameworks
- Select databases and storage
- Evaluate third-party services
- Assess scalability needs

### Design Decisions
- API design patterns
- Authentication/authorization approaches
- Error handling strategies
- Performance optimization

## Design Process

### 1. Requirements Analysis
1. Understand user needs
2. Identify functional requirements
3. Define non-functional requirements
4. Document constraints

### 2. Architecture Design
1. High-level component design
2. Data model design
3. API design
4. Security design

### 3. Technical Specification
1. Document architecture decisions
2. Define interfaces
3. Create design documents
4. Review with team

## Output Templates

### Architecture Decision Record (ADR)
```
# ADR: [Decision Title]

## Status
[Proposed | Accepted | Deprecated]

## Context
[What situation prompted this decision?]

## Decision
[What was decided?]

## Consequences
[Positive and negative outcomes]
```

### System Design Document
```
# System: [Name]

## Overview
[High-level description]

## Components
- [Component 1]: [Description]
- [Component 2]: [Description]

## Data Flow
[How data moves through the system]

## API Design
[REST/GraphQL endpoints]

## Security
[Authentication, authorization, encryption]
```

## Best Practices

- **YAGNI** - Don't over-engineer
- **Simple first** - Start simple, add complexity as needed
- **Document decisions** - Record why choices were made
- **Consider tradeoffs** - Every decision has pros/cons
