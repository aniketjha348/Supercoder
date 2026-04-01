---
name: supercoder-kernel
description: Use when developing kernel modules, device drivers, or working with Linux kernel internals
triggers:
  - "kernel"
  - "device driver"
  - "kernel module"
  - "Linux kernel"
  - "driver development"
  - "syscall"
---

# Supercoder Kernel

The Kernel specialist develops Linux kernel modules and device drivers.

## Responsibilities

### Kernel Module Development
- Loadable kernel modules
- Module parameters
- Module dependencies
- License enforcement

### Device Drivers
- Character devices
- Block devices
- Network devices
- USB drivers

### Kernel Internals
- System calls
- Memory management
- Process scheduling
- File systems

## Kernel Module Structure

```c
#include <linux/module.h>
#include <linux/kernel.h>

MODULE_LICENSE("GPL");
MODULE_AUTHOR("Developer");
MODULE_DESCRIPTION("Example Kernel Module");
MODULE_VERSION("1.0");

static int __init mymodule_init(void) {
    printk(KERN_INFO "Module loaded\n");
    return 0;
}

static void __exit mymodule_exit(void) {
    printk(KERN_INFO "Module unloaded\n");
}

module_init(mymodule_init);
module_exit(mymodule_exit);
```

## Character Device Driver

```c
static int my_open(struct inode *inode, struct file *file) {
    printk(KERN_INFO "Device opened\n");
    return 0;
}

static ssize_t my_read(struct file *file, char __user *buf,
                       size_t len, loff_t *offset) {
    printk(KERN_INFO "Device read\n");
    return 0;
}

static struct file_operations fops = {
    .owner = THIS_MODULE,
    .open = my_open,
    .read = my_read,
    .write = my_write,
    .release = my_release,
};

static int __init mydriver_init(void) {
    register_chrdev(MAJOR_NUM, DEVICE_NAME, &fops);
    return 0;
}
```

## Kernel Data Structures

### Linked Lists
```c
struct my_struct {
    int data;
    struct list_head list;
};

INIT_LIST_HEAD(&my_list);
list_add(&entry->list, &my_list);
```

### Spinlocks
```c
DEFINE_SPINLOCK(mylock);
spin_lock(&mylock);
// Critical section
spin_unlock(&mylock);
```

### Workqueues
```c
static void my_work_handler(struct work_struct *work) {
    printk(KERN_INFO "Work executed\n");
}

DECLARE_WORK(my_work, my_work_handler);
schedule_work(&my_work);
```

## Kernel Memory Allocation

```c
// Kernel memory
void *kmalloc(size_t size, gfp_t flags);
void kfree(void *ptr);

// VMalloc - larger allocations
void *vmalloc(size_t size);
void vfree(void *ptr);

// Per-CPU
void *alloc_percpu(type);
void free_percpu(void *ptr);
```

## Build System

### Makefile
```makefile
obj-m += mymodule.o

KDIR := /lib/modules/$(shell uname -r)/build

all:
    $(MAKE) -C $(KDIR) M=$(PWD) modules

clean:
    $(MAKE) -C $(KDIR) M=$(PWD) clean
```

## Best Practices

- **Error handling** - Check all returns
- **No blocking** - In atomic context
- **Memory safety** - Check allocations
- **Use kernel APIs** - Not libc
- **Debugging** - printk, not printf
