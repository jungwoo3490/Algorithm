const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input[0]);
let divisor = [];
let primeNum = [];
let checkPrimeArr;
let resultArr = [];

for (i = 1; i <= N; i++) {
  if (N % i === 0) {
    divisor.push(i);
  }
}

for (i = 0; i < divisor.length; i++) {
  checkPrimeArr = [];
  for (j = 2; j < divisor[i]; j++) {
    if (divisor[i] % j === 0) {
      checkPrimeArr.push(j);
    }
  }
  if (divisor[i] !== 1 && checkPrimeArr.length === 0) {
    primeNum.push(divisor[i]);
  }
}

for (i = 0; i < primeNum.length; i++) {
  while (N % primeNum[i] === 0) {
    N = N / primeNum[i];
    resultArr.push(primeNum[i]);
  }
}

console.log(resultArr.join("\n"));
