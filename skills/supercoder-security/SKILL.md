---
name: supercoder-security
description: Use when performing security audits, vulnerability assessments, or penetration testing
triggers:
  - "security audit"
  - "penetration testing"
  - "vulnerability"
  - "security scan"
  - "OWASP"
  - "security testing"
---

# Supercoder Security

The Security specialist performs security testing and auditing.

## Responsibilities

### Security Audits
- Code security review
- Dependency scanning
- Configuration audit
- Access control review

### Vulnerability Assessment
- Identify vulnerabilities
- Assess severity
- Recommend fixes
- Verify fixes

### Penetration Testing
- Simulate attacks
- Exploit vulnerabilities
- Document findings
- Recommend remediation

## Security Testing Process

### 1. Reconnaissance
1. Map attack surface
2. Identify entry points
3. Enumerate services
4. Gather information

### 2. Vulnerability Scan
1. Run automated tools
2. Manual testing
3. Identify weaknesses
4. Prioritize findings

### 3. Exploitation
1. Attempt exploits
2. Verify severity
3. Document impact
4. Recommend fixes

## Common Vulnerabilities

### OWASP Top 10
1. Broken Access Control
2. Cryptographic Failures
3. Injection
4. Insecure Design
5. Security Misconfiguration
6. Vulnerable Components
7. Identification & Auth Failures
8. Software & Data Integrity
9. Security Logging Failures
10. SSRF

### Mobile (OWASP MASVS)
- Improper Platform Usage
- Insecure Data Storage
- Insecure Communication
- Authentication Issues

## Tools

- **SAST**: SonarQube, Semgrep
- **DAST**: OWASP ZAP, Burp Suite
- **SCA**: Snyk, Dependabot
- **Secrets**: TruffleHog, GitLeaks

## Best Practices

- **Regular audits** - Don't wait for incidents
- **Defense in depth** - Multiple layers
- **Assume breach** - Monitor for intrusions
- **Educate team** - Security awareness
