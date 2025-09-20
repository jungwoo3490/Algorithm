const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let line = 0;

while (true) {
  let [n, m] = input[line].split(" ").map(Number);

  // 종료조건
  if (n === 0) {
    break;
  }

  // 음 m이 소수도 들어올 수 있는데 어떡하지?
  // -> m에 100을 곱하고, 사탕 가격들에도 100을 곱해서 저장하자.
  // 여기가 진짜 중요한 부분인데, 부동소수점 숫자 변환 오류를 방지하기 위해 Math.round 처리
  // 자바스크립트에서 Number는 IEEE 754 부동소수점 형식으로 표현된다.
  // ex) console.log(8.03 * 100); // 803.0000000000001
  // 이걸 Number 그대로 사용하면 dp[803]같은 배열 접근에서 undefined가 반환되는 경우가 발생한다.
  // 이를 해결하기 위해 Math.round로 반올림처리하여 결과값이 정수가 나오도록 보장한다.
  m = Math.round(m * 100);

  // // dp[x] -> x원으로 살 수 있는 최대 칼로리
  let dp = Array(m + 1).fill(0);

  let candy = {};

  // k: 가격, v: 칼로리(최대)
  for (let i = line + 1; i < line + 1 + n; i++) {
    let [cal, pri] = input[i].split(" ").map(Number);
    pri = Math.round(pri * 100);
    if (candy[pri]) {
      if (candy[pri] < cal) {
        candy[pri] = cal;
      } else {
        continue;
      }
    } else {
      candy[pri] = cal;
    }
  }

  let prices = Object.keys(candy)
    .map(Number)
    .sort((a, b) => a - b);

  for (let i = prices[0]; i <= m; i++) {
    let max = 0;
    for (let j = 0; j < prices.length; j++) {
      // 가격보다 돈이 많고, 현재 dp값보다 크면
      if (i - prices[j] >= 0 && dp[i - prices[j]] + candy[prices[j]] > max) {
        max = dp[i - prices[j]] + candy[prices[j]];
      }
    }
    dp[i] = max;
  }

  console.log(dp[m]);

  line += n + 1;
}
