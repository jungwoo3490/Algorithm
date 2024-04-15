const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const str = input[0];

let result = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i].toUpperCase()) result += str[i].toLowerCase();
  else result += str[i].toUpperCase();
}

console.log(result);
