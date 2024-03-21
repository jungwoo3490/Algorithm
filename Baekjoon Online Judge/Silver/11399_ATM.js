const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const people = input[1].split(" ").map(Number);

people.sort((a, b) => a - b);

let dp = [people[0]];
let sum = people[0];

for (i = 1; i < people.length; i++) {
  dp[i] = dp[i - 1] + people[i];
  sum += dp[i];
}

console.log(sum);
