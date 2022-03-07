var http = require('http');

var server = http.createServer(function (req, res) {
    console.log(req.url);

    if (req.url == '/') {
        res.write('Selamat Datang Di Halaman Utama');
        res.end();
    }

    else if (req.url == '/Profil') {
        res.write('Ini Halaman Profil');
        res.end();
    }

    else if (req.url == '/about') {
        res.write('Ini Halaman About');
        res.end();
    }

    else {
        res.write('Ini Halaman About');
        res.end();
    }

});

server.listen(8084);
console.log('Server is running on port 8084');

