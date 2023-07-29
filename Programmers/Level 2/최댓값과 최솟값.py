def solution(s):
    answer = ''
    numlist = list(map(int, s.split(" ")))
    maxi = numlist[0]
    mini = numlist[0]
    for i in range(1, len(numlist)):
        if numlist[i] > maxi:
            maxi = numlist[i]
        if numlist[i] < mini:
            mini = numlist[i]
    answer = str(mini) + " " + str(maxi)
    return answer