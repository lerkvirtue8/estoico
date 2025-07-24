import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // still used for local dev
  },
  preview: {
    port: parseInt(process.env.PORT) || 4173, // used by `vite preview` on Render
    host: true, // allows external access
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
