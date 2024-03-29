const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

const map = [];
let queue = [];
let result = [];
let isHome = [];

function bfs() {
  let homeCount = 1;
  let queueLen, y, x, ny, nx;

  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];

  while (queue.length) {
    queueLen = queue.length;

    for (let i = 0; i < queueLen; i++) {
      [y, x] = queue.shift();

      for (let j = 0; j < 4; j++) {
        ny = y + dy[j];
        nx = x + dx[j];

        if (ny < 0 || nx < 0 || ny >= N || nx >= N) {
          continue;
        }

        if (map[ny][nx] === 0) {
          continue;
        }

        map[ny][nx] = 0;
        queue.push([ny, nx]);
        homeCount += 1;
      }
    }
  }

  result.push(homeCount);
}

function findHome() {
  let home;

  while (isHome.length) {
    home = isHome.shift();
    if (map[home[0]][home[1]] === 1) {
      map[home[0]][home[1]] = 0;
      queue.push([home[0], home[1]]);

      bfs();
    }
  }
}

for (let i = 1; i <= N; i++) {
  map.push(input[i].split("").map(Number));
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1) {
      isHome.push([i, j]);
    }
  }
}

findHome();

result.sort((a, b) => a - b);

console.log(result.length);
console.log(result.join("\n"));
