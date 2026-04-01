---
name: supercoder-sde
description: "Use when building real-world software - combines DSA rigor with production-ready fullstack development: clean architecture, data modeling, API design, testing, security, and deployment"
triggers:
  - "build project"
  - "fullstack"
  - "sde"
  - "real software"
  - "production"
  - "complete application"
  - "end to end"
  - "build task app"
  - "create api"
  - "build web app"
  - "make app"
  - "build backend"
  - "create fullstack"
  - "new application"
  - "setup backend"
  - "make project"
  - "create project"
  - "build rest api"
  - "setup database"
  - "implement auth"
---

# Supercoder SDE

Software Development Engineer - builds complete, production-ready software with systematic approach.

## The SDE Mindset

Real software is NOT just code that works. It's:
- **Maintainable** - Others can understand and modify
- **Scalable** - Handles real user load
- **Secure** - Protected against attacks
- **Testable** - Has automated tests
- **Documented** - Others know how to use it

## Systematic Development Workflow

```dot
digraph sde {
    "Requirements" -> "Design";
    "Design" -> "Plan";
    "Plan" -> "Implement";
    "Implement" -> "Test";
    "Test" -> "Security";
    "Security" -> "Deploy";
    "Deploy" -> "Document";
    
    "Design" [shape=box,style=filled,fillcolor=lightyellow];
    "Implement" [shape=box,style=filled,fillcolor=lightgreen];
    "Test" [shape=box,style=filled,fillcolor=lightcoral];
}
```

## Phase 1: Requirements (Clarify Before Coding)

### Questions to Ask

1. **What exactly** should the software do?
2. **Who** are the end users?
3. **What data** needs to be stored?
4. **How many users** expected? (100? 100K? 10M?)
5. **What integrations** needed?
6. **What is the deadline**?

### Deliverable: Feature List
```
Must Have (MVP):
- [ ] User authentication
- [ ] Create/read tasks
- [ ] Mark task complete

Nice to Have:
- [ ] Due dates
- [ ] Categories/tags
- [ ] Share with others
```

## Phase 2: System Design

### 2.1 Data Modeling

**Step 1: Identify Entities**

For each type of data, define:
```
Entity: User
- id (UUID, PK)
- email (unique, required)
- password_hash (required)
- name (optional)
- created_at (timestamp)
- updated_at (timestamp)

Entity: Task
- id (UUID, PK)
- title (required, max 200 chars)
- description (optional, text)
- completed (boolean, default false)
- user_id (FK to User)
- created_at
- updated_at
- due_date (optional)
```

**Step 2: Design Schema**

```sql
-- PostgreSQL
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(100),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE tasks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(200) NOT NULL,
    description TEXT,
    completed BOOLEAN DEFAULT FALSE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    due_date TIMESTAMP
);

CREATE INDEX idx_tasks_user_id ON tasks(user_id);
CREATE INDEX idx_tasks_completed ON tasks(completed);
```

### 2.2 API Design

**RESTful Conventions:**

| Action | Method | Endpoint | Response |
|--------|--------|----------|----------|
| Register | POST | /api/auth/register | 201 |
| Login | POST | /api/auth/login | 200 + JWT |
| Get all tasks | GET | /api/tasks | 200 + list |
| Get one task | GET | /api/tasks/:id | 200 or 404 |
| Create task | POST | /api/tasks | 201 |
| Update task | PUT | /api/tasks/:id | 200 |
| Delete task | DELETE | /api/tasks/:id | 204 |

**Request/Response Format:**

```json
// POST /api/tasks
Request:
{
  "title": "Buy groceries",
  "description": "Milk, bread, eggs",
  "due_date": "2026-04-15T18:00:00Z"
}

Response (201):
{
  "success": true,
  "data": {
    "id": "uuid",
    "title": "Buy groceries",
    "completed": false,
    "created_at": "2026-04-01T12:00:00Z"
  }
}

Response (Error 400):
{
  "success": false,
  "error": "Title is required"
}
```

### 2.3 Architecture

```
┌─────────────────────────────────────────────┐
│                 Frontend                     │
│              (React/Next.js)                 │
└─────────────────────┬───────────────────────┘
                      │ HTTP + JSON
┌─────────────────────▼───────────────────────┐
│              API Server                       │
│           (Node.js/FastAPI)                   │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐          │
│  │Routes   │ │Services │ │Models   │          │
│  └─────────┘ └─────────┘ └─────────┘          │
└─────────────────────┬───────────────────────┘
                      │
┌─────────────────────▼───────────────────────┐
│            Database (PostgreSQL)              │
└─────────────────────────────────────────────┘
```

## Phase 3: Implementation

### 3.1 Project Structure

**Node.js/Express:**
```
src/
├── config/
│   └── database.js      # DB connection
├── controllers/
│   ├── authController.js
│   └── taskController.js
├── middleware/
│   └── auth.js          # JWT verification
├── models/
│   ├── User.js
│   └── Task.js
├── routes/
│   ├── auth.js
│   └── tasks.js
├── services/
│   ├── authService.js
│   └── taskService.js
├── utils/
│   ├── AppError.js
│   └── catchAsync.js
├── validations/
│   └── schemas.js
└── index.js             # Entry point
```

