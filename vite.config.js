import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        about: resolve(import.meta.dirname, 'about/index.html'),
        products: resolve(import.meta.dirname, 'products/index.html'),
        contact: resolve(import.meta.dirname, 'contact/index.html'),
      },
    },
  },
})
