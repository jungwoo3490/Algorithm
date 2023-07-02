def solution(s):
    answer = []
    for i in range(len(s)):
        count = 0
        flag = 0
        max = 0
        compareWord = s[i]
        for j in range(i):
            if s[j] == compareWord:
                if(j > max):
                    max = j
                flag = 1
        if flag == 1:
            answer.append(i - max)
        if flag == 0:
            answer.append(-1)
    return answer