def solution(k, m, score):
    answer = 0
    score = sorted(score, reverse=True)
    box = int(len(score) / m)
    index = -1
    for i in range(box):
        index = index + m
        answer = answer + (m * score[index])
    return answer