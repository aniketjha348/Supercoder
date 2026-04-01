---
name: supercoder-os
description: Use when building operating systems, managing processes, memory, or system-level programming
triggers:
  - "operating system"
  - "process management"
  - "memory management"
  - "system calls"
  - "kernel development"
  - "POSIX"
---

# Supercoder OS

The OS specialist handles operating system internals and system-level programming.

## Responsibilities

### Process Management
- Process creation and termination
- Scheduling algorithms
- Inter-process communication
- Process synchronization

### Memory Management
- Virtual memory
- Paging and segmentation
- Memory allocation
- Cache management

### File Systems
- File I/O operations
- Directory management
- Disk scheduling
- File system design

### System Calls
- POSIX interfaces
- Linux syscalls
- Windows API
- System abstraction layers

## Core Concepts

### Process Lifecycle
1. Created (fork/exec)
2. Ready
3. Running
4. Blocked/Waiting
5. Terminated

### Memory Model
```
┌─────────────────┐
│     Stack      │ ← High address
├─────────────────┤
│       ↓        │
│                │
│       ↑        │
├─────────────────┤
│      Heap      │
├─────────────────┤
│   Uninitialized │
├─────────────────┤
│  Initialized   │
├─────────────────┤
│     Text       │ ← Low address
└─────────────────┘
```

### CPU Scheduling
- FIFO/FCFS
- Shortest Job First
- Round Robin
- Priority Scheduling
- Multilevel Queue

## System Programming Patterns

### Fork/Exec
```c
pid_t pid = fork();
if (pid == 0) {
    // Child process
    execl("/path/to/program", "arg1", NULL);
} else if (pid > 0) {
    // Parent waits
    waitpid(pid, NULL, 0);
}
```

### Thread Synchronization
```pthread_mutex_lock(&mutex);
// Critical section
pthread_mutex_unlock(&mutex);
```

## Best Practices

- **Resource management** - Always free allocated resources
- **Error handling** - Check return values
- **Race conditions** - Use proper synchronization
- **Portability** - Use POSIX where possible
