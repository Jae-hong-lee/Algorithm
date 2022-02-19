// 제일 작은 수 제거하기
// https://programmers.co.kr/learn/courses/30/lessons/12935?language=javascript

function solution(arr) {
    var answer = [];
    return answer;
}
// console.log(solution([4,3,2,1])); //result [4,3,2]
// console.log(solution([10])); //result [-1]


// 처음 코드
// function solution(arr) {
//     var answer = [];

//     const min = Math.min.apply(null,arr);
//     if(arr ===10){
//         return [-1];
//     }if (arr ===0){
//         return [-1];
//     }
//     let x=arr.indexOf(min);
//     // console.log(x)
//     answer =arr.splice(0,x);
//     return answer;
// }
// console.log(solution([4,3,2,1])); //result [4,3,2]
// console.log(solution([10])); //result [-1]
// 조잡하다.

// apply 메소드 
// https://velog.io/@devmin/TIL-%ED%95%A8%EC%88%98-%EB%A9%94%EC%86%8C%EB%93%9C-5ok29tthyz
//... 뜻 : 복사의 개념, 새로운 객체 할당
// https://blex.me/@baealex/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8javascript-%EA%B8%B0%EB%B3%B8-%EB%AC%B8%EB%B2%95-%EC%A0%95%EB%A6%AC#11-%EC%A0%84%EA%B0%9C%EA%B5%AC%EB%AC%B8
// 삼항 조건 연산자 
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator


function solution(arr) {
    if (arr.length > 1) {
        let minNum = Math.min(...arr);
        let idx = arr.indexOf(minNum);
        arr.splice(idx, 1);
    } else {
        arr = [-1];
    }
    return arr;
}
console.log(solution([4,3,2,1])); //result [4,3,2]
console.log(solution([10])); //result [-1]



//다른사람풀이
// function solution(arr) {
//     var answer = [];
//     arr.splice(arr.indexOf(Math.min(...arr)),1);
//     return arr.length ? arr:[-1];
// }
// console.log(solution([4,3,2,1])); //result [4,3,2]


// function solution(arr) {
//     var answer = [];
//     arr.splice(arr.indexOf(Math.min(...arr)),1);
//     return arr;
// }console.log(solution([4,3,2,1]));