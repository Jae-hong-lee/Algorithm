// 수박수박수박수박수박수?
// https://programmers.co.kr/learn/courses/30/lessons/12922?language=javascript

function solution(n) {
    var answer = '';
    return answer;
}
// console.log(solution(3)); //"수박수"
// console.log(solution(4)); //"수박수박"

//------------------------

function solution(n) {
    var answer = '';
    const su = '수'
    const bak = '박'
    for(let i=0;i<+n;i++){
        if (i%2==0){
            answer +=su;
        }else{
            answer += bak;
        }
    }
    return answer;
}
console.log(solution(3)); //"수박수"
console.log(solution(4)); //"수박수박"
// 처음에 if조건문에 n을 계속 나누고 있어서 박박박 수수수수 만 나왔다.


//다른사람 풀이
// String.prototype.repeat() 문자열 반복 함수
const waterMelon = n => {
    return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
}

// 실행을 위한 테스트코드입니다.
console.log("n이 3인 경우: "+ waterMelon(3))
console.log("n이 4인 경우: "+ waterMelon(4))