// 짝수와 홀수
// https://programmers.co.kr/learn/courses/30/lessons/12937?language=javascript

function solution(num) {
    var answer = '';
    if (num %2 ===0){
        answer = 'Even'
    }else{
        answer = "Odd"
    }
    return answer;
}
// 세미콜론 찍는 습관을 가지자. <- 파이썬이 그립다.

// 다른사람 풀이
// 한줄로도 가능한 코드였다.
function evenOrOdd(num) {
    return num % 2 ? "Odd" : "Even";
  }
  
  // 아래는 테스트로 출력해 보기 위한 코드입니다.
  console.log("결과 : " + evenOrOdd(2));
  console.log("결과 : " + evenOrOdd(3));