const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numberStr = input[1].split(" ");

let numbers = [];

numberStr.forEach((number) => {
    numbers.push(Number(number));
});

let [min, max] = [numbers[0], numbers[0]];

for (i = 1; i < numbers.length; i++) {
    min = numbers[i] < min ? numbers[i] : min;
    max = numbers[i] > max ? numbers[i] : max;
}

console.log(min + " " + max);