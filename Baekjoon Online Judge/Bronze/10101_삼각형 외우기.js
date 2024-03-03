const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let angle = [];
let isEquilateral = true;
let count;
let maxCount = 0;
let sum = 0;

for (i = 0; i < input.length; i++) {
  angle.push(Number(input[i]));
}

angle.forEach((angle) => {
  if (angle !== 60) {
    isEquilateral = false;
  }
});

for (i = 0; i < angle.length; i++) {
  count = 0;
  sum += angle[i];
  for (j = 0; j < angle.length; j++) {
    if (angle[i] === angle[j]) {
      count++;
    }
  }
  maxCount = Math.max(maxCount, count);
}

if (sum !== 180) {
  console.log("Error");
} else if (maxCount === 3) {
  console.log("Equilateral");
} else if (maxCount === 2) {
  console.log("Isosceles");
} else {
  console.log("Scalene");
}
