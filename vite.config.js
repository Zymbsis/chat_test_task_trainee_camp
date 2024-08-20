import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      components: '/src/components',
      constants: '/src/constants',
      context: '/src/context',
      helpers: '/src/helpers',
      icons: '/src/icons',
      image: '/src/image',
      pages: '/src/pages',
      '@redux': '/src/redux',
      services: '/src/services',
      shared: '/src/components/shared',
      modules: '/src/modules',
      styles: '/src/styles',
      utils: '/src/utils',
      validationSchema: '/src/validationSchema',
    },
  },
});
