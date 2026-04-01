# Installing Supercoder for OpenCode

Enable supercoder skills via native skill discovery. Just clone and symlink.

## Prerequisites

- [OpenCode.ai](https://opencode.ai) installed
- Git

## Installation

### Quick Install

```bash
npm install -g supercoder
supercoder install opencode
```

### Manual Install (Clone + Symlink)

1. **Clone the supercoder repository:**
   ```bash
   git clone https://github.com/aniketjha348/supercoder.git ~/.opencode/supercoder
   ```

2. **Create the skills symlink:**
   ```powershell
   New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.config\opencode\skills"
   cmd /c mklink /J "$env:USERPROFILE\.config\opencode\skills\supercoder" "$env:USERPROFILE\.opencode\supercoder\skills"
   ```

   **Linux/Mac:**
   ```bash
   mkdir -p ~/.config/opencode/skills
   ln -sf ~/.opencode/supercoder/skills ~/.config/opencode/skills/supercoder
   ```

3. **Restart OpenCode** to discover the skills.

## Verify

```powershell
ls -la ~/.config/opencode/skills/supercoder
```

You should see a symlink (or junction on Windows) pointing to your supercoder skills directory.

## Updating

```bash
cd ~/.opencode/supercoder && git pull
```

Skills update instantly through the symlink.

## Uninstalling

```bash
rm ~/.config/opencode/skills/supercoder
```

Optionally delete the clone: `rm -rf ~/.opencode/supercoder`.
