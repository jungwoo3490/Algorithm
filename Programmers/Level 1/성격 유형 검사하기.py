def solution(survey, choices):
    count = {"R":0, "T":0, "C":0, "F":0, "J":0, "M":0, "A":0, "N":0}
    for i in range(len(survey)):
        disagr = survey[i][0]
        agr = survey[i][1]
        if choices[i] == 4:
            continue
        elif choices[i] < 4:
            count[disagr] = count[disagr] + (4 - choices[i])
        else:
            count[agr] = count[agr] + (choices[i] - 4)
    answer = ''
    if count["T"] > count["R"]:
        answer += 'T'
    else:
        answer += 'R'
    if count["F"] > count["C"]:
        answer += 'F'
    else:
        answer += 'C'
    if count["M"] > count["J"]:
        answer += 'M'
    else:
        answer += 'J'
    if count["N"] > count["A"]:
        answer += 'N'
    else:
        answer += 'A'
    return answer