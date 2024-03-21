const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);

let doubleStr;

for (i = 1; i <= T; i++) {
  doubleStr = String(Number(input[i]) ** 2);

  if (
    doubleStr.substring(
      doubleStr.length - input[i].length,
      doubleStr.length
    ) === input[i]
  ) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
