const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n, result;

for (let i = 0; i < input.length - 1; i++) {
  n = Number(input[i]);

  if (n === 1) {
    console.log(0);
    continue;
  }

  result = n;

  for (let j = 2; j <= Math.sqrt(n); j++) {
    if (n % j === 0) {
      result = result - result / j;

      while (n % j === 0) {
        n /= j;
      }
    }
  }

  if (n > 1) {
    result = result - result / n;
  }

  console.log(result);
}
