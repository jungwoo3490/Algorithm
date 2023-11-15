function solution(operations) {
  let answer = [];
  let queue = [];
  operations.forEach((item) => {
    const [command, number] = item.split(" ");
    if (command === "I") {
      queue.push(parseInt(number));
      queue.sort((a, b) => a - b);
    } else {
      if (parseInt(number) === 1) {
        queue.pop();
      } else {
        queue.shift();
      }
    }
  });
  if (queue.length === 0) {
    answer = [0, 0];
  } else {
    queue.sort((a, b) => a - b);
    answer.push(queue.pop());
    answer.push(queue.shift());
  }
  return answer;
}
