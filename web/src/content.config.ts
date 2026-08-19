import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const patterns = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/patterns' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    size: z.string(),
    type: z.string(),
  }),
});

export const collections = { patterns };
