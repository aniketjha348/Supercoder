---
name: supercoder-ai-developer
description: Use when building complete production-ready projects with AI-powered systematic approach - combines SDE rigor (DSA, system design, architecture) with fullstack implementation
triggers:
  - "build complete project"
  - "fullstack sde"
  - "production project"
  - "ai developer"
  - "complete application"
  - "end to end project"
  - "real world software"
  - "build project"
  - "create fullstack"
  - "make web app"
  - "build web application"
  - "deploy project"
  - "ship product"
  - "full stack"
  - "complete project"
  - "build real software"
  - "make complete app"
  - "start project"
  - "new project"
  - "setup project"
---

# Supercoder AI Developer

Build complete, production-ready software with systematic SDE approach combined with fullstack capabilities.

## The AI Developer Mindset

You're not just writing code - you're building **real software** that:
- Solves real user problems
- Follows clean architecture
- Has proper data structures
- Scales to real usage
- Ready for production deployment

## Workflow

```dot
digraph ai-developer {
    "Understand Requirements" [shape=box];
    "Design Architecture" [shape=box];
    "Plan Implementation" [shape=box];
    "Implement Core" [shape=box];
    "Add Features" [shape=box];
    "Write Tests" [shape=box];
    "Security & Performance" [shape=box];
    "Deploy" [shape=box];
    "Documentation" [shape=box];

    "Understand Requirements" -> "Design Architecture";
    "Design Architecture" -> "Plan Implementation";
    "Plan Implementation" -> "Implement Core";
    "Implement Core" -> "Add Features";
    "Add Features" -> "Write Tests";
    "Write Tests" -> "Security & Performance";
    "Security & Performance" -> "Deploy";
    "Deploy" -> "Documentation";
}
```

## Phase 1: Requirements Analysis

### 1.1 Understand the Problem
- What is the user trying to build?
- Who are the end users?
- What problem does it solve?
- What are the key features?

### 1.2 Define Scope
- MVP features vs nice-to-haves
- User authentication needed?
- Database requirements?
- Third-party integrations?
- Performance expectations?

### 1.3 Technical Stack Decision
Choose based on requirements:

| Use Case | Stack |
|----------|-------|
| API & Data | Python (FastAPI/Django) + PostgreSQL |
| Real-time app | Node.js + Socket.io |
| React SPA | React + Node.js + MongoDB |
| Enterprise | Java Spring + SQL Server |
| Serverless | Next.js + Vercel + Supabase |
| AI-powered | Python + LangChain + Vector DB |

## Phase 2: System Design (SDE Core)

### 2.1 Data Modeling

**Identify Entities:**
```
User
  - id (UUID)
  - email (unique)
  - password_hash
  - created_at
  - updated_at

Post (if blog)
  - id
  - title
  - content
  - author_id (FK)
  - published_at
  - created_at
```

**Design Database Schema:**
- Normalize to 3NF
- Add appropriate indexes
- Define foreign keys
- Consider migrations

### 2.2 API Design

**RESTful Endpoints:**
```
POST   /api/auth/register     # Create account
POST   /api/auth/login        # Get JWT token
GET    /api/users/me          # Get current user
PUT    /api/users/me          # Update profile

GET    /api/posts             # List posts (paginated)
POST   /api/posts             # Create post
GET    /api/posts/:id         # Get single post
PUT    /api/posts/:id         # Update post
DELETE /api/posts/:id         # Delete post
```

**Response Format:**
```json
{
  "success": true,
  "data": { ... },
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100
  }
}
```

### 2.3 Architecture Design

**Layered Architecture:**
```
┌─────────────────────────────────────┐
│           Routes / API              │
├─────────────────────────────────────┤
│         Controllers / Handlers      │
├─────────────────────────────────────┤
│          Services / Logic          │
├─────────────────────────────────────┤
│        Repositories / Models        │
├─────────────────────────────────────┤
│           Database / Cache         │
└─────────────────────────────────────┘
```

### 2.4 System Design Considerations

**Scalability:**
- Horizontal vs vertical scaling
- Database indexing strategy
- Caching layer (Redis?)
- Load balancing

