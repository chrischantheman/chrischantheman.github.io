# CLAUDE.md — chrischantheman.github.io

This file defines the permissions and guidelines for Claude when working with this repository.

---

## Repository

- **Repo:** `chrischantheman/chrischantheman.github.io`
- **Type:** Personal portfolio website (React 18 / Vite / TypeScript / shadcn/ui / Tailwind CSS)
- **Deployed via:** GitHub Pages

---

## Allowed GitHub Actions

Claude is permitted to perform the following GitHub operations on this repo using the `gh` CLI:

### ✅ Read (always allowed)
- View repo metadata, description, topics, and visibility
- Read file contents and directory structure
- View open/closed issues and pull requests
- View commit history and diffs
- Check CI/Actions run status and logs
- View branches and tags

### ✅ Write (allowed for website updates)
- Stage and commit changes to source files in `src/`, `public/`, and config files
- Push commits to the `main` branch (or active feature branch)
- Create new branches for feature work or fixes
- Open pull requests with clear descriptions of what changed and why
- Add or update issue comments related to active work

---

## Prohibited GitHub Actions

Claude must NEVER perform the following without explicit user confirmation in chat:

### ❌ Never do automatically
- Merge or close pull requests
- Delete branches or tags
- Modify repo settings (visibility, collaborators, webhooks, etc.)
- Enable or disable GitHub Actions workflows
- Create or modify GitHub Secrets or environment variables
- Force push to any branch
- Archive or transfer the repository
- Publish GitHub Releases or create tags

---

## Commit Guidelines

When committing on Chris's behalf:
- Use clear, concise commit messages describing *what changed and why*
- Always confirm the list of changed files with Chris before committing
- Never use `--no-verify` to skip hooks
- Prefer small, focused commits over large sweeping ones
- Co-author commits: `Co-Authored-By: Claude <noreply@anthropic.com>`

---

## Project Notes

- `src/components/ui/` — shadcn/ui components, treat as **read-only**
- `src/pages/` — Route-level components (Index, NotFound)
- `src/components/` — Custom app components (safe to edit)
- `tailwind.config.ts` — Custom theme (Rockwell font, color tokens, dark mode)
- `components.json` — Lovable/shadcn config, do not modify manually

### Commands
```bash
npm run dev       # Dev server at http://localhost:8080
npm run build     # Production build
npm run lint      # ESLint check
npm run preview   # Preview production build
```
