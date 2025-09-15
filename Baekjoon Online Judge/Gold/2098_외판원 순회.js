const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input[0]);

let dp = Array.from({ length: 1 << N }, () => Array(N).fill(-1));

let w = [];

for (let i = 1; i < input.length; i++) {
  w.push(input[i].split(" ").map(Number));
}

function TSP(visited, here) {
  // 뭔가 값이 있으면 그거 반환한다.
  if (dp[visited][here] !== -1) {
    return dp[visited][here];
  }

  // 다 돌았으면
  if (visited === (1 << N) - 1) {
    // 0으로 돌아갈 수 없으면 무한대를 반환해서 최솟값 무시시켜버리기
    if (w[here][0] === 0) {
      return Infinity;
    } else {
      // 0으로 돌아가기
      return w[here][0];
    }
  }

  let minCost = Infinity;

  for (let i = 0; i < N; i++) {
    // 방문 안 됐고 (AND 연산), 갈 수 있으면
    if ((visited & (1 << i)) === 0 && w[here][i] !== 0) {
      // 현재에서 다음 가는 비용 + 다음에서 최종 가는 비용
      let cost = w[here][i] + TSP(visited | (1 << i), i);

      // 최소 비용 갱신
      if (cost < minCost) {
        minCost = cost;
      }
    }
  }

  // 최소 비용을 dp에 메모이제이션
  dp[visited][here] = minCost;

  // 최소 비용 반환
  return minCost;
}

// 0에서 출발 (0 방문, 현재 0);
console.log(TSP(1 << 0, 0));
