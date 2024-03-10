const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const AB = input[0].split(" ");
const A = AB[0];
const B = AB[1];

let diff, substr;
let diffArr = [];

for (i = 0; i <= B.length - A.length; i++) {
  diff = 0;
  substr = B.substring(i, i + A.length);

  for (j = 0; j < A.length; j++) {
    if (A[j] !== substr[j]) {
      diff += 1;
    }
  }

  diffArr.push(diff);
}

console.log(Math.min(...diffArr));
