const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const NM = input[0].split(" ").map(Number);
const N = NM[0];
const targetArr = input[1].split(" ").map(Number);

let numArr = [];
let count = 0;

for (i = 1; i <= N; i++) {
  numArr.push(i);
}

function moveLeft(arr) {
  const firstIdx = arr.shift();
  arr.push(firstIdx);
}

function moveRight(arr) {
  const lastIdx = arr.pop();
  arr.unshift(lastIdx);
}

for (i = 0; i < targetArr.length; i++) {
  while (numArr.indexOf(targetArr[i]) !== 0) {
    if (numArr.indexOf(targetArr[i]) > Math.trunc(numArr.length / 2)) {
      moveRight(numArr);
    } else {
      moveLeft(numArr);
    }
    count += 1;
  }
  numArr.shift();
}

console.log(count);
