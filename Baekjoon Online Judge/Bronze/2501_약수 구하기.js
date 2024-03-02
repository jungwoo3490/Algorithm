const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const NK = input[0].split(" ");
const N = Number(NK[0]);
const K = Number(NK[1]);

let divisor = [];

for (i = 1; i <= N; i++) {
  if (N % i === 0) {
    divisor.push(i);
  }
}

divisor[K - 1] ? console.log(divisor[K - 1]) : console.log(0);
