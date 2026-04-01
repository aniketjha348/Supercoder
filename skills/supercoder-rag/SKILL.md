---
name: supercoder-rag
description: Use when building Retrieval Augmented Generation systems for AI applications
triggers:
  - "RAG"
  - "retrieval"
  - "vector search"
  - "context augmentation"
  - "knowledge base"
  - "semantic search"
---

# Supercoder RAG

The RAG specialist builds retrieval-augmented generation systems.

## Responsibilities

### Document Processing
- PDF parsing
- Text chunking
- Embedding generation
- Metadata extraction

### Vector Store
- Index management
- Similarity search
- Hybrid search
- Re-ranking

### Pipeline Design
- Query processing
- Context assembly
- Result evaluation
- Fallback strategies

## RAG Pipeline

```python
class RAGPipeline:
    def __init__(self, chunker, embedder, vector_store, llm):
        self.chunker = chunker
        self.embedder = embedder
        self.vector_store = vector_store
        self.llm = llm
    
    def index_documents(self, documents):
        for doc in documents:
            chunks = self.chunker.chunk(doc)
            embeddings = self.embedder.embed(chunks)
            self.vector_store.upsert(chunks, embeddings)
    
    def query(self, question):
        # 1. Embed question
        query_emb = self.embedder.embed(question)
        
        # 2. Retrieve
        results = self.vector_store.search(query_emb, top_k=5)
        
        # 3. Assemble context
        context = "\n\n".join([r.text for r in results])
        
        # 4. Generate
        prompt = f"""Answer based on context:
        
Context:
{context}

Question: {question}

Answer:"""
        
        return self.llm.generate(prompt)
```

## Document Chunking

```python
class TextChunker:
    def __init__(self, chunk_size=512, overlap=50):
        self.chunk_size = chunk_size
        self.overlap = overlap
    
    def chunk(self, text):
        tokens = text.split()
        chunks = []
        
        for i in range(0, len(tokens), self.chunk_size - self.overlap):
            chunk = " ".join(tokens[i:i + self.chunk_size])
            chunks.append(chunk)
        
        return chunks
```

## Advanced RAG Patterns

### Hybrid Search
```python
def hybrid_search(query, top_k=5):
    # Keyword search
    keyword_results = keyword_search(query, top_k=20)
    
    # Semantic search
    semantic_results = semantic_search(query, top_k=20)
    
    # Fuse with Reciprocal Rank Fusion
    scores = {}
    for doc, rank in keyword_results:
        scores[doc] = scores.get(doc, 0) + 1 / (rank + 60)
    for doc, rank in semantic_results:
        scores[doc] = scores.get(doc, 0) + 1 / (rank + 60)
    
    return sorted(scores.items(), key=lambda x: x[1], reverse=True)[:top_k]
```

### Re-ranking
```python
from sentence_transformers import CrossEncoder

reranker = CrossEncoder('cross-encoder/ms-marco-MiniLM-L-6-v2')

def rerank(query, candidates):
    pairs = [(query, doc) for doc in candidates]
    scores = reranker.predict(pairs)
    return sorted(zip(candidates, scores), key=lambda x: x[1], reverse=True)
```

## Best Practices

- **Chunk size** - 256-1024 tokens
- **Overlap** - 10-20% to preserve context
- **Hybrid search** - Combine keyword + semantic
- **Re-rank** - BM25 + cross-encoder
- **Guardrails** - Validate outputs
