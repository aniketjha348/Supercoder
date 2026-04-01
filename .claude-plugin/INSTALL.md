# Installing Supercoder for Claude Code

## Prerequisites

- [Claude Code](https://claude.com/code) installed

## Installation

### Option 1: Plugin (Recommended)

Clone the repo and add as a plugin:

```bash
git clone https://github.com/aniketjha348/Supercoder.git ~/.claude/plugins/supercoder
```

Add to your `CLAUDE.md` or request Claude Code to load the plugin.

### Option 2: Symlink (Alternative)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aniketjha348/Supercoder.git ~/.claude/supercoder
   ```

2. **Create the skills symlink:**
   ```bash
   mkdir -p ~/.agents/skills
   ln -s ~/.claude/supercoder/skills ~/.agents/skills/supercoder
   ```

   **Windows (PowerShell):**
   ```powershell
   New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.agents\skills"
   cmd /c mklink /J "$env:USERPROFILE\.agents\skills\supercoder" "$env:USERPROFILE\.claude\supercoder\skills"
   ```

3. **Restart Claude Code** to discover the skills.

## Verify

```bash
ls -la ~/.agents/skills/supercoder
```

You should see a symlink (or junction on Windows) pointing to your supercoder skills directory.

## Updating

```bash
cd ~/.claude/supercoder && git pull
```

Skills update instantly through the symlink.

## Uninstalling

```bash
rm ~/.agents/skills/supercpowered
```

Optionally delete the clone: `rm -rf ~/.claude/supercoder`.