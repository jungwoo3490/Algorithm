const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);

for (i = 1; i <= T; i++) {
    console.log(input[i][0] + input[i][input[i].length - 1]);
}