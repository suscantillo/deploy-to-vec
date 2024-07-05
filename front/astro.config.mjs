import { defineConfig, sharpImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://cegallardo0405.github.io",
  output: 'server',
  adapter: vercel()
});