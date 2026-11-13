import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://artex100.github.io/woh/
  base: '/woh/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
