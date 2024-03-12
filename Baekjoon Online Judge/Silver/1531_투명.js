const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const NM = input[0].split(" ").map(Number);
const N = NM[0];
const M = NM[1];

const picture = new Array(100);
let paper;
let count = 0;

for (i = 0; i < picture.length; i++) {
  picture[i] = new Array(100).fill(0);
}

for (i = 1; i <= N; i++) {
  paper = input[i].split(" ").map(Number);

  for (j = paper[1]; j <= paper[3]; j++) {
    for (k = paper[0]; k <= paper[2]; k++) {
      picture[j - 1][k - 1] += 1;
    }
  }
}

for (i = 0; i < 100; i++) {
  for (j = 0; j < 100; j++) {
    if (picture[i][j] > M) {
      count += 1;
    }
  }
}

console.log(count);
