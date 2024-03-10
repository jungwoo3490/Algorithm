const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const tallerThanMeArr = input[1].split(" ").map(Number);

let tallerThanMeCount, position;
let line = new Array(N).fill(0);

for (i = 0; i < tallerThanMeArr.length; i++) {
  tallerThanMeCount = tallerThanMeArr[i] + 1;
  position = 0;
  for (j = 0; j < line.length; j++) {
    if (line[j] === 0) {
      tallerThanMeCount -= 1;
    }

    if (tallerThanMeCount === 0) {
      break;
    }

    position += 1;
  }
  line[position] = i + 1;
}

console.log(line.join(" "));
