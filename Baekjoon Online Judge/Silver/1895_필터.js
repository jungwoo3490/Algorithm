const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [R, C] = input[0].split(" ").map(Number);

const image = [];

for (let i = 1; i <= R; i++) {
  image.push(input[i].split(" ").map(Number));
}

const T = Number(input.pop());
let result = 0;

for (let i = 0; i < R - 2; i++) {
  for (let j = 0; j < C - 2; j++) {
    const temp = [];

    for (let k = i; k < i + 3; k++) {
      for (let l = j; l < j + 3; l++) {
        temp.push(image[k][l]);
      }
    }

    temp.sort((a, b) => a - b);

    if (temp[4] >= T) {
      result += 1;
    }
  }
}

console.log(result);
