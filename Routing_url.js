var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    switch (request.url) {
        case '/':
            response.write("Ini halaman utama");
            break;
        case '/Home':
            response.write("Ini halaman Home");
            break;
        case '/Profile':
            response.write("Ini halaman Profil");
            break;
        default:
            response.write("404");
    }
    response.end();
}).listen(8080);

console.log()