const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = BigInt(input[0]);

let result = (n * (n - BigInt(1)) * (n - BigInt(2))) / BigInt(6);

console.log(String(result));
console.log(3);
