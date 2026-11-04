import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';

const repository = process.env.GITHUB_REPOSITORY;
const base = repository
  ? repository.toLowerCase().endsWith('.github.io')
    ? '/'
    : `/${repository.split('/')[1]}/`
  : '/';

export default defineConfig({
  base,
  plugins: [vue(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        home: fileURLToPath(new URL('./home.html', import.meta.url))
      }
    }
  }
});
