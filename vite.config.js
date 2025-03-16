import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/your-repo-name/", // Укажи название репозитория
  plugins: [react()],
})
