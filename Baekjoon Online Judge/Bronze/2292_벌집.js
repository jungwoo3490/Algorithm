const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input[0]);
let limitNum = 1;
let result = 1;

while (N <= limitNum - result * 6 || N > limitNum) {
  limitNum += result * 6;
  result += 1;
}

console.log(result);
