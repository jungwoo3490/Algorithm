const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let index = 0;

const N = parseInt(input[index]);
index += 1;

const soldiers = input[index].split(" ").map(Number);
index += 1;

const prefixSum = new Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  prefixSum[i] = prefixSum[i - 1] + soldiers[i - 1];
}

const M = parseInt(input[index]);
index += 1;

const result = [];
for (let i = 0; i < M; i++) {
  const command = input[index].split(" ").map(Number);
  index += 1;

  if (command[0] === 1) {
    const idx = command[1] - 1;
    const change = command[2];
    soldiers[idx] += change;

    for (let j = idx + 1; j <= N; j++) {
      prefixSum[j] = prefixSum[j - 1] + soldiers[j - 1];
    }
  } else if (command[0] === 2) {
    const soldierNumber = command[1];

    let left = 1;
    let right = N;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (prefixSum[mid] >= soldierNumber) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    result.push(left);
  }
}

console.log(result.join("\n"));
