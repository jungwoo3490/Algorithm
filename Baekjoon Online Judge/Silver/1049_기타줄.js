const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const NM = input[0].split(" ").map(Number);
const N = NM[0];
const M = NM[1];

let price;
let package = [];
let each = [];

for (i = 1; i <= M; i++) {
  price = input[i].split(" ").map(Number);
  package.push(price[0]);
  each.push(price[1]);
}

const minPrice = Math.min(
  Math.trunc(N / 6) * Math.min(...package) + (N % 6) * Math.min(...each),
  (Math.trunc(N / 6) + 1) * Math.min(...package),
  N * Math.min(...each)
);

console.log(minPrice);
