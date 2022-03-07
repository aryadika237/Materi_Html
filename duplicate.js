var fs = require('fs');

fs.open('filebarudong.text', 'w', function (err, file) {
    if (err) throw err;

    // Content will write to the file
    let content = "Hallo, aku bisa nulis lhoss!";

    // Write content to file
    fs.writeFile(file, content, (err) => {
        if (err) throw err;
        console.log('Meriam Bro!');
    });
    // Read File
    fs.readFile(file, (err, data) => {
        if (err) throw err;
        console.log(data.toString('Sukses, kamu bisa!'));
    })
});