---
name: supercoder-tool-vim
description: Use when editing code with Vim-style commands and motions
triggers:
  - "vim"
  - "edit with vim"
  - "vim motions"
---

# Supercoder Vim Editing

## Available Tools

### VimEditTool
- Vim-style text editing
- Motions, operators, text objects
- Normal and visual mode

## Key Motions

| Motion | Action |
|--------|--------|
| `h/j/k/l` | Left/Down/Up/Right |
| `w/b` | Word forward/back |
| `0/$` | Line start/end |
| `gg/G` | File start/end |
| `f/F` | Find char forward/back |

## Operators

| Operator | Action |
|----------|--------|
| `d` | Delete |
| `c` | Change |
| `y` | Yank (copy) |
| `p` | Paste |
| `gU` | Uppercase |
| `gu` | Lowercase |

## Common Commands

- `dd` - Delete line
- `dw` - Delete word
- `ciw` - Change inner word
- `yy` - Yank line
- `p` - Paste
- `u` - Undo
- `Ctrl+r` - Redo
