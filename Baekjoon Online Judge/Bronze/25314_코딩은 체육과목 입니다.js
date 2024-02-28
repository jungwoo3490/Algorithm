const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const count = Number(input[0]) / 4;

let result = "";

for (i = 0; i < count; i++) {
    result += "long ";
}

console.log(result + "int");