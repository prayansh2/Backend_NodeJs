//using node js built in module "http"
const http = require('http');

//creating server iwth http
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js Server!');
});

//starting server on port 3000
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});