import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Configure how static files are served
    fs: {
      // Allow serving files from one level up
      allow: ['..']
    }
  },
  build: {
    // Ensure static files are copied during build
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
})
