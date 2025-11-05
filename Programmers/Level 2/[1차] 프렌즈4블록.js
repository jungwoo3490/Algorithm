// 일단 dfs로 푸는건 아닌듯
// 가로 -1, 세로 -1까지 돌면서, 가로, 가로 + 1, 세로 + 1, 가로 + 1 세로 + 1이 모두 같은건지 보고 같으면 지워버리자

function solution(m, n, board) {
  // 문자열은 immutable이니까 편하게 split해서 관리
  // 블록이 제거된 곳을 "X"로 바꿀것이기 때문
  for (let i = 0; i < m; i++) {
    board[i] = board[i].split("");
  }

  // 총 지워진 블록 개수
  let removedBlocks = 0;

  while (true) {
    let endFlag = true;
    // 보드가 하나 더 필요하다. 왜냐면 만약 4개를 지우고 원본 board에 반영을 해버리면, 그 지워진 것을 포함해서 4개 만드는 경우를 고려하지 못한다. 그래서 지워진 것은 별도의 board에 반영하도록 했다.
    let removeBoard = Array.from({ length: m }, () => Array(n).fill(0));

    // n, m이 커봤자 30이므로 그냥 이중 for문 돌아도 시간초과 안 날 것이라고 판단했다.
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        // "X"이면 안된다. 빈 곳이 2x2 사각형을 이루는 케이스는 빼야 하기 때문!
        if (
          board[i][j] !== "X" &&
          board[i][j] === board[i][j + 1] &&
          board[i][j] === board[i + 1][j] &&
          board[i][j] === board[i + 1][j + 1]
        ) {
          // 원본 보드가 아닌 별도 board에 반영해야 한다!!!
          removeBoard[i][j] = 1;
          removeBoard[i][j + 1] = 1;
          removeBoard[i + 1][j] = 1;
          removeBoard[i + 1][j + 1] = 1;
          endFlag = false;
        }
      }
    }

    // 지워진 블록이 아무것도 없으면 더 이상 못 지우므로 종료
    if (endFlag === true) {
      break;
    }

    // 별도 board에 반영했던 데이터 기반으로 지워진 블록 개수를 세고, 원본 board에 빈 곳을 반영한다.
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (removeBoard[i][j] === 1) {
          removedBlocks += 1;
          board[i][j] = "X";
        }
      }
    }

    // 블록 떨구기
    // 내 밑이 빈칸이면 빈칸 아닐때까지 내리기!
    // 밑부터 검사해야 한다. 밑 블록을 먼저 떨궈야 위에 없던 공간이 생길 수 있기 때문

    for (let i = m - 2; i >= 0; i--) {
      for (let j = 0; j < n; j++) {
        if (board[i + 1][j] === "X") {
          let dropPlace = i + 1;

          // 내 밑이 빈칸이 아닐 때까지 계속 내리기
          while (true) {
            // 내 밑이 board 영역 바깥이면 못 내리니까 break
            if (dropPlace + 1 >= m) {
              break;
            }

            // 내 밑이 빈 칸이면 한 칸 내린다.
            if (board[dropPlace + 1][j] === "X") {
              dropPlace += 1;
              // 못 내리면 break
            } else {
              break;
            }
          }

          // 최종적으로 떨굴 자리에 현위치 블록을 옮기고
          board[dropPlace][j] = board[i][j];
          // 현 위치는 빈 공간 처리한다.
          board[i][j] = "X";
        }
      }
    }
  }

  return removedBlocks;
}
