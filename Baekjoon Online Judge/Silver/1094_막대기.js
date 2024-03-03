const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const X = Number(input[0]);
let sticks = [64];
let sum = 64;

while (X !== sum) {
  sticks[sticks.length - 1] = sticks[sticks.length - 1] / 2;

  sum = 0;

  for (i = 0; i < sticks.length; i++) {
    sum += sticks[i];
  }

  if (sum < X) {
    sticks.push(sticks[sticks.length - 1]);
  }

  sum = 0;

  for (i = 0; i < sticks.length; i++) {
    sum += sticks[i];
  }
}

console.log(sticks.length);
