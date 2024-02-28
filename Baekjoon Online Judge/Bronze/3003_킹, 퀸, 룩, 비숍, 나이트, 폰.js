const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const chessArr = input[0].split(" ");
const correctArr = [1, 1, 2, 2, 2, 8];
let result = [];

for (i = 0; i < 6; i++) {
    result.push(correctArr[i] - chessArr[i]);
}

console.log(result.join(" "));