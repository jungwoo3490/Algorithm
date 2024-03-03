const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [a1, a0] = input[0].split(" ").map(Number);
const c = Number(input[1]);
const n0 = Number(input[2]);

let result;

if (a1 > c) {
  result = 0;
} else if (a1 === c) {
  if (a0 > 0) {
    result = 0;
  } else {
    result = 1;
  }
} else {
  if (a1 * n0 + a0 <= c * n0) {
    result = 1;
  } else {
    result = 0;
  }
}

console.log(result);
