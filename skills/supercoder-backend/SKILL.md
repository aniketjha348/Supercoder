---
name: supercoder-backend
description: Use when building server-side applications with Node.js, Python, Go, or Rust
triggers:
  - "backend"
  - "server"
  - "API"
  - "Node.js"
  - "Python"
  - "Go"
  - "Rust"
  - "Express"
  - "FastAPI"
---

# Supercoder Backend

The Backend specialist builds server-side applications.

## Responsibilities

### API Development
- Create REST/GraphQL APIs
- Handle requests/responses
- Implement business logic
- Error handling

### Database Integration
- Connect to databases
- Write queries
- Handle migrations
- Optimize performance

### Server Management
- Set up servers
- Configure middleware
- Handle authentication
- Rate limiting

## Backend Process

### 1. Architecture
1. Design API structure
2. Plan database schema
3. Define middleware
4. Configure authentication

### 2. Implementation
1. Set up project
2. Create routes
3. Implement handlers
4. Add validation

### 3. Optimization
1. Query optimization
2. Caching strategy
3. Performance tuning
4. Security hardening

## Framework Patterns

### Node.js/Express
```javascript
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});
```

### Python/FastAPI
```python
@app.get("/users")
async def get_users():
    return await User.all()
```

### Go
```go
func GetUsers(w http.ResponseWriter, r *http.Request) {
    users := db.FindAll()
    json.NewEncoder(w).Encode(users)
}
```

## Project Structure

```
src/
├── routes/
├── controllers/
├── models/
├── middleware/
├── services/
├── utils/
└── index.js
```

## Best Practices

- **Stateless** - No server state
- **Async** - Non-blocking I/O
- **Secure** - Validate input
- **Documented** - OpenAPI specs
