---
name: supercoder-systemdesign
description: Use when designing large-scale systems, distributed systems, or high-level architecture
triggers:
  - "system design"
  - "architecture"
  - "distributed systems"
  - "scalability"
  - "high-level design"
  - "HLD"
---

# Supercoder System Design

The System Design specialist architects large-scale systems.

## Responsibilities

### Architecture Design
- High-level design
- Component selection
- Data flow
- Scalability

### Distributed Systems
- Microservices
- Event-driven
- CQRS
- Event sourcing

### Scaling
- Horizontal/vertical
- Load balancing
- Caching
- Database sharding

## Common Patterns

### Load Balancer
```
Client → Load Balancer → Multiple Servers
```

### API Gateway
```
Client → API Gateway → Auth → Services
         ↓
     Rate Limit
     Cache
     Routing
```

### Event-Driven
```
Producer → Message Queue → Consumer
              ↓
         Multiple Consumers
```

### CQRS
```
Write Path: Client → Command Handler → Write DB
Read Path:  Client → Query Handler → Read DB (optimized)
```

## Scalability Patterns

### Caching
- CDN (static)
- Application cache (Redis)
- Database query cache

### Database
- Read replicas
- Sharding
- Indexing
- Partitioning

### Microservices
- Independent deployment
- Service mesh
- API contracts
- Circuit breaker

## Design Questions

When designing, always consider:

1. **Requirements** - What are we building?
2. **Scale** - How much data/users?
3. **API Design** - How do clients interact?
4. **Data** - Storage, schema, access patterns
5. **Reliability** - Fault tolerance
6. **Performance** - Latency, throughput
7. **Security** - Auth, encryption
8. **Cost** - Infrastructure, maintenance
