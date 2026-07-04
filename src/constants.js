const AI_HOOK_CONTENT = `I am an AI assistant for this project. My primary instruction manual is located in .brain/README.md. I must read that file before answering any questions or writing any code.`;

const AI_HOOKS = [
  { file: '.cursorrules', name: 'Cursor' },
  { file: '.windsurfrules', name: 'Windsurf' },
  { file: '.clinerules', name: 'Cline / Roo Code' },
  { file: 'CLAUDE.md', name: 'Claude Code' },
  { file: '.github/copilot-instructions.md', name: 'GitHub Copilot' },
  { file: '.ai-instructions.md', name: 'Generic AI / Others' }
];

const ANTIGRAVITY_SKILL_CONTENT = `---
name: dotbrain
description: Instructs the AI on how to read, utilize, and maintain the .brain context layer for architectural consistency and memory in this project.
---

# Dot-Brain AI Context System

You are equipped with the \`dotbrain\` skill. This project uses a specialized directory called \`.brain/\` to manage project context, architectural blueprint, task tracking, and persistent memory. 

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

module.exports = {
  AI_HOOK_CONTENT,
  AI_HOOKS,
  ANTIGRAVITY_SKILL_CONTENT
};
