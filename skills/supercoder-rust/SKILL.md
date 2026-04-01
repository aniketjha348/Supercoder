---
name: supercoder-rust
description: Use when programming in Rust, memory-safe systems, or building high-performance applications
triggers:
  - "Rust"
  - "systems programming"
  - "memory safety"
  - "Cargo"
  - "borrow checker"
  - "unsafe"
---

# Supercoder Rust

The Rust specialist builds memory-safe, high-performance systems.

## Responsibilities

### Rust Development
- Safe memory management
- Ownership patterns
- Concurrency
- Performance optimization

### Systems Programming
- Embedded systems
- WebAssembly
- CLI tools
- Networking

### Unsafe Rust
- FFI bindings
- Low-level operations
- Performance critical

## Ownership Model

```rust
// Ownership transfer
fn main() {
    let s1 = String::from("hello");
    let s2 = s1; // s1 moved to s2
    
    // println!("{}", s1); // Error: s1 no longer valid
    println!("{}", s2); // OK
}

// Borrowing
fn calculate_length(s: &String) -> usize {
    s.len()
}

fn main() {
    let s1 = String::from("hello");
    let len = calculate_length(&s1);
    println!("Length of '{}' is {}", s1, len);
}
```

## Common Patterns

### Result Handling
```rust
fn read_file(path: &str) -> Result<String, io::Error> {
    let mut file = File::open(path)?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    Ok(contents)
}

// Usage
match read_file("config.txt") {
    Ok(contents) => println!("{}", contents),
    Err(e) => eprintln!("Error: {}", e),
}
```

### Iterator Chain
```rust
let numbers = vec![1, 2, 3, 4, 5];

let result: i32 = numbers
    .iter()
    .map(|x| x * 2)
    .filter(|x| *x > 5)
    .sum();

println!("{}", result); // 12
```

### Concurrency
```rust
use std::thread;

let handle = thread::spawn(|| {
    // Heavy computation
    compute()
});

let result = handle.join().unwrap();
```

## Best Practices

- **Avoid unsafe** - Unless necessary
- **Use Clippy** - Lint warnings
- **Test thoroughly** - Even safe code
- **Cargo.lock** - Commit to version control
- **Documentation** - Doc tests
