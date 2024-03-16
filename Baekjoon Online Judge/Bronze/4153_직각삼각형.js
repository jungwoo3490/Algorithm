const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let legs, squareSum;

for (i = 0; i < input.length - 1; i++) {
  legs = input[i].split(" ").map(Number);
  squareSum = 0;

  for (j = 0; j < legs.length; j++) {
    squareSum += legs[j] ** 2;
  }

  if (Math.max(...legs) ** 2 === squareSum / 2) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}
