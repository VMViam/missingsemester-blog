import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * The writing.
 *
 * Posts live here; the room's library lives in the other repository
 * (VMViam/missingsemester). Every post is validated at build time, so a
 * malformed post fails the build instead of deploying.
 */
const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
