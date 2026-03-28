import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/mathe-portal/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion'],
          katex: ['katex'],
          d3: ['d3'],
          mathjs: ['mathjs'],
        },
      },
    },
  },
  server: { port: 3007 },
})
