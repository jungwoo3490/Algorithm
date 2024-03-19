const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N, M, count, sanggeun;
let readLine = 0;

while (input[readLine] !== "0 0") {
  [N, M] = input[readLine].split(" ").map(Number);
  sanggeun = new Set();
  count = 0;

  for (let i = readLine + 1; i <= readLine + N; i++) {
    sanggeun.add(input[i]);
  }

  for (let i = readLine + N + 1; i <= readLine + N + M; i++) {
    if (sanggeun.has(input[i])) {
      count += 1;
    }
  }

  console.log(count);
  readLine += N + M + 1;
}
