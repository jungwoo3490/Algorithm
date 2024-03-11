const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input[1].split(" ").map(Number);

let increaseCount = 1;
let decreaseCount = 1;
let increaseArr = [];
let decreaseArr = [];

if (arr.length === 1) {
  console.log(1);
} else {
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] > arr[i]) {
      increaseCount += 1;
      decreaseArr.push(decreaseCount);
      decreaseCount = 1;

      if (i === arr.length - 2) {
        increaseArr.push(increaseCount);
      }
    } else if (arr[i + 1] < arr[i]) {
      decreaseCount += 1;
      increaseArr.push(increaseCount);
      increaseCount = 1;

      if (i === arr.length - 2) {
        decreaseArr.push(decreaseCount);
      }
    } else {
      decreaseCount += 1;
      increaseCount += 1;

      if (i === arr.length - 2) {
        increaseArr.push(increaseCount);
        decreaseArr.push(decreaseCount);
      }
    }
  }

  console.log(Math.max(Math.max(...increaseArr), Math.max(...decreaseArr)));
}
