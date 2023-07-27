def solution(name, yearning, photo):
    answer = []
    namepoint = {}
    
    for i in range(len(name)):
        namepoint[name[i]] = yearning[i]
    
    for i in range(len(photo)):
        total = 0
        for j in range(len(photo[i])):
            addpoint = namepoint.get(photo[i][j])
            if addpoint != None:
                total += addpoint
        answer.append(total)
    return answer