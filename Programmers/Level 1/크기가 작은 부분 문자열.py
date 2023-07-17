def solution(t, p):
    count = 0
    flag = 0
    for i in range(len(t) - (len(p) - 1)):
        for j in range(len(p)):
            if t[i + j] < p[j]:
                flag = 1
                break
            if t[i + j] > p[j]:
                break
            if j == len(p) - 1 and t[i + j] == p[j]:
                flag = 1
                break
        if flag == 1:
            count += 1
        flag = 0
    return count