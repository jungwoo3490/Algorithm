const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numbers = input[0].split(" ");
const A = Number(numbers[0]);
const B = Number(numbers[1]);
const C = Number(numbers[2]);


console.log(((A + B) % C) + "\n" + (((A % C) + (B % C)) % C) + "\n" + ((A * B) % C) + "\n" + (((A % C) * (B % C)) % C));