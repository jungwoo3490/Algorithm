const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);

let arr = [];
let dp = [
  [1, 0],
  [0, 1],
];

for (i = 1; i <= T; i++) {
  arr.push(Number(input[i]));
}

for (i = 2; i <= Math.max(...arr); i++) {
  dp.push([dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]]);
}

for (i = 0; i < arr.length; i++) {
  console.log(dp[arr[i]].join(" "));
}
