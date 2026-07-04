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

  // Generate Comprehensive Antigravity Skill
  const skillDir = path.join(targetBrainDir, 'antigravity-skill');
  if (!fs.existsSync(skillDir)) {
    fs.mkdirSync(skillDir, { recursive: true });
  }
  const skillPath = path.join(skillDir, 'SKILL.md');
  if (!fs.existsSync(skillPath)) {
    const skillContent = `---
name: dot-brain
description: Instructs the AI on how to read, utilize, and maintain the .brain context layer for architectural consistency and memory in this project.
---

# Dot-Brain AI Context System

You are equipped with the \`dot-brain\` skill. This project uses a specialized directory called \`.brain/\` to manage project context, architectural blueprint, task tracking, and persistent memory. 

## MANDATORY WORKFLOW
Before beginning any coding or analysis task in this repository, you MUST:
1. Read \`.brain/README.md\` to understand how the system is structured.
2. Read \`.brain/vision.md\` and \`.brain/blueprint.md\` for project requirements and technical constraints.
3. Review \`.brain/task.md\` to understand current progress.
4. Read \`.brain/memory/global.md\` and \`.brain/memory/project.md\` for established coding patterns and learned rules.
5. If there is ongoing work, read \`.brain/memory/temp.md\` to restore your session context.

## UPDATING MEMORY
As an agent, you are responsible for maintaining the \`.brain\` system:
- When you discover a new pattern, or a user specifies a strict preference, append it to \`.brain/memory/project.md\`.
- When tackling long tasks that require multiple steps, use \`.brain/memory/temp.md\` to checkpoint your intentions, strategy, and next steps so you don't lose context.
- Keep \`.brain/task.md\` updated as you complete checklist items.

## CORE DIRECTIVE
NEVER ignore the rules established in the \`.brain/\` directory. They are the absolute source of truth for this repository.
`;
    fs.writeFileSync(skillPath, skillContent, 'utf-8');
    console.log('[INFO] Created Antigravity Skill (.brain/antigravity-skill/SKILL.md)');
  }

  // Create AI hook files for all major AI coding agents
  const hookContent = `I am an AI assistant for this project. My primary instruction manual is located in .brain/README.md. I must read that file before answering any questions or writing any code.`;

  const aiHooks = [
    { file: '.cursorrules', name: 'Cursor' },
    { file: '.windsurfrules', name: 'Windsurf' },
    { file: '.clinerules', name: 'Cline / Roo Code' },
    { file: 'CLAUDE.md', name: 'Claude Code' },
    { file: '.github/copilot-instructions.md', name: 'GitHub Copilot' },
    { file: '.ai-instructions.md', name: 'Generic AI / Others' }
  ];

  aiHooks.forEach(hook => {
    const hookPath = path.join(targetDir, hook.file);
    const dir = path.dirname(hookPath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    if (!fs.existsSync(hookPath)) {
      fs.writeFileSync(hookPath, hookContent, 'utf-8');
      console.log(`[INFO] Created ${hook.file} hook (${hook.name})`);
    } else {
      console.log(`[WARN] ${hook.file} already exists (skipped)`);
    }
  });

  console.log('----------------------------------------');
  console.log('[DONE] Initialization complete\n');
} catch (error) {
  console.error('\n[ERR]  Failed to initialize dot-brain:', error.message, '\n');
  process.exit(1);
}
