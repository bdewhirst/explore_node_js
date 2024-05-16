var http = require('http');

// minimalistic "hello world" which can be seen at http://localhost:9021
// TODO:  add local configuration file, read it in, use that for the port number. Until then, don't leave this running.

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(9021);