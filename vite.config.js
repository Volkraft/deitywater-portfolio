import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    react({
      // Обрабатываем JSX и в .js файлах, и в .jsx/.ts/.tsx
      include: /\.[jt]sx?$/,
    }),
  ],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
})
