const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const numbers = input[1].split(" ").map(Number).sort((a, b) => a - b);

const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)]

      const permutations = getPermutations(rest, selectNumber - 1);

      const attached = permutations.map((el) => [fixed, ...el]);

      results.push(...attached);

    });

    return results;
}

console.log(getPermutations(numbers, M).map((el) => el.join(" ")).join("\n"));