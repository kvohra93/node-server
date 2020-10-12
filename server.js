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
http.createServer(function(req, res) {
  res.statusCode = 200
  res.setHeader(200,{"Content-Type": "application/json"});
  res.write(JSON.stringify(data))
  console.log(`Server running at http://${hostname}:${port}/`);
  res.end();
}).listen(port, hostname);
})