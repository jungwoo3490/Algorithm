const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

const dp = Array(N + 1).fill(0);

let nextArr = Array(N + 1).fill(0);

function recursive(num) {
  // num에서 1을 만들 수 있는 최소 연산 수는 0 -> 3가지 뭘 쓰든 만들 방법이 없다.
  if (num === 1) {
    return 0;
  }

  // dp 값 있으면 그거 쓰기
  if (dp[num] !== 0) {
    return dp[num];
  }

  let min = N + 1; // 최솟값
  let next = 0; // 다음에 갈 곳이 어디인지 담는 변수

  if (num % 3 === 0) {
    let case1 = recursive(num / 3);
    if (case1 < min) {
      min = case1;
      next = num / 3;
    }
  }

  if (num % 2 === 0) {
    let case2 = recursive(num / 2);
    if (case2 < min) {
      min = case2;
      next = num / 2;
    }
  }

  let case3 = recursive(num - 1);

  if (case3 < min) {
    min = case3;
    next = num - 1;
  }

  dp[num] = min + 1;
  nextArr[num] = next; // num의 다음으로 갈 곳에 next를 담는다.
  return min + 1; // 재귀마다 연산 1번이므로 1 더한 값 반환
}

console.log(recursive(N));

// 역추적 배열
let route = [];

let cur = N;

// N부터 시작해서 다음이 어디였는지 쭈욱 출력
while (true) {
  route.push(cur);

  if (cur === 1) {
    break;
  }

  cur = nextArr[cur];
}

console.log(route.join(" "));
