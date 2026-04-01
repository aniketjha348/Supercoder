---
name: supercoder-unity
description: Use when building games with Unity engine, C# scripting, or game development
triggers:
  - "Unity"
  - "game development"
  - "C#"
  - "Unity3D"
  - "game engine"
  - "gameplay"
---

# Supercoder Unity

The Unity specialist builds games with the Unity engine.

## Responsibilities

### Game Mechanics
- Player controls
- Physics
- AI behavior
- Game loops

### 3D/2D Development
- Scene management
- Asset management
- Lighting
- Rendering

### Optimization
- Performance tuning
- Level loading
- Physics optimization

## Unity Basics

```csharp
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    public float speed = 5f;
    public float jumpForce = 10f;
    private Rigidbody rb;
    private bool isGrounded;

    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }

    void Update()
    {
        float moveX = Input.GetAxis("Horizontal");
        float moveZ = Input.GetAxis("Vertical");
        
        Vector3 movement = new Vector3(moveX, 0, moveZ) * speed * Time.deltaTime;
        transform.Translate(movement);

        if (Input.GetButtonDown("Jump") && isGrounded)
        {
            rb.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
        }
    }

    void OnCollisionStay(Collision other)
    {
        isGrounded = true;
    }
}
```

## Common Patterns

### Singleton
```csharp
public class GameManager : MonoBehaviour
{
    public static GameManager Instance { get; private set; }
    
    void Awake()
    {
        if (Instance != null && Instance != this)
            Destroy(this);
        else
            Instance = this;
    }
}
```

### Object Pooling
```csharp
public class ObjectPool : MonoBehaviour
{
    public GameObject prefab;
    private Queue<GameObject> pool = new Queue<GameObject>();

    public GameObject Get()
    {
        if (pool.Count > 0)
            return pool.Dequeue();
        
        return Instantiate(prefab);
    }

    public void Return(GameObject obj)
    {
        obj.SetActive(false);
        pool.Enqueue(obj);
    }
}
```

## Best Practices

- **Use Addressables** - Async loading
- **Physics in FixedUpdate** - Consistent physics
- **Avoid FindObjectsOfType** - Slow at runtime
- **Use coroutines** - Async operations
- **Profile often** - Unity Profiler
