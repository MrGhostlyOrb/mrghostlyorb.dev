const express = require('express');
const path = require('path');
const http2 = require('http2');
const fs = require("fs");

const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

http2.createSecureServer({
  key: fs.readFileSync('/etc/letsencrypt/live/mrghostlyorb.dev/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/mrghostlyorb.dev/fullchain.pem')
}, app).listen(port, () => {
  console.log(`Server running on port ${port}`);

}
);
