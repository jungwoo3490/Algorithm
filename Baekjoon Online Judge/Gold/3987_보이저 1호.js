const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const A = Array.from({ length: N + 2 }, (_, i) => {
  if (i === 0 || i === N + 1) return Array(M + 2).fill("C");
  return ["C"].concat(input[i].trim().split("")).concat(["C"]);
});

const [sr, sc] = input[N + 1].split(" ").map(Number);

const direction = ["U", "R", "D", "L"];
const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];
const P = [1, 0, 3, 2];
const Q = [3, 2, 1, 0];

let maxTime = 0;
let maxDir = 0;

for (let sd = 0; sd < 4; sd++) {
  let r = sr,
    c = sc,
    d = sd,
    time = 1;

  while (true) {
    if (A[r + dr[d]][c + dc[d]] === "C") break;

    r += dr[d];
    c += dc[d];

    if (A[r][c] === "/") {
      d = P[d];
    } else if (A[r][c] === "\\") {
      d = Q[d];
    }
    time++;

    if (r === sr && c === sc && d === sd) {
      console.log(direction[sd]);
      console.log("Voyager");
      process.exit(0);
    }
  }

  if (maxTime < time) {
    maxTime = time;
    maxDir = sd;
  }
}

console.log(direction[maxDir]);
console.log(maxTime);
