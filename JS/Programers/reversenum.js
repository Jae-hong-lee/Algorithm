// 자연수 뒤집어 배열로 만들기
//https://programmers.co.kr/learn/courses/30/lessons/12932?language=javascript
// function solution(n) {
//     var answer = [];
//     return answer;
// }

// function solution(n) {
//     var answer = [];
//     // let str = n+'';
//     // 빈문자열 이어붙이면 문자형으로 변형됨, toString, String 도있음
//     let str = String(n)
//     // console.log(str);
//     let a = str.split('').reverse();
//     // console.log(a);
//     return answer;
// }
// console.log(solution(12345));
// false = 배열안에 값들이 문자형으로 들어가져 있음.

//최종
function solution(n) {
    var answer = [];
    n= String(n)
    answer = n.split('').map(x => Number(x)).reverse();
    
    return answer;
}

// 다른풀이
function solution(n) {
    var answer = [];
    let str = n+'';
    answer = str.split('').map(x => +x).reverse();
    
    return answer;
}
console.log(solution(12345));



// 다른사람풀이
function solution(n) {
    var answer = [];
    let str = String(n)

    let a = str.split('').map(x => +x).reverse(); 
    // console.log(a);

    return answer;
}
// console.log(solution(12345));