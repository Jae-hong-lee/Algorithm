# 없는 숫자 더하기
# 0부터 9까지의 숫자 중 일부가 들어있는 배열 numbers가 매개변수로 주어집니다.
# numbers에서 찾을 수 없는 0~9까지의 숫자를 모두 찾아 더한 수를 return
def solution(numbers):
    answer = 0
    a = [1,2,3,4,5,6,7,8,9,0]
    b= []
    cnt = 0
    if a in numbers:
        b.append(a)
    else:
        return a

    return answer
print(solution([1,2,3,4,6,7,8,0])) # 14
print(solution([5,8,4,0,6,7,9])) # 6
# 0~9까지의 수를 담고 있는 배열을 만들고 그 배열안에 없는 숫자 카운트해서 담아서 더하기?