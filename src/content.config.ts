import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts. One markdown file per post in src/content/posts/.
const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Publications & presentations. One markdown file per item in
// src/content/publications/. Authored (mostly) under her maiden name "Wood",
// so each entry records the byline exactly as indexed.
const publications = defineCollection({
  loader: glob({ base: './src/content/publications', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number(),
    kind: z.enum(['article', 'presentation']).default('article'),
    doi: z.string().optional(),
    url: z.string().url().optional(),
    order: z.number().default(999),
  }),
});

export const collections = { posts, publications };
