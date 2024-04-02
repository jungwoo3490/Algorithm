const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [R, C] = input[0].split(" ").map(Number);

let map = [];
for (let i = 1; i <= R; i++) {
  map.push(input[i].split(""));
}

let visited = new Array(26).fill(0);
let result = 1;

function dfs(y, x, count) {
  let ny, nx;

  if (result < count) {
    result = count;
  }

  let dy = [-1, 0, 1, 0];
  let dx = [0, 1, 0, -1];

  for (let i = 0; i < 4; i++) {
    ny = y + dy[i];
    nx = x + dx[i];

    if (ny < 0 || nx < 0 || ny >= R || nx >= C) {
      continue;
    }

    if (visited[map[ny][nx].charCodeAt() - 65] === 1) {
      continue;
    }

    visited[map[ny][nx].charCodeAt() - 65] = 1;
    dfs(ny, nx, count + 1);
    visited[map[ny][nx].charCodeAt() - 65] = 0;
  }
}

visited[map[0][0].charCodeAt() - 65] = 1;

dfs(0, 0, 1);

console.log(result);
