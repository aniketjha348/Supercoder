# Installing Supercoder for Cursor

## Prerequisites

- [Cursor](https://cursor.sh) IDE installed
- Git

## Installation

### Option 1: Plugin (Recommended)

Clone the repo to extensions folder:

```bash
git clone https://github.com/aniketjha348/Supercoder.git ~/.cursor/extensions/supercoder
```

### Option 2: Symlink (Alternative)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aniketjha348/Supercoder.git ~/.cursor/extensions/supercoder
   ```

2. **Create the skills symlink:**
   ```bash
   mkdir -p ~/.agents/skills
   ln -s ~/.cursor/extensions/supercoder/skills ~/.agents/skills/supercoder
   ```

   **Windows (PowerShell):**
   ```powershell
   New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.agents\skills"
   cmd /c mklink /J "$env:USERPROFILE\.agents\skills\supercoder" "$env:USERPROFILE\.cursor\extensions\supercoder\skills"
   ```

3. **Restart Cursor** to discover the skills.

## Verify

```bash
ls -la ~/.agents/skills/supercoder
```

You should see a symlink (or junction on Windows) pointing to your supercoder skills directory.

## Updating

```bash
cd ~/.cursor/extensions/supercoder && git pull
```

Skills update instantly through the symlink.

## Uninstalling

```bash
rm ~/.agents/skills/supercoder
```

Optionally delete the clone: `rm -rf ~/.cursor/extensions/supercoder`.