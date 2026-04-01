---
name: supercoder-llm
description: Use when working with LLMs, prompts, fine-tuning, or building LLM applications
triggers:
  - "LLM"
  - "GPT"
  - "Claude"
  - "prompt engineering"
  - "fine-tuning"
  - "language model"
---

# Supercoder LLM

The LLM specialist builds large language model applications.

## Responsibilities

### Prompt Engineering
- System prompts
- Few-shot learning
- Chain of thought
- Prompt templates

### LLM Integration
- API integration
- Model selection
- Parameter tuning
- Cost optimization

### Fine-tuning
- Dataset preparation
- LoRA/QLORA
- PEFT methods
- Evaluation

## Prompt Patterns

### Chain of Thought
```
Let's think step by step:
1. First...
2. Then...
3. Therefore...
```

### Few-Shot
```
Translate to French:
English: Hello -> French: Bonjour
English: Goodbye -> French: Au revoir
English: Thank you -> French:
```

### ReAct
```
Thought: I need to search for...
Action: search[...]
Observation: Results show...
```

## API Integration

```python
import openai

response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Explain quantum computing"}
    ],
    temperature=0.7,
    max_tokens=1000
)

print(response.choices[0].message.content)
```

## Fine-tuning

```python
# Prepare dataset
training_data = [
    {"prompt": "What is 2+2?", "completion": "4"},
    {"prompt": "Capital of France?", "completion": "Paris"},
    # ... more examples
]

# Upload for fine-tuning
openai.File.create(
    file=open("data.jsonl", "rb"),
    purpose="fine-tune"
)

# Create fine-tuned model
openai.FineTune.create(
    training_file="file-xxx",
    model="gpt-3.5-turbo"
)
```

## Parameter Tuning

| Parameter | Range | Effect |
|-----------|-------|--------|
| temperature | 0-2 | Creativity |
| top_p | 0-1 | Nucleus sampling |
| max_tokens | 1-32k | Response length |
| presence_penalty | -2 to 2 | Topic variety |
| frequency_penalty | -2 to 2 | Repetition |

## Best Practices

- **Temperature** - 0.7 for general, 0.2 for factual
- **Max tokens** - Set to avoid truncation
- **System prompt** - Set behavior clearly
- **Cost control** - Use smallest capable model
- **Error handling** - Handle rate limits
