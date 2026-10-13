import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    industry: z.string(),
    problem: z.string(), // one-line problem statement for lists
    role: z.string(),
    client: z.string(),
    stack: z.array(z.string()),
    status: z.enum(['In production', 'In development']),
    emphasis: z.enum(['architecture', 'trust', 'agency', 'operations']),
    diagram: z.string(), // filename in src/diagrams
    diagramAlt: z.string(),
    featured: z.boolean().default(false),
    description: z.string(), // meta description
  }),
});

export const collections = { work };
