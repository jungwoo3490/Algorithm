const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);

let dp = [0, 1];

for (i = 2; i <= n; i++) {
  dp[i] = 4;

  for (j = 0; j <= Math.sqrt(i); j++) {
    dp[i] = Math.min(dp[i], dp[i - j ** 2] + 1);
  }
}

console.log(dp[n]);
