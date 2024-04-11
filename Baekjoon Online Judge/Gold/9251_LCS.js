const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const str1 = input[0];
const str2 = input[1];

const len1 = str1.length;
const len2 = str2.length;

let dp = [];
dp[0] = new Array(len1 + 1).fill(0);

for (let i = 1; i <= len2; i++) {
  dp[i] = [];
  dp[i][0] = 0;

  for (let j = 1; j <= len1; j++) {
    if (str1[j - 1] === str2[i - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}

console.log(dp[len2][len1]);
