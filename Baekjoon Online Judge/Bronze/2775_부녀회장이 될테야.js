const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);

let k, n, dp;
let result = [];

for (let i = 1; i <= 2 * T; i += 2) {
  [k, n] = [Number(input[i]), Number(input[i + 1])];

  dp = new Array(15);

  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(15).fill(0);
  }

  for (let i = 0; i < 15; i++) {
    dp[0][i] = i + 1;
  }

  for (let i = 1; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      for (let k = 0; k <= j; k++) {
        dp[i][j] += dp[i - 1][k];
      }
    }
  }

  result.push(dp[k][n - 1]);
}

console.log(result.join("\n"));
