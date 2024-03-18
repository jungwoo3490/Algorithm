const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const plane = new Array(100);

for (i = 0; i < 100; i++) {
  plane[i] = new Array(100).fill(0);
}

for (i = 0; i < input.length; i++) {
  const square = input[i].split(" ").map(Number);

  for (j = square[0] - 1; j < square[2] - 1; j++) {
    for (k = square[1] - 1; k < square[3] - 1; k++) {
      plane[j][k] = 1;
    }
  }
}

let area = 0;

for (i = 0; i < 100; i++) {
  for (j = 0; j < 100; j++) {
    if (plane[i][j] === 1) {
      area += 1;
    }
  }
}

console.log(area);
