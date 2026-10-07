import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],

  server: {
    hmr: false, 
  },

  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env': '{}',
    'process': '{}'
  },

  build: {
    outDir: '../express/public', 
    sourcemap: true,
    lib: {
      entry: resolve(import.meta.dirname, '/src/index.jsx'),
      name: 'build',
      fileName: 'index',
    },
  },
})
