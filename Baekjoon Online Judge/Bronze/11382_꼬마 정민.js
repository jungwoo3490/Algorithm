const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numbers = input[0].split(" ");

console.log(Number(numbers[0]) + Number(numbers[1]) + Number(numbers[2]));