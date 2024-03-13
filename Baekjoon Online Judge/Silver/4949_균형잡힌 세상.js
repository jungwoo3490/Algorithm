const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let sentence, stack, popChar, result;

for (i = 0; i < input.length - 1; i++) {
  sentence = input[i];
  stack = [];

  for (j = 0; j < sentence.length; j++) {
    if (sentence[j] === "(" || sentence[j] === "[") {
      stack.push(sentence[j]);
    } else if (sentence[j] === ")") {
      popChar = stack.pop();

      if (popChar !== "(") {
        result = "no";
        stack = [-1];
        break;
      }
    } else if (sentence[j] === "]") {
      popChar = stack.pop();

      if (popChar !== "[") {
        result = "no";
        stack = [-1];
        break;
      }
    } else {
      continue;
    }
  }
  if (stack.length === 0) {
    result = "yes";
  } else {
    result = "no";
  }

  console.log(result);
}
