const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [blue, white] = [0, 0];
let flag, first;
let arr = [];

function isDivide(rowStart, columnStart, N) {
  flag = true;
  first = arr[columnStart][rowStart];

  for (i = columnStart; i < columnStart + N; i++) {
    for (j = rowStart; j < rowStart + N; j++) {
      if (arr[i][j] !== first) {
        flag = false;
      }
    }
  }

  if (flag) {
    if (arr[columnStart][rowStart] === 1) {
      blue += 1;
    } else {
      white += 1;
    }
    return;
  }

  isDivide(rowStart, columnStart, Math.trunc(N / 2));
  isDivide(rowStart + Math.trunc(N / 2), columnStart, Math.trunc(N / 2));
  isDivide(rowStart, columnStart + Math.trunc(N / 2), Math.trunc(N / 2));
  isDivide(
    rowStart + Math.trunc(N / 2),
    columnStart + Math.trunc(N / 2),
    Math.trunc(N / 2)
  );
}

let N = Number(input[0]);

for (i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

isDivide(0, 0, N);

console.log(white);
console.log(blue);
