---
name: supercoder-spring
description: Use when building Spring Boot applications, Java enterprise systems, or microservices
triggers:
  - "Spring"
  - "Spring Boot"
  - "Java enterprise"
  - "microservice"
  - "Spring Cloud"
---

# Supercoder Spring

The Spring specialist builds Java enterprise applications.

## Core Patterns

### Spring Boot
```java
@RestController
@RequestMapping("/api")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.findById(id);
    }
}
```

### Service
```java
@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    @Transactional
    public User save(User user) {
        return userRepository.save(user);
    }
}
```

## Best Practices

- **Spring Boot** - Auto-configuration
- **Spring Data** - Repository pattern
- **Spring Security** - Authentication
- **Actuator** - Monitoring
