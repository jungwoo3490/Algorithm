const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let video = [];

function compressor(y, x, size) {
  let result = "";
  let first = video[y][x];

  flag = true;

  for (let i = y; i < y + size; i++) {
    for (let j = x; j < x + size; j++) {
      if (video[i][j] !== first) {
        flag = false;
      }
    }
  }

  if (flag) {
    result += first;
  } else {
    result += "(";
    result += compressor(y, x, size / 2);
    result += compressor(y, size / 2 + x, size / 2);
    result += compressor(size / 2 + y, x, size / 2);
    result += compressor(size / 2 + y, size / 2 + x, size / 2);
    result += ")";
  }

  return result;
}

let size = Number(input[0]);

for (let i = 1; i <= size; i++) {
  video.push(input[i].split("").map(Number));
}

console.log(compressor(0, 0, size));
