const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

// 0: 가로모양 형태, 1: 세로 모양 형태, 2: 대각선 모양 형태
let dp = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => Array(3).fill(0))
);

let map = [];

for (let i = 1; i < input.length; i++) {
  map.push(input[i].split(" ").map(Number));
}

dp[0][1][0] = 1;

// 2부터 세는 이유는 어차피 X축 0, 1은 못가기 때문 (45도만 회전 가능)
for (let i = 0; i < N; i++) {
  for (let j = 2; j < N; j++) {
    // 벽으로는 못 옮기니까 값 누적을 안해버린다.
    // 0으로 초기화된 상태 그대로이므로 다음 블록에서 이전 블록 경우의 수를 누적할 때 벽인 블록은 자연스레 0이 더해지면서 무시되는 효과
    // 이걸로 이전 블록이 벽인 것에 대한 고려는 안 해도 되게 된다.
    if (map[i][j] === 1) {
      continue;
    }
    if (i - 1 >= 0 && j - 1 >= 0) {
      // 대각선 위가 있으면
      dp[i][j][0] = dp[i][j - 1][0] + dp[i][j - 1][2];
      dp[i][j][1] = dp[i - 1][j][1] + dp[i - 1][j][2];
      // 위랑 왼쪽이 뚫려있어야만 대각선 위로부터 올 수 있다.
      if (map[i - 1][j] !== 1 && map[i][j - 1] !== 1) {
        dp[i][j][2] =
          dp[i - 1][j - 1][0] + dp[i - 1][j - 1][1] + dp[i - 1][j - 1][2];
      }
    } else if (i - 1 >= 0) {
      // 맨 왼쪽 끝
      dp[i][j][1] = dp[i - 1][j][1];
    } else if (j - 1 >= 0) {
      // 맨 위
      dp[i][j][0] = dp[i][j - 1][0];
    } else {
      continue;
    }
  }
}

let result = 0;
for (i = 0; i < 3; i++) {
  result += dp[N - 1][N - 1][i];
}

console.log(result);
