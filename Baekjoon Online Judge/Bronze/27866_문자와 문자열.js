const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const str = input[0];

console.log(str[Number(input[1] - 1)]);