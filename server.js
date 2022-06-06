const path = require('path');
const fs = require('fs');
const port = process.env.PORT || 3000;
const express = require('express')
const http2Express = require('http2-express-bridge')
const http2 = require('http2')
const { readFileSync } = require('fs')
// only change required
const app = http2Express(express)

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const options = {
    // Heroku requires the certificate to be in a file
    // Get the certificate from the Heroku dashboard

    key: readFileSync('./cert/server.key'),
    cert: readFileSync('./cert/server.crt'),
    allowHTTP1: true
}
const server = http2.createSecureServer(options, app)
server.listen(port).on('listening', () => {
    console.log(`Listening on port ${port}`)
});

