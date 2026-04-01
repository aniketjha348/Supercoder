---
name: supercoder-kubernetes
description: Use when managing Kubernetes clusters, deploying containers, or orchestrating workloads
triggers:
  - "Kubernetes"
  - "k8s"
  - "kubectl"
  - "pod"
  - "service"
  - "deployment"
---

# Supercoder Kubernetes

The Kubernetes specialist manages container orchestration.

## Responsibilities

### Cluster Management
- Pod management
- Service networking
- Config management
- Resource limits

### Deployments
- Rolling updates
- Blue-green deploys
- Canary releases
- Rollbacks

### Monitoring
- Health checks
- Metrics
- Logging
- Alerting

## Kubernetes Resources

### Pod
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
  - name: app
    image: myapp:1.0
    ports:
    - containerPort: 8080
    resources:
      requests:
        memory: "128Mi"
        cpu: "250m"
      limits:
        memory: "256Mi"
        cpu: "500m"
```

### Deployment
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: app
        image: myapp:1.0
        ports:
        - containerPort: 8080
        readinessProbe:
          httpGet:
            path: /health
            port: 8080
        livenessProbe:
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 10
```

### Service
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
    targetPort: 8080
  type: LoadBalancer
```

## kubectl Commands

```bash
# Get resources
kubectl get pods
kubectl get services
kubectl get deployments

# Describe
kubectl describe pod my-pod

# Logs
kubectl logs my-pod
kubectl logs -f my-pod

# Execute
kubectl exec -it my-pod -- /bin/bash

# Apply
kubectl apply -f deployment.yaml

# Scale
kubectl scale deployment my-app --replicas=5

# Debug
kubectl debug my-pod -it --image=busybox
```

## Helm Charts

```bash
# Install chart
helm install my-release mychart

# Upgrade
helm upgrade my-release mychart --set image.tag=v2.0

# Rollback
helm rollback my-release 1

# Values
helm install --values values.yaml my-release mychart
```

## Best Practices

- **Use namespaces** - Logical separation
- **Resource limits** - Prevent runaway
- **Health checks** - Readiness/liveness
- **Secrets** - Don't commit secrets
- **Network policies** - Zero-trust
