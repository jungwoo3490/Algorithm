const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const J = Number(input[1]);

const apple = [];

for (let i = 2; i < 2 + J; i++) {
  apple.push(Number(input[i]));
}

let result = 0;

let start = 1;
let end = M;

for (let i = 0; i < apple.length; i++) {
  if (apple[i] < start) {
    move = start - apple[i];

    start -= move;
    end -= move;
    result += move;
  }

  if (apple[i] > end) {
    move = apple[i] - end;

    start += move;
    end += move;
    result += move;
  }
}

console.log(result);
