import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// defineConfig helper provides intellisense without the need for jsdoc annotations
export default defineConfig({
  plugins: [react()],
})
