const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
let arr = [];
let x, y, xy;
let result = 0;

for (i = 0; i < 100; i++) {
  arr[i] = new Array(100).fill(0);
}

for (i = 1; i <= N; i++) {
  xy = input[i].split(" ");
  x = Number(xy[0]);
  y = Number(xy[1]);
  for (j = x; j < x + 10; j++) {
    for (k = y; k < y + 10; k++) {
      arr[j][k] = 1;
    }
  }
}

for (i = 0; i < 100; i++) {
  for (j = 0; j < 100; j++) {
    if (arr[i][j] === 1) {
      result += 1;
    }
  }
}

console.log(result);
