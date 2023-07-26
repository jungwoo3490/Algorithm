def solution(n):
    binaryN = bin(n)[2:]
    nCount = 0
    for i in range(len(binaryN)):
        if binaryN[i] == '1':
            nCount += 1
    
    while True:
        oneCount = 0
        n += 1
        binaryN = bin(n)[2:]
        for i in range(len(binaryN)):
            if binaryN[i] == '1':
                oneCount += 1
        if oneCount == nCount:
            break
    answer = n
    return answer