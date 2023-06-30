def solution(food):
    answer = ''
    order = ''
    for i in range(1, len(food)):
        if food[i] % 2 == 1:
            food[i] = food[i] - 1
        food[i] = int(food[i] / 2)
        for j in range(food[i]):
            order += str(i)
    reverseorder = order[::-1]
    answer = order + '0' + reverseorder
    return answer