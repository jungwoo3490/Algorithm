const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

let classList = [];

for (i = 1; i <= N; i++) {
  classList.push(input[i].split(" ").map(Number));
}

classList.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

let count = 1;
let endTime = classList[0][1];

for (i = 1; i < classList.length; i++) {
  if (classList[i][0] >= endTime) {
    count += 1;
    endTime = classList[i][1];
  }
}

console.log(count);
