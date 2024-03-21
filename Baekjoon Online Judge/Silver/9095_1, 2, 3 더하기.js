const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);
let arr = [];

for (i = 1; i <= T; i++) {
  arr.push(Number(input[i]));
}

let dp = [0, 1, 2, 4];

for (i = 4; i <= Math.max(...arr); i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for (i = 0; i < arr.length; i++) {
  console.log(dp[arr[i]]);
}
