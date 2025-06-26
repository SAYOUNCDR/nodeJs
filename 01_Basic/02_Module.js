//Modules in Node.js are reusable pieces of code that can be imported and exported across files.

// 1. First way of export
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return Math.abs(a - b);
}

//❌ This is wrong way sub will override add
// module.exports = add;
// module.exports = sub;

module.exports = {
  addFn: add, //renaming add as addFn
  subFn: sub,
};

// 2. Second way of export
exports.addFn = (a, b) => a + b;
exports.subFn = (a, b) => a + b;
