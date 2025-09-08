const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);

let f = 1;
let phase = 1;

while (phase <= T) {
  let [M, N, K] = input[f].split(" ").map(Number);

  let count = 0;

  let map = [];
  let visited = [];

  function dfs(y, x) {
    visited[y][x] = 1;
    let dy = [-1, 0, 1, 0];
    let dx = [0, 1, 0, -1];

    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];

      if (ny < 0 || ny >= N || nx < 0 || nx >= M) {
        continue;
      }

      if (map[ny][nx] === 0) {
        continue;
      }
      if (visited[ny][nx] === 1) {
        continue;
      }

      dfs(ny, nx);
    }
  }

  for (let i = 0; i < N; i++) {
    let mapRow = [];
    let visitedRow = [];
    for (let j = 0; j < M; j++) {
      mapRow.push(0);
      visitedRow.push(0);
    }
    map.push(mapRow);
    visited.push(visitedRow);
  }

  for (let i = f + 1; i < K + f + 1; i++) {
    let [x, y] = input[i].split(" ").map(Number);
    map[y][x] = 1;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 1 && visited[i][j] === 0) {
        count += 1;
        dfs(i, j);
      }
    }
  }

  f = f + K + 1;
  phase += 1;

  console.log(count);
}
