import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react({ include: /\.[jt]sx?$/ })],
  base: '/deitywater-portfolio/',   // имя репозитория
  build: {
    outDir: 'docs',
  },
})
