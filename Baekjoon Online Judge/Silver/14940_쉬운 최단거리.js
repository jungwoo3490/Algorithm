const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

let map = [];
let visited = [];
let queue = [];

function bfs() {
  let dy = [-1, 0, 1, 0];
  let dx = [0, 1, 0, -1];

  let time = 0;

  let queueLen, y, x, ny, nx;

  while (queue.length) {
    queueLen = queue.length;

    for (let i = 0; i < queueLen; i++) {
      [y, x] = queue.shift();

      for (let j = 0; j < 4; j++) {
        ny = y + dy[j];
        nx = x + dx[j];

        if (ny < 0 || nx < 0 || ny >= n || nx >= m) {
          continue;
        }

        if (map[ny][nx] === 0) {
          continue;
        }

        if (visited[ny][nx] !== 0) {
          continue;
        }

        visited[ny][nx] = time + 1;
        queue.push([ny, nx]);
      }
    }

    time += 1;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (visited[i][j] === 0 && map[i][j] !== 0) {
        visited[i][j] = -1;
      }

      if (map[i][j] === 2) {
        visited[i][j] = 0;
      }
    }
  }
}

for (let i = 1; i <= n; i++) {
  map.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < n; i++) {
  visited[i] = new Array(m).fill(0);
}

let flag = false;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 2) {
      queue.push([i, j]);
      flag = true;
      break;
    }
  }
  if (flag) {
    break;
  }
}

bfs();

for (let i = 0; i < n; i++) {
  console.log(visited[i].join(" "));
}
