var fs = require('fs');

fs.open('filebarudong.text', 'w', function (err, file) {
    if (err) throw err;
    console.log('Sukses, kamu bisa!');
});

// Rename
var fs = require('fs');

fs.rename('filebarudong.text', 'filebaru2.txt', function (err, file) {
    if (err) throw err;
    console.log('Sukses, kamu bisa!');
});

// Delete
var fs = require('fs');

fs.delete('filebarudong.text', 'filebaru2.txt', function (err, file) {
    if (err) throw err;
    console.log('Sukses, kamu bisa!');
});