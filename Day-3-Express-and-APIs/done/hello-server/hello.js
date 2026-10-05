// hello.js
// Our very first server, written with Node.js only (no extra packages).
//
// Run it:   node hello.js
// Open it:  http://localhost:3000
// Stop it:  press Ctrl + C in the terminal

const http = require("node:http");

const server = http.createServer(function (request, response) {
  // This function runs every time a browser asks for a page.
  console.log("Request received for:", request.url);

  response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  response.end("Hello from my first Node.js server!");
});

server.listen(3000, function () {
  console.log("Server is running. Open http://localhost:3000 in your browser.");
});
