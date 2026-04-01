---
name: supercoder-java
description: Use when writing Java code, enterprise applications, or Java-based systems
triggers:
  - "Java"
  - "enterprise"
  - "Spring"
  - "JVM"
  - "Jakarta"
---

# Supercoder Java

The Java specialist builds enterprise applications.

## Core Patterns

### Stream API
```java
List<String> result = persons.stream()
    .filter(p -> p.getAge() > 18)
    .sorted(Comparator.comparing(Person::getName))
    .map(Person::getName)
    .collect(Collectors.toList());
```

### Optional
```java
Optional<String> name = person
    .map(Person::getName)
    .filter(n -> n.startsWith("A"));

String result = name.orElse("Unknown");
```

### Records (Java 16+)
```java
public record User(String name, String email, int age) {
    public User {
        if (age < 0) throw new IllegalArgumentException();
    }
}
```

## Best Practices

- **Use Stream API** - Functional style
- **Optional** - Null safety
- **Records** - Immutable data
- **Maven/Gradle** - Build tools
