const http = require('http');  
const fs = require('fs');

const hostname = process.env.hostname || '0.0.0.0'; 
const port = process.env.PORT || 3000;

fs.readFile('data.json', function (err, data) {
    if (err) {
        console.log('error!');
        throw err;
    } 
    const server = http.createServer ((req, res) => {
        res.setHeader(200,{"Content-Type": "application/json"})
        res.write(JSON.stringify(data))
        res.end();
})


    server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
})


