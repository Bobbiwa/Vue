import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';

export default defineConfig({
  plugins: [createVuePlugin()],
  server: {
    open: true,
    port: 1567,
  },
  resolve: {
    //别名
    alias: [
      {
        find: '@',
        replacement: '/src',
      },
    ],
  },
});
