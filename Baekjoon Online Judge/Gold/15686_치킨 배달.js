const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function getCombinations(arr, num) {
  let result = [];

  if (num === 1) {
    return arr.map((el) => [el]);
  }

  arr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const comb = getCombinations(rest, num - 1);
    result.push(...comb.map((el) => [fixed, ...el]));
  });

  return result;
}

function getDistance(y1, x1, y2, x2) {
  return Math.abs(y2 - y1) + Math.abs(x2 - x1);
}

let [N, M] = input[0].split(" ").map(Number);

let map = [];

for (let i = 1; i <= N; i++) {
  map.push(input[i].split(" ").map(Number));
}

let 치킨집 = [];
let 집 = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1) {
      집.push([i, j]);
    }

    if (map[i][j] === 2) {
      치킨집.push([i, j]);
    }
  }
}

let 치킨집Comb = [];

for (let i = 1; i <= M; i++) {
  치킨집Comb.push(...getCombinations(치킨집, i));
}

let result = 99999;

for (let i = 0; i < 치킨집Comb.length; i++) {
  let 누적 = 0;
  for (let j = 0; j < 집.length; j++) {
    let minDist = 99999;
    for (let k = 0; k < 치킨집Comb[i].length; k++) {
      let curDist = getDistance(
        치킨집Comb[i][k][0],
        치킨집Comb[i][k][1],
        집[j][0],
        집[j][1]
      );
      if (curDist < minDist) {
        minDist = curDist;
      }
    }
    누적 += minDist;
  }

  if (누적 < result) {
    result = 누적;
  }
}

console.log(result);
