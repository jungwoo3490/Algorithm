const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
let dp = Array(K + 1).fill(0);

dp[0] = 1; // 0원을 만드는 건 아무것도 안 쓰는 한 가지 경우뿐

let coins = [];

for (let i = 1; i < input.length; i++) {
  coins.push(Number(input[i]));
}

// 핵심 아이디어
// dp[cur] = dp[cur - 1] + dp[cur - 2] + ... 처럼 모든 동전을 한 번에 고려하면 순열이 된다.
// 이유: 2 + 1과 1 + 2처럼 순서만 다른 경우가 각각 다른 경로로 계산되기 때문.

// 조합으로 만들기 위해서는 항상 같은 순서로만 동전을 붙여야 한다.
// => 바깥 루프에서 동전을 차례대로 처리하면, 이전에 만든 조합 뒤에만 새로운 동전을 추가하게 되어 순서가 뒤집히는 경우가 생기지 않는다.

// 루프 안에서 돌리면, 재귀를 타면서 내부에서 모든 경우의 수를 계산하기 떄문에 중간에 어떤 수가 올지 모른다. -> 중복 발생 가능성

// 구현 방법:
// 1. 동전을 바깥 루프에서 하나씩 선택한다.
// 2. 해당 동전을 사용해서 만들 수 있는 모든 금액을 순차적으로 dp에 누적한다.
// 3. 이후에 나오는 동전은 이미 완성된 조합 뒤에만 추가되므로 중복이 생기지 않는다.
for (let i = 0; i < coins.length; i++) {
  let coin = coins[i];
  for (let j = 1; j <= K; j++) {
    if (j - coin >= 0) {
      dp[j] += dp[j - coin];
    }
  }
}

console.log(dp[K]);
