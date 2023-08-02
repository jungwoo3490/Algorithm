def solution(array, commands):
    answer = []
    for i in range(len(commands)):
        new_array = array[commands[i][0]-1:commands[i][1]]
        new_array = sorted(new_array)
        answer.append(new_array[commands[i][2]-1])
    return answer