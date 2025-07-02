const fs = require("fs");
const path = require("path");

function logReqRes(filename) {
  return (req, res, next) => {
    const logFile = path.join(__dirname, filename);

    fs.appendFile(
      logFile,
      `\n${Date.now()}: ${req.ip} ${req.method}: ${req.path}`,
      (err) => {
        if (err) {
          console.error("Error writing to log file:", err);
        }
      }
    );

    next();
  };
}

module.exports = { logReqRes };
