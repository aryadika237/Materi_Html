var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(300, { 'Content-Type': 'text/html' });
    res.write('Hello <b>World</b>!');
    res.end();
}).listen(4000);

console.log("server running on http://localhost:4000");