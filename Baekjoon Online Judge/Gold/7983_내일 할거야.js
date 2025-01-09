const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);

const work = input.slice(1, n + 1).map((line) => line.split(" ").map(Number));

work.sort((a, b) => b[1] - a[1]);

let spareTime = work[0][1];

for (let i = 0; i < n; i++) {
  spareTime = Math.min(work[i][1], spareTime) - work[i][0];
}

console.log(spareTime);
