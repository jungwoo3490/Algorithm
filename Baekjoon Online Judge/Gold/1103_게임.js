const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let map = [];

const [N, M] = input[0].split(" ").map(Number);

for (let i = 1; i < input.length; i++) {
  map.push(input[i].split(""));
}

let visited = Array.from({ length: N }, () => Array(M).fill(0));

visited[0][0] = 1;

let dy = [-1, 0, 1, 0];
let dx = [0, 1, 0, -1];

let inf = false;

// 해당 위치에서 게임 종료할때까지 최대 이동 횟수 DP
let dp = Array.from({ length: N }, () => Array(M).fill(0));

function dfs(y, x) {
  if (dp[y][x] !== 0) {
    return dp[y][x];
  }

  let move = Number(map[y][x]);
  let maxCount = 0;

  for (let i = 0; i < 4; i++) {
    let ny = y + move * dy[i];
    let nx = x + move * dx[i];

    if (ny < 0 || nx < 0 || ny >= N || nx >= M) {
      continue;
    }

    // 구멍에 빠지면 어차피 게임 끝나므로 방문 안 함
    if (map[ny][nx] === "H") {
      continue;
    }

    // 방문한 곳에 또 방문하는 길이 존재하면 사이클이 생겼다는 뜻이므로 무한이다.
    if (visited[ny][nx] === 1) {
      inf = true;
      break;
    }

    // 백트래킹
    visited[ny][nx] = 1;

    let count = dfs(ny, nx);

    // 다녀온 횟수가 최대 횟수보다 크면, 그 친구가 최대 횟수이다.
    if (count > maxCount) {
      maxCount = count;
    }

    visited[ny][nx] = 0;
  }

  // 한 번 이동할떄 1번 카운트하므로 1
  dp[y][x] = maxCount + 1; // dp 저장
  return maxCount + 1;
}

let resultCount = dfs(0, 0);

if (inf) {
  console.log(-1);
} else {
  console.log(resultCount);
}
