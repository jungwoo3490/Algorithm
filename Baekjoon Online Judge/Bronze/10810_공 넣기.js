const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const NM = input[0].split(" ");
const N = Number(NM[0]);
const M = Number(NM[1]);

let boxArr = [];

for (i = 0; i < N; i++) {
    boxArr.push(0);
}

for (i = 1; i <= M; i++) {
    const ball = input[i].split(" ");
    for (j = Number(ball[0]) - 1; j <= Number(ball[1]) - 1; j++) {
        boxArr[j] = Number(ball[2]);
    }
}

console.log(boxArr.join(" "));