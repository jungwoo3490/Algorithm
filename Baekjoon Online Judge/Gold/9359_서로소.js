const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const notPrime = new Array(100003).fill(0);
const primes = [];
const mp = new Map();
const divisors = [];

for (let i = 2; i <= 100000; i++) {
  if (notPrime[i]) {
    continue;
  }

  for (let j = 2 * i; j <= 100000; j += i) {
    notPrime[j] = 1;
  }
}

for (let i = 2; i <= 100000; i++) {
  if (!notPrime[i]) {
    primes.push(i);
  }
}

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const [A, B, N] = input[i].split(" ").map(Number);

  divisors.length = 0;
  mp.clear();

  let num = N;

  while (num > 1) {
    let divided = false;

    for (let p of primes) {
      if (num % p === 0) {
        num /= p;
        mp.set(p, 1);
        divided = true;
        break;
      }
    }

    if (!divided) {
      break;
    }
  }

  if (num !== 1) {
    mp.set(num, 1);
  }

  for (let divisor of mp.keys()) {
    divisors.push(divisor);
  }

  const size = divisors.length;
  let ans = 0;

  for (let j = 0; j < 1 << size; j++) {
    if (!j) {
      continue;
    }

    let cnt = 0;
    let div = 1;

    for (let k = 0; k < size; k++) {
      if (j & (1 << k)) {
        div *= divisors[k];
        cnt++;
      }
    }

    const low = Math.ceil(A / div) * div;
    const high = Math.floor(B / div) * div;

    if (low > high) {
      continue;
    }

    const gasu = Math.floor((high - low) / div) + 1;
    ans += cnt % 2 ? gasu : -gasu;
  }

  console.log(`Case #${i}: ${B - A + 1 - ans}`);
}
