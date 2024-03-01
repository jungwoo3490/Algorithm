const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const NM = input[0].split(" ");
const N = Number(NM[0]);
const M = Number(NM[1]);

let arrA = [];
let arrB = [];

for (i = 0; i < N; i++) {
  arrA[i] = input[i + 1].split(" ").map(Number);
  arrB[i] = input[i + 1 + N].split(" ").map(Number);
}

for (i = 0; i < N; i++) {
  let result = [];
  for (j = 0; j < M; j++) {
    result.push(arrA[i][j] + arrB[i][j]);
  }
  console.log(result.join(" "));
}