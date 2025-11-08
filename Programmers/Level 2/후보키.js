// 조합 구하는 재귀함수
function getCombination(arr, n) {
  if (n === 1) {
    return arr.map((el) => [el]);
  }

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let rest = arr.slice(i + 1);
    let restComb = getCombination(rest, n - 1);
    result.push(...restComb.map((el) => [arr[i], ...el]));
  }

  return result;
}

function solution(relation) {
  var answer = 0;

  let columnLen = relation[0].length;

  let columns = [];

  let candidateKeys = [];

  // 컬럼 번호 배열
  for (let i = 0; i < columnLen; i++) {
    columns.push(i);
  }

  // 조합해야 하는 컬럼 개수
  let keyCount = 1;

  while (true) {
    // 조합해야 하는 컬럼 개수가 전체 컬럼 개수보다 커지면 종료
    if (keyCount > columnLen) {
      break;
    }

    let colComb = getCombination(columns, keyCount);

    for (let i = 0; i < colComb.length; i++) {
      let dupCheckArr = [];
      // 중복 튜플 체크 flag
      let isDup = false;

      for (let j = 0; j < relation.length; j++) {
        let key = "";
        for (let k = 0; k < colComb[i].length; k++) {
          // 여러 컬럼을 하나의 문자열로 붙여서 비교하기
          key += relation[j][colComb[i][k]];
        }
        // 키 유일성 검사
        // 컬럼 붙인 키가 이미 나왔으면, 중복된 튜플이 있는 것
        if (dupCheckArr.includes(key)) {
          isDup = true;
          break;
        } else {
          // 아니면 중복 튜플 체크 배열에 push
          dupCheckArr.push(key);
        }
      }

      // 예외케이스가 몇 가지 있다!!

      // 1. 이미 나온 컬럼을 조합 후보에서 제거할 경우
      // [2, 3]이 나왔는데, [1, 3, 4]가 후보키인 경우를 못 구한다.
      // => 제거하지 말고, 모든 경우를 생각해야 한다.

      // 2. 컬럼을 join한 다음 includes로 검사할 경우
      // 24 234 일 경우
      // 234를 걸러야 하는데 못 거른다.
      // => includes 말고, 모든 컬럼이 다 포함되어 있는지 확인해야 한다!!

      // 만약 현재 키가 튜플들끼리 중복 없으면
      if (isDup === false) {
        // 최소성을 만족하는지 확인하자
        let isSmallest = true;
        let curKey = colComb[i].join("");
        for (let j = 0; j < candidateKeys.length; j++) {
          // 모든 컬럼이 현재 조합에 포함되어있는지 검사하는 flag
          let isAllIncluded = true;
          for (let k = 0; k < candidateKeys[j].length; k++) {
            // 포함되지 않은 컬럼이 있네?
            if (curKey.indexOf(candidateKeys[j][k]) === -1) {
              // 모든 컬럼이 현재 조합에 포함되지는 않았다.
              isAllIncluded = false;
            }
          }

          // 모든 컬럼이 현재 조합에 포함되어 있는 후보키가 이미 나왔으면
          if (isAllIncluded === true) {
            // 최소성을 만족하지 못한다.
            isSmallest = false;
          }
        }

        // 최소성을 만족할 경우만 후보키에 추가한다.
        if (isSmallest === true) {
          candidateKeys.push(curKey);
        }
      }
    }

    // 조합해야 하는 컬럼 개수 루프마다 1씩 증가
    keyCount += 1;
  }

  return candidateKeys.length;
}
