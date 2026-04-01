---
name: supercoder-networking
description: Use when designing networks, working with protocols, or configuring network infrastructure
triggers:
  - "networking"
  - "TCP/IP"
  - "DNS"
  - "load balancer"
  - "CDN"
  - "network protocol"
---

# Supercoder Networking

The Networking specialist designs and manages network infrastructure.

## Responsibilities

### Network Design
- Subnetting
- VLANs
- Routing
- Network topology

### Protocol Knowledge
- TCP/UDP
- HTTP/HTTPS
- DNS
- TLS/SSL

### Infrastructure
- Load balancers
- Firewalls
- CDNs
- VPNs

## TCP/IP Model

```
┌─────────────────────────────────────┐
│           Application               │ ← HTTP, DNS, SSH
├─────────────────────────────────────┤
│           Transport                 │ ← TCP, UDP
├─────────────────────────────────────┤
│           Network                  │ ← IP, ICMP
├─────────────────────────────────────┤
│         Data Link                  │ ← Ethernet, WiFi
├─────────────────────────────────────┤
│           Physical                 │ ← Cables, Signals
└─────────────────────────────────────┘
```

## Common Ports

| Service | Port |
|---------|------|
| SSH | 22 |
| HTTP | 80 |
| HTTPS | 443 |
| DNS | 53 |
| MySQL | 3306 |
| PostgreSQL | 5432 |
| Redis | 6379 |
| MongoDB | 27017 |

## Load Balancing

### Round Robin
```nginx
upstream backend {
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}

server {
    location / {
        proxy_pass http://backend;
    }
}
```

### Health Checks
```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: my-app
  ports:
    - port: 80
  sessionAffinity: ClientIP
```

## DNS Records

| Type | Purpose |
|------|---------|
| A | IPv4 address |
| AAAA | IPv6 address |
| CNAME | Alias |
| MX | Mail server |
| TXT | Text |
| NS | Name server |
| SOA | Start of authority |

## Best Practices

- **Use HTTPS** - Always encrypt
- **CDN for static** - Faster delivery
- **Rate limiting** - Prevent attacks
- **Monitor latency** - Performance
- **冗余** - Redundancy
