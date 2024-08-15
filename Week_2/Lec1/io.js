// reading synchronusly
// const fs= require('fs')
// const contents = fs.readFileSync("a.txt","utf-8");

// console.log(contents)

// reading asynchronously
const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);

const contents3 = fs.readFileSync("b.txt", "utf-8");
console.log(contents3);

//in asynchronous js, all tasks are started together and whichever is finished first is served first