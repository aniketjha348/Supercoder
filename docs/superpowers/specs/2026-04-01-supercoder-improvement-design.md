# Supercoder Improvement Design - 2026-04-01

## Overview
Enhance Supercoder with NPM global install support, skill manifest for AI auto-detection, new skills, and improved documentation.

## Approved Changes

### 1. NPM Package Support
- **Pattern**: `npm install -g supercoder@codex`, `npm install -g supercoder@gemini`, etc.
- **Structure**: Single repo with scoped package entries in package.json
- **Implementation**: Add `postinstall` script to auto-detect agent and install skills
- **Fallback**: `npm install -g supercoder` (no scope) defaults to all agents

### 2. Skill Manifest (Auto-Detection)
- **Location**: `skills/manifest.json`
- **Content**: Each skill has metadata (name, category, keywords, description)
- **AI Usage**: When user asks for help, AI reads manifest and loads relevant skills

### 3. New Skills (Additional)
- **AI Engineering**: supercoder-ai (general AI app development)
- **Mobile**: Flutter, React Native (expand existing mobile skills)
- **Cloud**: AWS, GCP, Azure specific skills

### 4. CLI Improvements
- `supercoder install @agent` works alongside existing commands
- Auto-detection from npm_config_target environment variable
- Better error handling and verbose output

### 5. README Updates
- New NPM installation section
- Updated skill count and list
- Quick reference for all installation methods
- Badge updates

## Implementation Tasks

| # | Task | Priority |
|---|------|----------|
| 1 | Create design spec | Done |
| 2 | Create NPM package.json files | Next |
| 3 | Create skill manifest.json | Next |
| 4 | Add new skills | Later |
| 5 | Update CLI for npm support | Next |
| 6 | Update README.md | Next |
| 7 | Verify everything works | Last |

## Success Criteria
- `npm install -g supercoder@codex` installs skills for Codex
- Skill manifest allows AI to find relevant skills
- README shows all installation methods clearly
- At least 100 skills available
