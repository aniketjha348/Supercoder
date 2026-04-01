---
name: supercoder-docker
description: Use when building Docker containers, writing Dockerfiles, or managing containerized applications
triggers:
  - "docker"
  - "container"
  - "dockerfile"
  - "containerization"
  - "OCI"
  - "buildah"
---

# Supercoder Docker

The Docker specialist builds and manages containerized applications.

## Responsibilities

### Dockerfile Writing
- Multi-stage builds
- Layer optimization
- Security best practices
- Base image selection

### Container Management
- Container lifecycle
- Volume management
- Networking
- Resource limits

### Docker Compose
- Multi-container apps
- Service orchestration
- Environment variables
- Dependencies

## Dockerfile Best Practices

### Multi-stage Builds
```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
USER node
CMD ["node", "index.js"]
```

### Security
```dockerfile
# Don't run as root
USER nonroot:nonroot

# Use specific versions
FROM node:18.17.0-alpine3.18

# Copy only necessary files
COPY --chown=node:node . .

# Use .dockerignore
# node_modules
# .git
# Dockerfile
```

## Container Patterns

### Init Container
```yaml
initContainers:
  - name: init-myservice
    image: busybox:1.36
    command: ['sh', '-c', 'do-something']
```

### Sidecar
```yaml
containers:
  - name: app
    image: myapp
  - name: logger
    image: fluentd
```

### Adapter
```yaml
containers:
  - name: app
    image: myapp
  - name: adapter
    image: metrics-adapter
```

## Docker Networking

### Bridge Network
- Default network
- Container-to-container

### Host Network
- No isolation
- Performance

### Overlay Network
- Multi-host
- Swarm mode

## Volume Management

### Named Volumes
```bash
docker volume create mydata
docker run -v mydata:/data myimage
```

### Bind Mounts
```bash
docker run -v $(pwd):/workspace myimage
```

### tmpfs
```bash
docker run --tmpfs /tmp myimage
```

## Best Practices

- **Small images** - Alpine, distroless
- **Layer caching** - Order by change frequency
- **One process per container** - PID 1
- **Health checks** - For orchestration
