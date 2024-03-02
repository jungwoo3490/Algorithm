const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input[1].split(" ").map(Number);
let divisor;
let count = 0;

for (i = 0; i < arr.length; i++) {
  divisor = [];
  for (j = 2; j < arr[i]; j++) {
    if (arr[i] % j === 0) {
      divisor.push(j);
    }
  }
  if (arr[i] !== 1 && divisor.length === 0) {
    count += 1;
  }
}

console.log(count);
