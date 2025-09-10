const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const nodes = input[1].split(" ").map(Number);
const childDir = {};

for (let i = 0; i < N; i++) {
  childDir[i] = [];
}

for (let i = 0; i < nodes.length; i++) {
  if (nodes[i] !== -1) {
    childDir[nodes[i]].push(i);
  }
}

const deleteNodeNum = Number(input[2]);

function deleteNode(num) {
  // 자식 노드 지우기
  if (childDir[num].length > 0) {
    // for문으로 하면 문제 발생 -> 필터링을 해버리므로 childDir[num].length가 달라져 문제가 발생한다.
    // while문으로 최앞단만 계속 지워나가면서 비우는 방법 선택
    while (childDir[num].length !== 0) {
      deleteNode(childDir[num][0]);
    }
  }

  // 부모에서 나 연결 끊기
  // -1을 쓴 이유 -> root 노드이면(부모가 없으면) nodes[num]이 -1, childDir[-1]로 접근하면 에러가 터진다!
  // 부모가 없으면 부모와 나 사이 연결을 끊을 수 없으므로 조건문 걸었다.
  if (nodes[num] !== -1) {
    childDir[nodes[num]] = childDir[nodes[num]].filter(
      (element) => element !== num
    );
  }

  // 나 지우기
  delete childDir[num];
}

deleteNode(deleteNodeNum);

let count = 0;

// 살아있는 노드들
let liveNodes = Object.keys(childDir);

// 리프노드 개수는 자식이 없는 노드의 개수임
for (let i = 0; i < liveNodes.length; i++) {
  if (childDir[liveNodes[i]].length === 0) {
    count += 1;
  }
}

console.log(count);
