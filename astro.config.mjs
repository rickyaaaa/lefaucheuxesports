import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://lefaucheuxesports.com',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  // Emit every script as a same-origin file (never inline) so the
  // Content-Security-Policy in public/.htaccess can use script-src 'self'.
  vite: { build: { assetsInlineLimit: 0 } },
});
