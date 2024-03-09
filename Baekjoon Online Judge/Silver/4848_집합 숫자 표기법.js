const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);

let setArr = [];
let itemArr;
let num1, num2, sum;

setArr.push("{}");

for (i = 1; i <= 15; i++) {
  itemArr = [];
  for (j = 0; j <= i - 1; j++) {
    itemArr.push(setArr[j]);
  }
  setArr.push(`{${itemArr.join(",")}}`);
}

for (i = 1; i <= T * 2; i = i + 2) {
  num1 = setArr.indexOf(input[i]);
  num2 = setArr.indexOf(input[i + 1]);

  sum = num1 + num2;

  console.log(setArr[sum]);
}
