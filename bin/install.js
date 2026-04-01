#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const homeDir = os.homedir();

const PLATFORMS = {
  codex: {
    skillsDir: path.join(homeDir, '.agents', 'skills'),
    plugin: 'supercoder'
  },
  opencode: {
    skillsDir: path.join(homeDir, '.config', 'opencode', 'skills'),
    plugin: 'supercoder'
  },
  global: {
    skillsDir: path.join(homeDir, '.agents', 'skills', 'supercoder'),
    plugin: 'supercoder'
  }
};

const sourceDir = __dirname;

function install(platform) {
  const config = PLATFORMS[platform];
  if (!config) {
    console.log(`Invalid platform: ${platform}`);
    console.log(`Valid platforms: ${Object.keys(PLATFORMS).join(', ')}`);
    process.exit(1);
  }

  console.log(`Installing Supercoder for ${platform}...`);
  
  try {
    // Create skills directory
    if (!fs.existsSync(config.skillsDir)) {
      fs.mkdirSync(config.skillsDir, { recursive: true });
    }

    // Copy skills (symlink for global, copy for others)
    if (platform === 'global') {
      // For global, just ensure directory exists
      console.log(`Skills directory: ${config.skillsDir}`);
    } else {
      // Create platform-specific directory
      const targetDir = path.join(config.skillsDir, 'supercoder');
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      
      // Copy all skill directories
      const skills = fs.readdirSync(sourceDir).filter(f => {
        return fs.statSync(path.join(sourceDir, f)).isDirectory();
      });
      
      skills.forEach(skill => {
        if (skill === 'bin') return;
        const src = path.join(sourceDir, skill);
        const dest = path.join(targetDir, skill);
        copyRecursive(src, dest);
      });
      
      console.log(`Installed ${skills.length} skills to ${targetDir}`);
    }

    console.log('\n✅ Supercoder installed successfully!');
    console.log('\nNext steps:');
    
    if (platform === 'codex') {
      console.log('1. Restart Codex');
      console.log('2. Say: "What can you do?"');
    } else if (platform === 'opencode') {
      console.log('1. Add to opencode.json:');
      console.log('   { "plugin": ["supercoder"] }');
      console.log('2. Restart OpenCode');
    } else {
      console.log('1. Skills are in: ' + config.skillsDir);
      console.log('2. Restart your AI agent');
    }
    
  } catch (error) {
    console.error('Installation failed:', error.message);
    process.exit(1);
  }
}

function copyRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Parse command line args
const args = process.argv.slice(2);
const platform = args[0] || 'global';

if (args.includes('--help') || args.includes('-h')) {
  console.log(`
Supercoder Installation

Usage: npx supercoder <platform>

Platforms:
  codex     - Install for Codex (default)
  opencode - Install for OpenCode  
  global   - Install globally to ~/.agents/skills/supercoder

Examples:
  npx supercoder codex
  npx supercoder opencode
  npx supercoder global
  `);
  process.exit(0);
}

install(platform);
