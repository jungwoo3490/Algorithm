def solution(n, words):
    answer = []
    countdic = {}
    worddic = []
    fail = 0
    failnum = 1
    now = 1
    for i in range(n):
        countdic[i+1] = 0
    worddic.append(words[0])
    countdic[now] += 1
    now += 1
    for i in range(1,len(words)):
        if words[i] not in worddic and words[i-1][-1] == words[i][0]:
            worddic.append(words[i])
            countdic[now] += 1
        else:
            fail = 1
            failnum = now
            break;
        now += 1
        if now > n:
            now = 1
    answer.append(failnum)
    answer.append(countdic[failnum]+ 1)
    if fail == 0:
        answer[0] = 0
        answer[1] = 0
    return answer