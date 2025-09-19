const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);

let dp = Array(K + 1).fill(null);

let coins = [];

// 0개 쓰면 0원이니까 기저 0 (값 누적할때 0 + 1 이렇게 되어야 함)
dp[0] = 0;

// 단위가 되는 동전만큼의 원은 그거 하나 쓰는게 최소이니까 1
for (let i = 1; i < input.length; i++) {
  coins.push(Number(input[i]));
  dp[Number(input[i])] = 1;
}

// 혹시 모른 정렬
coins.sort((a, b) => a - b);

// 채워지지 않은 1부터 채우기 시작한다.
for (let i = 1; i < K + 1; i++) {
  // 가능한 동전 개수는 K개이므로 K + 1부터 시작
  let minCoin = K + 1;
  // 모든 동전을 뒤지면서
  for (let j = 0; j < coins.length; j++) {
    if (
      // dp 최소 인덱스 벗어나지 않도록
      i - coins[j] >= 0 &&
      // -1이면 불가능하다는 것이므로 최소비교에서 무시를 해야 한다.
      dp[i - coins[j]] !== -1 &&
      // min보다 작으면?
      dp[i - coins[j]] < minCoin
    ) {
      // 최소 개수 갱신
      minCoin = dp[i - coins[j]];
    }
  }

  // 초기값이랑 같으면, 저 조건이 다 팅겼다는 뜻 -> 만들 수 없음
  if (minCoin === K + 1) {
    dp[i] = -1;
  } else {
    // 최소에다가 하나 더 쓴거니까 1 더하기
    dp[i] = minCoin + 1;
  }
}

console.log(dp[K]);

// 재귀로 풀어보기

// function minCoin(num) {
//   if (dp[num] !== null) {
//     return dp[num];
//   }

//   let min = K + 1;

//   for (let i = 0; i < coins.length; i++) {
//     let m = 0;
//     if (num - coins[i] >= 0) {
//       m = minCoin(num - coins[i]);
//       if (m !== -1 && m < min) {
//         min = m;
//       }
//     }
//   }

//   if (min === K + 1) {
//     dp[num] = -1;
//     return -1;
//   } else {
//     dp[num] = min + 1;
//     return min + 1;
//   }
// }

// console.log(minCoin(K));
