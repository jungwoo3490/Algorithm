const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

let stack = [];
let command;
let result = [];

for (i = 1; i <= N; i++) {
  command = input[i].split(" ");

  if (command[0] === "push") {
    stack.push(command[1]);
  } else if (command[0] === "pop") {
    if (stack.length === 0) {
      result.push(-1);
    } else {
      result.push(stack.pop());
    }
  } else if (command[0] === "size") {
    result.push(stack.length);
  } else if (command[0] === "empty") {
    if (stack.length === 0) {
      result.push(1);
    } else {
      result.push(0);
    }
  } else {
    if (stack.length === 0) {
      result.push(-1);
    } else {
      result.push(stack[stack.length - 1]);
    }
  }
}

console.log(result.join("\n"));
