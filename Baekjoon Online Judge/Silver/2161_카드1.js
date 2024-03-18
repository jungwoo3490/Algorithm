const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

let cards = [];
let result = [];
let discard;

for (i = 1; i <= N; i++) {
  cards.push(i);
}

while (true) {
  discard = cards.shift();
  result.push(discard);

  if (cards.length === 0) {
    break;
  }

  discard = cards.shift();
  cards.push(discard);
}

console.log(result.join(" "));
