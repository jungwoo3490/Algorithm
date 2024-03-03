const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

let words = [];

for (i = 1; i <= N; i++) {
  words.push(input[i]);
}

words.sort();
words.sort((a, b) => a.length - b.length);

words = [...new Set(words)];

console.log(words.join("\n"));
