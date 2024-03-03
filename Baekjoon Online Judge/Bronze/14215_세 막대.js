const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const stick = input[0].split(" ").map(Number);

let maxIdx = 0;
let sumSideExMax = 0;

for (i = 1; i < stick.length; i++) {
  if (stick[i] > stick[maxIdx]) {
    maxIdx = i;
  }
}

for (i = 0; i < stick.length; i++) {
  if (stick[i] > stick[maxIdx]) {
    maxIdx = i;
  }
}

for (i = 0; i < stick.length; i++) {
  if (i !== maxIdx) {
    sumSideExMax += stick[i];
  }
}

if (stick[maxIdx] >= sumSideExMax) {
  console.log(sumSideExMax + (sumSideExMax - 1));
} else {
  console.log(stick[maxIdx] + sumSideExMax);
}
