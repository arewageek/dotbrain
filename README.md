# dotbrain System

The `.brain` directory is a standardized context layer designed to "train" AI agents on your project's specific vision, architecture, and coding standards. It acts as an external memory and instruction set that ensures AI assistants remain aligned with your project's goals and technical philosophy.

## Why use this?
- **Consistency**: Prevents AI agents from deviating from your preferred architectural patterns.
- **Efficiency**: Reduces the need to re-explain project context in every session.
- **Continuity**: Uses "Checkpointing" (`temp.md`) to preserve intent across long-running tasks or model transitions.
- **Portability**: The `memory/global.md` file can be shared across all your projects to maintain a unified coding standard.

## Directory Structure

### Core Context
- **`README.md`**: The master system manual. It tells the AI *how* to use the other files in the `.brain` directory.
- **`vision.md`**: Defines the "What" and "Why" (Product purpose, business goals, target audience).
- **`blueprint.md`**: Defines the "How" (Technical stack, design system, application flows).
- **`task.md`**: Tracks the current focus and breakdown of actionable steps.

### Memory Tiers
- **`memory/global.md`**: Universal coding standards applicable across all your projects.
- **`memory/project.md`**: Local rules and unique architectural decisions specific to *this* project.
- **`memory/temp.md`**: Short-term memory for session-specific reminders and architectural checkpoints.

## Getting Started

To scaffold the `.brain` system into your project, simply run the following command at the root of your project:

```bash
npm create dotbrain
```

This command will:
1. Create the `.brain/` directory structure with all the necessary templates.
2. Automatically generate an Agent Skill at `.agents/skills/dotbrain/SKILL.md` to properly instruct your AI assistant on how to utilize and maintain the `.brain` context layer.

### Next Steps:
1. Open the newly created `.brain/vision.md` and `.brain/blueprint.md` files and fill in your project's specific details.
2. Start interacting with your AI agent! As you develop, the AI will automatically "capture" new preferences and rules into `project.md` and `global.md`.