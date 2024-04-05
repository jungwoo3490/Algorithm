const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numArr = input[0].split(" ").map(Number);

let result = 0;

for (let i = 0; i < numArr.length; i++) {
  result += numArr[i] ** 2;
}

console.log(result % 10);
