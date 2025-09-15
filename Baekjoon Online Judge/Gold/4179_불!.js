const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [R, C] = input[0].split(" ").map(Number);
let map = [];
for (let i = 1; i < input.length; i++) {
  map.push(input[i].split(""));
}

let fireQueue = [];
let queue = [];

let visited = Array.from({ length: R }, () => Array(C).fill(0));

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (map[i][j] === "F") {
      fireQueue.push([i, j]);
    }
    if (map[i][j] === "J") {
      queue.push([i, j]);
      visited[i][j] = 1;
    }
  }
}

let minutes = 0;
let end = false;

let dy = [-1, 0, 1, 0];
let dx = [0, 1, 0, -1];

// 갈 곳이 없으면 끝
while (queue.length !== 0) {
  // 1분 경과
  minutes += 1;

  // 불 먼저 퍼뜨리기
  // 불을 먼저 퍼뜨려야 사람이 이동하는 경로를 단축할 수 있다.
  // 어차피 사람 이동 -> 불 퍼짐 일때 불과 사람이 겹치면 사람이 타죽으므로, 불 퍼질 위치를 먼저 구해서 거기로는 사람이 못 가도록 탐색 진행
  let fireLen = fireQueue.length;

  for (let i = 0; i < fireLen; i++) {
    let [fy, fx] = fireQueue.shift();

    for (let j = 0; j < 4; j++) {
      let ny = fy + dy[j];
      let nx = fx + dx[j];

      if (ny < 0 || ny >= R || nx < 0 || nx >= C) {
        continue;
      }

      if (map[ny][nx] === "#" || map[ny][nx] === "F") {
        continue;
      }

      // 사람이 이동한 곳에 불이 퍼지지 말아야 하는건 아니므로 visited는 검사 X

      fireQueue.push([ny, nx]);
      map[ny][nx] = "F";
    }
  }

  let len = queue.length;

  // 사람 이동

  for (let i = 0; i < len; i++) {
    let [y, x] = queue.shift();

    for (let j = 0; j < 4; j++) {
      let ny = y + dy[j];
      let nx = x + dx[j];

      // 탈출
      if (ny < 0 || ny >= R || nx < 0 || nx >= C) {
        end = true;
        break;
      }

      if (map[ny][nx] === "#" || map[ny][nx] === "F") {
        continue;
      }

      if (visited[ny][nx] === 1) {
        continue;
      }

      queue.push([ny, nx]);
      visited[ny][nx] = 1;
    }

    // 끝났으면 큐 그만 뒤져도 댐 -> 어차피 현재 시간에 끝나므로
    if (end) {
      break;
    }
  }
  if (end) {
    break;
  }
}

if (end) {
  console.log(minutes);
} else {
  console.log("IMPOSSIBLE");
}
