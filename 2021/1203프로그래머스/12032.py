# 2. 메뉴 리뉴얼
# 각 손님들이 주문한 단품메뉴들이 문자열 형식으로 담긴 배열 orders,
#  "스카피"가 추가하고 싶어하는 코스요리를 구성하는 단품메뉴들의 갯수가 담긴 배열 course가 
#  매개변수로 주어질 때, "스카피"가 새로 추가하게 될 코스요리의 메뉴 구성을 문자열 형태로 배열에 담아 
#  return 하도록 solution 함수를 완성해 주세요.

# 단, 코스요리 메뉴는 최소 2가지 이상의 단품메뉴로 구성. 또한, 최소 2명 이상의 손님으로부터
# 주문된 단품메뉴 조합에 대해서만 코스요리 메뉴 후보에 포함하기로 했음.
# ex) 손님 6명이 주문한 단품메뉴들의 조합이 다음과 같다면, 
# (각 손님은 단품메뉴를 2개 이상 주문해야 하며, 각 단품메뉴는 A~Z의 알파벳 대문자로 표시)

# 배열의 각 원소에 저장된 문자열 또한 알파벳 오름차순으로 정렬되어야 합니다.
# 만약 가장 많이 함께 주문된 메뉴 구성이 여러 개라면, 모두 배열에 담아 return 하면 됩니다.

# 마지막에 정렬해서 사전순으로 문자열의 위치를 바꿔야겠다.
# course 에 갯수대로 이어지는 문자열 들을 카운팅 해서 높은값 중복제거 없이 저장해서
# 딕셔너리? 이용해서 값을 저장해야하나??? (문자열 구성 / 몇번나옴)
# 2번쨰 입출력 보면 5개의 음식을 주문한 손님이 1명있지만 2명 이하라 코스 제외됨.
# 3번째 출력 보면 4개로 구성된 코스 요리 한명도 없어서 제외됨.
# def solution(orders, course):
#     answer = []
#     return answer
    
# print(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4]))
# #result ["AC", "ACDE", "BCFG", "CDE"]
# print(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"],[2,3,5]))
# #result ["ACD", "AD", "ADE", "CD", "XYZ"]
# print(solution(["XYZ", "XWY", "WXA"],[2,3,4]))
# #result	["WX", "XY"]
def comb(lst,n):
	ret = []
	if n > len(lst): return ret
	
	if n == 1:
		for i in lst:
			ret.append([i])
	elif n>1:
		for i in range(len(lst)-n+1):
			for temp in comb(lst[i+1:],n-1):
				ret.append([lst[i]]+temp)

	return ret
def solution(orders, course):
    answer = []
    for k in course:
        a = []
        new_menu = {}
        for menu1 in orders:
            menuList = list(''.join(menu1))
            for lis in comb(menuList,k):
                res = ''.join(sorted(lis))
                if res not in a:
                    a.append(res)


    return answer
    
print(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4]))
#result ["AC", "ACDE", "BCFG", "CDE"]
print(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"],[2,3,5]))
#result ["ACD", "AD", "ADE", "CD", "XYZ"]
print(solution(["XYZ", "XWY", "WXA"],[2,3,4]))
#result	["WX", "XY"]
