---
name: supercoder-go
description: Use when writing Go code, building APIs, microservices, or CLI tools
triggers:
  - "Go"
  - "Golang"
  - "microservice"
  - "CLI"
  - "goroutine"
---

# Supercoder Go

The Go specialist builds performant applications.

## Core Patterns

### Interfaces
```go
type Reader interface {
    Read(p []byte) (n int, err error)
}

func process(r Reader) {
    // Use r without knowing concrete type
}
```

### Goroutines
```go
func worker(id int, jobs <-chan int, results chan<- int) {
    for j := range jobs {
        results <- j * 2
    }
}

func main() {
    jobs := make(chan int, 100)
    results := make(chan int, 100)
    
    for w := 1; w <= 3; w++ {
        go worker(w, jobs, results)
    }
}
```

### Error Handling
```go
func readFile(path string) ([]byte, error) {
    data, err := os.ReadFile(path)
    if err != nil {
        return nil, fmt.Errorf("failed to read %s: %w", path, err)
    }
    return data, nil
}
```

## Best Practices

- **Go modules** - Dependency management
- **context.Context** - Cancellation
- **Interface early** - Define interfaces where used
- **Testing** - table-driven tests
