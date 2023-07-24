from collections import deque
def solution(s):
    failFlag = 0
    answer = True
    dq = deque()
    for i in range(len(s)):
        if s[i] == '(':
            dq.append('(')
            continue
        if s[i] == ')' and len(dq) != 0:
            dq.pop()
            continue
        if s[i] == ')' and len(dq) == 0:
            answer = False
            failFlag = 1
            break
    
    if len(dq) == 0 and failFlag == 0:
        answer = True
    else:
        answer = False
    return answer