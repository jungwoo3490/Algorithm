// 탈출조건 3가지

// 1. 격자 바깥으로 나갈 수 없는건 DFS로 검사
// 2. 이동거리가 k여야 함, count값을 넘겨서 k === count이면 종료하고 목적지에 도달했으면 누적 string rpush. 재방문 가능 -> visited가 필요없을듯
// 3. 사전순으로 가장 빠르려면 d -> l -> r -> u 순으로 검사해야 한다.

// DFS하니까 예시 TC 올클리어이지만 제출 결과 대부분 시간초과... 시간복잡도 줄일 방법 없나?
// 더 가볼 것도 없는 경우는 아예 방문조차 하지 않도록 pruning을 해보자.
// d -> l -> r -> u 순으로 검사해서 가장 먼저 발견하면 break -> 이것도 시간초과...
// 현위치에서 목적지까지 최단거리가 남은 이동 가능 횟수보다 크면 어떤 방법을 써서라도 목적지에 도달할 수 없다. 그러므로 pruning -> 31번 TC 제외하고 통과
// 현위치에서 목적지까지 최단거리의 홀짝여부가 남은 이동 가능 횟수의 홀짝여부와 다르면 어떤 방법을 써서라도 목적지에 도달할 수 없다. -> 통과

function solution(n, m, x, y, r, c, k) {
  let answer = "";

  // d -> l -> r -> u 순으로 탐색하기 위한 빌드업
  let dx = [1, 0, 0, -1];
  let dy = [0, -1, 1, 0];
  let directions = ["d", "l", "r", "u"];

  function dfs(x, y, pathStr) {
    // 현 위치에서 목적지까지의 거리
    const dist = Math.abs(x - (r - 1)) + Math.abs(y - (c - 1));

    // 현위치에서 목적지까지 최단거리가 남은 이동 가능 횟수보다 크면 pruning
    if (dist > k - pathStr.length) {
      return;
    }

    // 현위치에서 목적지까지 최단거리의 홀짝여부가 남은 이동 가능 횟수의 홀짝여부와 다르면 pruning
    if (dist % 2 !== (k - pathStr.length) % 2) {
      return;
    }

    // 이미 답을 찾았으면 pruning
    if (answer.length !== 0) {
      return;
    }

    // 만약 k번 다 왔는데
    if (pathStr.length === k) {
      // 목적지와 현 위치가 일치하면
      if (x === r - 1 && y === c - 1) {
        // 정답 문자열에 경로 할당. 사전순으로 검사하므로 첫번째로 찾는 이 경로가 곧 최종 정답일수밖에 없다.
        answer = pathStr;
      }
      return;
    }

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      let direction = directions[i];

      // 미로 벗어날 수 없다.
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
        continue;
      }

      // 계속 경로 추가하며 dfs
      dfs(nx, ny, pathStr + direction);
    }
  }

  // 시작지점, 경로는 빈 채로 dfs 시작
  dfs(x - 1, y - 1, "");

  // 만약 정답 문자열에 아무것도 할당 안 됐으면 갈 방법이 없다는 의미
  if (answer.length === 0) {
    return "impossible";
  }

  // 처음으로 찾은 경로 출력
  return answer;
}
