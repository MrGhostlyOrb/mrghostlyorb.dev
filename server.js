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
    allowHTTP1: true
}
const server = http2.createSecureServer(options, app)
server.listen(port).on('listening', () => {
    console.log(`Listening on port ${port}`)
});

