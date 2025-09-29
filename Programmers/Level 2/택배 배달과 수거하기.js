// 1. 최대한 싣기
// 2. 뒤의 집부터 반복 돌면서 배달이 필요한 마지막 집 구하기, 거기부터 택배 수 줄인다.
// 3. 뒤의 집부터 반복 돌면서 수거 필요한 마지막 집 구하기, 거기부터 수거 수 줄인다.
// 4. 배달이 필요한 마지막 집, 수거가 필요한 마지막 집 중 더 먼 곳을 왕복하는 것이 한번 다녀오는 거리가 된다.

function solution(cap, n, deliveries, pickups) {
  var answer = 0;
  let a = 0;
  let lastDelivHome = n - 1;
  let lastPickupHome = n - 1;

  while (true) {
    let flag = true;
    let curCap = cap;

    let firstDelivHome = -1;

    for (let i = lastDelivHome; i >= 0; i--) {
      if (deliveries[i] > 0) {
        flag = false;

        if (firstDelivHome === -1) {
          firstDelivHome = i;
        }
        // 택배 1개, 배달해야 할게 2개면
        // 배달해야 할 거에서 택배 개수를 빼고, 택배는 0개.
        if (deliveries[i] > curCap) {
          deliveries[i] = deliveries[i] - curCap;
          curCap = 0;
        } else {
          // 택배 2개, 배달해야 할게 1개면
          // 배달해야 할 건 0개로 만들고, 택배는 배달해야 한 것만큼 빼기.
          curCap = curCap - deliveries[i];
          deliveries[i] = 0;
        }
      }

      if (curCap <= 0) {
        lastDelivHome = i;
        break;
      }
    }

    let firstPickupHome = -1;

    curCap = cap;
    for (let i = lastPickupHome; i >= 0; i--) {
      if (pickups[i] > 0) {
        flag = false;

        if (firstPickupHome === -1) {
          firstPickupHome = i;
        }

        if (pickups[i] > curCap) {
          pickups[i] = pickups[i] - curCap;
          curCap = 0;
        } else {
          curCap = curCap - pickups[i];
          pickups[i] = 0;
        }
      }

      if (curCap <= 0) {
        lastPickupHome = i;
        break;
      }
    }

    // 택배를 수거한 집도 없고 배달한 집도 없으면 끝
    if (flag) {
      break;
    }

    // 0번 인덱스도 택배차가 가는 데 1의 거리니까 출발지를 -1로 봐야 해서 항상 + 1을 해주고, 왕복이니까 * 2를 누적해준다.
    answer += (Math.max(firstDelivHome, firstPickupHome) + 1) * 2;
  }
  return answer;
}
