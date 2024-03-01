const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let max = -1;
let x, y;
let arr = [];

for (i = 0; i < 9; i++) {
  arr[i] = input[i].split(" ").map(Number);
}

for (i = 0; i < 9; i++) {
  for (j = 0; j < 9; j++) {
    if (arr[i][j] > max) {
      max = arr[i][j];
      x = i + 1;
      y = j + 1;
    }
  }
}

console.log(max + "\n" + `${x} ${y}`);
