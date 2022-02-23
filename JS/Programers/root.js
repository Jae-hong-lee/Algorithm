// 정수 제곱근 판별
// https://programmers.co.kr/learn/courses/30/lessons/12934?language=javascript

// 제곱근 구하는 식을 알 필요가 있다. 수도코드
function solution(n) {
    var answer = 0;
    if(n%2===0){
        return (n+1)*2;
    }else{
        return -1
    }
    
}
// console.log(solution(121)); //144
// console.log(solution(3));   //-1


function solution(n) {
    var answer = -1;
    let x = Math.floor(n**0.5);  //제곱근 구하는 방식
    console.log(x);
    if(n**0.5 === x){
        return (x+1)**2;
    }
    return answer
}
console.log(solution(121)); //144
console.log(solution(3));   //-1
// # def solution(n):
// #     answer = 0
// #     x = n**0.5  #제곱근 구하는 방식
// #     #math 함수 사용해보기!
// #     if n == int(x):
// #         return (x+1)**2
//     # return -1
// 파이썬에서 풀었던 것처럼 풀었는데 파이썬 답도 틀린데?
// 파이썬으로도 다시 풀었다.

// Math.floor() : 소수점 버림.
// 자바스크립트도 sqrt 제곱근 구하는 함수 있음 -> Math.sqrt();



// def solution(n):
//     for x in range(1,n) :
//         if x ** 2 == n :
//             return (x+1) ** 2
//     return -1