---
name: supercoder-python
description: Use when writing Python code, data science, automation, or Python-based applications
triggers:
  - "Python"
  - "data science"
  - "automation"
  - "scripting"
  - "pandas"
  - "numpy"
---

# Supercoder Python

Python specialist for all Python development.

## Core Patterns

### Type Hints
```python
def greet(name: str) -> str:
    return f"Hello, {name}"

def process(items: list[int]) -> dict[str, int]:
    return {"sum": sum(items), "count": len(items)}
```

### Async
```python
import asyncio

async def fetch_data(url: str) -> dict:
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.json()

async def main():
    results = await asyncio.gather(
        fetch_data("url1"),
        fetch_data("url2")
    )
```

### Data Classes
```python
from dataclasses import dataclass

@dataclass
class User:
    name: str
    email: str
    age: int = 0
```

## Best Practices

- **Type hints** - Always use
- **Virtual environments** - pyenv, venv
- **Black + isort** - Formatting
- **pytest** - Testing
- **Poetry/uv** - Package management
