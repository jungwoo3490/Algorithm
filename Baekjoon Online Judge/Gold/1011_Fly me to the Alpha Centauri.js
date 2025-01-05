const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let [x, y] = input[i].split(" ").map(Number);

  y -= x;

  let n = Math.floor(Math.sqrt(y));
  let moves = 2 * n - 1;
  y -= n * n;

  moves += Math.floor(y / n) + (y % n === 0 ? 0 : 1);

  console.log(moves);
}
