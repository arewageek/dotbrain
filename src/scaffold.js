const fs = require('fs');
const path = require('path');
const { copyDirectorySync, logger } = require('./utils');
const { AGENT_SKILL_CONTENT } = require('./constants');

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

function createAgentSkill(targetDir) {
  const skillDir = path.join(targetDir, '.agent', 'skills', 'dotbrain');
  if (!fs.existsSync(skillDir)) {
    fs.mkdirSync(skillDir, { recursive: true });
  }
  
  const skillPath = path.join(skillDir, 'SKILL.md');
  if (!fs.existsSync(skillPath)) {
    fs.writeFileSync(skillPath, AGENT_SKILL_CONTENT, 'utf-8');
    logger.info('Created Agent Skill (.agent/skills/dotbrain/SKILL.md)');
  } else {
    logger.warn('.agent/skills/dotbrain/SKILL.md already exists (skipped)');
  }
}

module.exports = {
  copyTemplateFiles,
  createGitignore,
  createAgentSkill
};
