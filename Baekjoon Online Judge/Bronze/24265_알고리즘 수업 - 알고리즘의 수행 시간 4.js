const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
let count = 0;

for (i = 1; i < n; i++) {
  count += i;
}

console.log(count);
console.log(2);
