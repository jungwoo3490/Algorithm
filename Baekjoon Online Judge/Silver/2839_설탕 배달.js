const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
let count;
let countArr = [];

for (i = 0; i <= Math.trunc(N / 5); i++) {
  count = i;
  remainder = N - (i * 5);

  if (remainder % 3 === 0) {
    count += remainder / 3;
    countArr.push(count);
  }
}

if (countArr.length === 0) {
  console.log(-1);
} else {
  console.log(Math.min(...countArr));
}
