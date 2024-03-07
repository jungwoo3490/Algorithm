const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const NM = input[0].split(" ").map(Number);
const N = NM[0];
const M = NM[1];

let board = [];
let countArr = [];

for (i = 1; i <= N; i++) {
  board.push(input[i].split(""));
}

const BlackBoard = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

const WhiteBoard = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

function countBlackBoardDiff(i, j) {
  let count = 0;
  for (k = 0; k < 8; k++) {
    for (l = 0; l < 8; l++) {
      if (BlackBoard[k][l] !== board[i + k][j + l]) {
        count += 1;
      }
    }
  }
  return count;
}

function countWhiteBoardDiff(i, j) {
  let count = 0;
  for (k = 0; k < 8; k++) {
    for (l = 0; l < 8; l++) {
      if (WhiteBoard[k][l] !== board[i + k][j + l]) {
        count += 1;
      }
    }
  }
  return count;
}

for (i = 0; i <= N - 8; i++) {
  for (j = 0; j <= M - 8; j++) {
    countArr.push(
      Math.min(countWhiteBoardDiff(i, j), countBlackBoardDiff(i, j))
    );
  }
}

console.log(Math.min(...countArr));
