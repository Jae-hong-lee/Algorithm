// 정수 내림차순으로 배치하기
// https://programmers.co.kr/learn/courses/30/lessons/12933?language=javascript


function solution(n) {
    var answer = 0;
    return answer;
}
// console.log(solution(118372));
// ------------------------------

// Array.prototype.reverse()
// 배열의 요소 순서를 뒤집습니다. 즉 첫 번째 요소가 마지막이 되고 마지막이 첫 번째가 됩니다.
// Array.prototype.sort()
// 배열의 요소를 정렬하고 그 배열을 반환합니다.

function solution(n) {
    var answer = 0;
    const s = String(n);
    const arr = s.split("").sort().reverse();
    console.log(arr);
    answer = arr.join('');
    

    return Number(answer)
}
console.log(solution(118372));
//split 함수 연습해보자 ㅠ.ㅠ

// 다른 사람 풀이
function solution(n) {
    const newN = n + ""; //Strung 대신 [+ ''] 로 문자형으로 변환
    const newArr = newN
      .split("") // split 이용해서 arr 로 형변환시키고 정렬,reverse로 값들 바꾸고 join으로 문자형으로.
      .sort()
      .reverse()
      .join("");
  
    return +newArr; //Number 대신 + 하나로 숫자형으로 변환.
  }