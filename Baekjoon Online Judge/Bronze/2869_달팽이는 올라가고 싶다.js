const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const ABV = input[0].split(" ");

const A = Number(ABV[0]);
const B = Number(ABV[1]);
let V = Number(ABV[2]);

console.log(Math.ceil((V - A) / (A - B)) + 1);
