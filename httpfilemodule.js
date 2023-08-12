const http = require('http');
const fs = require('fs');


http.createServer((req, res) => {
    const readStream = fs.createReadStream('./static/html.html');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    readStream.pipe(res);
 
}).listen(3000);