const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

let count = 0;
let number = 0;

while (count !== N) {
  number += 1;
  if (String(number).includes("666")) {
    count += 1;
  }
}

console.log(number);
