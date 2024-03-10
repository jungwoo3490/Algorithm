const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const box = input[1].split(" ").map(Number);
const dp = new Array(n).fill(1);

for (i = 0; i < n; i++) {
  for (j = 0; j < i; j++) {
    if (box[j] < box[i]) {
      dp[i] = Math.max(dp[j] + 1, dp[i]);
    }
  }
}

console.log(Math.max(...dp));
