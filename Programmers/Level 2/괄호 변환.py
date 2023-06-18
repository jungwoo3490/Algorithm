def solution(p):
    answer = ''
    #1단계
    if not p:
        return p
	#2단계
    r = True
    c = 0
    for i in range(len(p)):
        if p[i] == '(':
            c -= 1
        else:
            c += 1
    #3단계
        if c > 0:
            r = False
        if c == 0:
            if r:
                return p[:i + 1] + solution(p[i + 1:])
    #4단계        
            else:
                return '(' + solution(p[i + 1:]) + ')' + ''.join(list(map(lambda x: '(' if x == ')' else ')', p[1:i])))
    return answer