const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num1 = Number(input[0]);
const num2list = input[1].split("")

const a = num1 * Number(num2list[0]);
const b = num1 * Number(num2list[1]);
const c = num1 * Number(num2list[2]);

const result = a * 100 + b * 10 + c;

console.log(c + "\n" + b + "\n" + a + "\n" + result);