//npm init is a command used to initialize a new Node.js project.
// It helps you create a package.json file, which stores all the information about your project and its dependencies.

//1. Normal way
const mathsModule = require("./02_Module");
console.log(mathsModule.addFn(2,3));
console.log(mathsModule.subFn(2,3));


//2. Desturcture
//a. Destructure normal
const { addFn, subFn } = require("./02_Module");
console.log(addFn(2, 1));
console.log(subFn(2, 9));

//b. Destructure alise
const { addFn: addition, subFn: subtraction} = require("./02_Module");
console.log(addition(2, 1));
console.log(subtraction(2, 9));
