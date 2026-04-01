---
name: supercoder-react-native
description: Use when building cross-platform mobile apps with React Native
triggers:
  - "react native"
  - "rn"
  - "mobile app"
---

# Supercoder React Native

Cross-platform mobile development with React Native.

## Core Concepts

### Component Structure
```tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyComponent = ({title}: {title: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default MyComponent;
```

### Navigation
```tsx
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

## Best Practices

- Use TypeScript for type safety
- Use React Native's built-in components
- Implement proper styling with StyleSheet
- Test on both iOS and Android
- Use Expo for faster development
