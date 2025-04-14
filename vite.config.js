import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Expense-Tracker-App/',
  server: {
    port: 3000,
    open: true,
    watch: {
      usePolling: true,
    },
  }
  
})
