// 1~n번까지 1~10중 멀 쏘는게 이득인가 뒤지는 방법 완탐 해봤는데 시간초과
// 비효율적인 완탐... 왜냐면, 1~2번째에 1을 쏘나, 3~4번째에 1을 쏘나, 2~3번째에 1을 쏘나, 1, 3번째에 1을 쏘나 다 같은 경우인데 중복해서 탐색하고 있기 때문이당...
// 사실? 라이언이 이기려면 어피치보다 1발만 더 쏘면 된다. 2, 3발 더 쏴도 점수는 먹는데, "낮은 점수를 더 많이 맞힌 경우를 반환"해야 한다는 조건이 있으므로 가능한 발 수를 아껴놨다 0점에 몰빵해야 한다.
// 여기서 중요한 점: 라이언이 얻을 수 있는 점수 max와, 차이를 최대로 벌리는 건 다르다.
// ex) 라이언이 얻을 수 있는 점수는 9 2발, 6 1발, 5 1발, 4 1발 => 24점인데, 이 경우 어피치는 10 + 8 + 7 => 25점이고, 오히려 어피치가 이겨버린다...
// Math.max로 라이언이 얻을 수 있는 점수를 비교하지 말고, 어피치와의 점수 차이를 비교하자!

function solution(n, info) {
  var answer = [];
  answer = Array(11).fill(0);

  // count발 남음, 현재 쏠지 말지 고민할 과녁
  // 반환값은 쐈을때, 안 쐈을때 차이값 중 max
  function dfs(count, 과녁, gap) {
    // 다 쐈으면 지금까지 누적된 차이를 반환
    if (과녁 === 11) {
      if (count > 0) {
        // 화살 남았으면
        while (count !== 0) {
          // 남은 화살 0에 몰빵 (꼭 N발을 다 쏴야 하므로)
          answer[10] += 1;
          count -= 1;
        }
      }

      return [[...answer], gap];
    }

    let score = 10 - 과녁;

    // 어피치 쏜것보다 많이 남았으면 쏠래말래 비교
    // 상대가 0 쐈으면 내가 쏘면 내가 먹고 아니면 둘 다 못 먹
    // 상대가 1 이상 쐈으면 내가 쏘면 내가 먹고 안 쏘면 상대가 먹
    if (count > info[과녁]) {
      if (info[과녁] === 0) {
        // 쏜 경우
        // shoot dfs에 answer 보낼때 현재 과녁 인덱스에 어피치보다 1발 더 쏜 만큼 갱신해서 보낸다.
        answer[과녁] = info[과녁] + 1;
        let shoot = dfs(count - (info[과녁] + 1), 과녁 + 1, gap + score);

        // 안 쏜 경우
        // notShoot dfs에 answer 보낼때 현재 과녁 인덱스를 0으로 되돌려놓고 보낸다.
        // answer가 전역으로 관리되므로 0으로 초기화해서 전달해야 한다.
        answer[과녁] = 0;
        let notShoot = dfs(count, 과녁 + 1, gap);

        // 라이언이 가장 큰 점수 차이로 우승할 수 있는 방법이 여러 가지 일 경우, 가장 낮은 점수를 더 많이 맞힌 경우를 return 해주세요. 의 조건을 만족하기 위해서
        // 쐈을때랑 안 쐈을때 결과가 같은 경우 answer 배열을 비교해서 작은 경우 쏘고 아님 안 쏜다.
        if (shoot[1] === notShoot[1]) {
          for (let i = 10; i >= 0; i--) {
            if (shoot[0][i] > notShoot[0][i]) {
              return shoot;
            } else if (notShoot[0][i] > shoot[0][i]) {
              return notShoot;
            } else {
              continue;
            }
          }
        } else if (shoot[1] > notShoot[1]) {
          return shoot;
        } else {
          return notShoot;
        }

        if (shoot[1] > notShoot[1]) {
          return shoot;
        } else {
          return notShoot;
        }
      } else {
        answer[과녁] = info[과녁] + 1;
        let shoot = dfs(count - (info[과녁] + 1), 과녁 + 1, gap + score);
        answer[과녁] = 0;
        let notShoot = dfs(count, 과녁 + 1, gap - score);
        if (shoot[1] > notShoot[1]) {
          return shoot;
        } else {
          return notShoot;
        }
      }
    } else {
      // 남은 발 수가 어피치보다 더 쏠 만큼 충분하지 않은 경우

      // dfs에 answer 보낼때 현재 과녁 인덱스를 0으로 되돌려놓고 보낸다.
      // answer가 전역으로 관리되므로 0으로 초기화해서 전달해야 한다.
      // 왜냐면 이거 안 해주면 0발에 몰빵하는 경우에서 예외가 생긴다.
      // 과녁이 0일때 어피치보다 0발을 더 쏠 만큼 발 수가 부족할 때 여기로 넘어오는데, 여기서 과녁 인덱스를 초기화하지 않을 경우 다른 케이스에서 0발에 몰빵해둔 결과가 누적되어있으면 그게 그대로 넘어가서 결과배열이 이상해진다.
      answer[과녁] = 0;
      if (info[과녁] === 0) {
        return dfs(count, 과녁 + 1, gap);
      } else {
        return dfs(count, 과녁 + 1, gap - score);
      }
    }
  }

  let [resArr, gap] = dfs(n, 0, 0);
  if (gap <= 0) {
    return [-1];
  } else {
    return resArr;
  }
}
