const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let count = 0;

const N = Number(input[0]);

const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(Number(input[i]));
}

while (true) {
  let max = Math.max(...arr);
  let maxIdx = arr.indexOf(max);

  if (maxIdx === 0) {
    for (let i = 1; i < N; i++) {
      if (arr[i] === max) {
        count += 1;
        break;
      }
    }
    break;
  } else {
    arr[maxIdx] -= 1;
    arr[0] += 1;
    count += 1;
  }
}

console.log(count);
