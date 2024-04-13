const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let cable = [];

const [K, N] = input[0].split(" ").map(Number);

for (let i = 1; i <= K; i++) {
  cable.push(Number(input[i]));
}

let count;
let start = 0;
let end = Math.max(...cable);
let result;

while (start <= end) {
  count = 0;

  mid = Math.floor((start + end) / 2);

  for (let i = 0; i < cable.length; i++) {
    count += Math.floor(cable[i] / mid);
  }

  if (count >= N) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
