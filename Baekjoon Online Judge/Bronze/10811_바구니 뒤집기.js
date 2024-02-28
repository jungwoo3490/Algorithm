const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const NM = input[0].split(" ");
const N = Number(NM[0]);
const M = Number(NM[1]);

let boxArr = [];

for (i = 0; i < N; i++) {
    boxArr[i] = i + 1;
}

for (i = 1; i <= M; i++) {
    reverseBox = input[i].split(" ");
    for (j = Number(reverseBox[0]) - 1; j <= Math.trunc(Number(reverseBox[0]) + Number(reverseBox[1]) - 2) / 2; j++) {
        temp = boxArr[j];
        boxArr[j] = boxArr[Number(reverseBox[0]) + Number(reverseBox[1]) - 2 - j];
        boxArr[Number(reverseBox[0] - 1) + Number(reverseBox[1] - 1) - j] = temp;
    }
}

console.log(boxArr.join(" "));