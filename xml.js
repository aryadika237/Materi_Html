const { fstat } = require("fs");

// Json
res.writeHead(200, { 'Content-Type': 'application/json' });

// PDF
res.writeHead(200, { 'Content-Type': 'application/pdf' });

// XML
res.writeHead(200, { 'Content-Type': 'application/xml' });

fs.createReadStream