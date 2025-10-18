// 이중 for문으로 완전탐색 => 50000 * 100000 -> 50억번 효율성 시간초과

// 1. 현재 info가 해당되는 모든 경우의 수 map에 key로, 점수는 value로 push
// 2. Map에서 각 value 배열 정렬
// 3. 쿼리 나오면 그 키로 map value 배열 조회해서 이분탐색으로 명수 세기, 명수는 배열 길이에서 처음으로 target 이상의 수가 나오는 위치를 뺀 값

// 모든 경우의 수 구하는 함수
function getAllCase(curInfo, splitArr) {
  let len = curInfo.length;

  if (len === 4) {
    return [curInfo];
  }

  let allCase = [];
  allCase.push(...getAllCase([...curInfo, splitArr[len]], splitArr));
  allCase.push(...getAllCase([...curInfo, "-"], splitArr));
  return allCase;
}

function solution(info, query) {
  var answer = [];

  // 1
  // key는 `${개발언어} ${직군} ${경력} ${소울푸드}`, value는 이걸 만족하는 사람들의 점수 분포 배열
  let infoMap = new Map();

  for (let i = 0; i < info.length; i++) {
    let splitArr = info[i].split(" ").slice(0, 4);
    let point = Number(info[i].split(" ").slice(4));
    let allCase = getAllCase([], splitArr);

    for (let j = 0; j < allCase.length; j++) {
      let k = allCase[j].join(" ");
      let v = infoMap.get(k);
      // 이렇게 하니까 시간초과 났다.
      // if (v === undefined) {
      //     infoMap.set(k, [point]);
      // } else {
      // 여기가 문제인데, 계속 새 배열을 만들고 기존 요소를 복사하므로 시간복잡도 O(n)
      //     infoMap.set(k, [...v, point]);
      // }
      if (!infoMap.has(k)) {
        infoMap.set(k, []);
      }
      // 이렇게 하면 그냥 기존 배열에 point 추가 하나 하는거라 시간복잡도 O(1)을 보장한다.
      // map.get()으로 가져오는 건 배열 복사체가 아니라 원본 배열에 대한 참조이기 때문에 그냥 push 메소드로 원본 map을 변경할 수 있다.
      infoMap.get(k).push(point);
    }
  }

  // 2
  // 이분탐색 위해 오름차순 정렬
  // 어? 근데 만약 배열이 100개인데, 조회할 쿼리가 2개뿐이면, 나머지 98개 배열은 의미없는 정렬 아닌가? 그때그때 쿼리한 결과를 받아서 정렬하는게 이득 아닌가...? 라는 생각을 했는데 시간초과가 났다.
  // 결론적으로는 첨에 이렇게 미리 다 정렬해두는게 이 문제에서는 이득이다.
  // 왜냐면 총 map 요소 수는 4x3x3x3 = 108개인데, query는 최대 10만개이다.
  // 108개 이상의 쿼리가 조회된다면 반드시 겹치는 게 존재한다는 뜻이고, 최대 10만개이므로... 쿼리 중복이 엄청나다
  // 즉, 108개 배열 정렬할 걱정보다 쿼리 중복에 대한 걱정을 신경써야 한다. 그래서 그때그때 조회 -> 정렬이 아니라 108개 미리 정렬하도록 했다.
  for (const [k, v] of infoMap) {
    v.sort((a, b) => a - b);
  }

  // 3
  for (let i = 0; i < query.length; i++) {
    let splitArr = query[i].split(" and ");
    let soulFood = splitArr[3].split(" ")[0];
    let target = Number(splitArr[3].split(" ")[1]);
    let pointArr = infoMap.get(
      `${splitArr[0]} ${splitArr[1]} ${splitArr[2]} ${soulFood}`
    );

    // 조회했는데 아예 info에 나온 적 없는 정보를 조회하면 당연히 0명
    if (pointArr === undefined) {
      answer.push(0);
      continue;
    }

    // 여기서 정렬하면 효율성 박살남 -> 같은 key로 중복조회 가능성이 있어서 비효율적
    // pointArr.sort((a, b) => a - b);

    // 이분탐색

    let mid;
    let left = 0;
    let right = pointArr.length - 1;

    while (true) {
      if (left > right) {
        break;
      }

      mid = Math.floor((left + right) / 2);
      // 기준 점수보다 크거나 같으면 앞을 뒤지기
      // 같을 때도 앞을 검사하는 이유는, 처음으로 target 이상의 수가 나오는 위치를 찾아야 하기 때문이다.
      // target과 같아도 내 앞에 또 target이 있을 수 있기 때문
      if (pointArr[mid] >= target) {
        right = mid - 1;
      } else {
        // 아님 뒤를 뒤지기
        left = mid + 1;
      }
    }

    answer.push(pointArr.length - left);
  }

  return answer;
}
