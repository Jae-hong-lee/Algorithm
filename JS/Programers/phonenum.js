function solution(phone_number) {
    var answer = '';
    let x = phone_number.length-4;
    // console.log(x);
    
    for(let i=0;i<x;i++){
        answer += '*';
    }
    let y = phone_number.substr(x);
    console.log(y);
    return answer;
}
console.log(solution("01033334444"))

//-------------------------------------------
function solution(phone_number) {
    var answer = '';
    let x = phone_number.length-4;
    // console.log(x);
    
    for(let i=0;i<x;i++){
        answer += '*';
    }
    let y = phone_number.substr(x);
    answer += y
    return answer;
}
console.log(solution("01033334444"))
// .substr : substr("시작 위치", "길이") 또는 substr("시작 위치")
// substr() 함수는 시작 위치부터 해당 길이만큼 문자열을 자르는 아주 기본적인 함수이다.
// "길이" 부분을 생략하면 시작 위치부터 문자열 끝까지 자른다.
//https://gent.tistory.com/414




//다른사람풀이
// 핸드폰 번호 가리기
function solution(phone_number) {
    let answer = '';
    // 전화번호의 길이
    const phoneNumberLength = phone_number.length;
    // 번호 가리기
    for (let i = 0; i < phoneNumberLength; i++) {
      if (i < phoneNumberLength - 4) {
        answer += '*';
      } else {
        answer += phone_number[i];
      }
    }
    return answer;
  }

//다른사람풀이2
function hide_numbers(s){
    var result = "*".repeat(s.length - 4) + s.slice(-4);
    //함수를 완성해주세요
  
    return result;
  }
  
  // 아래는 테스트로 출력해 보기 위한 코드입니다.
  console.log("결과 : " + hide_numbers('01033334444'));
  //repeat함수와 slice 함수
  //repeat : 문자열을 반복한 값을 반환하는 메서드
// 공식 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
// https://www.codingfactory.net/10916

// slice : slice() 메소드는 begin부터 end 전까지의 복사본을 새로운 배열 객체로 반환한다. 즉, 원본 배열은 수정되지 않는다.
// 공식 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// https://im-developer.tistory.com/103 (slice와 splice 차이점)