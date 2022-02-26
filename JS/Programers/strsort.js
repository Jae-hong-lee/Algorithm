// 문자열 내림차순으로 배치하기
// https://programmers.co.kr/learn/courses/30/lessons/12917?language=javascript
function solution(s) {
    var answer = '';
    // answer = s.charAt();
    const arrUp = [];
    const arrLo = [];
    for(let i=0;i<s.length;i++){
        if (s.charAt(i)== s.charAt(i).toUpperCase()){        
            arrUp.push(s.charAt(i));
        }else{
            arrLo.push(s.charAt(i));
        }
    }
    arrLo.sort().reverse();
    arrUp.sort().reverse();
    answer = arrLo.concat(arrUp).join('');

    
    
    // answer.push(arrUp)
    return answer;
}
console.log(solution("Zbcdefg"));


// 다른사람풀이
function solution(s) {
    return s
      .split("")
      .sort()
      .reverse()
      .join("");
  }
// 깔끔... 자꾸 파이썬 식으로 나누어서 풀려고한다. 
// 함수활용 더 잘하자!  