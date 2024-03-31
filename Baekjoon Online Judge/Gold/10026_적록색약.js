const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

let section = [];
let RGCB = [];
let line, RGCBLine;
let count = 0;
let RGCBCount = 0;
let queue = [];
let RGCBQueue = [];

function bfs() {
  let y, x, ny, nx;
  let dy = [-1, 0, 1, 0];
  let dx = [0, 1, 0, -1];

  while (queue.length) {
    [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {
      ny = y + dy[i];
      nx = x + dx[i];

      if (ny < 0 || nx < 0 || ny >= N || nx >= N) {
        continue;
      }

      if (visited[ny][nx] === 1) {
        continue;
      }

      if (section[ny][nx] !== section[y][x]) {
        continue;
      }

      visited[ny][nx] = 1;
      queue.push([ny, nx]);
    }
  }

  return;
}

function RGCBBfs() {
  let y, x, ny, nx;
  let dy = [-1, 0, 1, 0];
  let dx = [0, 1, 0, -1];

  while (RGCBQueue.length) {
    [y, x] = RGCBQueue.shift();

    for (let i = 0; i < 4; i++) {
      ny = y + dy[i];
      nx = x + dx[i];

      if (ny < 0 || nx < 0 || ny >= N || nx >= N) {
        continue;
      }

      if (RGCBVisited[ny][nx] === 1) {
        continue;
      }

      if (RGCB[ny][nx] !== RGCB[y][x]) {
        continue;
      }

      RGCBVisited[ny][nx] = 1;
      RGCBQueue.push([ny, nx]);
    }
  }

  return;
}

for (let i = 1; i <= N; i++) {
  line = input[i].split("");

  section.push(line);

  RGCBLine = [...line];

  for (let j = 0; j < line.length; j++) {
    if (RGCBLine[j] === "R") {
      RGCBLine[j] = "G";
    }
  }

  RGCB.push(RGCBLine);
}

let visited = new Array(N);
let RGCBVisited = new Array(N);

for (let i = 0; i < N; i++) {
  visited[i] = new Array(N).fill(0);
  RGCBVisited[i] = new Array(N).fill(0);
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (visited[i][j] === 0) {
      visited[i][j] = 1;
      queue.push([i, j]);
      bfs();
      count += 1;
    }

    if (RGCBVisited[i][j] === 0) {
      RGCBVisited[i][j] = 1;
      RGCBQueue.push([i, j]);
      RGCBBfs();
      RGCBCount += 1;
    }
  }
}

console.log(count, RGCBCount);
