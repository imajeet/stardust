var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(13383);

/*
 * host: localhost
 * db: mailo
 * user: mailo
 * pass: Mil0Je91
 */