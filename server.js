const path = require('path');
const fs = require("fs");
const spdy = require('spdy');
const nstatic = require('node-static');
const http2 = require("http2");

const port = process.env.PORT || 443;

// Serve the static files from the dist directory
const fileServer = new nstatic.Server(path.join(__dirname, 'dist'));

http2.createSecureServer({
  key: fs.readFileSync('/etc/letsencrypt/live/mrghostlyorb.dev/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/mrghostlyorb.dev/fullchain.pem'),
  allowHTTP1: true
}, (req, res) => {
  req.addListener('end', () => {
    fileServer.serve(req, res);
  }).resume();
}).listen(port);

// app.use(express.static(path.join(__dirname, 'dist')));
//
// app.get('*', (_req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

// spdy.createServer({
//   key: fs.readFileSync('/etc/letsencrypt/live/mrghostlyorb.dev/privkey.pem'),
//   cert: fs.readFileSync('/etc/letsencrypt/live/mrghostlyorb.dev/fullchain.pem')
// }, app).listen(port, (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log(`Listening on port ${port}`);
// });

