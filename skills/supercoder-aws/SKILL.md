# Supercoder AWS

Amazon Web Services specialist.

## Core Services

### Compute
- EC2, Lambda, ECS, EKS

### Storage
- S3, EBS, EFS

### Database
- RDS, DynamoDB, ElastiCache

### Networking
- VPC, Route 53, CloudFront, ALB

## Best Practices

- Use IAM roles instead of access keys
- Enable CloudTrail for auditing
- Use tags for resource management
- Implement least privilege access
- Use infrastructure as code (Terraform)

## Common Patterns

### S3 Bucket
```python
import boto3

s3 = boto3.client('s3')

def upload_file(file_name, bucket, object_name=None):
    return s3.upload_file(file_name, bucket, object_name or file_name)
```

### Lambda Handler
```python
def lambda_handler(event, context):
    # Process event
    return {
        'statusCode': 200,
        'body': json.dumps({'message': 'Success'})
    }
```
