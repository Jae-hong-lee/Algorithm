// 문자열 다루기
// https://programmers.co.kr/learn/courses/30/lessons/12918?language=javascript

// 첫번째 풀이 
// typeof 함수 문법 다시 익히자.
function solution(s) {
    var answer = true;
    // console.log(typeof s);
    if(s.typeof === Number){
        return answer;
    }
    return false;
}
// console.log(solution("a234"))//false
// console.log(solution("1234"))//true

//isNan: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/isNaN

function solution(s) {
    var answer = true;
    let num = +s;
    if(isNaN(num)){
        return false
    }
    // console.log(num);
    return answer;
}
// console.log(solution("a234"))//false
// console.log(solution("1234"))//true
// 81.3점...문자열 s의 길이가 4 혹은 6이고 조건이 하나 더 있다.

function solution(s) {
    var answer = true;
    let num = +s;
    if(s.length === 4 || s.length === 6){
        if(isNaN(num)){
            return false;
       }
    }else{
        return false;
    }
    // console.log(num);
    return answer;
}
console.log(solution("a234"))//false
console.log(solution("1234"))//true

// 93.8점 테스트11번만 붍통.
// 11번은 문자열에 "e"를 숫자로 인식  = 지수형태..



// 다른사람 풀이 and 로 숫자를 추가해줌
function alpha_string46(s){
    var result = false;
    if((s.length == 4 || s.length == 6) && /^[0-9]+$/.test(s)) {
      result = true;
    }
  
    return result;
  }
  
  // 아래는 테스트로 출력해 보기 위한 코드입니다.
  console.log( alpha_string46("a234") );