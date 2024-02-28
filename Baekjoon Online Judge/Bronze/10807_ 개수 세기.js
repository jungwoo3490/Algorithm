const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numbers = input[1].split(" ");

let count = 0;

numbers.forEach((number) => {
    count = number === input[2] ? count + 1 : count;
})

console.log(count);