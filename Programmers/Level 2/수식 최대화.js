// 경우의 수 = 3! = 6
// 6개의 케이스를 모두 완전탐색해도 괜찮을 것 같다.

function isNumber(chr) {
  return !isNaN(Number(chr));
}

// 순열 구하는 재귀함수
function getPermutation(arr, n) {
  if (n === 1) {
    return arr.map((el) => [el]);
  }

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let fixed = arr[i];
    let rest = arr.filter((_, idx) => idx !== i);
    let restPer = getPermutation(rest, n - 1);
    result.push(...restPer.map((el) => [arr[i], ...el]));
  }

  return result;
}

function solution(expression) {
  // 3개의 연산자 순열 구하기
  let calOrder = getPermutation(["*", "+", "-"], 3);

  // expression을 배열로 만들기
  let expressionArr = [];

  for (let i = 0; i < expression.length; i++) {
    // 피연산자의 자릿수가 최대 3자리이므로, 숫자를 만났으면 이게 한 자리 수가 아닌지 검사해야 한다.
    // 그래서 뒤에 숫자가 나오면 계속 이어붙여서 배열에 한꺼번에 집어넣는다.
    if (isNumber(expression[i])) {
      let curNum = expression[i];
      while (true) {
        if (!isNumber(expression[i + 1])) {
          expressionArr.push(curNum);
          break;
        } else {
          curNum += expression[i + 1];
          i += 1;
        }
      }
    } else {
      expressionArr.push(expression[i]);
    }
  }

  // 최대 절댓값
  let maxAbs = 0;

  for (let i = 0; i < calOrder.length; i++) {
    curCalOrder = calOrder[i];

    // 다른 순서로도 시도해보아야 하는데, splice는 원본 배열을 변형하므로 복제본 생성
    let copyExpressionArr = [...expressionArr];

    for (let j = 0; j < curCalOrder.length; j++) {
      for (let k = 0; k < copyExpressionArr.length; k++) {
        // 만약 연산자를 만났으면 양쪽에 있는 수를 연산 (중위 연산자이므로)
        // k번째가 연산자이면, k - 1번째와 k + 1번째 수를 k 연산자로 연산해서 결과를 k - 1에 집어넣고, k와 k + 1을 제거하는 방식을 사용
        if (copyExpressionArr[k] === curCalOrder[j]) {
          if (copyExpressionArr[k] === "*") {
            copyExpressionArr[k - 1] =
              Number(copyExpressionArr[k - 1]) *
              Number(copyExpressionArr[k + 1]);
          } else if (copyExpressionArr[k] === "+") {
            copyExpressionArr[k - 1] =
              Number(copyExpressionArr[k - 1]) +
              Number(copyExpressionArr[k + 1]);
          } else {
            copyExpressionArr[k - 1] =
              Number(copyExpressionArr[k - 1]) -
              Number(copyExpressionArr[k + 1]);
          }
          // k랑 k + 1 잘라내기 (k부터 2개 splice)
          copyExpressionArr.splice(k, 2);
          // k번째에서 k - 1과 k + 1을 연산하고 k - 1번째 인덱스에 넣고, k와 k + 1번째 인덱스를 자른다.
          // 그 다음 루프에서 k + 1을 검사하는데, k와 k + 1이 사라지고 2개가 앞으로 당겨지므로 k번째를 검사해야 한다.
          // 그래서 k -= 1 해주어야 한다.
          k -= 1;
        }
      }
    }

    // 절댓값이 최대인지 비교
    if (Math.abs(copyExpressionArr[0]) > maxAbs) {
      maxAbs = Math.abs(copyExpressionArr[0]);
    }
  }

  return maxAbs;
}
