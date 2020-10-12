const http = require('http');  // require built-in Node.js http package
const fs = require('fs');
// Use hosting values if available, otherwise default 
const hostname = process.env.hostname || '0.0.0.0'; // allow remote access
const port = process.env.PORT || 3002;

fs.readFile('data.json', function (err, data) {
    if (err) {
        console.log('error!');
        throw err;
    } 

// define our server
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({data}));
})

// start listening
// use the server console to tell user where to find the server
// use backticks for template literals with embedded expressions
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})