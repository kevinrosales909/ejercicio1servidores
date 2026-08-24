/// <reference types="node" />

import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';

const PORT = 3001;

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  // Construye la ruta hacia public/index.html
  const filePath = path.join(__dirname, 'public', 'index.html');

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Error interno del servidor: No se pudo cargar index.html');
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});