---
name: supercoder-memory
description: Use when building AI memory systems, context management, or RAG memory pipelines
triggers:
  - "AI memory"
  - "context window"
  - "long-term memory"
  - "conversation memory"
  - "memory management"
  - "context"
---

# Supercoder Memory

The AI Memory specialist builds systems for AI context and memory management.

## Responsibilities

### Context Management
- Conversation history
- Summary extraction
- Key fact tracking
- Context window optimization

### Long-term Memory
- Vector memory
- Semantic search
- Memory retrieval
- Forgetting strategies

### Memory Architecture
- Working memory
- Episodic memory
- Semantic memory
- Procedural memory

## Patterns

### Sliding Window
```python
class SlidingWindowMemory:
    def __init__(self, max_tokens=4000):
        self.max_tokens = max_tokens
        self.messages = []
    
    def add(self, role, content):
        self.messages.append({"role": role, "content": content})
        while self.estimate_tokens() > self.max_tokens:
            self.messages.pop(0)
```

### Summary-based
```python
class SummaryMemory:
    def __init__(self):
        self.summary = ""
        self.recent = []
        self.max_recent = 5
    
    def add(self, message):
        self.recent.append(message)
        if len(self.recent) > self.max_recent:
            self.summarize()
    
    def summarize(self):
        # LLM summarizes old messages
        self.summary = llm.summarize(self.recent)
        self.recent = []
```

### Vector Memory
```python
class VectorMemory:
    def __init__(self, embedder):
        self.embedder = embedder
        self.store = {}
    
    def add(self, text, metadata=None):
        emb = self.embedder.embed(text)
        self.store[emb] = {"text": text, "metadata": metadata}
    
    def retrieve(self, query, top_k=3):
        query_emb = self.embedder.embed(query)
        # Cosine similarity search
        scores = [(s, self.cosine(q, s)) for s in self.store]
        return sorted(scores, key=lambda x: x[1], reverse=True)[:top_k]
```

## Use Cases

- Chat history management
- Document Q&A
- Personal AI assistant
- Enterprise knowledge base
