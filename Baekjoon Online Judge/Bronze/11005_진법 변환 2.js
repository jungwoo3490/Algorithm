const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const NB = input[0].split(" ");
let N = Number(NB[0]);
const B = Number(NB[1]);

let arr = [];
let result = "";

while (N !== 0) {
    arr.unshift(N % B);
    N = Math.trunc(N / B);
}

arr.forEach((number) => {
    if (number >= 10) {
        result += String.fromCharCode(number + 55);
    } else {
        result += String(number);
    }
})

console.log(result);