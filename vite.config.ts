import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-root-assets',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && (req.url.startsWith('/assets/faculty/') || req.url.startsWith('/assets/documents/') || req.url.startsWith('/assets/letter/'))) {
            let relPath = '';
            if (req.url.startsWith('/assets/faculty/')) {
              relPath = path.join('faculty', req.url.replace('/assets/faculty/', ''));
            } else if (req.url.startsWith('/assets/documents/')) {
              relPath = path.join('documents', req.url.replace('/assets/documents/', ''));
            } else if (req.url.startsWith('/assets/letter/')) {
              relPath = path.join('letter', req.url.replace('/assets/letter/', ''));
            }
            const fileName = decodeURIComponent(relPath.split('?')[0]);
            const rootFilePath = path.resolve(__dirname, 'assets', fileName);
            if (fs.existsSync(rootFilePath) && !fs.statSync(rootFilePath).isDirectory()) {
              res.writeHead(200);
              fs.createReadStream(rootFilePath).pipe(res);
              return;
            }
          }
          next();
        });
      },
    },
  ],
  server: {
    port: 5173,
    host: true,
  },
});

