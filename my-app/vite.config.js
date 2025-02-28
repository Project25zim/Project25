import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Ensure source maps for better debugging
    sourcemap: true,
    // Increase build verbosity
    minify: 'terser',
    terserOptions: {
      compress: {
        // Don't drop console logs during build
        drop_console: false,
      },
    },
  },
});
