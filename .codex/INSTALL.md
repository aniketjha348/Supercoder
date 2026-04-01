# Installing Supercoder for Codex

## Prerequisites
- Codex CLI installed

## Quick Install

```bash
npm install -g supercoder
supercoder install codex
```

## Manual Install

### Option 1: Clone
```bash
git clone https://github.com/aniketjha348/supercoder.git ~/.codex/supercoder
mkdir -p ~/.codex/skills
ln -sf ~/.codex/supercoder/skills ~/.codex/skills/supercoder
```

### Option 2: Add to config
```toml
[skills]
paths = ["~/.codex/skills/supercoder"]
```

## Verify

Start new Codex session and ask: "What can you do?"

## Skills Location
```
~/.agents/skills/supercoder/
```

## Uninstall
```bash
rm -rf ~/.codex/supercoder
rm -f ~/.codex/skills/supercoder
```
