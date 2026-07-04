const fs = require('fs');
const path = require('path');
const { logger } = require('./utils');
const { 
  copyTemplateFiles, 
  createGitignore, 
  createAntigravitySkill, 
  createAIHooks 
} = require('./scaffold');

function run() {
  const targetDir = process.cwd();
  const targetBrainDir = path.join(targetDir, '.brain');
  const templateDir = path.join(__dirname, '../template/.brain');

  logger.header('Initializing dotbrain context layer...');

  if (fs.existsSync(targetBrainDir)) {
    logger.warn('The .brain directory already exists in this project.\n');
    process.exit(1);
  }

  try {
    copyTemplateFiles(templateDir, targetBrainDir);
    createGitignore(targetBrainDir);
    createAntigravitySkill(targetBrainDir);
    createAIHooks(targetDir);

    logger.footer();
    logger.success('Initialization complete');
  } catch (error) {
    logger.error('Failed to initialize dotbrain:', error.message);
    process.exit(1);
  }
}

module.exports = { run };
