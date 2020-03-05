http = require("http");

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello Fadin! I have been deployed, and I'm version 1 now");
    res.end();
  })
  .listen(8080);
