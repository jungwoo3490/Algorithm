// 음표변환함수
// #을 묶어서 하나로 처리해야 하는데, #음은 편하게 소문자로 구분하자!
// A# -> a, B# -> b, C# -> c

function convertMusic(m) {
  let convertedMusic = "";
  for (let i = 0; i < m.length; i++) {
    // #인 경우는 고려 X, 단일 음이 아니기 때문
    if (m[i] === "#") {
      continue;
    }

    // # 뒤에 또 #이 나오는 경우는 없으므로 그냥 이렇게 비교해도 된다.
    if (m[i + 1] === "#") {
      // # 붙은건 소문자로
      convertedMusic += m[i].toLowerCase();
    } else {
      // 아닌건 대문자 그대로
      convertedMusic += m[i];
    }
  }
  return convertedMusic;
}

function solution(m, musicinfos) {
  let musicHistories = [];

  for (let i = 0; i < musicinfos.length; i++) {
    let musicinfo = musicinfos[i].split(",");
    // 음표변환
    musicinfo[3] = convertMusic(musicinfo[3]);
    let timeGap = 0;

    // 몇 분 차이인지 시간 계산

    let [startHour, startMinute] = musicinfo[0].split(":").map(Number);
    let [endHour, endMinute] = musicinfo[1].split(":").map(Number);

    if (startMinute > endMinute) {
      endHour -= 1;
      endMinute += 60;
    }

    timeGap = (endHour - startHour) * 60 + endMinute - startMinute;

    // 시간만큼 자를건데... 만약 시간이 음악 길이보다 길면 계속 반복되는 구조로 가야 함

    let soundCount = timeGap;
    let soundIdx = 0;
    let soundHistory = "";

    // 음악이 실제로 어떻게 재생되었는지 계산하는 while문
    while (true) {
      if (soundCount === 0) {
        break;
      }

      soundHistory += musicinfo[3][soundIdx];
      soundCount -= 1;
      soundIdx += 1;

      // 끝까지 재생되었으면 다시 맨 앞부터 재생한다
      if (soundIdx >= musicinfo[3].length) {
        soundIdx = 0;
      }
    }

    // 음악 제목, 실제 재생된 음표, 재생시간(정렬에 필요한 정보)을 담는다.
    musicHistories.push([musicinfo[2], soundHistory, timeGap]);
  }

  let answer = [];

  // 음표변환
  let convertedM = convertMusic(m);

  // 조건 만족하는 음악이 여러개일 수도 있으므로 배열에 push
  for (let i = 0; i < musicHistories.length; i++) {
    if (musicHistories[i][1].indexOf(convertedM) !== -1) {
      answer.push([musicHistories[i][0], musicHistories[i][2]]);
    }
  }

  // 우선순위대로 정렬
  // 시간차가 많이 나는 순서로 정렬, 같으면 제목 길이 내림차순 정렬
  answer.sort((a, b) => {
    if (a[1] > b[1]) {
      return -1;
    } else if (a[1] < b[1]) {
      return 1;
    } else {
      return b.length - a.length;
    }
  });

  // 조건 만족하는게 없으면
  if (answer.length === 0) {
    return "(None)";
  } else {
    // 우선순위가 젤 높은게 맨 앞에 있으므로 맨 앞 제목 반환
    return answer[0][0];
  }
}
