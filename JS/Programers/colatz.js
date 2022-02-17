// 콜라츠 추측 
// 문제 : https://programmers.co.kr/learn/courses/30/lessons/12943?language=javascript

function solution(num) {
    var answer = 0;
    return answer;
}
// console.log(solution(6)); //result 8
// console.log(solution(16)); //result 4
// console.log(solution(626331)); //result -1
//--------------

// 무한 루프로 돌려서 num 1 이되면 break, 500이상 카운트되면 -1 결과값이 나오는 탈출구를 만들고
// 문제에서 알려준 조건 그대로 작성 , answer 를 카운트 세는 용으로 쓰자.
function solution(num) {
    var answer = 0;
    while (true){
        if (num ==1){
            break;
        }if (answer > 500){
            return -1;
        }if (num %2 ==0){
            num = num/2;
        }else if(num%2==1){
            num = num*3+1;
        }
        answer++
    }
    return answer;
}
console.log(solution(6)); //result 8


// 다른사람 풀이
function collatz(num) {
    var answer = 0;
    while(num !=1 && answer !=500){
        num%2==0 ? num = num/2 : num = num*3 +1;
    answer++;
  }
    return num == 1 ? answer : -1;
}
// 아래는 테스트로 출력해 보기 위한 코드입니다.
// console.log( collatz(6) );