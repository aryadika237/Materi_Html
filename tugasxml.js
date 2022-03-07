// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'application/xml' });
//     res.write('Hello <b>World</b>!');
//     res.end();
// }).listen(5000);

// console.log("server running on http://localhost5000");

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/pdf' });
    res.write('Hello <b>World</b>!');
    res.end();
}).listen(4000);

console.log("server running on http://localhost:4000");

// fs.createReadStream

// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.write('Hello <b>World</b>!');
//     res.end();
// }).listen(4000);

// console.log("server running on http://localhost:4000");