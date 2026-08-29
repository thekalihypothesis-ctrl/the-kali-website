import { defineConfig } from 'astro/config';

// Static output — works great on Cloudflare Pages' free tier.
// If you later need SSR (e.g. an API route), swap to '@astrojs/cloudflare'.
export default defineConfig({
  output: 'static',
  devToolbar: { enabled: false },
  vite: {
    optimizeDeps: {
      noDiscovery: true,
      include: [],
    },
  },
});
