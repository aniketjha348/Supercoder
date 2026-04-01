#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const homeDir = os.homedir();

const SUPPORTED_AI = {
  // Main AI Coding Agents
  'claude': path.join(homeDir, '.claude', 'skills', 'supercoder'),
  'claude-code': path.join(homeDir, '.claude', 'skills', 'supercoder'),
  'codex': path.join(homeDir, '.agents', 'skills', 'supercoder'),
  'opencode': path.join(homeDir, '.config', 'opencode', 'skills', 'supercoder'),
  'cursor': path.join(homeDir, '.cursor', 'extensions', 'skills', 'supercoder'),
  'windsurf': path.join(homeDir, '.windsurf', 'extensions', 'skills', 'supercoder'),
  'antigravity': path.join(homeDir, '.antigravity', 'skills', 'supercoder'),
  'copilot': path.join(homeDir, '.copilot', 'skills', 'supercoder'),
  'kiro': path.join(homeDir, '.kiro', 'skills', 'supercoder'),
  'qoder': path.join(homeDir, '.qoder', 'skills', 'supercoder'),
  'roocode': path.join(homeDir, '.roocode', 'skills', 'supercoder'),
  'gemini': path.join(homeDir, '.gemini', 'extensions', 'skills', 'supercoder'),
  'trae': path.join(homeDir, '.trae', 'skills', 'supercoder'),
  'continue': path.join(homeDir, '.continue', 'skills', 'supercoder'),
  'codebuddy': path.join(homeDir, '.codebuddy', 'skills', 'supercoder'),
  'droid': path.join(homeDir, '.droid', 'skills', 'supercoder'),
  'factory': path.join(homeDir, '.factory', 'skills', 'supercoder'),
  'kilocode': path.join(homeDir, '.kilocode', 'skills', 'supercoder'),
  'warp': path.join(homeDir, '.warp', 'extensions', 'skills', 'supercoder'),
  'augment': path.join(homeDir, '.augment', 'skills', 'supercoder'),
  'vscode': path.join(homeDir, '.vscode', 'extensions', 'skills', 'supercoder'),
  'jetbrains': path.join(homeDir, '.jetbrains', 'skills', 'supercoder'),
  'all': 'all'
};

const SKILLS_SOURCE = path.join(__dirname, '..', 'skills');

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

function getAgentFromArgs() {
  const args = process.argv.slice(2).filter(arg => arg !== '--');
  
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith('@')) {
      return arg.substring(1);
    }
    if (arg === '--agent' || arg === '-a') {
      return args[i + 1];
    }
  }
  
  if (process.env.SUPERCODER_TARGET) {
    return process.env.SUPERCODER_TARGET;
  }
  if (process.env.npm_config_target) {
    return process.env.npm_config_target;
  }
  
  const npmPkg = process.env.npm_package_name || '';
  if (npmPkg.includes('-')) {
    const agent = npmPkg.split('-').pop();
    if (agent && SUPPORTED_AI[agent.toLowerCase()]) {
      return agent.toLowerCase();
    }
    // Handle scoped packages like @username/supercoder-codex
    if (npmPkg.includes('@')) {
      const parts = npmPkg.split('/');
      if (parts.length === 2) {
        const scopedAgent = parts[1].split('-').pop();
        if (scopedAgent && SUPPORTED_AI[scopedAgent.toLowerCase()]) {
          return scopedAgent.toLowerCase();
        }
      }
    }
  }
  
  return process.env.SUPERCODER_AGENT || null;
}

function log(color, text) {
  console.log(`${colors[color]}${text}${colors.reset}`);
}

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function install(ai, verbose = false) {
  const targetPath = SUPPORTED_AI[ai.toLowerCase()];
  
  if (!targetPath) {
    log('red', `\n❌ Unknown AI: ${ai}`);
    log('yellow', '\nSupported AIs:');
    Object.keys(SUPPORTED_AI).filter(k => k !== 'all').forEach(k => {
      log('cyan', `  - ${k}`);
    });
    process.exit(1);
  }
  
  if (targetPath === 'all') {
    let count = 0;
    log('cyan', '\n🧠 Installing Supercoder for ALL AI agents...\n');
    
    for (const [agentName, agentPath] of Object.entries(SUPPORTED_AI)) {
      if (agentName === 'all') continue;
      
      try {
        if (!fs.existsSync(path.dirname(agentPath))) {
          if (verbose) log('yellow', `⚠️  ${agentName}: AI not installed, skipping`);
          continue;
        }
        copyDir(SKILLS_SOURCE, agentPath);
        log('green', `✅ ${agentName}`);
        count++;
      } catch (e) {
        if (verbose) log('yellow', `⚠️  ${agentName}: ${e.message}`);
      }
    }
    
    log('green', `\n✅ Installed for ${count} AI agents!`);
    return;
  }
  
  // Single AI install
  try {
    // Try to create parent if doesn't exist
    const parentDir = path.dirname(targetPath);
    if (!fs.existsSync(parentDir)) {
      fs.mkdirSync(parentDir, { recursive: true });
    }
    
    copyDir(SKILLS_SOURCE, targetPath);
    log('green', `\n✅ Installed Supercoder for ${ai}`);
    log('cyan', `📍 Location: ${targetPath}`);
  } catch (e) {
    log('yellow', `\n⚠️  Could not install for ${ai} (may not be installed)`);
    log('yellow', `   ${e.message}`);
  }
}

