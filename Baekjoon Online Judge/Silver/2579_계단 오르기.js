const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);

let stairs = [0];
let dp = [0, Number(input[1]), Number(input[1]) + Number(input[2])];

for (i = 1; i <= n; i++) {
  stairs.push(Number(input[i]));
}

for (i = 3; i <= n; i++) {
  dp[i] = Math.max(stairs[i - 1] + dp[i - 3], dp[i - 2]) + stairs[i];
}

console.log(dp[n]);
