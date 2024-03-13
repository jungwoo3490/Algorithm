const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = BigInt(input[0]);

let factorial = BigInt(1);
let count = 0;

for (i = BigInt(1); i <= N; i++) {
  factorial *= i;
}

const factorialStr = String(factorial);

for (i = factorialStr.length - 1; i >= 0; i--) {
  if (Number(factorialStr[i]) !== 0) {
    break;
  }

  count += 1;
}

console.log(count);
