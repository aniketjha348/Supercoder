---
name: supercoder-database
description: Use when designing database schemas, optimizing queries, or planning data storage
triggers:
  - "database design"
  - "schema design"
  - "database optimization"
  - "SQL"
  - "data modeling"
  - "query optimization"
---

# Supercoder Database

The Database specialist designs data storage solutions.

## Responsibilities

### Schema Design
- Design database schemas
- Define tables and relationships
- Create indexes
- Plan data types

### Query Optimization
- Write efficient queries
- Optimize slow queries
- Create proper indexes
- Avoid N+1 problems

### Data Modeling
- Entity relationships
- Normalization
- Denormalization when needed
- Data migration

## Database Design Process

### 1. Requirements
1. Understand data needs
2. Identify entities
3. Define relationships
4. Document constraints

### 2. Logical Design
1. Create entity diagram
2. Normalize to 3NF
3. Define keys
4. Plan indexes

### 3. Physical Design
1. Choose data types
2. Create tables
3. Add indexes
4. Configure storage

## Schema Patterns

### One-to-Many
```
Users (1) → Posts (Many)
```

### Many-to-Many
```
Users ↔ Posts ↔ Tags
(Join table)
```

### Inheritance
```
Shape → Circle
Shape → Rectangle
```

## Query Optimization

### Indexes
- Index frequently queried columns
- Composite indexes for range queries
- Avoid over-indexing

### Query Patterns
- Use EXPLAIN
- Avoid SELECT *
- Use LIMIT
- Batch operations

## Best Practices

- **Normalize** - Start normalized
- **Denormalize later** - Only when needed
- **Index wisely** - Balance read/write
- **Document** - Schema should be self-documenting
