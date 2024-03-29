const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input[0].split(" ").map(Number);

let maze = [];
let ny, nx;
let level = 1;

function bfs() {
  let queue = [[0, 0, level]];

  dy = [-1, 0, 1, 0];
  dx = [0, 1, 0, -1];

  while (queue.length) {
    [y, x, level] = queue.shift();
    visited[y][x] = 1;

    if (y === N - 1 && x === M - 1) {
      return level;
    }

    for (let i = 0; i < 4; i++) {
      ny = y + dy[i];
      nx = x + dx[i];

      if (ny < 0 || nx < 0 || ny >= N || nx >= M) {
        continue;
      }

      if (visited[ny][nx] === 1) {
        continue;
      }

      if (maze[ny][nx] === 0) {
        continue;
      }

      maze[ny][nx] = 0;
      queue.push([ny, nx, level + 1]);
    }
  }
}

for (let i = 1; i <= N; i++) {
  maze.push(input[i].split("").map(Number));
}

let visited = new Array(N);
for (let i = 0; i < N; i++) {
  visited[i] = new Array(M).fill(0);
}

console.log(bfs());
