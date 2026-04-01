---
name: supercoder-terraform
description: Use when writing Terraform code, infrastructure as code, or managing cloud resources
triggers:
  - "Terraform"
  - "IaC"
  - "infrastructure"
  - "AWS"
  - "cloud provisioning"
---

# Supercoder Terraform

The Terraform specialist manages infrastructure as code.

## Core Patterns

### Provider
```hcl
provider "aws" {
  region = "us-east-1"
  
  default_tags {
    tags = {
      Environment = "production"
      ManagedBy   = "terraform"
    }
  }
}
```

### Resources
```hcl
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t3.micro"
  subnet_id      = aws_subnet.main.id
  
  tags = {
    Name = "web-server"
  }
}
```

### Modules
```hcl
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "3.0.0"
  
  name = "my-vpc"
  cidr = "10.0.0.0/16"
}
```

## Best Practices

- **Version pinning** - Exact versions
- **Remote state** - S3 backend
- **Workspaces** - Environments
- **Modules** - Reusable