**Python/FastAPI:**
```
app/
├── api/
│   └── v1/
│       ├── auth.py
│       └── tasks.py
├── core/
│   ├── config.py
│   └── security.py
├── models/
│   ├── user.py
│   └── task.py
├── schemas/
│   ├── auth.py
│   └── task.py
├── services/
│   └── crud.py
├── utils/
│   └── helpers.py
└── main.py
```

### 3.2 Core Implementation Examples

**Database Connection (Node.js):**
```javascript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'error', 'warn'],
});

export default prisma;
```

**Database Connection (Python):**
```python
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "postgresql://user:pass@localhost:5432/db"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
```

**Auth Controller (Register):**
```javascript
// Node.js
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

async function register(req, res) {
  const { email, password, name } = req.body;

  // Check if user exists
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return res.status(400).json({ error: 'Email already exists' });
  }

  // Hash password
  const passwordHash = await bcrypt.hash(password, 12);

  // Create user
  const user = await prisma.user.create({
    data: { email, passwordHash, name }
  });

  // Generate token
  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );

  res.status(201).json({ token, user: { id: user.id, email: user.email } });
}
```

**Task CRUD - Create:**
```javascript
async function createTask(req, res) {
  const { title, description, dueDate } = req.body;
  const userId = req.user.id;

  const task = await prisma.task.create({
    data: {
      title,
      description,
      dueDate: dueDate ? new Date(dueDate) : null,
      userId
    }
  });

  res.status(201).json(task);
}
```

**Task CRUD - List with Pagination:**
```javascript
async function getTasks(req, res) {
  const { status = 'all', page = 1, limit = 10 } = req.query;
  const userId = req.user.id;

  const where = { userId };
  if (status === 'active') where.completed = false;
  if (status === 'completed') where.completed = true;

  const skip = (parseInt(page) - 1) * parseInt(limit);

  const [tasks, total] = await Promise.all([
    prisma.task.findMany({
      where,
      skip,
      take: parseInt(limit),
      orderBy: { createdAt: 'desc' }
    }),
    prisma.task.count({ where })
  ]);

  res.json({
    data: tasks,
    pagination: {
      page: parseInt(page),
      limit: parseInt(limit),
      total,
      pages: Math.ceil(total / parseInt(limit))
    }
  });
}
```

### 3.3 Middleware - Authentication

```javascript
// authMiddleware.js
import jwt from 'jsonwebtoken';

export function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}
```

### 3.4 Validation

```javascript
// Using Zod
import { z } from 'zod';

const registerSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Password must be at least 8 chars'),
  name: z.string().min(1, 'Name is required').max(100)
});

const taskSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().optional(),
  dueDate: z.string().datetime().optional()
});

// Usage in route
function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ 
        errors: result.error.flatten().fieldErrors 
      });
    }
    req.body = result.data;
    next();
  };
}
```

## Phase 4: Testing

### 4.1 Unit Tests

```javascript
// authService.test.js
import { hashPassword, verifyPassword } from '../services/auth';

describe('Auth Service', () => {
  describe('hashPassword', () => {
    it('should hash password correctly', async () => {
      const hash = await hashPassword('test123');
      expect(hash).not.toBe('test123');
      expect(hash.length).toBeGreaterThan(20);
    });

    it('should produce different hashes for same password', async () => {
      const hash1 = await hashPassword('test123');
      const hash2 = await hashPassword('test123');
      expect(hash1).not.toBe(hash2);
    });
  });

  describe('verifyPassword', () => {
    it('should return true for correct password', async () => {
      const hash = await hashPassword('test123');
      const result = await verifyPassword('test123', hash);
      expect(result).toBe(true);
    });

    it('should return false for wrong password', async () => {
      const hash = await hashPassword('test123');
      const result = await verifyPassword('wrong', hash);
      expect(result).toBe(false);
    });
  });
});
```

### 4.2 Integration Tests

