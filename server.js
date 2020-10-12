const http = require('http')  
const hostname = process.env.hostname || '0.0.0.0'
const port = process.env.PORT || 3080
const server = http.createServer((request, response) => {
  response.statusCode = 200
  response.setHeader('Content-Type', 'text/plain')
  response.end('Hello, this is an app created with node js and deployed on Heroku! o.o \n')
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});
