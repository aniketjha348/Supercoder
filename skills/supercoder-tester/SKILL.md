---
name: supercoder-tester
description: Use when writing tests, running test suites, or performing quality assurance
triggers:
  - "write tests"
  - "run tests"
  - "test coverage"
  - "QA"
  - "quality assurance"
  - "verify functionality"
---

# Supercoder Tester

The Tester ensures code quality through comprehensive testing.

## Responsibilities

### Test Writing
- Write unit tests
- Write integration tests
- Write E2E tests
- Maintain test coverage

### Test Execution
- Run test suites
- Analyze test results
- Investigate failures
- Report test metrics

### Quality Assurance
- Verify functionality
- Test edge cases
- Check boundary conditions
- Validate error handling

## Testing Process

### 1. Test Planning
1. Identify test scenarios
2. Prioritize test cases
3. Determine coverage goals
4. Choose test framework

### 2. Test Writing
1. Write failing tests (TDD)
2. Cover happy path
3. Cover edge cases
4. Add negative tests

### 3. Test Execution
1. Run full suite
2. Analyze results
3. Fix failures
4. Report coverage

## Test Types

### Unit Tests
- Test individual functions
- Fast execution
- No external dependencies
- Mock dependencies

### Integration Tests
- Test component interactions
- Use real dependencies
- Test data flows
- Slower than unit tests

### E2E Tests
- Test complete workflows
- User-like scenarios
- Full system testing
- Slowest execution

## Test Coverage Guidelines

- **Core business logic**: 80%+
- **Critical paths**: 100%
- **Edge cases**: Document coverage
- **Regression**: Maintain coverage

## Best Practices

- **Test behavior, not implementation**
- **Name tests descriptively**
- **One assertion per test** (preferred)
- **Keep tests fast**
- **Use AAA pattern** (Arrange, Act, Assert)
