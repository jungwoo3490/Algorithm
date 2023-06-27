def solution(new_id):
    answer = ''
    #1단계
    new_id = new_id.lower();
    #2단계
    for i in range(len(new_id)):
        if new_id[i].isalnum() or new_id[i] in '._-':
	        answer += new_id[i]
    #3단계
    answer = answer.replace('..', '.')        
    while '..' in answer:
        answer = answer.replace('..', '.')  
    #4단계
    while len(answer) > 0 and answer[0] == '.' :
        answer = answer[1:]
    while len(answer) > 0 and answer[-1] == '.' :
        answer = answer[:-1]
    #5단계
    if answer == '':
        answer += 'a'
    #6단계
    if len(answer) >= 16:
        answer = answer[:15]
        if answer[-1] == '.':
       		answer = answer[:-1]
    #7단계
    while True:
        if len(answer) < 3:
            answer += answer[-1]
        else:
    	    break
    return answer