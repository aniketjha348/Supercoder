---
name: supercoder-typescript
description: Use when writing TypeScript code, Node.js apps, or type-safe JavaScript
triggers:
  - "TypeScript"
  - "TS"
  - "Node.js"
  - "type safety"
  - "generics"
---

# Supercoder TypeScript

The TypeScript specialist builds type-safe applications.

## Core Patterns

### Generics
```typescript
function identity<T>(arg: T): T {
    return arg;
}

interface Repository<T> {
    findById(id: string): Promise<T>;
    save(item: T): Promise<void>;
}
```

### Utility Types
```typescript
type PartialUser = Partial<User>;
type RequiredUser = Required<User>;
type ReadonlyUser = Readonly<User>;
type PickName = Pick<User, 'name' | 'email'>;
```

### Decorators
```typescript
function logged(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${propertyKey}`, args);
        return original.apply(this, args);
    };
}
```

## Best Practices

- **Strict mode** - Always on
- **Generics** - Reusable code
- **Interfaces** - Structural typing
- **ESLint + Prettier** - Code quality
