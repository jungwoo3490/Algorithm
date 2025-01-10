const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

const grid = input.slice(1, 6).map((line) => line.split(""));
const possibleNumbersPerPosition = new Array(N).fill(0);
const sumPerPosition = new Array(N).fill(0);
let totalPossibleNumbers = 1;
let result = 0;

const digitPatterns = {
  0: [
    [1, 1],
    [2, 1],
    [3, 1],
  ],
  1: [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
    [2, 0],
    [2, 1],
    [3, 0],
    [3, 1],
    [4, 0],
    [4, 1],
  ],
  2: [
    [1, 0],
    [1, 1],
    [3, 1],
    [3, 2],
  ],
  3: [
    [1, 0],
    [1, 1],
    [3, 0],
    [3, 1],
  ],
  4: [
    [0, 1],
    [1, 1],
    [3, 0],
    [3, 1],
    [4, 0],
    [4, 1],
  ],
  5: [
    [1, 1],
    [1, 2],
    [3, 0],
    [3, 1],
  ],
  6: [
    [1, 1],
    [1, 2],
    [3, 1],
  ],
  7: [
    [1, 0],
    [1, 1],
    [2, 0],
    [2, 1],
    [3, 0],
    [3, 1],
    [4, 0],
    [4, 1],
  ],
  8: [
    [1, 1],
    [3, 1],
  ],
  9: [
    [1, 1],
    [3, 1],
    [3, 0],
  ],
};

let offset = 0;
for (let position = 0; position < N; position++) {
  for (let digit = 0; digit < 10; digit++) {
    const pattern = digitPatterns[digit];
    let matchCount = 0;
    for (const [i, j] of pattern) {
      if (grid[i][offset + j] === ".") {
        matchCount++;
      }
    }
    if (matchCount === pattern.length) {
      sumPerPosition[position] += digit * Math.pow(10, N - position - 1);
      possibleNumbersPerPosition[position]++;
    }
  }
  offset += 4;
}

for (let i = 0; i < N; i++) {
  let combinationCount = 1;
  for (let j = 0; j < N; j++) {
    if (i !== j) {
      combinationCount *= possibleNumbersPerPosition[j];
    }
  }
  totalPossibleNumbers *= possibleNumbersPerPosition[i];
  result += sumPerPosition[i] * combinationCount;
}

console.log(totalPossibleNumbers === 0 ? -1 : result / totalPossibleNumbers);
