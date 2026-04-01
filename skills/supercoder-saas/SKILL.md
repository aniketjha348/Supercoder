---
name: supercoder-saas
description: Use when building SaaS applications, multi-tenant systems, or subscription billing
triggers:
  - "SaaS"
  - "multi-tenant"
  - "subscription"
  - "billing"
  - "Stripe"
  - "tenancy"
---

# Supercoder SaaS

The SaaS specialist builds software-as-a-service applications.

## Responsibilities

### Multi-Tenancy
- Database isolation
- Schema separation
- Row-level security
- Tenant context

### Subscription Billing
- Plan management
- Usage-based billing
- Stripe integration
- Invoicing

### Platform Features
- User management
- Roles/permissions
- Settings/config
- Audit logging

## Multi-Tenancy Patterns

### Row-Level Security
```sql
-- PostgreSQL
CREATE POLICY tenant_isolation ON accounts
    USING (tenant_id = current_setting('app.tenant_id')::UUID);
```

### Schema per Tenant
```python
def get_tenant_schema(tenant_id):
    return f"tenant_{tenant_id.replace('-', '_')}"

def execute_tenant(tenant_id, query):
    schema = get_tenant_schema(tenant_id)
    return execute(f"SET search_path TO {schema}; {query}")
```

## Subscription Billing

### Stripe Integration
```python
import stripe
stripe.api_key = "sk_..."

# Create customer
customer = stripe.Customer.create(
    email="user@example.com",
    metadata={"tenant_id": "123"}
)

# Create subscription
subscription = stripe.Subscription.create(
    customer=customer.id,
    items=[{"price": "price_xxx"}],
    collection_method="charge_invoice",
    days_until_due=30,
)
```

### Usage Tracking
```python
def track_usage(tenant_id, feature, units):
    stripe.SubscriptionItem.create_usage_record(
        subscription_item_id,
        quantity=units,
        timestamp=datetime.now(),
        action="increment"
    )
```

## Best Practices

- **Tenant isolation** - Security first
- **Rate limiting** - Prevent abuse
- **Usage metrics** - Track everything
- **Graceful degradation** - Handle limits
- **Audit everything** - Compliance
