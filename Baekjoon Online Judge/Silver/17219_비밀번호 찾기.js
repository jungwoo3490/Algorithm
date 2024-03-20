const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let id, pw;
let passwords = {};

for (i = 1; i <= N; i++) {
  [id, pw] = input[i].split(" ");
  passwords[id] = pw;
}

for (i = N + 1; i <= N + M; i++) {
  console.log(passwords[input[i]]);
}
