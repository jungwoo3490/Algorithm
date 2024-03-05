const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const ABN = input[0].split(" ").map(Number);
const A = ABN[0];
const B = ABN[1];
const N = ABN[2];

let count = 0;
let result = [];
let quotient;
let remainder = (A % B) * 10;

while (count !== N) {
  count += 1;
  quotient = Math.trunc(remainder / B);
  remainder = (remainder % B) * 10;
  result.push(quotient);
}

console.log(result[N - 1]);
