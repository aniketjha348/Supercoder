---
name: supercoder-virtualization
description: Use when building virtual machines, hypervisors, or emulation systems
triggers:
  - "virtualization"
  - "hypervisor"
  - "VM"
  - "emulator"
  - "QEMU"
  - "virtual machine"
---

# Supercoder Virtualization

The Virtualization specialist builds VM infrastructure and emulation systems.

## Responsibilities

### Hypervisor Design
- Type 1 (bare metal) hypervisors
- Type 2 (hosted) hypervisors
- Hardware virtualization
- Paravirtualization

### Virtual Machine Implementation
- CPU emulation
- Memory virtualization
- Device emulation
- Snapshot management

### Emulation
- Instruction translation
- Binary translation
- System emulation
- Device modeling

## Virtualization Techniques

### Hardware-Assisted
- Intel VT-x / AMD-V
- ARM virtualization
- IOMMU (VT-d)
- Nested paging (EPT)

### Paravirtualization
- Hypercall interfaces
- Shared memory
- Device drivers
- Guest agents

## Memory Virtualization

### Shadow Page Tables
- Hypervisor maintains shadows
- Guest modifies PT
- Hypervisor intercepts

### EPT/NPT
- Hardware-assisted paging
- Two-level translation
- Faster performance

## CPU Virtualization

### Binary Translation
- Dynamic translation
- Basic block optimization
- Code cache
- Translation lookaside buffer

### Paravirtualization
- Hypercalls instead of traps
- Modified guest OS
- Better performance

## Container vs VM

### VMs
- Full OS isolation
- Separate kernels
- Stronger isolation
- More overhead

### Containers
- Shared kernel
- Lightweight
- Fast startup
- Less isolation

## Tools

- **Hypervisors**: KVM, Xen, Hyper-V, ESXi
- **Emulation**: QEMU, BOCHS
- **Containers**: Docker, Podman, containerd
- **Orchestration**: Kubernetes, Nomad

## Best Practices

- **Minimize overhead** - Optimize transitions
- **Security** - VM escape prevention
- **Resource management** - CPU/memory allocation
- **Live migration** - Zero-downtime movement
