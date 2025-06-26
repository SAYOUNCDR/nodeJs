const fs = require("fs");

// 1.0 Create file [Sync: Blocking way]
fs.writeFileSync(
  "./testFile.txt",
  "This content will be put inside testFile.txt from Sync: Blocking"
);

// 1.1 Create file [Async: Non Blocking way]
fs.writeFile(
  "./testFile.txt",
  "This content will be put inside testFile.txt from Async: Non Blocking",
  (err) => {}
);

// 2.0 Reading from File [Sync: Blocking way] :This way returns value so you can use try catch unlike Async way
const resultSync = fs.readFileSync("./readFile.txt", "utf-8");
console.log(resultSync);

// 2.1 Reading from File [Async: Non Blocking way] :This way dont return values like in sync instead give callback to fun which give error and result
fs.readFile("./readFile.txt", "utf-8", (err, resultAsync) => {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log(resultAsync);
  }
});

// 3.0 Appending data into file [Sync: Blocking way]
fs.appendFileSync("./testFile.txt", `\nHey there time is : ${Date.now()}`);

// 4.0 Copy a file
fs.cpSync("./testFile.txt", "./copyFile.txt");

// 5.0 Delete a file
fs.unlinkSync("./copyFile.txt");

// 6.0 Stats of file
console.log(fs.statSync("./testFile.txt"));

// 7.0 Make Directory recursevliy
fs.mkdirSync("A/B/C", { recursive: true });
