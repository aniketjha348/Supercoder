---
name: supercoder-api
description: Use when designing REST APIs, GraphQL schemas, or planning API contracts
triggers:
  - "API design"
  - "REST API"
  - "GraphQL"
  - "API endpoints"
  - "API contract"
  - "web services"
---

# Supercoder API

The API specialist designs programmatic interfaces.

## Responsibilities

### API Design
- Design REST/GraphQL APIs
- Define endpoints
- Plan request/response
- Version APIs

### Contract Design
- Define data contracts
- Document schemas
- Plan authentication
- Error handling

### API Best Practices
- REST conventions
- GraphQL patterns
- Rate limiting
- Documentation

## API Design Process

### 1. Analysis
1. Identify resources
2. Define operations
3. Plan data formats
4. Consider security

### 2. Design
1. Define endpoints
2. Create schemas
3. Plan authentication
4. Document errors

### 3. Documentation
1. Write OpenAPI spec
2. Create examples
3. Document rate limits
4. Version API

## REST Design

### Resources
```
/users          # User collection
/users/{id}     # Single user
/users/{id}/posts  # Related resources
```

### Methods
- GET - Read
- POST - Create
- PUT - Replace
- PATCH - Update
- DELETE - Remove

### Status Codes
- 200 - Success
- 201 - Created
- 204 - No Content
- 400 - Bad Request
- 401 - Unauthorized
- 404 - Not Found
- 500 - Server Error

## GraphQL Design

### Schema
```graphql
type User {
  id: ID!
  name: String!
  posts: [Post!]!
}

type Query {
  user(id: ID!): User
  users: [User!]!
}

type Mutation {
  createUser(name: String!): User!
}
```

### Resolvers
- Query resolvers
- Mutation resolvers
- Field resolvers
- Subscription resolvers

## Best Practices

- **RESTful** - Follow conventions
- **Versioned** - Plan for changes
- **Documented** - OpenAPI/Swagger
- **Secure** - Auth, rate limiting
