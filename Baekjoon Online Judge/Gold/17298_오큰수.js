// 이중 for문 사용 O(N^2) -> Time exceed

// const fs = require("fs");
// const input = fs.readFileSync("input.txt").toString().trim().split("\n");

// const result = [];

// const arr = input[1].split(" ").map(Number);

// for (let i = 0; i < arr.length; i++) {
//   let flag = false;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[j] > arr[i]) {
//       result.push(arr[j]);
//       flag = true;
//       break;
//     }
//   }

//   if (flag === false) {
//     result.push(-1);
//   }
// }

// console.log(result.join(" "));

// 단조 스택 사용 O(N)

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input[1].split(" ").map(Number);

const result = [];

for (let i = 0; i < arr.length; i++) {
  result.push(-1);
}

const stack = [0];

let top;

for (let i = 1; i < arr.length; i++) {
  if (arr[stack[stack.length - 1]] < arr[i]) {
    while (arr[stack[stack.length - 1]] < arr[i]) {
      top = stack.pop();
      result[top] = arr[i];
    }
  }
  stack.push(i);
}

console.log(result.join(" "));
