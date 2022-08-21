const express = require('express');
const path = require('path');
const http2 = require('http2');
const fs = require("fs");
const spdy = require('spdy');

const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

spdy.createServer({
  key: fs.readFileSync('localhost-privkey.pem'),
  cert: fs.readFileSync('localhost-cert.pem')
}, app).listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Listening on port ${port}`);
});
