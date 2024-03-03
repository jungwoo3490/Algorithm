const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let xArr = [];
let yArr = [];
let xCount, yCount;
let x, y;

for (i = 0; i < input.length; i++) {
  const coordinate = input[i].split(" ");
  xArr.push(Number(coordinate[0]));
  yArr.push(Number(coordinate[1]));
}

for (i = 0; i < 3; i++) {
  [xCount, yCount] = [0, 0];
  for (j = 0; j < 3; j++) {
    if (xArr[i] === xArr[j]) {
      xCount += 1;
    }
    if (yArr[i] === yArr[j]) {
      yCount += 1;
    }
  }

  if (xCount === 1) {
    x = xArr[i];
  }

  if (yCount === 1) {
    y = yArr[i];
  }
}

console.log(x, y);
