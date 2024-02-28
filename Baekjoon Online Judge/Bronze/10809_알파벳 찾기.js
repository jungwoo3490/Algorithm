const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const word = input[0];

const positionArr = Array(26);
positionArr.fill(-1);

for (i = 0; i < word.length; i++) {
   const ascii = word[i].charCodeAt(0) - 97;
   if (positionArr[ascii] === -1) {
    positionArr[ascii] = i;
   }
}

console.log(positionArr.join(" "));