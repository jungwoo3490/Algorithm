def solution(s):
    answer = 0
    firstword = s[0]
    countfirst = 0
    countnotfirst = 0
    for i in range(len(s)):
        if s[i] == firstword:
            countfirst += 1
        else:
            countnotfirst += 1
        if countfirst == countnotfirst:
            answer += 1
            countfirst = 0
            countnotfirst = 0
            if i < len(s) - 1:
                firstword = s[i+1]
                
    if countfirst != 0 or countnotfirst != 0:
            answer += 1
    return answer