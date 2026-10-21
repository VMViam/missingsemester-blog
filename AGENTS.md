# AGENTS.md

Guidance for AI agents working in this repository.

## Project

**blog.missingsemester.in** — the writing half of the one-room schoolhouse.
The room itself is a separate repository, `VMViam/missingsemester`, and the
library lives there.

Design decisions and rationale for both:
`VMViam/missingsemester/docs/2026-10-19-one-room-schoolhouse-brainstorm.md`.

## Stack

- **Astro** (static output, TypeScript strict)
- **No UI framework.** Do not add React/Vue for the blog.
- **Content collections** with Zod schemas (`src/content.config.ts`) — every
  post is validated at build time. Malformed content must fail the build, not
  deploy.

## Commands

```bash
npm install
npm run dev          # dev server
npm run build        # static build to dist/
npm run preview      # serve the build
```

## Structure

```
src/
  components/     blog pieces
  content/posts/  the writing — one markdown file per post
  layouts/        Base.astro
  pages/          index.astro (the list), posts/[...slug].astro (a post)
  styles/         tokens.css (copied from the room), global.css
public/           favicon, static assets
```

## Design rules

1. **Writing is a different material from the rest of the room.** This site is
   cream paper and ink — typed, composed, careful. No slate, no phosphor, no
   chalk here.
2. **Tokens only.** No hard-coded colours or sizes — use `src/styles/tokens.css`.
   When the room's tokens change, copy them across; the two sites must not
   drift.
3. **One object to grab, one surface to read it on** — the same mechanic as
   every subject in the room.
4. **Semantic HTML underneath.** Every post must be readable without
   JavaScript.

## Content rules

- Posts live in `src/content/posts/`. The filename is the URL.
- The library lives in the other repository. Do not duplicate it here.

## Do not commit

- `dist/`, `node_modules/`, `.astro/`
