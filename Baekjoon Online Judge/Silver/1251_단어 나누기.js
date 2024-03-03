const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const word = input[0];
let wordList = [];
let word1, word2, word3;

for (i = 1; i < word.length; i++) {
  for (j = i + 1; j < word.length; j++) {
    word1 = word.slice(0, i);
    word2 = word.slice(i, j);
    word3 = word.slice(j, word.length);

    word1 = word1.split("").reverse().join("");
    word2 = word2.split("").reverse().join("");
    word3 = word3.split("").reverse().join("");

    wordList.push(word1 + word2 + word3);
  }
}

wordList.sort();

console.log(wordList[0]);
