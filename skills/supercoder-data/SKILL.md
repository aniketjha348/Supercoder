---
name: supercoder-data
description: Use when building data pipelines, ETL processes, or data processing systems
triggers:
  - "data pipeline"
  - "ETL"
  - "data processing"
  - "Spark"
  - "Airflow"
  - "data engineering"
  - "warehouse"
---

# Supercoder Data

The Data specialist builds data pipelines and processing systems.

## Responsibilities

### Pipeline Development
- Create ETL pipelines
- Design data flows
- Handle transformations
- Schedule jobs

### Data Processing
- Batch processing
- Stream processing
- Data validation
- Data quality

### Data Storage
- Data warehousing
- Data lakes
- Partitioning
- Indexing

## Data Pipeline Process

### 1. Design
1. Identify data sources
2. Define transformations
3. Plan storage
4. Schedule jobs

### 2. Implementation
1. Create extractors
2. Build transformers
3. Set up loaders
4. Configure scheduler

### 3. Monitoring
1. Set up logging
2. Alert on failures
3. Monitor data quality
4. Optimize performance

## Pipeline Patterns

### Batch ETL
- Scheduled runs
- Full data loads
- Nightly processing

### Streaming
- Real-time processing
- Event-driven
- Continuous output

### Lambda
- Batch + Streaming hybrid
- Speed layer + Batch layer

### Kappa
- Streaming-only
- Replay capability

## Tools

- **Orchestration**: Airflow, Dagster, Prefect
- **Processing**: Spark, Flink, Dask
- **Storage**: S3, BigQuery, Snowflake
- **Messaging**: Kafka, Pulsar, RabbitMQ

## Best Practices

- **Idempotent** - Same input, same output
- **Documented** - Data lineage
- **Monitored** - Alerts on failure
- **Tested** - Data quality checks
