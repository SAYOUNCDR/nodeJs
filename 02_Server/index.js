// Importing the http module to create a web server
const http = require("http");
// Importing the fs (file system) module to handle file operations like reading and writing files
const fs = require("fs");
// Importing URL for URL parsing
const url = require("url");

// Creating an HTTP server
const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end(); //Just removing extra log : NOTE : Future me dont panic what this line does

  const log = `New request recieved from ${req.url} : Method is : ${
    req.method
  } : ${new Date().toLocaleString()}\n`;

  //URL Stuff
  const myurl = url.parse(req.url, true);
  console.log(myurl);

  fs.appendFile("log.txt", log, (err, data) => {
    switch (myurl.pathname) {
      case "/":
        if (req.method === "GET") {
          res.end("You are at home page");
        }
        break;
      case "/about":
        const userName = myurl.query.myname; //myname will be passed from url param
        res.end(`Hey ! ${userName} welcome`);
        break;
      case "/register":
        if (req.method === "GET") {
          res.end("This is the registration form");
        } else if (req.method === "POST") {
          //DB Query to put data into the DB
          res.end("Data inserted to DB Sucessfully");
        }
        break;
      default:
        res.end("404 Not found");
        break;
    }
  });

  console.log("Response Sucessfully Sent");
});

myServer.listen(8000, () => console.log("Server Started"));
