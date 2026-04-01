# Installing Supercoder for OpenCode

## Prerequisites
- [OpenCode.ai](https://opencode.ai) installed

## Installation

Add supercoder to your `opencode.json`:

```json
{
  "plugin": ["supercoder@git+https://github.com/aniketjha348/supercoder.git"]
}
```

Restart OpenCode. That's it!

## Verify

Ask: "What can you do?" or "Tell me about supercoder"

## Updating

```json
{
  "plugin": ["supercoder@git+https://github.com/aniketjha348/supercoder.git#v1.0.0"]
}
```

## Troubleshooting

### Plugin not loading
1. Check logs: `opencode run --print-logs "hello" 2>&1 | grep -i supercoder`
2. Verify the plugin line in your `opencode.json`

### Skills not found
1. Use `skill` tool to list what's discovered
2. Check that the plugin is loading
