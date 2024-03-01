const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const set = new Set();

for (let i = 1; i < input.length; i++) {
  set.add(Number(input[i]));
}

const arr = Array.from(set).sort((a, b) => a - b);
const result = arr.join("\n");

console.log(result);
