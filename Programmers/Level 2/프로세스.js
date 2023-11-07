function solution(priorities, location) {
  let answer = 0;
  let order = [];
  let finalOrder = [];

  for (let i = 0; i < priorities.length; i++) {
    order.push(i);
  }

  while (priorities.length !== 0) {
    nowOrder = order.shift();
    nowPriority = priorities.shift();
    let isFirst = true;
    priorities.forEach((item) => {
      if (nowPriority < item) {
        isFirst = false;
      }
    });
    if (isFirst === true) {
      finalOrder.push(nowOrder);
    } else {
      order.push(nowOrder);
      priorities.push(nowPriority);
    }
  }

  answer = finalOrder.indexOf(location) + 1;
  return answer;
}
