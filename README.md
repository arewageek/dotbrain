# The .brain System

The `.brain` directory is a standardized context layer designed to "train" AI agents on your project's specific vision, architecture, and coding standards. It acts as an external memory and instruction set that ensures AI assistants remain aligned with your project's goals and technical philosophy.

## Why use this?
- **Consistency**: Prevents AI agents from deviating from your preferred architectural patterns.
- **Efficiency**: Reduces the need to re-explain project context in every session.
- **Continuity**: Uses "Checkpointing" (`temp.md`) to preserve intent across long-running tasks or model transitions.
- **Portability**: The `memory/global.md` file can be shared across all your projects to maintain a unified coding standard.

## Directory Structure

### Core Context
- **`instructions.md`**: The master system manual. It tells the AI *how* to use the other files in the `.brain` directory.
- **`vision.md`**: Defines the "What" and "Why" (Product purpose, business goals, target audience).
- **`blueprint.md`**: Defines the "How" (Technical stack, design system, application flows).
- **`task.md`**: Tracks the current focus and breakdown of actionable steps.

### Memory Tiers
- **`memory/global.md`**: Universal coding standards applicable across all your projects.
- **`memory/project.md`**: Local rules and unique architectural decisions specific to *this* project.
- **`memory/temp.md`**: Short-term memory for session-specific reminders and architectural checkpoints.

## Getting Started
1. Copy the `.brain` folder into your project root.
2. Fill in the templates in `vision.md` and `blueprint.md`.
3. Point your AI agent to `instructions.md` at the start of every session.
4. As you develop, the AI will automatically "capture" new preferences and rules into `project.md` and `global.md`.
5. You can choose to move the `.brain/global.md` file to a global directory e.g. `~/.brain/global` if you want to use it across multiple projects.