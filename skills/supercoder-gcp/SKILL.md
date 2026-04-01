# Supercoder GCP

Google Cloud Platform specialist.

## Core Services

### Compute
- Compute Engine, Cloud Functions, Cloud Run, GKE

### Storage
- Cloud Storage, Filestore

### Database
- Cloud SQL, Cloud Spanner, Firestore, Bigtable

### Networking
- VPC, Cloud DNS, Cloud Load Balancing

## Best Practices

- Use service accounts with minimal permissions
- Enable Cloud Audit Logs
- Use labels for resource organization
- Prefer managed services over self-managed
- Use Terraform or Deployment Manager

## Common Patterns

### GCS Bucket
```python
from google.cloud import storage

def upload_blob(bucket_name, source_file, destination_blob):
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(destination_blob)
    blob.upload_from_filename(source_file)
```

### Cloud Function
```python
def hello_http(request):
    request_json = request.get_json()
    return f"Hello, {request_json.get('name', 'World')}!"
```
