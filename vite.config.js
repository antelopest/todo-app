import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // /todo-app/
  server: {
    port: 3000,
    host: true
  },
  css: {
    postcss: './postcss.config.js'
  }
});