**Security:**
- JWT authentication
- Password hashing (bcrypt)
- Input validation
- SQL injection prevention
- XSS prevention
- Rate limiting

**Error Handling:**
- Centralized error responses
- Logging strategy
- Graceful degradation

## Phase 3: Implementation Planning

### 3.1 File Structure

**Backend (Node.js/Express):**
```
src/
├── config/          # Database, env config
├── controllers/     # Request handlers
├── middleware/     # Auth, validation, error
├── models/         # Database models
├── routes/         # API routes
├── services/       # Business logic
├── utils/          # Helpers
├── validations/    # Input schemas
└── index.js        # Entry point
```

**Backend (Python/FastAPI):**
```
app/
├── api/            # Routes
├── core/           # Config, security
├── models/         # SQLAlchemy models
├── schemas/        # Pydantic schemas
├── services/       # Business logic
├── utils/          # Helpers
└── main.py         # Entry point
```

**Frontend (React):**
```
src/
├── components/     # Reusable UI
├── pages/          # Route pages
├── hooks/          # Custom hooks
├── context/        # State management
├── services/       # API calls
├── utils/          # Helpers
├── types/          # TypeScript types
└── App.tsx         # Entry
```

### 3.2 Task Breakdown

Create a TODO list with dependencies:
```
- [ ] Set up project structure
- [ ] Configure database
- [ ] Create user model & migrations
- [ ] Implement auth (register/login)
- [ ] Add JWT middleware
- [ ] Create post model
- [ ] CRUD for posts
- [ ] Add pagination
- [ ] Write unit tests
- [ ] Add error handling
- [ ] Set up CI/CD
- [ ] Deploy to production
```

## Phase 4: Core Implementation

### 4.1 Project Setup
```bash
# Initialize
npm init -y
npm install express cors helmet morgan dotenv
npm install -D typescript @types/node nodemon

# Or Python
pip install fastapi uvicorn sqlalchemy pydantic
```

### 4.2 Database Setup
```javascript
// PostgreSQL with Prisma
const prisma = new PrismaClient();

prisma.$connect()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('DB Error:', err));
```

```python
# FastAPI with SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
```

### 4.3 Authentication Implementation

**Password Hashing:**
```javascript
import bcrypt from 'bcrypt';

async function hashPassword(password) {
  return await bcrypt.hash(password, 12);
}

async function verifyPassword(password, hash) {
  return await bcrypt.compare(password, hash);
}
```

**JWT Token:**
```javascript
import jwt from 'jsonwebtoken';

function generateToken(userId) {
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
}

function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}
```

### 4.4 CRUD Operations

**Create:**
```javascript
async function createPost(data, userId) {
  return await prisma.post.create({
    data: {
      title: data.title,
      content: data.content,
      authorId: userId
    }
  });
}
```

**Read with Pagination:**
```javascript
async function getPosts(page = 1, limit = 10) {
  const skip = (page - 1) * limit;
  
  const [posts, total] = await Promise.all([
    prisma.post.findMany({
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: { author: { select: { id: true, name: true } } }
    }),
    prisma.post.count()
  ]);

  return {
    data: posts,
    pagination: { page, limit, total, pages: Math.ceil(total / limit) }
  };
}
```

## Phase 5: Testing (Critical!)

### 5.1 Unit Tests
```javascript
describe('Auth Service', () => {
  it('should hash password correctly', async () => {
    const hash = await hashPassword('test123');
    expect(hash).not.toBe('test123');
    expect(await verifyPassword('test123', hash)).toBe(true);
  });

  it('should generate valid JWT', () => {
    const token = generateToken('user-123');
    const decoded = verifyToken(token);
    expect(decoded.userId).toBe('user-123');
  });
});
```

### 5.2 Integration Tests
```javascript
describe('POST /api/posts', () => {
  it('should create post with valid token', async () => {
    const token = generateToken('user-123');
    
    const res = await request(app)
      .post('/api/posts')
      .set('Authorization', `Bearer ${token}`)
      .send({ title: 'Test', content: 'Content' });

    expect(res.status).toBe(201);
    expect(res.body.data.title).toBe('Test');
  });

  it('should reject without token', async () => {
    const res = await request(app)
      .post('/api/posts')
      .send({ title: 'Test', content: 'Content' });

    expect(res.status).toBe(401);
  });
});
```

