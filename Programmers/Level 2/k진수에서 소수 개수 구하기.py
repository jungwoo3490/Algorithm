def solution(n, k):
    word = ""
    while n:
        word = str(n % k) + word
        n = n // k
    
    word = word.split("0")
    count = 0
    for w in word:
        if len(w) == 0:
            continue
        if int(w) < 2:
            continue
        isPrime = True
        for i in range(2, int(int(w)**0.5)+1):
            if int(w) % i == 0:
                isPrime = False
                break
    
        if isPrime:
            count += 1
    
    return count