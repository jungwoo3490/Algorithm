const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);

let result = n;

for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
    result = result - result / i;

    while (n % i === 0) {
      n /= i;
    }
  }
}

if (n > 1) {
  result = result - result / n;
}

console.log(result);
