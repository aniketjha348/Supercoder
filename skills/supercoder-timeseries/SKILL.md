---
name: supercoder-timeseries
description: Use when working with time-series databases like InfluxDB, TimescaleDB, or building IoT/monitoring systems
triggers:
  - "time series"
  - "InfluxDB"
  - "TimescaleDB"
  - "IoT"
  - "metrics"
  - "monitoring"
---

# Supercoder Timeseries

The Timeseries specialist builds time-series data systems.

## Responsibilities

### Time-Series Design
- Schema design
- Retention policies
- Compression
- Downsampling

### Query Writing
- Time-range queries
- Aggregations
- Continuous queries
- Functions

### IoT/Monitoring
- Metrics collection
- Retention policies
- Visualization
- Alerting

## InfluxDB Patterns

### Line Protocol
```
measurement,tag1=value1,tag2=value2 field1=1.0,field2="string" timestamp
```

Example:
```
cpu,host=server1,region=us-east usage=0.64,load=1.2 1704067200000000000
```

### InfluxQL Queries
```sql
-- Basic query
SELECT * FROM cpu WHERE time > now() - 1h

-- Aggregation
SELECT MEAN(usage) FROM cpu 
GROUP BY host, time(5m) 
WHERE time > now() - 24h

-- Downsampling
CREATE CONTINUOUS QUERY "cpu_1h" BEGIN
  SELECT MEAN(usage) AS usage INTO cpu_1h
  FROM cpu
  GROUP BY host, time(1h)
END
```

### Flux Queries
```flux
from(bucket: "telegraf")
  |> range(start: -1h)
  |> filter(fn: (r) => r._measurement == "cpu")
  |> filter(fn: (r) => r.host == "server1")
  |> aggregateWindow(every: 5m, fn: mean, createEmpty: false)
  |> yield()
```

## TimescaleDB Patterns

### Hypertable
```sql
-- Create hypertable
CREATE TABLE readings (
    time        TIMESTAMPTZ       NOT NULL,
    device_id   INT               NOT NULL,
    temperature DOUBLE PRECISION,
    humidity    DOUBLE PRECISION
);

SELECT create_hypertable('readings', 'time');

-- Index for common queries
CREATE INDEX idx_readings_device_time 
ON readings (device_id, time DESC);
```

### Continuous Aggregates
```sql
-- Create continuous aggregate
CREATE MATERIALIZED VIEW readings_1h
WITH (timescaledb.continuous) AS
SELECT 
    time_bucket('1 hour', time) AS bucket,
    device_id,
    AVG(temperature) AS avg_temp,
    MAX(temperature) AS max_temp,
    MIN(temperature) AS min_temp
FROM readings
GROUP BY bucket, device_id;

-- Add refresh policy
SELECT add_continuous_aggregate_policy(
    'readings_1h',
    start_offset => INTERVAL '1 month',
    end_offset => INTERVAL '1 hour',
    schedule_interval => INTERVAL '1 hour'
);
```

## IoT Data Patterns

### High-Volume Ingestion
```python
# Batch write for performance
def write_batch(measurements):
    client = InfluxDBClient(...)
    with client.write_api() as writer:
        writer.write(measurements, batch_size=1000)
```

### Compression
```sql
-- Enable compression
ALTER TABLE readings SET (
    timescaledb.compress,
    timescaledb.compress_segmentby = 'device_id'
);

-- Add compression policy
SELECT add_compression_policy('readings', INTERVAL '7 days');
```

## Retention Policies

### InfluxDB
```sql
-- Create retention policy
CREATE RETENTION POLICY "one_day" 
ON "mydb" 
DURATION 1d 
REPLICATION 1;

-- Apply to queries
SELECT * FROM "mydb"."one_day"."cpu"
```

## Best Practices

- **Use bulk writes** - Not individual points
- **Pre-aggregate** - Use continuous queries
- **Retention policies** - Auto-delete old data
- **Compression** - Save disk space
- **Partition by time** - Query performance
