![CI](https://github.com/mxn2020/minions-comms-workspace/actions/workflows/ci.yml/badge.svg) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# minions-comms

**Messages, threads, and notifications across all communication channels**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-comms/sdk minions-sdk

# Python
pip install minions-comms

# CLI (global)
npm install -g @minions-comms/cli
```

---

## CLI

```bash
# Show help
comms --help
```

---

## Python SDK

```python
from minions_comms import create_client

client = create_client()
```

---

## Project Structure

```
minions-comms/
  packages/
    core/           # TypeScript core library (@minions-comms/sdk on npm)
    python/         # Python SDK (minions-comms on PyPI)
    cli/            # CLI tool (@minions-comms/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [comms.minions.help](https://comms.minions.help)
- Blog: [comms.minions.blog](https://comms.minions.blog)
- App: [comms.minions.wtf](https://comms.minions.wtf)

---

## License

[MIT](LICENSE)
