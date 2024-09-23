import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    ssr: 'src/entry-server.js',
    outDir: 'dist/server',
  }
})

