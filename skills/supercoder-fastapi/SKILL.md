---
name: supercoder-fastapi
description: Use when building FastAPI applications, Python async APIs, or high-performance backends
triggers:
  - "FastAPI"
  - "async"
  - "Python API"
  - "starlette"
  - "uvicorn"
---

# Supercoder FastAPI

The FastAPI specialist builds async Python APIs.

## Core Patterns

### Routes
```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float

@app.get("/items/{item_id}")
async def get_item(item_id: int):
    return {"item_id": item_id, "name": "Item"}

@app.post("/items/")
async def create_item(item: Item):
    return item
```

### Dependency Injection
```python
from fastapi import Depends

async def get_db():
    db = Database()
    try:
        yield db
    finally:
        db.close()

@app.get("/items/")
async def list_items(db = Depends(get_db)):
    return db.query("SELECT * FROM items")
```

## Best Practices

- **Async** - Full async
- **Pydantic** - Validation
- **Type hints** - IDE support
- **OpenAPI** - Auto docs
