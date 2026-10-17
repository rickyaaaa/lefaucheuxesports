import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: ({ image }) => z.object({
    title: z.string(), description: z.string(), pubDate: z.coerce.date(),
    category: z.enum(['Teams', 'Sponsors', 'Collaboration', 'Partnership']),
    draft: z.boolean().default(true), cover: image().optional(), coverAlt: z.string().optional(),
  }).refine(data => !data.cover || !!data.coverAlt, {message: 'A news cover requires coverAlt.'}),
});
export const collections = { news };
