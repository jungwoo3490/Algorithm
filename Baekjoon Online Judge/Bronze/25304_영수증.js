const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let total = input[0];
const count = input[1];

let thing = [];

for (i = 0; i < count; i++) {
    thing = input[i + 2].split(" ");
    total -= thing[0] * thing[1];
}

total === 0 ? console.log("Yes") : console.log("No");