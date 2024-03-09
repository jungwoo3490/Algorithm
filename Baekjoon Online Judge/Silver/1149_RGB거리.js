const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

let RGB = [];
let nowRGB = [];

RGB[0] = input[1].split(" ").map(Number);

for (i = 1; i < N; i++) {
  nowRGB = input[i + 1].split(" ").map(Number);

  RGB[i] = [];
  RGB[i][0] = Math.min(RGB[i - 1][1], RGB[i - 1][2]) + nowRGB[0];
  RGB[i][1] = Math.min(RGB[i - 1][0], RGB[i - 1][2]) + nowRGB[1];
  RGB[i][2] = Math.min(RGB[i - 1][0], RGB[i - 1][1]) + nowRGB[2];
}

console.log(Math.min(RGB[N - 1][0], RGB[N - 1][1], RGB[N - 1][2]));
