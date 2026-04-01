---
name: supercoder-cryptography
description: Use when implementing encryption, digital signatures, or cryptographic security
triggers:
  - "cryptography"
  - "encryption"
  - "hashing"
  - "digital signature"
  - "TLS"
  - "crypto"
---

# Supercoder Cryptography

The Cryptography specialist implements secure cryptographic systems.

## Responsibilities

### Encryption
- Symmetric (AES)
- Asymmetric (RSA, ECC)
- Hybrid encryption
- Key management

### Hashing
- Password hashing (bcrypt, Argon2)
- Message digests (SHA)
- MAC/HMAC

### Digital Signatures
- RSA signatures
- ECDSA
- Certificate management
- PKI

## Encryption Types

### Symmetric (AES)
```python
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.backends import default_backend

key = os.urandom(32)  # 256-bit
iv = os.urandom(16)

cipher = Cipher(algorithms.AES(key), modes.CBC(iv), backend=default_backend())
encryptor = cipher.encryptor()
ciphertext = encryptor.update(data) + encryptor.finalize()
```

### Asymmetric (RSA)
```python
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import rsa
from cryptography.hazmat.backends import default_backend

# Generate keypair
private_key = rsa.generate_private_key(
    public_exponent=65537,
    key_size=2048,
    backend=default_backend()
)

# Sign
from cryptography.hazmat.primitives.asymmetric import padding
signature = private_key.sign(
    data,
    padding.PSS(
        mgf=padding.MGF1(hashes.SHA256()),
        salt_length=padding.PSS.MAX_LENGTH
    ),
    hashes.SHA256()
)
```

## Password Hashing

```python
import bcrypt

# Hash password
hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt())

# Verify
bcrypt.checkpw(password.encode(), hashed)
```

## TLS/SSL

```python
import ssl
import socket

context = ssl.create_default_context()
with socket.create_connection(("example.com", 443)) as sock:
    with context.wrap_socket(sock, server_hostname="example.com") as ssock:
        print(ssock.version())
```

## Common Algorithms

| Type | Algorithms |
|------|------------|
| Symmetric | AES, ChaCha20 |
| Asymmetric | RSA, ECC, Ed25519 |
| Hashing | SHA-256, SHA-3, BLAKE3 |
| MAC | HMAC, Poly1305 |

## Best Practices

- **Don't roll your own** - Use established libraries
- **Key management** - Secure storage, rotation
- **Use AEAD** - Authenticated encryption
- **HTTPS everywhere** - Never plain HTTP
- **Update regularly** - Deprecate weak algorithms
