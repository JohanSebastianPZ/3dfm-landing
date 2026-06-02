import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'

export default defineConfig({
  site: 'https://printlab3d.com',
  output: 'static',
  adapter: vercel(),
  integrations: [react(), sitemap()],

  vite: {
    server: {
      allowedHosts: ['.trycloudflare.com'],
    }
  }
})