const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);
let arr = new Array(10).fill(0);

const mul = String(A * B * C);

for (i = 0; i < mul.length; i++) {
  arr[Number(mul[i])] += 1;
}

console.log(arr.join("\n"));
