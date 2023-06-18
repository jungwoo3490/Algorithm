def solution(lottos, win_nums):
    answer = []
    point = 0
    zerocount = 0
    maxpoint = 0
    for i in range(len(lottos)):
        if lottos[i] == 0:
            zerocount += 1
    for i in range(len(lottos)):
    	for j in range(len(win_nums)):
            if lottos[i] == win_nums[j]:
                point += 1
    maxpoint = point + zerocount
    if maxpoint == 0:
        answer.append(6)
    else:
        answer.append(7 - maxpoint)
    if point == 0:
        answer.append(6)
    else:
        answer.append(7 - point)
    return answer