const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let numArr = input[0].split("").map(Number);

let sum = 0;
let count = 0;

for (i = 0; i < numArr.length; i++) {
  sum += numArr[i];
}

while (numArr.length !== 1) {
  sum = 0;

  for (i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }

  numArr = String(sum).split("").map(Number);
  count += 1;
}

console.log(count);

if (sum % 3 === 0) {
  console.log("YES");
} else {
  console.log("NO");
}
