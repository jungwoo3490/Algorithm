const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let map = [];

const [H, W] = input[0].split(" ").map(Number);
for (let i = 1; i < input.length; i++) {
  map.push(input[i].split(" ").map(Number));
}

let hour = 0;
let count = 0;

while (true) {
  let curCount = 0;
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (map[i][j] === 1) {
        curCount += 1;
      }
    }
  }

  if (curCount === 0) {
    // 치즈가 다 녹았으면 종료
    break;
  } else {
    count = curCount;
  }

  let visited = Array.from({ length: H }, () => Array(W).fill(0));

  function dfs(y, x) {
    visited[y][x] = 1;

    let dy = [-1, 0, 1, 0];
    let dx = [0, 1, 0, -1];

    for (let i = 0; i < 4; i++) {
      ny = y + dy[i];
      nx = x + dx[i];

      if (ny < 0 || ny >= H || nx < 0 || nx >= W) {
        continue;
      }

      if (visited[ny][nx] === 1) {
        continue;
      }

      if (map[ny][nx] === 1) {
        map[ny][nx] = 0;
        visited[ny][nx] = 1;
        continue;
      }

      dfs(ny, nx);
    }
  }

  dfs(0, 0);

  hour += 1;
}

console.log(hour);
console.log(count);
