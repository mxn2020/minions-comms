---
title: Quick Start
description: Get up and running with Minions Comms in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-comms/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_comms import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
comms info
```
