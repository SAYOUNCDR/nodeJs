// Importing the http module to create a web server
const http = require("http");
// Importing the fs (file system) module to handle file operations like reading and writing files
const fs = require("fs");

// Creating an HTTP server
const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end(); //Just removing extra log : NOTE : Future me dont panic what this line does

  const log = `New request recieved from ${
    req.url
  } : ${new Date().toLocaleString()}\n`;

  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("You are at home page");
        break;
      case "/about":
        res.end("I am sayoun parui");
        break;
      default:
        res.end("404 Not found");
        break;
    }
  });

  console.log("Response Sucessfully Sent");
});

myServer.listen(8000, () => console.log("Server Started"));
