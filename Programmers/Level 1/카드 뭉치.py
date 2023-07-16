def solution(cards1, cards2, goal):
    answer = 'Yes'
    count1 = 0
    count2 = 0
    for i in range(len(goal)):
        if(count1 < len(cards1) and goal[i] == cards1[count1]):
            count1 += 1
        elif (count2 < len(cards2) and goal[i] == cards2[count2]):
            count2 += 1
        else:
            answer = 'No'
            break
    return answer