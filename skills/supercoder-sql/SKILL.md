---
name: supercoder-sql
description: Use when designing SQL databases, writing complex queries, or optimizing database performance
triggers:
  - "SQL"
  - "PostgreSQL"
  - "MySQL"
  - "database design"
  - "SQL query"
  - "database optimization"
---

# Supercoder SQL

The SQL specialist designs and optimizes relational databases.

## Responsibilities

### Database Design
- Schema design
- Normalization (1NF-5NF)
- Index strategy
- Constraint design

### Query Writing
- Complex joins
- Subqueries
- Window functions
- CTEs

### Performance Tuning
- Query optimization
- Index design
- Execution plans
- Cache tuning

## Schema Design

### Normalization Forms

**1NF**: Atomic values, no repeating groups
**2NF**: 1NF + no partial dependencies
**3NF**: 2NF + no transitive dependencies
**BCNF**: 3NF + every determinant is a candidate key
**4NF**: BCNF + no multi-valued dependencies
**5NF**: 4NF + no join dependencies

### Example Schema
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    title VARCHAR(255) NOT NULL,
    content TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_posts_user_id ON posts(user_id);
CREATE INDEX idx_posts_created_at ON posts(created_at DESC);
```

## Advanced Queries

### Window Functions
```sql
SELECT 
    department,
    employee_name,
    salary,
    AVG(salary) OVER (PARTITION BY department) as dept_avg,
    RANK() OVER (PARTITION BY department ORDER BY salary DESC) as dept_rank
FROM employees;
```

### CTE (Common Table Expressions)
```sql
WITH monthly_sales AS (
    SELECT 
        DATE_TRUNC('month', created_at) as month,
        SUM(amount) as total
    FROM sales
    GROUP BY 1
)
SELECT * FROM monthly_sales
WHERE total > (SELECT AVG(total) FROM monthly_sales);
```

### Recursive CTE
```sql
WITH RECURSIVE org_chart AS (
    SELECT id, name, manager_id, 1 as level
    FROM employees
    WHERE manager_id IS NULL
    
    UNION ALL
    
    SELECT e.id, e.name, e.manager_id, oc.level + 1
    FROM employees e
    JOIN org_chart oc ON e.manager_id = oc.id
)
SELECT * FROM org_chart;
```

## Performance Optimization

### EXPLAIN Analysis
```sql
EXPLAIN ANALYZE
SELECT * FROM posts
WHERE user_id = 1
ORDER BY created_at DESC;
```

### Index Strategies
- B-tree (default)
- Hash (exact match)
- GIN (full-text, JSONB)
- GiST (spatial)
- BRIN (time-series)

## Best Practices

- **Indexes on foreign keys**
- **Covering indexes** for reads
- **Avoid SELECT *** - specify columns
- **Use prepared statements**
- **Connection pooling**
