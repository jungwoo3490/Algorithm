const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let X = Number(input[0]);

let N = 1;
let limit = 1;
let [i, j] = [1, 1];

while (X !== 1) {
  j += 1;
  N += 1;
  limit += 1;
  if (X === N) {
    break;
  }

  for (k = 0; k < limit - 1; k++) {
    j -= 1;
    i += 1;
    N += 1;
    if (X === N) {
      break;
    }
  }
  if (X === N) {
    break;
  }

  i += 1;
  N += 1;
  limit += 1;
  if (X === N) {
    break;
  }

  for (k = 0; k < limit - 1; k++) {
    j += 1;
    i -= 1;
    N += 1;
    if (X === N) {
      break;
    }
  }
  if (X === N) {
    break;
  }
}

console.log(`${i}/${j}`);
