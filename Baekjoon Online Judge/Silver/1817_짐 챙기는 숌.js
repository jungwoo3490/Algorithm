const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let bookArr = [];
if (N !== 0) {
  bookArr = input[1].split(" ").map(Number);
}

let current = 0;
let boxCount = 0;

for (let i = N - 1; i >= 0; i--) {
  current -= bookArr[i];
  if (current < 0) {
    boxCount += 1;
    current = M - bookArr[i];
  }
}

console.log(boxCount);
