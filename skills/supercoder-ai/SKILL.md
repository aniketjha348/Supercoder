# Supercoder AI Engineering

AI application development specialist.

## Core Patterns

### LLM Integration
```python
from openai import OpenAI

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def chat_with_llm(prompt: str, model: str = "gpt-4") -> str:
    response = client.chat.completions.create(
        model=model,
        messages=[{"role": "user", "content": prompt}]
    )
    return response.choices[0].message.content
```

### AI Agent Pattern
```python
class AIAgent:
    def __init__(self, llm, tools: list):
        self.llm = llm
        self.tools = tools
    
    def run(self, task: str) -> str:
        # Plan -> Execute -> Reflect
        plan = self.plan(task)
        result = self.execute(plan)
        return self.reflect(result)
```

## Best Practices

- Use environment variables for API keys
- Implement retry logic for API calls
- Add proper error handling
- Consider rate limits and costs
- Cache responses when appropriate
