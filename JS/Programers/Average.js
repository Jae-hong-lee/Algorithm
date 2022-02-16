// 평균구하기 (https://programmers.co.kr/learn/courses/30/lessons/12944?language=javascript)

function solution(arr) {
    var answer = 0;
    return answer;
}
// console.log(solution([1,2,3,4])) //result 2.5
// console.log(solution([5,5])) //result 5

// -------------------------------------------

// arr합 / arr 길이 = arr평균
// arr 길이를 구해놓고 길이만큼 반복하는 i를 만들어
// i로 배열에서 위치를 찾아 그 위치에 있는 숫자들을 더해줌.
function solution(arr) {
    var answer = 0;
    let len = arr.length;
    // console.log(len);
    for(let i=0; i <len; i++){
        answer += arr[i] / len
    }
    return answer;
}
// console.log(solution([1,2,3,4])) //result 2.5

//다른 풀이 reduce 함수를 배운 후
function solution(arr) {
    var answer = 0;
    const sum = arr.reduce((a,b)=> a+b , 0);
    return sum / arr.length;
}
console.log(solution([1,2,3,4])) //result 2.5