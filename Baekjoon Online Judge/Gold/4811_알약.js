const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let dp = Array.from({ length: 31 }, () => Array(31).fill(0));

for (let i = 0; i < input.length - 1; i++) {
  let N = Number(input[i]);
  let dp = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

  function total(one, half) {
    if (one === 0 && half === 0) {
      return 1;
    }

    if (dp[one][half] !== 0) {
      return dp[one][half];
    }

    let tot;

    if (one === 0) {
      tot = total(one, half - 1);
    } else if (half === 0) {
      tot = total(one - 1, half + 1);
    } else {
      tot = total(one - 1, half + 1) + total(one, half - 1);
    }
    dp[one][half] = tot;
    return tot;
  }

  console.log(total(N, 0));
}
