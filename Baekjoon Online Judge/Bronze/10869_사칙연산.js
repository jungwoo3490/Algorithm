const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numbers = input[0].split(" ");
const num1 = Number(numbers[0]);
const num2 = Number(numbers[1]);

console.log((num1 + num2) + "\n" + (num1 - num2) + "\n" + (num1 * num2) + "\n" + Math.trunc(num1 / num2) + "\n" + (num1 % num2));
