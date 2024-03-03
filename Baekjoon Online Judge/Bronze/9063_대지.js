const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
let [xMax, yMax, xMin, yMin] = [-10000, -10000, 10000, 10000];
let coordinate = [];
let x, y;

for (i = 1; i <= N; i++) {
  coordinate = input[i].split(" ");
  x = Number(coordinate[0]);
  y = Number(coordinate[1]);

  xMax = Math.max(x, xMax);
  yMax = Math.max(y, yMax);

  xMin = Math.min(x, xMin);
  yMin = Math.min(y, yMin);
}

console.log((xMax - xMin) * (yMax - yMin));
