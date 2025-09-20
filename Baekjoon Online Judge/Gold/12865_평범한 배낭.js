const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, K] = input[0].split(" ").map(Number);
let dp = Array(K + 1).fill(0);

let items = [];

// 하나씩만 골라야 하는 거니까 중복을 무시하면 안된다.
for (let i = 1; i <= N; i++) {
  let [W, V] = input[i].split(" ").map(Number);
  items.push([W, V]);
}

// 중복 허용하지 않았으므로 아이템을 외부 루프에서 순회. 아이템 순서대로 하나씩 dp 배열을 업뎃한다.
for (let i = 0; i < items.length; i++) {
  let [W, V] = items[i];
  // 중복 허용하지 않았으므로 아이템은 역순비교 해야한다. 정순비교는 중복 미허용을 보장 못함.
  for (let j = K; j >= W; j--) {
    if (dp[j - W] + V > dp[j]) {
      dp[j] = dp[j - W] + V;
    }
  }
}

console.log(dp[K]);
