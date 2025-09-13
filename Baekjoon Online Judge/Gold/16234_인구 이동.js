const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, L, R] = input[0].split(" ").map(Number);

let day = 0;

let map = [];
let 누적배열 = [];
for (let i = 1; i < input.length; i++) {
  map.push(input[i].split(" ").map(Number));
}

while (true) {
  let unitNum = 0; // 연합 번호
  let unitAvgArr = []; // 연합 평균 (0번 인덱스는 0번 연합)
  let visited = Array.from({ length: N }, () => Array(N).fill(-1));

  function dfs(y, x, unitNum) {
    visited[y][x] = unitNum;

    let dy = [-1, 0, 1, 0];
    let dx = [0, 1, 0, -1];

    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];

      if (ny < 0 || ny >= N || nx < 0 || nx >= N) {
        continue;
      }

      if (visited[ny][nx] !== -1) {
        continue;
      }

      let diff = Math.abs(map[y][x] - map[ny][nx]);

      if (diff < L || diff > R) {
        continue;
      }

      dfs(ny, nx, unitNum);
    }
    curTotal = 누적배열[누적배열.length - 1] + map[y][x];
    누적배열.push(curTotal);
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i][j] === -1) {
        누적배열 = [0];
        dfs(i, j, unitNum);

        unitAvgArr.push(
          Math.floor(누적배열[누적배열.length - 1] / (누적배열.length - 1))
        );
        unitNum += 1;
      }
    }
  }

  if (unitAvgArr.length === N * N) {
    break;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i][j] !== -1) {
        map[i][j] = unitAvgArr[visited[i][j]];
      }
    }
  }

  day += 1;
}

console.log(day);
