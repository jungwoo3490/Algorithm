const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function dfs(y, x) {
  let cnt = 1;
  visited[y][x] = 1;
  let dy = [-1, 0, 1, 0];
  let dx = [0, 1, 0, -1];

  for (let i = 0; i < 4; i++) {
    ny = y + dy[i];
    nx = x + dx[i];

    if (ny < 0 || ny >= M || nx < 0 || nx >= N) {
      continue;
    }

    if (visited[ny][nx] === 1) {
      continue;
    }

    if (map[ny][nx] === 0) {
      continue;
    }

    cnt += dfs(ny, nx);
  }

  return cnt;
}

const [M, N, K] = input[0].split(" ").map(Number);

let map = Array.from({ length: M }, () => Array(N).fill(1));
let visited = Array.from({ length: M }, () => Array(N).fill(0));

for (let i = 1; i < input.length; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);

  for (let j = y1; j < y2; j++) {
    for (let k = x1; k < x2; k++) {
      map[j][k] = 0;
    }
  }
}

let resArr = [];

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1 && visited[i][j] === 0) {
      let cnt = dfs(i, j);
      resArr.push(cnt);
    }
  }
}

console.log(resArr.length);
console.log(resArr.sort((a, b) => a - b).join(" "));
