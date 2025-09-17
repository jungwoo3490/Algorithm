const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let dp = Array.from({ length: 31 }, () => Array(31).fill(0));

for (let i = 0; i < input.length - 1; i++) {
  let N = Number(input[i]);
  let dp = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

  function total(one, half) {
    // 한가지 문자열 완성!! 경우의 수 1 추가
    if (one === 0 && half === 0) {
      return 1;
    }

    // dp에 값 있으면 그거 반환
    if (dp[one][half] !== 0) {
      return dp[one][half];
    }

    let tot;

    // 하나짜리 알약이 없으면
    if (one === 0) {
      // 반개짜리 먹는 방법 뿐
      tot = total(one, half - 1);
      // 반개짜리 알약이 없으면
    } else if (half === 0) {
      // 하나짜리 먹는 방법 뿐
      tot = total(one - 1, half + 1);
    } else {
      // 아니면 둘 다 할 수 있다
      tot = total(one - 1, half + 1) + total(one, half - 1);
    }
    dp[one][half] = tot;
    return tot;
  }

  console.log(total(N, 0));
}
