def solution(s):
    answer = 0
    n = 1
    s = s.replace('zero', '0')
    s = s.replace('one', '1')
    s = s.replace('two', '2')
    s = s.replace('three', '3')
    s = s.replace('four', '4')
    s = s.replace('five', '5')
    s = s.replace('six', '6')
    s = s.replace('seven', '7')
    s = s.replace('eight', '8')
    s = s.replace('nine', '9')
    for i in range(len(s)):
        answer += int(s[len(s)- i - 1]) * n
        n = n * 10
    return answer