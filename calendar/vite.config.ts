import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/release-calendar/',
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
