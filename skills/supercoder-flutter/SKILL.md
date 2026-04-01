---
name: supercoder-flutter
description: Use when building cross-platform mobile apps with Flutter
triggers:
  - "flutter"
  - "dart"
  - "cross-platform mobile"
---

# Supercoder Flutter

Cross-platform mobile development with Flutter.

## Core Concepts

### Widget Structure
```dart
import 'package:flutter/material.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Hello')),
        body: Center(child: Text('Hello Flutter!')),
      ),
    );
  }
}
```

### State Management
```dart
class Counter extends StatefulWidget {
  @override
  _CounterState createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  int _count = 0;
  
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Count: $_count'),
        ElevatedButton(
          onPressed: () => setState(() => _count++),
          child: Text('Increment'),
        ),
      ],
    );
  }
}
```

## Best Practices

- Use const constructors where possible
- Implement proper error boundaries
- Use Provider/Riverpod/BLoC for state
- Follow Flutter best practices
- Test on both iOS and Android
