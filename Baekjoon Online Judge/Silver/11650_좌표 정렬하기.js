const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

let arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

arr.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }

  return a[0] - b[0];
});

console.log(arr.map((el) => el.join(" ")).join("\n"));
