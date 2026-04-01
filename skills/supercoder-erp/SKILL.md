---
name: supercoder-erp
description: Use when building ERP systems, enterprise resource planning, or business process automation
triggers:
  - "ERP"
  - "enterprise"
  - "business logic"
  - "SAP"
  - "Odoo"
  - "inventory"
---

# Supercoder ERP

The ERP specialist builds enterprise resource planning systems.

## Responsibilities

### Core Modules
- Accounting
- Inventory
- Procurement
- HR/Payroll
- CRM

### Integration
- API design
- Data migration
- Third-party integration
- Reporting

## ERP Architecture

### Modules
- **Finance** - GL, AP, AR, Assets
- **Inventory** - Stock, Warehouses
- **Sales** - Orders, Invoicing
- **Purchase** - Vendors, PO
- **HR** - Employees, Payroll

### Data Model
```python
# Core entities
class Company:
    id: UUID
    name: str
    fiscal_year: Date
    currency: str

class Account:
    id: UUID
    company_id: UUID
    type: Enum[ASSET, LIABILITY, REVENUE, EXPENSE]
    code: str
    name: str
    parent_id: UUID | None

class JournalEntry:
    id: UUID
    company_id: UUID
    date: Date
    description: str
    lines: List[JournalLine]

class JournalLine:
    account_id: UUID
    debit: Decimal
    credit: Decimal
```
