import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Need base for images
  base: "/",
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase"
    }
  }
})
