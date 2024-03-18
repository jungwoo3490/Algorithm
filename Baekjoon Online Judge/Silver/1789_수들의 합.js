const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let S = Number(input[0]);

let numToMin = 1;

while (S >= numToMin) {
  S -= numToMin;
  numToMin += 1;
}

console.log(numToMin - 1);
