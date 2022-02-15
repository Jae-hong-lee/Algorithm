def solution(N, stages):
    answer = []
    User = len(stages)
    for i in range(1,N+1):    
        cnt = 0
        for j in stages:
            if i == j:
                cnt +=1
        if cnt==0:
            fail = 0
        else:
            fail = cnt / User
            answer.append((i,fail))
            User-=cnt

    answer = sorted(answer,key=lambda t : t[1],reverse=True)
    answer = [x[0] for x in answer]
    return answer
print(solution(5,[2, 1, 2, 6, 2, 4, 3, 3])) #result[3,4,2,1,5]
print(solution(4,[4,4,4,4,4]))              #result[4,1,2,3]