const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const NM = input[0].split(" ").map(Number);
const N = NM[0];
const M = NM[1];

let neverHear = [];
let neverSee = [];
let neverHearSee = [];

for (i = 1; i <= N; i++) {
  neverHear.push(input[i]);
}

for (i = N + 1; i <= N + M; i++) {
  neverSee.push(input[i]);
}

let neverHearSet = new Set(neverHear);
let neverSeeSet = new Set(neverSee);

if (neverHear.length < neverSee.length) {
  for (i = 0; i < neverSee.length; i++) {
    if (neverHearSet.has(neverSee[i])) {
      neverHearSee.push(neverSee[i]);
    }
  }
} else {
  for (i = 0; i < neverHear.length; i++) {
    if (neverSeeSet.has(neverHear[i])) {
      neverHearSee.push(neverHear[i]);
    }
  }
}

neverHearSee.sort((a, b) => a.localeCompare(b));

console.log(neverHearSee.length);
console.log(neverHearSee.join("\n"));
