// 이상한 문자열 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12930?language=javascript


// function solution(s) {
//     var answer = '';
//     return answer;
// }
// console.log(solution("try hello world"));
//---------------------------------------
// "try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다. 
// 각 단어의 짝수번째 문자를 대문자로, 
// 홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다.
// 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
function solution(s) {
    var answer = '';
    const arr = s.split(' ');
    // console.log(newStr)
    // let str = ''
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr[i].length;j++){
            if(j%2===0){
                let s= arr[i][j];
                answer += s.toUpperCase();
            }else{
                let s= arr[i][j];
                answer += s.toLowerCase();
            }
        }
        answer += ' '
    }
    return answer.substr(0,answer.length-1); 
}
console.log(solution("try hello world"));
// 띄어쓰기 X
// 두번쨰 풀이 풀다가 문득 subStr 함수가 생각나서 적용해보았다. -> 성공
// 느낀점: 너무 파이썬식으로 생각하면서 푸는 것 같다 여러가지 함수를 활용해서 풀면 좀더 쉽게 할 수 있을 것 같다.
// 함수와 친해지기.

// function solution(s) {
//     var answer = '';
//     const arr = s.split(' ');

//     console.log(arr);
//     let str = ''
//     for(i=0;i<arr.length;i++){
//         let arr2 = arr[i].split('');
//         console.log(arr2);
//         for(j=0;j<arr2.length;j++){
//             if(j%2===0){
//                 let s= arr[i][j];
//                 str += s.toUpperCase();
//             }else{
//                 let s= arr[i][j];
//                 str += s.toLowerCase();
//             }
//         }
//     }
//     return answer;
// }
// console.log(solution("try hello world"));


// 다른사람풀이 
// : 화살표함수, 삼항 연산자 는 볼때마다 람다정렬 처음봤을때가 생각난다.
function toWeirdCase(s){
    return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')
  }
  
  console.log("결과 : " + toWeirdCase("try hello world"));