---
name: supercoder-vector
description: Use when working with vector databases like Pinecone, Weaviate, Milvus for AI applications
triggers:
  - "vector database"
  - "Pinecone"
  - "Weaviate"
  - "Milvus"
  - "embedding"
  - "similarity search"
  - "semantic search"
---

# Supercoder Vector

The Vector specialist builds AI-powered search and similarity systems.

## Responsibilities

### Vector Storage
- Embedding generation
- Vector indexing
- Similarity search
- HNSW/IVF algorithms

### Semantic Search
- Text embeddings
- Image embeddings
- Cross-modal search
- RAG pipelines

### AI Integration
- LLM context
- Prompt engineering
- Retrieval augmented generation

## Embedding Generation

### Text Embeddings
```python
from sentence_transformers import SentenceTransformer

model = SentenceTransformer('all-MiniLM-L6-v2')
embeddings = model.encode([
    "machine learning",
    "deep learning", 
    "cooking recipes"
])

# embeddings.shape = (3, 384)
```

### Image Embeddings
```python
from transformers import CLIPProcessor, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

inputs = processor(images=image, return_tensors="pt")
image_embedding = model.get_image_features(**inputs)
```

## Vector Search Patterns

### Pinecone
```python
import pinecone

pinecone.init(api_key="YOUR_KEY", environment="us-east-1")
index = pinecone.Index("my-index")

# Upsert vectors
index.upsert(vectors=[
    ("id1", [0.1, 0.2, ...], {"text": "doc1"}),
    ("id2", [0.3, 0.4, ...], {"text": "doc2"})
])

# Query
results = index.query(
    vector=[0.1, 0.2, ...],
    top_k=10,
    include_metadata=True
)
```

### Weaviate
```python
import weaviate

client = weaviate.Client("http://localhost:8080")

# Add data
client.data_object.create(
    class_name="Article",
    data_object={"title": "AI News", "content": "..."},
    vector=embedding
)

# Query
result = client.query.get("Article", ["title", "content"]).with_near_vector({
    "vector": query_embedding
}).with_limit(5).do()
```

## RAG Pipeline

```python
class RAGPipeline:
    def __init__(self, llm, vector_store):
        self.llm = llm
        self.vector_store = vector_store
    
    def query(self, question):
        # 1. Embed question
        query_embedding = self.embed(question)
        
        # 2. Retrieve context
        results = self.vector_store.similarity_search(query_embedding, k=5)
        context = "\n\n".join([r["text"] for r in results])
        
        # 3. Build prompt
        prompt = f"""Answer based on this context:
        
        Context: {context}
        
        Question: {question}
        
        Answer:"""
        
        # 4. Get LLM response
        return self.llm.generate(prompt)
```

## Indexing Strategies

### HNSW (Hierarchical Navigable Small World)
- Best for accuracy
- High memory usage
- Fast query time

### IVF (Inverted File Index)
- Faster building
- Lower memory
- Slightly less accurate

### PQ (Product Quantization)
- Compressed storage
- Very fast
- Approximate results

## Best Practices

- **Chunk text** - 256-512 tokens typical
- **Use good embeddings** - BAAI/bge-* models
- **Filter before search** - Metadata filters
- **Hybrid search** - Keyword + semantic
- **Monitor latency** - Embedding generation is slow
