import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/React-React_portfolio/",
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase"
    }
  }
})
