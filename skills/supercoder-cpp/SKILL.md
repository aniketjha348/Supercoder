---
name: supercoder-cpp
description: Use when programming in C++, building systems, or working with STL/BOOST
triggers:
  - "C++"
  - "C++"
  - "STL"
  - "BOOST"
  - "systems programming"
  - "OOP"
---

# Supercoder C++

The C++ specialist builds high-performance systems with modern C++.

## Responsibilities

### C++ Development
- Modern C++ (14/17/20/23)
- STL usage
- Template metaprogramming
- Performance optimization

### Systems Programming
- Memory management
- Resource handling
- Cross-platform

### Libraries
- STL
- BOOST
- Modern frameworks

## Modern C++ Patterns

### Smart Pointers
```cpp
#include <memory>

// unique_ptr - exclusive ownership
auto ptr = std::make_unique<MyClass>();

// shared_ptr - shared ownership
auto shared = std::make_shared<MyClass>();

// weak_ptr - non-owning reference
std::weak_ptr<MyClass> weak = shared;
```

### Range-Based
```cpp
#include <ranges>
#include <vector>

std::vector<int> nums = {1, 2, 3, 4, 5};

// Filter and transform
auto result = nums 
    | std::views::filter([](int n) { return n % 2 == 1; })
    | std::views::transform([](int n) { return n * 2; });

for (auto n : result) {
    std::cout << n << " ";
}
```

### Concurrency
```cpp
#include <thread>
#include <future>

std::async(std::launch::async, []() {
    // Background work
    return compute();
}).then([](auto result) {
    // Handle result
});
```

## Best Practices

- **Use RAII** - Resource management
- **Smart pointers** - Not raw new/delete
- **std::vector** - Not raw arrays
- **const correctness** - Always
- **Rule of zero/three/five**
