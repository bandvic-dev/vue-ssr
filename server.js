import express from 'express';
import { render } from './dist/server/entry-server.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use('/dist', express.static(path.resolve(__dirname, 'dist/client')));

app.get('*', async (req, res) => {
  const url = req.originalUrl;

  try {
    const template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      const { html } = await render(url);

    const responseHtml = template.replace(`<div id="app"></div>`, html);
    res.status(200).set({ 'Content-Type': 'text/html' }).end(responseHtml);
  } catch (e) {
    console.error(e);
    res.status(500).end('Internal Server Error');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});