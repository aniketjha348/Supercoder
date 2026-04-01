#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');

const homeDir = os.homedir();

const AGENT_PATHS = {
  codex: path.join(homeDir, '.agents', 'skills', 'supercoder'),
  claude: path.join(homeDir, '.claude', 'skills', 'supercoder'),
  opencode: path.join(homeDir, '.config', 'opencode', 'skills', 'supercoder'),
  cursor: path.join(homeDir, '.cursor', 'extensions', 'skills', 'supercoder'),
  copilot: path.join(homeDir, '.copilot', 'skills', 'supercoder')
};

const SKILLS_SOURCE = path.join(__dirname, 'skills');
const README_SOURCE = path.join(__dirname, 'README.md');

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

function installGlobal() {
  console.log('🧠 Installing Supercoder (64 skills) globally...\n');
  
  const results = [];
  
  for (const [agent, targetPath] of Object.entries(AGENT_PATHS)) {
    try {
      copyDir(SKILLS_SOURCE, targetPath);
      console.log(`✅ ${agent}: ${targetPath}`);
      results.push(agent);
    } catch (e) {
      console.log(`⚠️  ${agent}: Could not install (may not be installed)`);
    }
  }
  
  console.log(`\n📦 Installed for ${results.length} agents: ${results.join(', ')}`);
  console.log('\n🚀 Ready to use! Just tell your AI agent:');
  console.log('   "What can you do?" or "Build a login system"');
  console.log('\n📍 Skills are now available in all these locations:');
  Object.values(AGENT_PATHS).forEach(p => console.log(`   - ${p}`));
}

function installAgent(agent) {
  const targetPath = AGENT_PATHS[agent];
  
  if (!targetPath) {
    console.log(`Unknown agent: ${agent}`);
    console.log(`Available: ${Object.keys(AGENT_PATHS).join(', ')}`);
    process.exit(1);
  }
  
  copyDir(SKILLS_SOURCE, targetPath);
  console.log(`✅ Installed Supercoder for ${agent}`);
  console.log(`📍 Location: ${targetPath}`);
}

function listAgents() {
  console.log('Supported AI Agents:');
  Object.keys(AGENT_PATHS).forEach(agent => {
    const installed = fs.existsSync(AGENT_PATHS[agent]) ? '✅' : '❌';
    console.log(`  ${installed} ${agent}`);
  });
}

function clean() {
  console.log('🧹 Removing Supercoder from all agents...\n');
  
  for (const [agent, targetPath] of Object.entries(AGENT_PATHS)) {
    try {
      if (fs.existsSync(targetPath)) {
        fs.rmSync(targetPath, { recursive: true });
        console.log(`✅ Removed from ${agent}`);
      }
    } catch (e) {
      console.log(`⚠️  Could not remove from ${agent}`);
    }
  }
}

// Parse args
const args = process.argv.slice(2);
const command = args[0];

if (command === '--help' || command === '-h' || !command) {
  console.log(`
🧠 Supercoder - Global AI Development Team Installer

Usage: npx supercoder <command>

Commands:
  install          Install globally for all agents (default)
  install <agent>  Install for specific agent
  list             List supported agents
  clean            Remove from all agents
  update           Update skills from source

Examples:
  npx supercoder install
  npx supercoder install codex
  npx supercoder list
  npx supercoder clean

Quick Install (one-liner):
  npx supercoder install

Then just use your AI agent normally!
  `);
} else if (command === 'install') {
  if (args[1]) {
    installAgent(args[1]);
  } else {
    installGlobal();
  }
} else if (command === 'list') {
  listAgents();
} else if (command === 'clean') {
  clean();
} else if (command === 'update') {
  installGlobal();
} else {
  console.log(`Unknown command: ${command}`);
  console.log('Run: npx supercoder --help');
}
