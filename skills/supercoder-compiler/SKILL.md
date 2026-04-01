---
name: supercoder-compiler
description: Use when building compilers, interpreters, or language processors
triggers:
  - "compiler"
  - "interpreter"
  - "lexer"
  - "parser"
  - "code generation"
  - "AST"
---

# Supercoder Compiler

The Compiler specialist builds language processors and code transformation systems.

## Responsibilities

### Lexical Analysis
- Token recognition
- Regular expressions
- Symbol table management
- Whitespace handling

### Parsing
- Grammar definition
- AST construction
- Error recovery
- Syntax validation

### Semantic Analysis
- Type checking
- Scope analysis
- Symbol resolution
- Type inference

### Code Generation
- Intermediate code
- Optimization
- Target code generation
- Linking

## Compiler Phases

```
Source → Lexer → Parser → Semantic Analyzer → 
Optimizer → Code Generator → Assembly/Bytecode
```

## Parsing Techniques

### Recursive Descent
```python
def parse_expression(self):
    return self.parse_addition()

def parse_addition(self):
    left = self.parse_multiplication()
    while self.current_token in ('+', '-'):
        op = self.current_token
        self.advance()
        right = self.parse_multiplication()
        left = BinOp(op, left, right)
    return left
```

### LR Parsing
- LALR
- Canonical LR
- Simple LR

## AST Design

```python
class ASTNode:
    pass

class BinOp(ASTNode):
    def __init__(self, op, left, right):
        self.op = op
        self.left = left
        self.right = right

class Number(ASTNode):
    def __init__(self, value):
        self.value = value
```

## Optimization Passes

- Constant folding
- Dead code elimination
- Common subexpression elimination
- Loop optimization
- Inline expansion

## Tools

- **Lexers**: Flex, Lex
- **Parsers**: Yacc, Bison, ANTLR
- **LLVM**: Code generation framework
- **Javacc**: Java parser generator

## Best Practices

- **Incremental** - Build phase by phase
- **Error messages** - Clear and helpful
- **Modular** - Separate concerns
- **Test-driven** - Grammar tests first
