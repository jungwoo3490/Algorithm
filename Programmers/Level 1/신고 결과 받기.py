def solution(id_list, report, k):
    answer = []
    count = {}
    usernum = {}
    flag = {}
    
    nreport = []
    for v in report:
    	if v not in nreport:
        	nreport.append(v)
    
    replen = len(nreport)
    
    for i in range(len(id_list)):
        answer.append(0) 
        count[id_list[i]] = 0
        usernum[id_list[i]] = i
    
    for i in range(replen):
        nreport[i] = nreport[i].split(" ")
    
    for i in range(replen):
        count[nreport[i][1]] += 1
        
    for i in range(len(id_list)):
        if count[id_list[i]] >= k:
            for j in range(replen):
                if nreport[j][1] == id_list[i]:
                    answer[usernum[nreport[j][0]]] += 1
    return answer