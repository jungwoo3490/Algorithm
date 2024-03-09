const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let rectangle = [];
let square = [];
let maxArea;

for (i = 1; i < input.length; i++) {
  rectangle.push(input[i].split("").map(Number));
}

for (i = 0; i < rectangle.length; i++) {
  for (j = 0; j < rectangle[i].length; j++) {
    k = 1;
    maxArea = 1;

    while (i + k < rectangle.length && j + k < rectangle[i].length) {
      if (
        rectangle[i][j] === rectangle[i][j + k] &&
        rectangle[i][j + k] === rectangle[i + k][j] &&
        rectangle[i + k][j] === rectangle[i + k][j + k]
      ) {
        maxArea = (k + 1) ** 2;
      }

      k += 1;
    }

    square.push(maxArea);
  }
}

console.log(Math.max(...square));
