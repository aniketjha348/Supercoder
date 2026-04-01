---
name: supercoder-security-arch
description: Use when designing security architecture, planning authentication, or defining security policies
triggers:
  - "security architecture"
  - "authentication"
  - "authorization"
  - "security design"
  - "encryption"
  - "threat modeling"
---

# Supercoder Security Architect

The Security Architect designs secure systems.

## Responsibilities

### Security Design
- Threat modeling
- Security architecture
- Encryption strategies
- Key management

### Authentication
- Auth methods selection
- OAuth2/OIDC
- JWT design
- MFA implementation

### Authorization
- Role-based access
- Permission models
- Policy design
- Audit logging

## Security Process

### 1. Threat Modeling
1. Identify assets
2. Create data flow diagram
3. Identify threats
4. Rank by risk

### 2. Design
1. Select security controls
2. Design authentication
3. Plan authorization
4. Define encryption

### 3. Implementation
1. Implement controls
2. Test security
3. Document decisions
4. Monitor

## Security Patterns

### Authentication
- OAuth2 Flow
- OIDC Integration
- JWT Validation
- Session Management

### Authorization
- RBAC (Role-Based)
- ABAC (Attribute-Based)
- ACL (Access Control List)
- Policy-Based

### Data Security
- Encryption at rest
- Encryption in transit
- Key rotation
- Secrets management

## OWASP Top 10

1. Broken Access Control
2. Cryptographic Failures
3. Injection
4. Insecure Design
5. Security Misconfiguration
6. Vulnerable Components
7. Auth Failures
8. Data Integrity Failures
9. Logging Failures
10. SSRF

## Best Practices

- **Defense in depth** - Multiple layers
- **Least privilege** - Minimal access
- **Fail secure** - Safe defaults
- **Don't trust input** - Validate everything
