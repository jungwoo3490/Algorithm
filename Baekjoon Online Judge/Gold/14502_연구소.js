const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let laboratory = [];
let wall = [];
let virus = [];
let safeArea;
let maxSafeArea = -1;
let visited;

function spreadVirus() {
  safeArea = 0;
  visited = new Array(N);
  for (let i = 0; i < visited.length; i++) {
    visited[i] = new Array(M).fill(0);
  }

  for (let i = 0; i < virus.length; i++) {
    dfs(virus[i][0], virus[i][1]);
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (visited[i][j] === 0 && laboratory[i][j] === 0) {
        safeArea += 1;
      }
    }
  }
  return safeArea;
}

function dfs(y, x) {
  let dy = [-1, 0, 1, 0];
  let dx = [0, 1, 0, -1];

  visited[y][x] = 1;

  for (let i = 0; i < 4; i++) {
    if (y + dy[i] < 0 || x + dx[i] < 0 || y + dy[i] >= N || x + dx[i] >= M) {
      continue;
    }

    if (visited[y + dy[i]][x + dx[i]] === 1) {
      continue;
    }

    if (laboratory[y + dy[i]][x + dx[i]] === 1) {
      continue;
    }

    dfs(y + dy[i], x + dx[i]);
  }
}

for (let i = 1; i <= N; i++) {
  laboratory.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (laboratory[i][j] === 0) {
      wall.push([i, j]);
    }

    if (laboratory[i][j] === 2) {
      virus.push([i, j]);
    }
  }
}

for (let i = 0; i < wall.length; i++) {
  for (let j = 0; j < i; j++) {
    for (let k = 0; k < j; k++) {
      laboratory[wall[i][0]][wall[i][1]] = 1;
      laboratory[wall[j][0]][wall[j][1]] = 1;
      laboratory[wall[k][0]][wall[k][1]] = 1;

      maxSafeArea = Math.max(maxSafeArea, spreadVirus());

      laboratory[wall[i][0]][wall[i][1]] = 0;
      laboratory[wall[j][0]][wall[j][1]] = 0;
      laboratory[wall[k][0]][wall[k][1]] = 0;
    }
  }
}

console.log(maxSafeArea);
