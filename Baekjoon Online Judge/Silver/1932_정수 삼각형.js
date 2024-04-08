const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);

let triangle = [];

for (let i = 1; i <= n; i++) {
  triangle.push(input[i].split(" ").map(Number));
}

dp = [triangle[0]];
let count = 1;

while (count !== n) {
  dp[count] = [];

  for (let i = 0; i <= count; i++) {
    if (i === 0) {
      dp[count][i] = dp[count - 1][i] + triangle[count][i];
    } else if (i === count) {
      dp[count][i] = dp[count - 1][i - 1] + triangle[count][i];
    } else {
      dp[count][i] =
        Math.max(dp[count - 1][i], dp[count - 1][i - 1]) + triangle[count][i];
    }
  }
  count += 1;
}

console.log(Math.max(...dp[n - 1]));
