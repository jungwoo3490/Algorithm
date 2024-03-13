const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let numStr, isPalindrome;

for (i = 0; i < input.length - 1; i++) {
  numStr = input[i];
  isPalindrome = true;

  for (j = 0; j < Math.trunc(numStr.length / 2); j++) {
    if (numStr[j] !== numStr[numStr.length - j - 1]) {
      isPalindrome = false;
    }
  }

  if (isPalindrome) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
