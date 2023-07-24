def solution(board, moves):
    answer = 0
    array = []
    for i in range(len(moves)):
        now = moves[i]
        for j in range(len(board)):
            if board[j][now - 1] == 0:
                continue
            else:
                array.append(board[j][now - 1])
                board[j][now - 1] = 0
                if len(array) >= 2 and array[len(array) - 1] == array[len(array) - 2]:
                    del array[len(array) - 1]
                    del array[len(array) - 1]
                    answer += 2
                break
    return answer