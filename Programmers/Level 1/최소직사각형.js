function solution(sizes) {
  // 가로 세로 중 큰 것끼리 비교해서 가장 큰 값과 작은 것끼리 비교해서 가장 큰 값을 곱한 값이 가장 작은 지갑의 크기이다.
  let biggerMax = 0;
  let smallerMax = 0;

  for (let i = 0; i < sizes.length; i++) {
    let bigger = 0;
    let smaller = 0;
    if (sizes[i][0] > sizes[i][1]) {
      bigger = sizes[i][0];
      smaller = sizes[i][1];
    } else {
      bigger = sizes[i][1];
      smaller = sizes[i][0];
    }

    biggerMax = Math.max(biggerMax, bigger);
    smallerMax = Math.max(smallerMax, smaller);
  }

  return biggerMax * smallerMax;
}
