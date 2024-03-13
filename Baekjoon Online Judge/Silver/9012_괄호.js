const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);
let stack, str, popChar;

for (i = 1; i <= T; i++) {
  str = input[i];
  stack = [];

  for (j = 0; j < str.length; j++) {
    if (str[j] === "(") {
      stack.push(str[j]);
    } else {
      popChar = stack.pop();

      if (popChar !== "(") {
        stack.push(str[j]);
      }
    }
  }

  if (stack.length === 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
