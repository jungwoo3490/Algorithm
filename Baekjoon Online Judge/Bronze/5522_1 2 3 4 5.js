const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = 0;

for (let i = 0; i < 5; i++) {
  result += Number(input[i]);
}

console.log(result);
