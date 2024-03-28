const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const viruses = [];

const graph = input.map((str, row) =>
  str.split(" ").map((num, col) => {
    if (num * 1 === 2) {
      viruses.push([row, col]);
      return -1;
    } else if (num * 1 === 0) return -1;
    return -2;
  })
);

const solution = () => {
  let answer = [];
  const dy = [1, -1, 0, 0];
  const dx = [0, 0, 1, -1];

  const pickCombis = getCombi(viruses, M);
  for (const pickCombi of pickCombis) {
    const tempGraph = [];
    graph.forEach((row) => tempGraph.push([...row]));

    for (const pick of pickCombi) {
      tempGraph[pick[0]][pick[1]] = 0;
    }

    const queue = [];
    pickCombi.forEach((combi) => {
      queue.push(combi);
    });

    while (queue.length) {
      const [row, col] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nextRow = row + dy[i];
        const nextCol = col + dx[i];
        if (
          0 <= nextRow &&
          nextRow < N &&
          0 <= nextCol &&
          nextCol < N &&
          tempGraph[nextRow][nextCol] === -1
        ) {
          tempGraph[nextRow][nextCol] = tempGraph[row][col] + 1;
          queue.push([nextRow, nextCol]);
        }
      }
    }

    let isComplete = true;
    let tempMax = 0;
    tempGraph.forEach((row) => {
      tempMax = Math.max(Math.max(...row), tempMax);
      row.forEach((num) => {
        if (num === -1) isComplete = false;
      });
    });
    if (isComplete) answer.push(tempMax);
  }
  const result = answer.length ? Math.min(...answer) : -1;
  return result;
};

const getCombi = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombi(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });
  return results;
};

console.log(solution());
