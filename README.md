# missingsemester-blog

**letters.missingsemester.in** — the writing.

One half of the one-room schoolhouse. The room itself
([`VMViam/missingsemester`](https://github.com/VMViam/missingsemester)) lives in
its own repository; this one holds the writing.

## Stack

- **Astro**, static output, TypeScript strict
- **No UI framework** — the same deliberate dependency-light stance as the room
- **Content collections with Zod schemas** — every post is validated at build
  time, so a malformed post fails the build instead of deploying
- **Shared design tokens** — `src/styles/tokens.css` is copied from the room.
  Both sites read from the same four materials: paper and ink for writing,
  oak and brass for reading, glass and phosphor for building, slate and chalk
  for lifting

## Commands

```bash
npm install
npm run dev          # dev server
npm run build        # static build to dist/
npm run preview      # serve the build
```

## Writing a post

Create a file in `src/content/posts/`. The filename becomes the URL.

```markdown
---
title: The title
date: 2026-10-21
description: One line, used in the index and the meta tags.
tags: ["one", "two"]
draft: false
---

The body.
```

`title` and `date` are required. `draft: true` keeps a post off the site while
you work on it. `src/content/posts/_example.md` is the template — copy it.

## Deployment

Push to `main` and the `Deploy the blog to GitHub Pages` workflow builds the
site and publishes it to GitHub Pages.

The custom domain is configured in **Settings → Pages**, not in the repo —
GitHub provisions the TLS certificate from that field and writes the `CNAME`
file into the deployment itself.
