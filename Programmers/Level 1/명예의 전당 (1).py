def solution(k, score):
    answer = []
    honor = []
    if k > len(score):
        for i in range(len(score)):
            honor.append(score[i])
            answer.append(min(honor))
        return answer
    else:
        for i in range(0, k):
            honor.append(score[i])
            answer.append(min(honor)) 
        honor = sorted(honor)
        for i in range(k, len(score)):
            if score[i] > honor[0]:
                del honor[0]
                honor.append(score[i])
                honor = sorted(honor)
            answer.append(honor[0])
        return answer