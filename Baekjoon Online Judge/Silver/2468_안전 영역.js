const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let area = [];

let size = input.length - 1;

for (let i = 1; i < input.length; i++) {
  area.push(input[i].split(" ").map(Number));
}

let minHeight = 101;
let maxHeight = 0;

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if (area[i][j] < minHeight) {
      minHeight = area[i][j];
    }
    if (area[i][j] > maxHeight) {
      maxHeight = area[i][j];
    }
  }
}

let maxSafeCount = 0;

// -1로 한 이유는 minHeight만큼 비가 오면 minHeight은 잠기기 때문에 minHeight이 잠기지 않는 케이스(다 안 잠기는 케이스)도 비교해보기 위해
for (let i = minHeight - 1; i <= maxHeight; i++) {
  let map = [];
  let visited = [];

  function dfs(y, x) {
    visited[y][x] = 1;

    let dy = [-1, 0, 1, 0];
    let dx = [0, 1, 0, -1];

    for (let l = 0; l < 4; l++) {
      ny = y + dy[l];
      nx = x + dx[l];

      if (ny < 0 || ny >= size || nx < 0 || nx >= size) {
        continue;
      }

      if (visited[ny][nx] === 1) {
        continue;
      }

      if (map[ny][nx] === 0) {
        continue;
      }

      dfs(ny, nx);
    }
  }

  for (let j = 0; j < size; j++) {
    let mapRow = [];
    let visitedRow = [];
    for (let k = 0; k < size; k++) {
      if (area[j][k] <= i) {
        mapRow.push(0);
      } else {
        mapRow.push(1);
      }

      visitedRow.push(0);
    }
    map.push(mapRow);
    visited.push(visitedRow);
  }

  let safeCount = 0;

  for (let j = 0; j < size; j++) {
    for (let k = 0; k < size; k++) {
      if (map[j][k] === 1 && visited[j][k] === 0) {
        dfs(j, k);
        safeCount += 1;
      }
    }
  }

  if (safeCount > maxSafeCount) {
    maxSafeCount = safeCount;
  }
}

console.log(maxSafeCount);
