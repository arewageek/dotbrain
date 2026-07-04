#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const targetDir = process.cwd();
const targetBrainDir = path.join(targetDir, '.brain');
const templateDir = path.join(__dirname, '../template/.brain');

// Utility to copy a directory recursively
function copyDirectorySync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectorySync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log('\nInitializing dot-brain context layer...');
console.log('----------------------------------------');

if (fs.existsSync(targetBrainDir)) {
  console.log('[WARN] The .brain directory already exists in this project.\n');
  process.exit(1);
}

try {
  // Copy the template directory
  copyDirectorySync(templateDir, targetBrainDir);
  console.log('[INFO] Created .brain directory structure');

  // Create .gitignore to ignore the memory/ directory
  const gitignorePath = path.join(targetBrainDir, '.gitignore');
  if (!fs.existsSync(gitignorePath)) {
    fs.writeFileSync(gitignorePath, 'memory/\ntask.md\n', 'utf-8');
    console.log('[INFO] Created .brain/.gitignore');
  }

  // Create the AI hook file (e.g., .cursorrules)
  const hookPath = path.join(targetDir, '.cursorrules');
  const hookContent = `I am an AI assistant for this project. My primary instruction manual is located in .brain/README.md. I must read that file before answering any questions or writing any code.`;

  if (!fs.existsSync(hookPath)) {
    fs.writeFileSync(hookPath, hookContent, 'utf-8');
    console.log('[INFO] Created .cursorrules hook');
  } else {
    console.log('[WARN] .cursorrules already exists (skipped)');
  }

  // Also create a generic .ai-instructions.md for other agents
  const genericHookPath = path.join(targetDir, '.ai-instructions.md');
  if (!fs.existsSync(genericHookPath)) {
    fs.writeFileSync(genericHookPath, hookContent, 'utf-8');
    console.log('[INFO] Created .ai-instructions.md hook');
  }

  console.log('----------------------------------------');
  console.log('[DONE] Initialization complete\n');
} catch (error) {
  console.error('\n[ERR]  Failed to initialize dot-brain:', error.message, '\n');
  process.exit(1);
}
