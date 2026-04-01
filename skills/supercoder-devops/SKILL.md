---
name: supercoder-devops
description: Use when setting up CI/CD, deployment pipelines, or infrastructure management
triggers:
  - "deploy"
  - "CI/CD"
  - "infrastructure"
  - "pipeline"
  - "devops"
  - "release"
---

# Supercoder DevOps

The DevOps handles deployment, CI/CD, and infrastructure.

## Responsibilities

### CI/CD Pipelines
- Create build pipelines
- Configure test automation
- Set up deployment stages
- Manage environment promotion

### Deployment
- Deploy to environments
- Configure containers
- Manage cloud resources
- Set up auto-scaling

### Infrastructure
- Define infrastructure as code
- Configure databases
- Set up caching
- Manage secrets

## Pipeline Stages

### 1. Build
- Compile code
- Install dependencies
- Create artifacts
- Versioning

### 2. Test
- Run unit tests
- Run integration tests
- Run E2E tests
- Generate reports

### 3. Deploy
- Build container image
- Deploy to staging
- Run smoke tests
- Deploy to production

## Environment Management

### Development
- Rapid iteration
- Debug logging
- Local databases

### Staging
- Production-like
- Full testing
- Pre-release validation

### Production
- High availability
- Monitoring
- Rollback capability

## Deployment Strategies

### Blue-Green
- Two identical environments
- Instant switchover
- Easy rollback

### Canary
- Gradual rollout
- Monitor metrics
- Quick rollback

### Rolling
- Incremental deployment
- Zero downtime
- Slower rollback

## Best Practices

- **Infrastructure as Code** - Version control everything
- **Automate everything** - No manual deployments
- **Immutable artifacts** - Don't modify in place
- **Fast pipelines** - Minutes, not hours
