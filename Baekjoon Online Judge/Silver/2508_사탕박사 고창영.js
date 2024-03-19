const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const t = Number(input[0]);

let count;
let readLine = 2;
let candies;

for (i = 0; i < t; i++) {
  const [r, c] = input[readLine].split(" ").map(Number);
  count = 0;
  candies = [];

  for (j = readLine + 1; j <= readLine + r; j++) {
    candies.push(input[j].split(""));
  }

  for (j = 0; j < r; j++) {
    for (k = 0; k < c - 2; k++) {
      if (
        candies[j][k] === ">" &&
        candies[j][k + 1] === "o" &&
        candies[j][k + 2] === "<"
      ) {
        count += 1;
      }
    }
  }

  for (j = 0; j < r - 2; j++) {
    for (k = 0; k < c; k++) {
      if (
        candies[j][k] === "v" &&
        candies[j + 1][k] === "o" &&
        candies[j + 2][k] === "^"
      ) {
        count += 1;
      }
    }
  }

  console.log(count);
  readLine += r + 2;
}
