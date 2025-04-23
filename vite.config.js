import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/tax-strategies-site/',
  plugins: [react()],
})
