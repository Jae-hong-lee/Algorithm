// x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
    var answer = [];
    for (let i=1;i<=n;i++){
        answer= answer+(x*i);
    }
    return answer;
}
// console.log(solution(2,5)) //result [2,4,6,8,10]
// 파이썬의 append 같은 것은 JS에서 뭘로 쓰나..
// .push
function solution(x, n) {
    var answer = [];
    for (let i=1;i<=n;i++){
        answer.push(x*i);
    }
    return answer;
}
console.log(solution(2,5))