# 1. 실패율
# 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록
# 큰 것부터 작은 것으로 가는 순서
# 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
# 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.

# 스테이지 개수 = N , 스테이지 사용자는 stages , N+1 = 올클 사용자
# 실패율은 스테이지 개수 range 배열로 1~N 뽑아내고 (1부터시작이니까 라운드1느낌)
# range 보다 작을경우 카운트 해서  그값 / 전체값 해서 실패율 출력
# 후, 그 번호 제외(삭제,pop) 그다음 전체값 다시 초기화

# 실패율과 라운드 번호를 저장 한후 내림차순으로 정렬해서 실패율 큰 라운드부터 값이 나오게.
# 및 제한사항.

# def solution(N, stages):
#     answer = []
    
#     return answer
# print(solution(5,[2, 1, 2, 6, 2, 4, 3, 3])) #result[3,4,2,1,5]
# print(solution(4,[4,4,4,4,4]))              #result[4,1,2,3]
#스테이지에 도달한 유저가 없는 경우
# def solution(N, stages):
#     answer = []
#     User = len(stages)
#     for i in range(1,N+1):    
#         cnt = 0
#         for j in stages:
#             if i == j:
#                 cnt +=1
#         if cnt==0:
#             fail = 0
#         else:
#             fail = cnt / User
#             answer.append((i,fail))
#             User -=cnt
#     answer = sorted(answer,key=lambda t : t[1],reverse=True)
#     answer = [x[0] for x in answer]
#     return answer
# print(solution(5,[2, 1, 2, 6, 2, 4, 3, 3])) #result[3,4,2,1,5]
# print(solution(4,[4,4,4,4,4]))              #result[4,1,2,3]
# 3421
# 4
# 판별하고 추가할떄 오류뜸
# key=operator.itemgetter(1)을 이용해서 딕셔너리의 value 값을 기준으로 정렬할 수 있고
# key=lambda x: x [1]을 이용해서도 딕셔너리 value 정렬을 할 수 있는 걸 볼 수 있습니다.
#https://blockdmask.tistory.com/566


def solution(N, stages):
    answer = []
    User = len(stages)
    for i in range(1,N+1):
        count = 0
        for j in stages:
            if i ==j: count+=1  
        if count ==0:
            fail = 0
        else:
            fail = count / User
        answer.append((i,fail))
        User -= count

    answer = sorted(answer,key=lambda t : t[1],reverse=True)
    answer = [x[0] for x in answer]
    return answer
print(solution(5,[2, 1, 2, 6, 2, 4, 3, 3])) #result[3,4,2,1,5]
print(solution(4,[4,4,4,4,4]))              #result[4,1,2,3]
#j for문 돌고 i for문에서 answer에 리스트를 추가하고 유저수를 빼도록 만듬.
# 숫자 다 잘들어가고 값 잘 나옴.
#배운점 람다식을 활용한 정렬.


#딕셔너리로 푸는 다른사람 방법
# def solution(N, stages):
#     result = {}
#     denominator = len(stages)
#     for stage in range(1, N+1):
#         if denominator != 0:
#             count = stages.count(stage)
#             result[stage] = count / denominator
#             denominator -= count
#         else:
#             result[stage] = 0
#     return sorted(result, key=lambda x : result[x], reverse=True)
# print(solution(5,[2, 1, 2, 6, 2, 4, 3, 3])) #result[3,4,2,1,5]
# print(solution(4,[4,4,4,4,4]))              #result[4,1,2,3]