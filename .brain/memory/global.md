# AI Developer Memory & Context

This document captures overarching architectural rules, preferences, and paradigms to be strictly followed. Its grouped structure allows for easy lookup across current and future projects.

## Memory Organization Rules
- **Universal vs Local**: 
  - This file (`.brain/memory.md`) is for **universal** overarching rules only, designed to be safely copied to other projects.
  - Project-specific rules MUST go into `.brain/memory.local.md`.
  - Temporary logic or reminders MUST go into `.brain/memory.temp.md`.
- **Strict Quality Control**: Only keep *very important* stuff that is actively worth remembering in the memory. Do NOT clutter these files with generic boilerplate or irrelevant data.
- **Directory Constraint**: All system prompts, memories, and tracking files (like priorities or visions) MUST be kept strictly in the `.brain` directory to keep the project root clean.
- **Auto-Capture Rule**: Whenever the user labels an instruction with "always" or emphasizes it, it must be automatically captured and documented into the corresponding memory tier.

## Architecture & Data Fetching

### Component Breakdown & Client Boundaries
- **Rule**: ALWAYS break projects down into reusable discrete components where applicable.
- **"use client" Depth**: Push `"use client"` directives as far down the component tree as absolutely possible. 
- **Implementation**: Instead of assigning `"use client"` to a full page or major parent wrapper, abstract only the interactive sub-elements into their own discrete components and tag those. This preserves the parent as a Server Component, maximizing default server rendering performance without impacting the entire hierarchy. Use client-side data ONLY where strictly required.

### Colocation & Route-Based Architecture
- **Rule**: Henceforth, all components, server actions, and services limited to a specific page or route MUST be co-located directly inside that route's directory.
- **Syntax**: Use underscore prefixes to designate these localized directories (e.g., `_actions/`, `_components/`, `_services/`) directly adjoining their `page.tsx`.
- **No Premature Abstraction**: Do NOT abstract logic globally to the root `src/components` or `src/actions` prematurely. Only elevate components/services to global root folders once they are proven to be needed by at least *two different pages*.
- **Exception**: This rule is bypassed if a specific overarching framework sets an existing global standard, or if explicitly requested otherwise by the user.

### Next.js API Routes vs Server Actions
- **Rule**: DO NOT use traditional REST API routes (`src/app/api/...`) for first-party, in-app implementations (e.g., submitting forms, modifying database entries from within the same Next.js app).
- **Reasoning**: Next.js API Routes are strictly meant for exposing backend access to *third-party external applications*.
- **Implementation Paradigm**: Always use **Next.js Server Actions** (`"use server"`) for internal communication between client components. Server Actions reduce network boilerplate, remove the need for standard `fetch` wrappers, natively increase type safety, and keep the application strictly unified.
