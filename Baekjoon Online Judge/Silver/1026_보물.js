const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);
let result = 0;

A.sort((a, b) => a - b);
B.sort((a, b) => b - a);

for (i = 0; i < A.length; i++) {
  result += A[i] * B[i];
}

console.log(result);
