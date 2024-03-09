const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const NK = input[0].split(" ").map(Number);
const N = NK[0];
const K = NK[1];
let numArr = [];
let deleteIdx = K - 1;
let resultArr = [];

for (i = 1; i <= N; i++) {
  numArr.push(i);
}

while (numArr.length !== 0) {
  resultArr.push(numArr[deleteIdx]);
  numArr.splice(deleteIdx, 1);

  deleteIdx += K - 1;

  if (deleteIdx >= numArr.length) {
    deleteIdx = deleteIdx % numArr.length;
  }
}

console.log(`<${resultArr.join(", ")}>`);
