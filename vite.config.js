import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Need base for images
  base: "/React-React_portfolio/",
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this matches your deploy script
  },
  css: {
    modules: {
      localsConvention: "camelCase"
    }
  }
})
