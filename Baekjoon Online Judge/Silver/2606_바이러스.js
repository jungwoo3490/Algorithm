const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let visited = [];

function dfs(v) {
    visited.push(v);
    for (let i = 2; i < input.length; i++) {
        let [a, b] = input[i].split(" ").map(Number);
        if (a === v && !(visited.includes(b))) {
            dfs(b);
        }
        if (b === v && !(visited.includes(a))) {
            dfs(a);
        }
    }
}

dfs(1);

console.log(visited.length - 1);
