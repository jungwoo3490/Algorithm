const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const NM = input[0].split(" ").map(Number);
const N = NM[0];
const M = NM[1];

let count;
let result = "";
let hammingDistance = 0;
const nucleotide = ["A", "C", "G", "T"];
const DNA = [];

for (i = 1; i <= N; i++) {
  DNA.push(input[i].split(""));
}

for (i = 0; i < M; i++) {
  count = [0, 0, 0, 0];

  for (j = 0; j < N; j++) {
    count[nucleotide.indexOf(DNA[j][i])] += 1;
  }

  result += nucleotide[count.indexOf(Math.max(...count))];
  count[count.indexOf(Math.max(...count))] = 0;
  for (k = 0; k < count.length; k++) {
    hammingDistance += count[k];
  }
}

console.log(result);
console.log(hammingDistance);
