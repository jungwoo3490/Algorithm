const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let sum = 0;
let score;

for (i = 0; i < 5; i++) {
  score = Number(input[i]);

  if (score < 40) {
    sum += 40;
  } else {
    sum += score;
  }
}

console.log(sum / 5);
