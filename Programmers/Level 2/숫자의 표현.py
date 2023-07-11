def solution(n):
    answer = 0
    start = 0
    add = 0
    while start <= n:
        start += 1
        for i in range(start,n+1):
            add += i
            if add == n:
                answer += 1
                add = 0
                break
            if add > n:
                add = 0
                break
    return answer