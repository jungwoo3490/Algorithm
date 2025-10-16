// 모든 경우의 수 완전탐색해도 4^7 이므로 충분히 순회 가넝
// 1. 모든 경우의 수 구하기
// 2. 경우의 수 순회하면서 임티플러스 서비스 가입자 수, 판매액 계산
// 3. max 임티플러스 가입자수가 현재 max보다 크면 max 갈아치우기
// 4. max 임티플러스 가입자수가 현재 max와 같으면 판매액 비교, 높으면 갈아치우기

function solution(users, emoticons) {
  var answer = [];

  function getSalesCase(curArr) {
    if (curArr.length === emoticons.length) {
      // 스프레드로 뿌릴거라 단일배열을 배열로 감싸서 만듬
      return [curArr];
    }

    let allCase = [];
    for (let i = 1; i <= 4; i++) {
      // 1을 10으로 나누면 부동소수점 이슈가 잇음
      let arr = getSalesCase([...curArr, i * 10]);
      allCase.push(...arr);
    }

    return allCase;
  }

  let salesCase = getSalesCase([]);

  let max = [0, 0];

  for (let i = 0; i < salesCase.length; i++) {
    let emoticonPlusCount = 0;
    let totalSalesAmount = 0;

    // 할인 적용된 이모티콘 가격
    let salesPrice = [];

    for (let j = 0; j < emoticons.length; j++) {
      // 10이면 0.9 곱하기, 20이면 0.8 곱하기...
      salesPrice.push((emoticons[j] * (100 - salesCase[i][j])) / 100);
    }

    for (let j = 0; j < users.length; j++) {
      let userBuyAmount = 0;

      // 유저의 기준 비율 이상만큼 할인을 하는 품목은 구매액에 누적한다.
      for (let k = 0; k < salesPrice.length; k++) {
        if (salesCase[i][k] >= users[j][0]) {
          userBuyAmount += salesPrice[k];
        }
      }

      // 유저 총 구매액이 플러스 가입 기준 이상이 되면
      if (userBuyAmount >= users[j][1]) {
        // 가입만 한다. 이모티콘 판매액은 누적하지 않는다. (구매 취소하고 가입만 하므로)
        emoticonPlusCount += 1;
      } else {
        // 이모티콘 판매액을 누적한다.
        totalSalesAmount += userBuyAmount;
      }
    }

    // 현재 이모티콘 서비스 가입자 최대치보다 크면, 1순위이므로 판매액 상관없이 무조건 max로 교체한다.
    if (emoticonPlusCount > max[0]) {
      max = [emoticonPlusCount, totalSalesAmount];
      // 이모티콘 서비스 가입자 최대치와 같으면
    } else if (emoticonPlusCount === max[0]) {
      // 2순위인 판매액 비교를 해서 판매액이 더 크면 max로 교체한다.
      if (totalSalesAmount > max[1]) {
        max = [emoticonPlusCount, totalSalesAmount];
      }
    }
  }

  return max;
}
