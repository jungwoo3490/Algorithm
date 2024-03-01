const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = [];
let result = "";

for (i = 0; i < input.length; i++) {
  const line = input[i].split("");
  for (j = 0; j < line.length; j++) {
    if (!arr[j]) {
      arr[j] = [];
    }
    arr[j][i] = line[j];
  }
}

for (i = 0; i < arr.length; i++) {
  const str = arr[i].join("");
  result += str;
}

console.log(result);
