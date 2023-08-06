def solution(a, b, n):
    left = n
    bottle = 0
    answer = 0
    while left >= a:
        bottle = left % a
        left = int(left / a) * b
        answer += left
        left += bottle
    return answer