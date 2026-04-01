---
name: supercoder-django
description: Use when building Django web applications, Python backends, or Django REST Framework APIs
triggers:
  - "Django"
  - "DRF"
  - "Python web"
  - "Django REST"
  - "ORM"
---

# Supercoder Django

The Django specialist builds Python web applications.

## Core Patterns

### Models
```python
from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.name
```

### Views
```python
from rest_framework import viewsets

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filterset_fields = ['category']
```

## Best Practices

- **Class-based views** - CBVs
- **Django ORM** - Querysets
- **Migrations** - Version control
- **Django REST Framework** - APIs
