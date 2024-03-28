const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input[1].split(" ").map(Number);

let dp = [0];

for (let i = 1; i <= arr.length; i++) {
  dp[i] = dp[i - 1] + arr[i - 1];
}

const M = Number(input[2]);
let section;
let result = [];

for (let i = 3; i < 3 + M; i++) {
  section = input[i].split(" ").map(Number);
  result.push(dp[section[1]] - dp[section[0] - 1]);
}

console.log(result.join("\n"));
