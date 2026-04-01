---
name: supercoder-nosql
description: Use when working with NoSQL databases like MongoDB, Cassandra, Redis, or DynamoDB
triggers:
  - "MongoDB"
  - "Cassandra"
  - "Redis"
  - "DynamoDB"
  - "NoSQL"
  - "document database"
---

# Supercoder NoSQL

The NoSQL specialist works with non-relational databases.

## Responsibilities

### Document Databases (MongoDB)
- Document design
- Aggregation pipelines
- Indexing strategies
- Schema design

### Key-Value Stores (Redis)
- Data structures
- Caching strategies
- Pub/Sub
- Transactions

### Wide-Column (Cassandra)
- CQL design
- Data modeling
- Partition keys
- Compaction strategies

### Cloud NoSQL (DynamoDB)
- Single table design
- GSI/LSI
- Provisioned vs on-demand
- DAX

## MongoDB Patterns

### Document Schema
```javascript
{
  "_id": ObjectId,
  "userId": ObjectId,
  "products": [
    {
      "productId": ObjectId,
      "quantity": Number,
      "price": Number
    }
  ],
  "status": "pending",
  "createdAt": Date,
  "updatedAt": Date
}
```

### Aggregation Pipeline
```javascript
db.orders.aggregate([
  { $match: { status: "completed" } },
  { $unwind: "$products" },
  { $group: { 
      _id: "$products.productId",
      totalSold: { $sum: "$products.quantity" }
  }},
  { $sort: { totalSold: -1 } },
  { $limit: 10 }
]);
```

## Redis Patterns

### Data Structures
```bash
# String
SET user:1:name "John"
GET user:1:name

# Hash
HSET user:1 email "john@example.com" age "30"

# List
LPUSH notifications "new message"
LRANGE notifications 0 -1

# Set
SADD tags "python" "javascript" "rust"

# Sorted Set
ZADD leaderboard 1000 "player1"
ZREVRANGE leaderboard 0 10 WITHSCORES
```

### Caching Patterns
```javascript
// Cache-aside
async function getUser(id) {
  const cached = await redis.get(`user:${id}`);
  if (cached) return JSON.parse(cached);
  
  const user = await db.users.findById(id);
  await redis.setex(`user:${id}`, 3600, JSON.stringify(user));
  return user;
}
```

## Cassandra Patterns

### Data Modeling
```sql
CREATE TABLE orders_by_user (
    user_id uuid,
    order_id timeuuid,
    products list<frozen<product>>,
    total decimal,
    PRIMARY KEY (user_id, order_id)
) WITH CLUSTERING ORDER BY (order_id DESC);
```

### Partition Design
- Aim for <10MB partitions
- Use bucketing for time-series
- Avoid hot partitions

## DynamoDB Patterns

### Single Table Design
```javascript
{
  PK: "USER#1",
  SK: "ORDER#2024-001",
  data: { ... }
},
{
  PK: "USER#1", 
  SK: "METADATA",
  data: { ... }
},
{
  PK: "ORDER#2024-001",
  SK: "ITEM#product1",
  data: { ... }
}
```

## Best Practices

- **Denormalize** - For read performance
- **Design for access patterns**
- **Use connection pools**
- **Monitor slow queries**
- **Backup strategies**
