// 캐시에 있으면 1, 없으면 5 추가
// LRU니까 Queue로 캐시 꽉 찼으면 앞부터 제거
// LRU니까 캐시된 순서가 중요하다 -> 일단 Set은 못 씀

function solution(cacheSize, cities) {
  let cacheQueue = [];
  let time = 0;

  for (let i = 0; i < cities.length; i++) {
    if (!cacheQueue.includes(cities[i].toLowerCase())) {
      // 캐시 사이즈가 0이면 캐시에 추가를 못하니까 항상 5분 추가하고 continue
      if (cacheSize === 0) {
        time += 5;
        continue;
      }

      if (cacheQueue.length === cacheSize) {
        cacheQueue.shift();
      }
      cacheQueue.push(cities[i].toLowerCase());
      // 5 추가
      time += 5;
    } else {
      // LRU니까 만약 등장을 했으면 걔를 캐시 맨 뒤로 넣어야 한다.
      // indexOf로 캐시에서 몇번째 인덱스에 있는지 가져옴. 캐시는 중복값이 없어서 indexOf 써도 괜찮다.
      let cachedIdx = cacheQueue.indexOf(cities[i].toLowerCase());
      // 그 인덱스 값 제거
      cacheQueue.splice(cachedIdx, 1);
      // 맨 뒤로 옮기기
      cacheQueue.push(cities[i].toLowerCase());
      // 1 추가
      time += 1;
    }
  }

  return time;
}
