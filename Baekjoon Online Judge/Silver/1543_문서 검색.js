const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const text = input[0];
const searchText = input[1];

let count = 0;
let subText;

for (i = 0; i <= text.length - searchText.length; i++) {
  subText = text.substring(i, i + searchText.length);

  if (searchText === subText) {
    count += 1;
    i += searchText.length - 1;
  }
}

console.log(count);
