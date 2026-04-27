# Project Workflow Instructions

**CRITICAL RULE: Always read and reference this file before starting any planning or building tasks.**

## 1. Vision & Blueprint Constraints
- **Reference First**: Always refer back to `vision.md` and `blueprint.md` before beginning any implementation or planning phase.
- **Purpose vs. Implementation**:
  - `vision.md`: Defines the **"What"** and **"Why"** (Product purpose, business goals, target audience).
  - `blueprint.md`: Defines the **"How"** (Technical architecture, design system, infrastructure).
- **Stay Aligned**: Ensure all code and feature implementations align with the business goals in `vision.md` and follow the technical standards in `blueprint.md`.
- **Future-Proofing**: Keep the larger vision and architectural blueprint in mind. Optimize for the features mapped out in later phases.

## 2. Task Management (`task.md`)
- **Task Breakdown**: Whenever the user specifies a new feature to prioritize, break it down step-by-step into actionable tasks and log them in `task.md`. Walk through them one by one.
- **Handling Unfinished Tasks**: When the user requests to add new items to `task.md`, ALWAYS check if there are pending (undone) tasks. 
  - If there are undone tasks: Do NOT delete them. Call the user's attention to them and ask: *"There are still pending tasks in our tasks file. Would you like us to finish those first, or should I clear them and start on the new feature?"*
  - If tasks are complete OR the user gives explicit permission: Clear the old tasks and populate `task.md` with the newly prioritized feature tasks.

## 3. Persistent Memory (`memory/`)
- **Reference Overarching Rules**: Strictly follow the architectural paradigms documented in the memory tiers.
- **Tiers of Memory**:
  - `memory/global.md`: Use for universal rules applicable across projects.
  - `memory/local.md`: Use for project-specific rules and unique architectural decisions.
  - `memory/temp.md`: Use for temporary logic, session-specific reminders, or short-term constraints.
- **Auto-Capture**: Whenever a rule or preference is emphasized (using words like "always", "never", "must"), capture it immediately into the appropriate memory tier.

## 4. Workflow Maintenance
- **Cleanliness**: Ensure all system-level documentation, prompts, and tracking files remain strictly within the `.brain/` directory.
- **Consistency**: Before every major action, verify that the proposed step is consistent with the latest updates in `vision.md`, `task.md`, and the `memory/` directory.
