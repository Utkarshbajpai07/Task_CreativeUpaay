import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Classic Vite config for Tailwind v3
export default defineConfig({
  plugins: [react()],
})
