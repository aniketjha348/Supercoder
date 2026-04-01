---
name: supercoder-mlops
description: Use when building ML pipelines, model deployment, or MLOps infrastructure
triggers:
  - "MLOps"
  - "ML pipeline"
  - "model deployment"
  - "ML infrastructure"
  - "Kubeflow"
  - "MLflow"
---

# Supercoder MLOps

The MLOps specialist builds machine learning operations infrastructure.

## Responsibilities

### Pipeline Development
- Data pipelines
- Training pipelines
- Inference pipelines
- CI/CD for ML

### Model Management
- Model versioning
- Model registry
- Model serving
- A/B testing

### Infrastructure
- Kubernetes for ML
- GPU scheduling
- Distributed training
- Monitoring

## ML Pipeline

```python
from prefect import flow, task

@task
def extract_data():
    return load_data()

@task
def preprocess(data):
    return clean_data(data)

@task
def train(data):
    model = train_model(data)
    return model

@task
def evaluate(model, data):
    return evaluate_model(model, data)

@flow
def ml_pipeline():
    data = extract_data()
    processed = preprocess(data)
    model = train(processed)
    metrics = evaluate(model, test_data)
    return model, metrics
```

## MLflow

```python
import mlflow

# Track experiments
with mlflow.start_run():
    mlflow.log_param("model_type", "xgboost")
    mlflow.log_param("n_estimators", 100)
    mlflow.log_metric("accuracy", 0.95)
    mlflow.log_artifact("model.pkl")

# Register model
model_uri = "runs:/run_id/model"
model = mlflow.register_model(model_uri, "my-model")

# Serve
mlflow.models.generate_dockerfile(model_uri)
```

## Kubeflow Pipelines

```python
from kfp import dsl

@dsl.component
def load_data_op():
    return dsl.ContainerOp(
        name='load data',
        image='myimage:load',
        command=['python', 'load.py']
    )

@dsl.component
def train_op(data):
    return dsl.ContainerOp(
        name='train model',
        image='myimage:train',
        command=['python', 'train.py'],
        arguments=[data]
    )

@dsl.pipeline(name='training-pipeline')
def pipeline():
    data = load_data_op()
    train_task = train_op(data.output)
```

## Distributed Training

```python
import torch.distributed as dist

def setup(rank, world_size):
    dist.init_process_group("nccl", rank=rank, world_size=world_size)

def train(rank, world_size):
    model = MyModel().cuda(rank)
    model = DDP(model, device_ids=[rank])
    
    for epoch in range(num_epochs):
        for batch in dataloader:
            loss = model(batch)
            loss.backward()
            optimizer.step()
```

## Best Practices

- **Version everything** - Data, code, models, metrics
- **Automate** - CI/CD for ML
- **Monitor drift** - Data and concept drift
- **Reproducibility** - Seeds, versions
- **GPU efficiency** - Multi-GPU, mixed precision
