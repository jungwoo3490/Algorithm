const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

console.log(Number(input[0]) ** 2);
console.log(2);
