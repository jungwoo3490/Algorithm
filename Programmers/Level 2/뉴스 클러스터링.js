// 영문자인지 아닌지 체크하는 함수
// 영문자라면 소문자 or 대문자이므로 두 조건식 중 하나가 거짓일 수 밖에 없다.
function isCharacter(chr) {
  if (chr === chr.toUpperCase() && chr === chr.toLowerCase()) {
    return false;
  } else {
    return true;
  }
}

function solution(str1, str2) {
  // Map 자료구조를 선택한 이유는 자카드 유사도가 원소 중복 허용하는 다중집합이기 때문
  // 문자와 그 등장 횟수를 매핑해서 저장하는 것이 추후 교차원소에 대해 합집합, 교집합에 각각 원소가 몇 개 들어갈지 계산하기 용이할 것이라고 생각했다.
  let str1Map = new Map();
  let str2Map = new Map();

  // 각 서브스트링 등장횟수 세는 로직
  for (let i = 0; i < str1.length - 1; i++) {
    if (!isCharacter(str1[i]) || !isCharacter(str1[i + 1])) {
      continue;
    }

    let subStr = str1[i].toUpperCase() + str1[i + 1].toUpperCase();

    if (str1Map.has(subStr)) {
      let count = str1Map.get(subStr);
      str1Map.set(subStr, count + 1);
    } else {
      str1Map.set(subStr, 1);
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    if (!isCharacter(str2[i]) || !isCharacter(str2[i + 1])) {
      continue;
    }

    let subStr = str2[i].toUpperCase() + str2[i + 1].toUpperCase();

    if (str2Map.has(subStr)) {
      let count = str2Map.get(subStr);
      str2Map.set(subStr, count + 1);
    } else {
      str2Map.set(subStr, 1);
    }
  }

  // 사실 어떤 요소가 들어가는지는 안 필요하고 길이만 알면 되고, 이미 등장 횟수는 map으로 세어놨기
  let intersectionLength = 0;
  let unionLength = 0;

  let str1Keys = Array.from(str1Map.keys());
  let str2Keys = Array.from(str2Map.keys());

  for (let i = 0; i < str1Keys.length; i++) {
    let str1Count = str1Map.get(str1Keys[i]);
    if (str2Keys.includes(str1Keys[i])) {
      let str2Count = str2Map.get(str1Keys[i]);

      // 교집합처리
      intersectionLength += Math.min(str1Count, str2Count);

      // 합집합처리
      unionLength += Math.max(str1Count, str2Count);
    } else {
      // 안 겹치니까 합집합에만 반영
      unionLength += str1Count;
    }
  }

  for (let i = 0; i < str2Keys.length; i++) {
    let str2Count = str2Map.get(str2Keys[i]);
    // 교집합 처리는 이미 앞에서 끝났으니까 안 겹치는거 합집합만 반영
    if (!str1Keys.includes(str2Keys[i])) {
      unionLength += str2Count;
    }
  }

  // 두 집합 모두 공집합일 경우 처리
  if (intersectionLength === 0 && unionLength === 0) {
    return 65536;
  } else {
    return Math.floor((intersectionLength / unionLength) * 65536);
  }
}
