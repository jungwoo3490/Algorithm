const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const roomNumList = input[0].split("").map(Number);
const countArr = Array(10).fill(0);

for (let i = 0; i < roomNumList.length; i++) {
  if (roomNumList[i] === 9) {
    countArr[6] += 1;
  } else {
    countArr[roomNumList[i]] += 1;
  }
}

countArr[6] = Math.ceil(countArr[6] / 2);

console.log(Math.max(...countArr));
