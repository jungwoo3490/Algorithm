function solution(progresses, speeds) {
  let answer = [];
  let queue = [];

  progresses.forEach((i, idx) => {
    queue.push(Math.ceil((100 - i) / speeds[idx]));
  });

  while (queue.length !== 0) {
    count = 1;
    temp = queue.shift();
    while (queue.length !== 0) {
      if (queue[0] <= temp) {
        queue.shift();
        count += 1;
      } else {
        break;
      }
    }
    answer.push(count);
  }

  return answer;
}
