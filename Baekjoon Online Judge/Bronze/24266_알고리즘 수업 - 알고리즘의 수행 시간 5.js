const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = BigInt(input[0]);

console.log(`${n * n * n}`);
console.log(3);