```javascript
// tasks.test.js
describe('Tasks API', () => {
  let token;
  let userId;

  beforeAll(async () => {
    // Create test user and get token
    const res = await request(app)
      .post('/api/auth/register')
      .send({ email: 'test@test.com', password: 'test123', name: 'Test' });
    
    token = res.body.token;
    userId = res.body.user.id;
  });

  describe('POST /api/tasks', () => {
    it('should create task with valid token', async () => {
      const res = await request(app)
        .post('/api/tasks')
        .set('Authorization', `Bearer ${token}`)
        .send({ title: 'Test Task' });

      expect(res.status).toBe(201);
      expect(res.body.title).toBe('Test Task');
    });

    it('should reject without token', async () => {
      const res = await request(app)
        .post('/api/tasks')
        .send({ title: 'Test Task' });

      expect(res.status).toBe(401);
    });

    it('should reject with invalid title', async () => {
      const res = await request(app)
        .post('/api/tasks')
        .set('Authorization', `Bearer ${token}`)
        .send({ title: '' });

      expect(res.status).toBe(400);
    });
  });

  describe('GET /api/tasks', () => {
    it('should list tasks for authenticated user', async () => {
      const res = await request(app)
        .get('/api/tasks')
        .set('Authorization', `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body.data)).toBe(true);
    });
  });
});
```

### 4.3 Test Coverage Target

| Level | Coverage | Description |
|-------|----------|-------------|
| Minimum | 70% | Core business logic |
| Good | 85% | Most code paths |
| Excellent | 90%+ | Everything |

## Phase 5: Security

### Security Checklist

- [ ] HTTPS only (never HTTP)
- [ ] Strong password hashing (bcrypt, 10+ rounds)
- [ ] JWT with expiration
- [ ] Input validation (Zod/Joi)
- [ ] SQL injection prevention (parameterized queries)
- [ ] XSS prevention (sanitize inputs)
- [ ] Rate limiting (100 req/min per IP)
- [ ] CORS configured properly
- [ ] Security headers (Helmet.js)
- [ ] No secrets in code (use env vars)

### Environment Variables (.env)
```
DATABASE_URL=postgresql://user:pass@localhost:5432/db
JWT_SECRET=your-super-secret-key-min-32-chars
NODE_ENV=development
PORT=3000
```

## Phase 6: Deployment

### 6.1 Docker

```dockerfile
# Dockerfile
FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy source
COPY . .

# Expose port
EXPOSE 3000

# Start
CMD ["node", "src/index.js"]
```

```bash
# docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://db:5432/app
      - JWT_SECRET=${JWT_SECRET}
    depends_on:
      - db
    restart: unless-stopped

  db:
    image: postgres:15-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
      - POSTGRES_DB=app

volumes:
  postgres_data:
```

### 6.2 CI/CD (GitHub Actions)

```yaml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm test

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm run build
      - run: npm run deploy
```

### 6.3 Deployment Platforms

| Platform | Best For | Free Tier |
|----------|----------|-----------|
| Railway | Fullstack apps | Yes |
| Render | APIs, workers | Yes |
| Vercel | Next.js, frontend | Yes |
| Fly.io | Docker apps | Yes |
| AWS | Enterprise | No |

## Phase 7: Documentation

### README Template

```markdown
# Project Name

Brief one-line description.

## Features

- User authentication (JWT)
- Create, read, update, delete tasks
- Filter by status
- Due dates

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Backend**: Node.js, Express
- **Database**: PostgreSQL (Prisma ORM)
- **Auth**: JWT, bcrypt

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 14+

### Installation

```bash
# Clone
git clone https://github.com/user/project.git
cd project

# Install
npm install

# Setup DB
cp .env.example .env
npm run db:push

# Run
npm run dev
```

## API Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | /api/auth/register | Create account | No |
| POST | /api/auth/login | Login | No |
| GET | /api/tasks | List tasks | Yes |
| POST | /api/tasks | Create task | Yes |
| PUT | /api/tasks/:id | Update task | Yes |
| DELETE | /api/tasks/:id | Delete task | Yes |

## Architecture

[Include architecture diagram - see Phase 2.3]

## License

MIT
```

## Interview Prep - DSA

### Must-Know Patterns

| Pattern | Use Case |
|---------|----------|
| Two Pointers | Sorted array problems |
| Sliding Window | Subarray/substring |
| Hash Map | Frequency, lookups |
| BFS/DFS | Tree/graph traversal |
| Binary Search | Search in sorted |
| Dynamic Programming | Optimization problems |
| Recursion + Memo | Overlapping subproblems |

### Practice Problems by Topic

**Arrays:**
- Two Sum
- Maximum Subarray
- Product of Array Except Self
- Rotate Array

**Strings:**
- Valid Palindrome
- Longest Substring Without Repeating
- Valid Anagram

**Linked Lists:**
- Reverse Linked List
- Merge Two Sorted Lists
- Linked List Cycle

**Trees:**
- Maximum Depth
- Same Tree
- Binary Tree Inorder Traversal

**Sorting:**
- Merge Intervals
- Meeting Rooms

## SDE Core Principles

1. **Think before code** - Design first, code second
2. **Data structures matter** - Choose the right one
3. **Clean code** - Readable > clever
4. **Test everything** - If not tested, it's broken
5. **Security by default** - Don't add later
6. **Design for scale** - Think big
7. **Document everything** - Code without docs = legacy
8. **Ship often** - Iterate fast

## Verification Checklist

Before calling complete:
- [ ] Code compiles without errors
- [ ] All tests pass (npm test)
- [ ] API works (use Postman/cURL)
- [ ] Frontend renders correctly
- [ ] Auth works (register/login)
- [ ] CRUD works (create/read/update/delete)
- [ ] Error handling works
- [ ] Security checklist complete
- [ ] Documentation complete
- [ ] Deployed to production

## Anti-Patterns

- "It works on my machine" → Test in production-like env
- "We'll add tests later" → Tests first, TDD
- "Security is IT's job" → Built in from start
- "No time for docs" → Code without docs = legacy
- "We'll optimize later" → Design for scale from day 1
