---
name: supercoder-graphdb
description: Use when working with graph databases like Neo4j, building knowledge graphs, or doing graph queries
triggers:
  - "graph database"
  - "Neo4j"
  - "knowledge graph"
  - "graph query"
  - "Cypher"
  - "Gremlin"
---

# Supercoder GraphDB

The GraphDB specialist builds and queries graph databases.

## Responsibilities

### Graph Modeling
- Node design
- Relationship design
- Property design
- Schema enforcement

### Graph Queries
- Cypher queries
- Gremlin traversals
- Graph algorithms
- Path finding

### Knowledge Graphs
- Entity resolution
- Relationship extraction
- Ontology design
- Inference

## Neo4j Patterns

### Data Model
```
(:Person {name})-[:KNOWS]->(:Person)
(:Person)-[:WORKS_AT]->(:Company)
(:Company)-[:LOCATED_IN]->(:Country)
```

### Cypher Queries
```cypher
// Create nodes
CREATE (p:Person {name: "Alice", age: 30})
CREATE (c:Company {name: "TechCorp"})
CREATE (p)-[:WORKS_AT {since: 2020}]->(c)

// Find paths
MATCH (p:Person)-[:KNOWS*1..3]->(friend)
WHERE p.name = "Alice"
RETURN friend.name, length(friend) as hops
ORDER BY hops

// Friends of friends
MATCH (a:Person)-[:KNOWS]->(b)-[:KNOWS]->(c)
WHERE a.name = "Alice" AND NOT (a)-[:KNOWS]->(c)
RETURN c.name, COUNT(*) as commonFriends
ORDER BY commonFriends DESC
```

### Graph Algorithms

```cypher
// PageRank
CALL gds.pageRank.write({
  nodeProjection: 'Person',
  relationshipProjection: 'KNOWS',
  writeProperty: 'pageRank'
})

// Community detection
CALL gds.louvain.write({
  nodeProjection: 'Person',
  relationshipProjection: 'KNOWS',
  writeProperty: 'community'
})
```

## Use Cases

### Social Networks
```cypher
MATCH (p:Person)-[:KNOWS]->(f)-[:KNOWS]->(suggestion)
WHERE p.name = "Alice" AND NOT (p)-[:KNOWS]->(suggestion)
RETURN suggestion.name as suggestion, COUNT(*) as mutualFriends
ORDER BY mutualFriends DESC
```

### Recommendation Engine
```cypher
MATCH (user)-[:BOUGHT]->(product)<-[:BOUGHT]-(similarUser)
WHERE user.name = "Alice"
WITH product, COUNT(similarUser) as similarBuyers
WHERE similarBuyers > 5
RETURN product.name as recommended, similarBuyers
ORDER BY similarBuyers DESC
```

### Fraud Detection
```cypher
MATCH (p1:Person)-[:SHARES_IP]->(ip)<-[:SHARES_IP]-(p2:Person)
WHERE p1 <> p2
WITH p1, p2, COUNT(ip) as sharedIPs
WHERE sharedIPs > 3
RETURN p1.name, p2.name, sharedIPs
```

## Best Practices

- **Avoid variable-length paths** when possible
- **Use relationship types** for clarity
- **Index node properties** for lookups
- **Watch memory** with large graphs
- **Use projection** for algorithm
