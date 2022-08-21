const path = require('path');
const fs = require("fs");
const nstatic = require('node-static');
const http2 = require("http2");
const http = require("http");

const port = process.env.PORT || 443;

// Serve the static files from the dist directory
const fileServer = new nstatic.Server(path.join(__dirname, 'dist'));

try{
  http2.createSecureServer({
    key: fs.readFileSync('/etc/letsencrypt/live/mrghostlyorb.dev/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/mrghostlyorb.dev/fullchain.pem'),
    allowHTTP1: true
  }, (req, res) => {
    req.addListener('end', () => {
      fileServer.serve(req, res);
    }).resume();
  }).listen(port);
}
catch(err){
  http.createServer((req, res) => {
    req.addListener('end', () => {
      fileServer.serve(req, res);
    }).resume();
  }).listen(3000);
}
