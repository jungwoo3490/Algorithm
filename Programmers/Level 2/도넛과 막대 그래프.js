// 간선 식을 기준으로 해서 다음과 같은 관계식을 얻을 수 있다.
// 도넛: 정점 수 === 간선
// 막대: 정점 수 - 1 === 간선
// 8자: 정점 수 + 1 === 간선

// 1. 먼저 돌면서, 출발점에 2개 이상 있고, 들어오는 곳에 없으면 걔가 시작점
// 2. 1에서 찾은 노드가 "출발점" 인 노드의 "목적지를" 시작점 배열에 push
// 3. 2에서 만든 "서브그래프 노드"를 탐색하며 서브그래프의 노드들을 찾아간다.
// 4. BFS로 순회, 순회 제한 조건은 노드를 방문했냐가 아니라 엣지를 방문했냐여야 한다. 이미 방문한 "엣지"일때만 pass
// 5. 노드 Set과 엣지 Set의 size를 위 조건에 따라 비교하여 결정하고 answer에 누적
// 6. 순회 반복

function solution(edges) {
  var answer = [0, 0, 0, 0];

  // 출발지 그래프
  let startGraph = {};
  // 목적지 그래프
  let destGraph = {};

  // 출발지 그래프와 목적지 그래프 만들기
  // 출발지 그래프는 key 노드에서 나가는 간선의 목적지가 value
  // 목적지 그래프는 key 노드로 들어오는 간선의 출발지가 value
  for (let i = 0; i < edges.length; i++) {
    if (!startGraph[edges[i][0]]) {
      startGraph[edges[i][0]] = [edges[i][1]];
    } else {
      startGraph[edges[i][0]].push(edges[i][1]);
    }

    if (!destGraph[edges[i][1]]) {
      destGraph[edges[i][1]] = [edges[i][0]];
    } else {
      destGraph[edges[i][1]].push(edges[i][0]);
    }
  }

  // 출발점 그래프의 key들을 뽑는다. (출발지 노드 목록)
  let startNodes = Object.keys(startGraph).map(Number);

  // 1에 따라 이 노드가 출발점으로 있는 간선이 2개 이상이고, 이 노드가 목적지인 간선이 없으면 걔가 생성한 정점이다.
  // 출발점으로 있는 간선이 하나이면 막대 그래프일 가능성이 있기 때문
  for (let i = 0; i < startNodes.length; i++) {
    if (startGraph[startNodes[i]].length >= 2 && !destGraph[startNodes[i]]) {
      answer[0] = startNodes[i];
    }
  }

  // 서브 그래프의 시작 노드 배열
  let subGraphStartNodes = [];

  // 생성한 정점이 출발지인 간선에서 목적지가 각각 다른 서브 그래프의 시작 노드이다.
  for (let i = 0; i < startGraph[answer[0]].length; i++) {
    subGraphStartNodes.push(startGraph[answer[0]][i]);
  }

  // 서브그래프 시작 노드를 기준으로 각 서브그래프를 완성해나간다.
  for (let i = 0; i < subGraphStartNodes.length; i++) {
    let nodeQueue = [subGraphStartNodes[i]]; // 노드 큐
    let nodeSet = new Set(); // 노드 Set
    let edgeSet = new Set(); // 간선 Set
    let edgesCount = 0;
    // 출발 기점 노드 삽입
    nodeSet.add(subGraphStartNodes[i]);
    while (nodeQueue.length !== 0) {
      // 큐에 머 있으면 -> 다 안 돌았으면
      let front = nodeQueue.shift();

      // 연결된 간선 없으면 패스
      if (!startGraph[front] || startGraph[front].length === 0) {
        continue;
      }

      // 꺼낸거랑 연결된 간선 다 돌기
      for (let j = 0; j < startGraph[front].length; j++) {
        // 이미 방문한 간선이면 pass
        if (edgeSet.has(`${front}-${startGraph[front][j]}`)) {
          continue;
        }

        // 노드 셋에 집어넣음 (Set이라 자동 중복 제거)
        nodeSet.add(startGraph[front][j]);
        nodeQueue.push(startGraph[front][j]);
        edgeSet.add(`${front}-${startGraph[front][j]}`);
      }
    }

    if (nodeSet.size === edgeSet.size) {
      answer[1] += 1;
    }
    if (nodeSet.size - 1 === edgeSet.size) {
      answer[2] += 1;
    }
    if (nodeSet.size + 1 === edgeSet.size) {
      answer[3] += 1;
    }
  }
  return answer;
}
