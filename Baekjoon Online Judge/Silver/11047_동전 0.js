const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, K] = input[0].split(" ").map(Number);

let coins = [];
let count = 0;

for (i = 1; i <= N; i++) {
  coins.push(Number(input[i]));
}

for (i = coins.length - 1; i >= 0; i--) {
  count += Math.trunc(K / coins[i]);
  K %= coins[i];
}

console.log(count);
