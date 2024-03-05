const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const A = input[1].split(" ").map(Number);
const B = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let result = [];

for (i = 0; i < A.length; i++) {
  for (j = 0; j < B.length; j++) {
    if (A[i] === B[j] && !result.includes(j)) {
      result.push(j);
      break;
    }
  }
}

console.log(result.join(" "));
