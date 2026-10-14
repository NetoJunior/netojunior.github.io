import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// User site (netojunior.github.io) is served from the domain root, so no `base` needed.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
