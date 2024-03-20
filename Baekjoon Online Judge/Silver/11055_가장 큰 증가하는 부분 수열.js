const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input[1].split(" ").map(Number);

let dp = new Array(arr.length).fill(0);

for (i = 0; i < arr.length; i++) {
  dp[i] = arr[i];

  for (j = 0; j < i; j++) {
    if (arr[j] < arr[i]) {
      dp[i] = Math.max(dp[i], dp[j] + arr[i]);
    }
  }
}

console.log(Math.max(...dp));
