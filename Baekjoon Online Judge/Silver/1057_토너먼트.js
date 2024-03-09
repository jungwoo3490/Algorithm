const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const inputArr = input[0].split(" ").map(Number);

const N = inputArr[0];
let jimin = inputArr[1];
let hansu = inputArr[2];

let count = 1;

while (Math.ceil(jimin / 2) !== Math.ceil(hansu / 2)) {
  count += 1;
  jimin = Math.ceil(jimin / 2);
  hansu = Math.ceil(hansu / 2);
}

console.log(count);
