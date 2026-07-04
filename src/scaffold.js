const fs = require('fs');
const path = require('path');
const { copyDirectorySync, logger } = require('./utils');
const { AI_HOOK_CONTENT, AI_HOOKS, ANTIGRAVITY_SKILL_CONTENT } = require('./constants');

function copyTemplateFiles(templateDir, targetBrainDir) {
  copyDirectorySync(templateDir, targetBrainDir);
  logger.info('Created .brain directory structure');
}

function createGitignore(targetBrainDir) {
  const gitignorePath = path.join(targetBrainDir, '.gitignore');
  if (!fs.existsSync(gitignorePath)) {
    fs.writeFileSync(gitignorePath, 'memory/\ntask.md\n', 'utf-8');
    logger.info('Created .brain/.gitignore');
  }
}

function createAntigravitySkill(targetBrainDir) {
  const skillDir = path.join(targetBrainDir, 'antigravity-skill');
  if (!fs.existsSync(skillDir)) {
    fs.mkdirSync(skillDir, { recursive: true });
  }
  
  const skillPath = path.join(skillDir, 'SKILL.md');
  if (!fs.existsSync(skillPath)) {
    fs.writeFileSync(skillPath, ANTIGRAVITY_SKILL_CONTENT, 'utf-8');
    logger.info('Created Antigravity Skill (.brain/antigravity-skill/SKILL.md)');
  }
}

function createAIHooks(targetDir) {
  AI_HOOKS.forEach(hook => {
    const hookPath = path.join(targetDir, hook.file);
    const dir = path.dirname(hookPath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    if (!fs.existsSync(hookPath)) {
      fs.writeFileSync(hookPath, AI_HOOK_CONTENT, 'utf-8');
      logger.info(`Created ${hook.file} hook (${hook.name})`);
    } else {
      logger.warn(`${hook.file} already exists (skipped)`);
    }
  });
}

module.exports = {
  copyTemplateFiles,
  createGitignore,
  createAntigravitySkill,
  createAIHooks
};