### 5.3 Test Coverage Goal
- **Minimum**: 70% coverage
- **Good**: 85% coverage
- **Excellent**: 90%+ coverage

## Phase 6: Security & Performance

### 6.1 Security Checklist
- [ ] HTTPS in production
- [ ] Secure headers (Helmet.js)
- [ ] CORS configured
- [ ] Rate limiting
- [ ] Input validation (Zod/Joi)
- [ ] SQL injection prevention
- [ ] XSS prevention
- [ ] CSRF protection
- [ ] Secure cookies
- [ ] Environment variables for secrets

### 6.2 Performance Optimizations
- [ ] Database indexing
- [ ] Query optimization (N+1 problem)
- [ ] Caching (Redis)
- [ ] Pagination on lists
- [ ] Lazy loading
- [ ] Code splitting (frontend)
- [ ] Image optimization

## Phase 7: Deployment

### 7.1 Docker Setup
```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["node", "src/index.js"]
```

### 7.2 CI/CD Pipeline
```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm run build
      - run: npm run deploy
```

### 7.3 Deployment Platforms
| Platform | Best For |
|----------|----------|
| Vercel | Next.js, frontend |
| Railway | Fullstack |
| Render | Backend APIs |
| AWS ECS | Enterprise |
| DigitalOcean | VPS |

## Phase 8: Documentation

### 8.1 README Structure
```markdown
# Project Name

One-line description

## Features
- Feature 1
- Feature 2

## Tech Stack
- Frontend: React, TypeScript
- Backend: Node.js, Express
- Database: PostgreSQL

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 14+

### Installation
\`\`\`bash
npm install
npm run dev
\`\`\`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /auth/register | Create account |
| POST | /auth/login | Get token |
| GET | /posts | List posts |

## Architecture
[Include architecture diagram]

## License
MIT
```

### 8.2 API Documentation
Use Swagger/OpenAPI:
```javascript
// FastAPI automatic docs
app = FastAPI(docs_url="/api/docs", redoc_url="/api/redoc")

// Express with swagger-ui
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));
```

## Real World Example: Task Management App

### Requirements
- User auth (register/login)
- Create, read, update, delete tasks
- Mark tasks as complete
- Filter by status (all, active, completed)
- Due dates on tasks

### Design
**Database:**
- Users table
- Tasks table (FK to users)

**API:**
- POST /auth/register
- POST /auth/login
- GET /tasks?status=all|active|completed
- POST /tasks
- PUT /tasks/:id
- DELETE /tasks/:id
- PATCH /tasks/:id/complete

### Implementation Order
1. Project setup + dependencies
2. Database config + migrations
3. User model + auth
4. Task CRUD
5. Frontend React app
6. Connect frontend to API
7. Tests
8. Docker + deployment

## Key Principles

### SDE Mindset
1. **Think before code** - Design first
2. **Data structures matter** - Choose right DB, schema
3. **Clean code** - Readable, maintainable
4. **Test everything** - If not tested, it's broken
5. **Security by default** - Don't add later
6. **Performance-conscious** - Design for scale

### Fullstack Breadth
- Can build entire application
- Understands frontend + backend + DB
- Knows deployment + DevOps
- End-to-end ownership

## Verification Checklist

Before marking complete:
- [ ] Code compiles without errors
- [ ] All tests pass
- [ ] API endpoints work
- [ ] Frontend renders correctly
- [ ] Authentication works
- [ ] Database persists data
- [ ] Error handling works
- [ ] Security checks pass
- [ ] Performance acceptable
- [ ] Documentation complete
- [ ] Deployed to production (or ready)

## Anti-Patterns

- "It works on my machine" - WRONG - Test in prod-like env
- "We'll add tests later" - WRONG - Tests first
- "Security is IT's job" - WRONG - Built in from start
- "We'll optimize later" - WRONG - Design for scale
- "No time for documentation" - WRONG - Code without docs = legacy
