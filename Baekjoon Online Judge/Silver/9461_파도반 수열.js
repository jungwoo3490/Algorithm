const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);

let dp = [0, 1, 1];

for (i = 3; i <= 100; i++) {
  dp[i] = dp[i - 2] + dp[i - 3];
}

for (i = 1; i <= T; i++) {
  console.log(dp[Number(input[i])]);
}
