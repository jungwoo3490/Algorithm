const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const M = Number(input[0]);
const N = Number(input[1]);

let primeNum = [];
let divisor;
let sum = 0;

for (i = M; i <= N; i++) {
  divisor = [];
  for (j = 2; j < i; j++) {
    if (i % j === 0) {
      divisor.push(j);
    }
  }
  if (i !== 1 && divisor.length === 0) {
    primeNum.push(i);
  }
}

primeNum.forEach((number) => {
  sum += number;
});

if (primeNum.length === 0) {
  console.log(-1);
} else {
  console.log(sum + "\n" + primeNum[0]);
}
