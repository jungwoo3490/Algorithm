const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const NB = input[0].split(" ");
const N = NB[0];
const B = Number(NB[1]);
let result = 0;

for (i = 0; i < N.length; i++) {
  if (N.charCodeAt(i) < 65) {
    result += Number(N[i]) * (B ** (N.length - 1 - i));
  } else {
    result += (N.charCodeAt(i) - 55) * (B ** (N.length - 1 - i));
  }
}

console.log(result);
