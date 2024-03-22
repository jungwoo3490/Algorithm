const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input[1].split(" ").map(Number);

let lis = [];
let dp = new Array(arr.length).fill(0);

for (i = 0; i < arr.length; i++) {
  dp[i] = 1;

  for (j = 0; j < i; j++) {
    if (arr[j] < arr[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

const maxIdx = dp.indexOf(Math.max(...dp));
let max = Math.max(...dp);

lis.unshift(arr[maxIdx]);
max -= 1;

for (i = maxIdx; i >= 0; i--) {
  if (dp[i] === max) {
    lis.unshift(arr[i]);
    max -= 1;
  }
}

console.log(lis.length);
console.log(lis.join(" "));
