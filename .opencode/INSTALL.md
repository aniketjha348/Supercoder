# Installing Supercoder for OpenCode

Enable supercoder skills via native skill discovery. Just clone and symlink.

## Prerequisites

- [OpenCode.ai](https://opencode.ai) installed
- Git

## Installation

### Option 1: NPM Install (Recommended)

```bash
npm install -g supercoder-opencode
```

This will automatically set up the skills for OpenCode.

### Option 2: Manual Install (Clone + Symlink)

#### Step 1: Clone the repository

```bash
git clone https://github.com/aniketjha348/Supercoder.git ~/.opencode/supercoder
```

#### Step 2: Create the skills directory and symlink

**Windows (PowerShell):**
```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.config\opencode\skills"
cmd /c mklink /J "$env:USERPROFILE\.config\opencode\skills\supercoder" "$env:USERPROFILE\.opencode\supercoder\skills"
```

**Windows (CMD):**
```cmd
mkdir "%USERPROFILE%\.config\opencode\skills"
mklink /J "%USERPROFILE%\.config\opencode\skills\supercoder" "%USERPROFILE%\.opencode\supercoder\skills"
```

**Linux/Mac:**
```bash
mkdir -p ~/.config/opencode/skills
ln -sf ~/.opencode/supercoder/skills ~/.config/opencode/skills/supercoder
```

#### Step 3: Restart OpenCode

Close and reopen OpenCode to discover the new skills.

## Verify Installation

```bash
ls -la ~/.config/opencode/skills/supercoder
```

You should see a symlink (or junction on Windows) pointing to your Supercoder skills directory.

Or start a new session and ask the AI:
> "What skills do you have available?"

You should see Supercoder skills listed.

## Updating

```bash
cd ~/.opencode/supercoder && git pull
```

Skills update instantly through the symlink.

## Troubleshooting

### Skills not appearing?

1. Check symlink exists: `ls -la ~/.config/opencode/skills/`
2. Verify skills folder has content: `ls ~/.opencode/supercoder/skills/`
3. Restart OpenCode completely
4. Try creating a new conversation

### Symlink not working on Windows?

Use Junction instead:
```powershell
cmd /c mklink /J "path\to\link" "path\to\target"
```

Or use PowerShell:
```powershell
New-Item -ItemType Junction -Path "link" -Target "target"
```

## Uninstalling

```bash
rm ~/.config/opencode/skills/supercoder
```

Optional: Delete the clone:
```bash
rm -rf ~/.opencode/supercoder
```