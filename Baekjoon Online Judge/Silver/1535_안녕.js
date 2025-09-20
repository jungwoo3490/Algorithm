const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const lifeArr = input[1].split(" ").map(Number);
const joyArr = input[2].split(" ").map(Number);

// dp[h] 체력 h에서의 기쁨의 최댓값
let dp = Array(101).fill(0);

for (let i = 0; i < lifeArr.length; i++) {
  // j - lifeArr[i]가 음수거나 0이면 체력 바닥나서 행복을 못느낀다.
  // 그래서 j > lifeArr[i]를 걸어서 j - lifeArr[i]가 양수범위인 곳까지만 비교
  for (let j = 100; j > lifeArr[i]; j--) {
    dp[j] = Math.max(dp[j], dp[j - lifeArr[i]] + joyArr[i]);
  }
}

console.log(dp[100]);
