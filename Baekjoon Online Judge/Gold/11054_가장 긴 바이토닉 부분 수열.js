const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let dp = new Array(N).fill(1);
let dpReverse = new Array(N).fill(1);
let result = 0;

for (i = 1; i < arr.length; i++) {
  for (j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

arr.reverse();

for (i = 1; i < arr.length; i++) {
  for (j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      dpReverse[i] = Math.max(dpReverse[i], dpReverse[j] + 1);
    }
  }
}

for (i = 0; i < dp.length; i++) {
  result = Math.max(result, dp[i] + dpReverse[dpReverse.length - i - 1] - 1);
}

console.log(result);
