const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [T, W] = input[0].split(" ").map(Number);

let dp = Array.from({ length: T + 1 }, () =>
  Array.from({ length: W + 2 }, () => [0, 0])
);

// 1초에
// 무조건 0에서 온다.
if (Number(input[1]) === 1) {
  // 1에 사과가 떨어지면
  dp[1][W][0] = 1;
  dp[1][W - 1][1] = 0;
} else {
  // 2에 사과가 떨어지면
  dp[1][W][0] = 0;
  dp[1][W - 1][1] = 1;
}

// i는 시간
// j는 남은 횟수

for (let i = 2; i <= T; i++) {
  let cur = Number(input[i]);
  for (let j = 0; j <= W; j++) {
    if (cur === 1) {
      // 1에 사과가 떨어지면
      dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j + 1][1]) + 1;
      dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j + 1][0]);
    } else {
      // 2에 사과가 떨어지면
      dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j + 1][1]);
      dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j + 1][0]) + 1;
    }
  }
}

let max = -1;

for (let i = 0; i <= W; i++) {
  if (dp[T][i][0] > max) {
    max = dp[T][i][0];
  }

  if (dp[T][i][1] > max) {
    max = dp[T][i][1];
  }
}

console.log(max);
