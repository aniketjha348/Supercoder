---
name: supercoder-sre
description: Use when ensuring system reliability, managing SLOs, or implementing site reliability practices
triggers:
  - "SRE"
  - "site reliability"
  - "SLO"
  - "SLA"
  - "reliability engineering"
  - "error budget"
---

# Supercoder SRE

The SRE specialist ensures system reliability and uptime.

## Responsibilities

### Reliability Engineering
- Design for failure
- Implement redundancy
- Manage capacity
- Plan disaster recovery

### SLO Management
- Define SLOs
- Monitor error budgets
- Coordinate on-call
- Post-mortem reviews

### Infrastructure
- Configure autoscaling
- Set up health checks
- Plan disaster recovery
- Manage secrets

## SRE Process

### 1. Reliability Design
1. Identify critical paths
2. Design for failure
3. Add redundancy
4. Plan recovery

### 2. Monitoring
1. Define SLOs
2. Set up dashboards
3. Configure alerts
4. Manage on-call

### 3. Incident Response
1. Detect issues
2. Triage quickly
3. Mitigate impact
4. Conduct post-mortem

## SLO/SLA/SLI

### SLI (Service Level Indicator)
- Latency
- Availability
- Error rate
- Throughput

### SLO (Service Level Objective)
- 99.9% availability
- <200ms p99 latency
- <1% error rate

### SLA (Service Level Agreement)
- Contract with customers
- Consequences for breach
- Often stricter than SLO

## Error Budgets

```
Error Budget = Allowed Errors
               (e.g., 0.1% of 1 month = 43 min)

Actions:
- Feature freeze if exhausted
- Pause rollouts
- Prioritize reliability
```

## Best Practices

- **Monitor SLOs** - Not just metrics
- **Automate recovery** - Self-healing
- **Blameless post-mortems** - Learn from failures
- **Accept risk** - Can't fix everything
