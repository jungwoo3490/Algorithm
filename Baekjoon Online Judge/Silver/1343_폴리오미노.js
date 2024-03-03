const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const board = input[0];
let result = "";
let count = 0;
let a, b;

for (i = 0; i < board.length; i++) {
  if (board[i] === ".") {
    if (count % 2 !== 0) {
      result = -1;
      break;
    } else {
      a = Math.trunc(count / 4);
      b = (count % 4) / 2;

      for (j = 0; j < a; j++) {
        result += "AAAA";
      }

      for (j = 0; j < b; j++) {
        result += "BB";
      }
    }

    result += ".";
    count = 0;
  } else {
    count += 1;
  }
}

if (count % 2 !== 0) {
  result = -1;
} else {
  a = Math.trunc(count / 4);
  b = (count % 4) / 2;

  for (j = 0; j < a; j++) {
    result += "AAAA";
  }

  for (j = 0; j < b; j++) {
    result += "BB";
  }
}

console.log(result);
