const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [M, N] = input[0].split(" ").map(Number);

let prime = { 2: true };

for (i = 2; i <= N; i++) {
  prime[i] = true;
}

for (i = 2; i <= Math.sqrt(N); i++) {
  if (prime[i]) {
    for (j = i ** 2; j <= N; j += i) {
      prime[j] = false;
    }
  }
}

const primeArr = Object.entries(prime)
  .filter(([num, isPrime]) => Number(num) >= M && isPrime)
  .map(([num]) => Number(num));

console.log(primeArr.join("\n"));
