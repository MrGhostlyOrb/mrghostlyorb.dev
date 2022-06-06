const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const http2 = require('http2')

// create a new server instance
const server = http2.createServer({}, app).listen(port, () => {
  console.log(`server started port: ${port}`);
});

server.on('error', (err) => {
  console.error(err);
});


