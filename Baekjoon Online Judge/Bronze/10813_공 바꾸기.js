const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const NM = input[0].split(" ");
const N = Number(NM[0]);
const M = Number(NM[1]);

let boxArr = [];

for (i = 1; i <= N; i++) {
    boxArr.push(i);
}

for (i = 1; i <= M; i++) {
    const switchBall = input[i].split(" ");
    temp = boxArr[Number(switchBall[0]) - 1];
    boxArr[Number(switchBall[0]) - 1] = boxArr[Number(switchBall[1]) - 1];
    boxArr[Number(switchBall[1]) - 1] = temp;
}

console.log(boxArr.join(" "));