import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // GitHub Pages serves the site from /<repo-name>/. Local dev stays at /.
  base: process.env.GITHUB_ACTIONS ? '/example-design-system/' : '/',
  plugins: [react()],
});
