const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const NM = input[0].split(" ").map(Number);
const N = NM[0];
const M = NM[1];

let findNum = new Map();
let findName = new Map();

for (i = 1; i <= N; i++) {
  findNum.set(input[i], i);
  findName.set(i, input[i]);
}

for (i = N + 1; i < N + M + 1; i++) {
  if (!isNaN(Number(input[i]))) {
    console.log(findName.get(Number(input[i])));
  } else {
    console.log(findNum.get(input[i]));
  }
}
