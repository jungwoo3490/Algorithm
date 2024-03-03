const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let sides = [];
let maxSide;
let maxIdx;
let sameCount;
let maxSameCount;

for (i = 0; i < input.length - 1; i++) {
  sides = input[i].split(" ").map(Number);
  sumSideExMax = 0;
  maxSide = 0;
  maxIdx -= -1;
  maxSameCount = 0;

  for (j = 0; j < sides.length; j++) {
    sameCount = 0;

    if (sides[j] > maxSide) {
      maxSide = sides[j];
      maxIdx = j;
    }

    for (k = 0; k < sides.length; k++) {
      if (sides[j] === sides[k]) {
        sameCount += 1;
      }

      maxSameCount = Math.max(maxSameCount, sameCount);
    }
  }

  for (l = 0; l < sides.length; l++) {
    if (l !== maxIdx) {
      sumSideExMax += sides[l];
    }
  }

  if (sumSideExMax <= sides[maxIdx]) {
    console.log("Invalid");
  } else if (maxSameCount === 3) {
    console.log("Equilateral");
  } else if (maxSameCount === 2) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
}
