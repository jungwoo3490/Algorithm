const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const str = input[0];

let now = str[0];
let flag = true;
let count = 0;

for (i = 1; i < str.length; i++) {
  if (now !== str[i]) {
    now = str[i];

    if (flag) {
      count += 1;
      flag = false;
    } else {
      flag = true;
    }
  }
}

console.log(count);