function list() {
  log('cyan', '\n🧠 Supercoder - Supported AI Agents\n');
  
  for (const [name, aiPath] of Object.entries(SUPPORTED_AI)) {
    if (name === 'all') continue;
    
    const exists = fs.existsSync(path.dirname(aiPath));
    const status = exists ? '✅' : '❌';
    log(exists ? 'green' : 'red', `  ${status} ${name}`);
  }
  
  log('cyan', '\n📦 Run "supercoder install all" to install for all available agents');
}

function clean() {
  log('yellow', '\n🧹 Removing Supercoder from all AI agents...\n');
  
  for (const [name, aiPath] of Object.entries(SUPPORTED_AI)) {
    if (name === 'all') continue;
    
    try {
      if (fs.existsSync(aiPath)) {
        fs.rmSync(aiPath, { recursive: true });
        log('green', `✅ Removed from ${name}`);
      }
    } catch (e) {
      log('yellow', `⚠️  ${name}: ${e.message}`);
    }
  }
}

// Parse commands
const rawArgs = process.argv.slice(2);
const args = rawArgs.filter(arg => arg !== '--');
const command = args[0];

function autoDetectAndInstall() {
  const agent = getAgentFromArgs();
  if (agent && SUPPORTED_AI[agent.toLowerCase()]) {
    install(agent);
    return true;
  }
  return false;
}

// Check for npm install -g supercoder@agent pattern BEFORE processing commands
if (autoDetectAndInstall()) {
  process.exit(0);
}

if (!command || command === '--help' || command === '-h') {
    log('cyan', `
╔══════════════════════════════════════════════════════════════════╗
║          🧠 Supercoder - AI Development Team CLI            ║
║          Your AI's own software development team            ║
╚══════════════════════════════════════════════════════════════════╝

Usage: supercoder <command> [options]

Commands:
  install <ai>    Install skills for specific AI
  install all    Install skills for ALL supported AIs
  list           List supported AI agents
  clean          Remove from all agents
  update         Update skills (reinstall)
  doctor         Check installation health

Examples:
  supercoder install codex
  supercoder install claude
  supercoder install opencode
  supercoder install cursor
  supercoder install all
  supercoder list
  supercoder clean

  npm install -g supercoder-codex     # Install for Codex
  npm install -g supercoder-opencode  # Install for OpenCode

Supported AI Agents:
  - claude       (Claude Code)
  - codex        (Codex CLI)
  - opencode     (OpenCode)
  - cursor       (Cursor)
  - windsurf     (Windsurf)
  - copilot      (GitHub Copilot)
  - gemini       (Gemini CLI)
  - trae         (Trae)
  - continue     (Continue Dev)
  - vscode       (VS Code)
  - jetbrains   (JetBrains IDEs)
  - all          (All available agents)

Quick Start:
  npx supercoder install all

  `);
    process.exit(0);
  }

  switch (command) {
  case 'install':
    const ai = args[1] || 'all';
    install(ai);
    break;
  case 'npm-install':
  case 'i':
    install(getAgentFromArgs() || 'all');
    break;
  case 'list':
  case 'ls':
    list();
    break;
  case 'clean':
  case 'remove':
    clean();
    break;
  case 'update':
  case 'upgrade':
    install('all', true);
    break;
  case 'doctor':
  case 'health':
    list();
    log('cyan', '\n💡 Run "supercoder install all" to fill missing installations');
    break;
  default:
    log('red', `\n❌ Unknown command: ${command}`);
    log('yellow', 'Run "supercoder --help" for usage');
    process.exit(1);
}
