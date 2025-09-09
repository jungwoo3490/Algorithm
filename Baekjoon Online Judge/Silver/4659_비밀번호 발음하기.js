const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const 모음 = ["a", "e", "i", "o", "u"];

let i = 0;

while (true) {
  if (input[i] === "end") {
    break;
  }

  let flag = true;
  let 모음count = 0;

  for (let j = 0; j < input[i].length; j++) {
    if (모음.includes(input[i][j])) {
      모음count += 1;
    }

    if (j <= input[i].length - 3) {
      if (
        모음.includes(input[i][j]) &&
        모음.includes(input[i][j + 1]) &&
        모음.includes(input[i][j + 2])
      ) {
        flag = false;
      }

      if (
        !모음.includes(input[i][j]) &&
        !모음.includes(input[i][j + 1]) &&
        !모음.includes(input[i][j + 2])
      ) {
        flag = false;
      }
    }

    if (j <= input[i].length - 2) {
      if (
        input[i][j] === input[i][j + 1] &&
        input[i][j] !== "e" &&
        input[i][j] !== "o"
      ) {
        flag = false;
      }
    }
  }

  if (모음count === 0) {
    flag = false;
  }

  if (flag === true) {
    console.log(`<${input[i]}> is acceptable.`);
  } else {
    console.log(`<${input[i]}> is not acceptable.`);
  }

  i += 1;
}
