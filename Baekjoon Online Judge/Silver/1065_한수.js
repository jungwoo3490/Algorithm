const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const X = Number(input[0]);
let numSplitArr = [];
let diff;
let isHansu;
let count = 0;

for (i = 1; i <= X; i++) {
  numSplitArr = String(i).split("").map(Number);
  isHansu = true;

  if (numSplitArr.length < 3) {
    count += 1;
  } else {
    diff = numSplitArr[1] - numSplitArr[0];

    for (j = 1; j < numSplitArr.length - 1; j++) {
      if (numSplitArr[j + 1] - numSplitArr[j] !== diff) {
        isHansu = false;
      }
    }
    if (isHansu) {
      count += 1;
    }
  }
}

console.log(count);
