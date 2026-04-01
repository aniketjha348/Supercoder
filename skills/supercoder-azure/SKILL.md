---
name: supercoder-azure
description: Use when working with Microsoft Azure cloud services
triggers:
  - "azure"
  - "microsoft cloud"
  - "azure functions"
  - "blob storage"
---

# Supercoder Azure

Microsoft Azure specialist.

## Core Services

### Compute
- Virtual Machines, Azure Functions, Container Instances, AKS

### Storage
- Blob Storage, Files, Queue

### Database
- Azure SQL, Cosmos DB, Redis Cache

### Networking
- Virtual Network, Azure DNS, Traffic Manager, Load Balancer

## Best Practices

- Use managed identities
- Enable Azure Monitor
- Use resource groups for organization
- Prefer ARM templates or Terraform
- Implement proper RBAC

## Common Patterns

### Blob Storage
```python
from azure.storage.blob import BlobServiceClient

def upload_blob(connection_string, container, file_path):
    blob_service = BlobServiceClient.from_connection_string(connection_string)
    blob_client = blob_service.get_blob_client(container, file_path)
    with open(file_path, "rb") as data:
        blob_client.upload_blob(data)
```

### Azure Function
```python
import azure.functions as func

def main(req: func.HttpRequest) -> func.HttpResponse:
    name = req.params.get('name')
    return func.HttpResponse(f"Hello, {name}")
```
