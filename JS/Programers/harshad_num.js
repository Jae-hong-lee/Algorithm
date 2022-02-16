// 하샤드 수
// 문제 : https://programmers.co.kr/learn/courses/30/lessons/12947?language=javascript
function solution(x) {
    var answer = true;
    return answer;
}
// console.log(solution(10)) //true
// console.log(solution(12)) //true
// console.log(solution(11)) //false
// console.log(solution(13)) //false

// ---

function solution(x) {
    var answer = true;
    let y =String(x);
    // console.log(y.length);
    return answer;
}// x를 문자형으로 바꾸고 길이를 재봄

// 문자형으로 y에 저장 후 , 자릿수 더해서 저장할 z 만들고
// for 문 돌려서 y[i] 번째 수 들을 z에 +
// x를 z로 나누어 나누어떨어지면 return true 아니면 false
function solution(x) {
    var answer = true;
    let y = String(x);
    let z = 0;
    for(let i =0;i<y.length;i++){
        z += Number(y[i]);        
    }
    if(x%z===0){
        return true
    }else{
        return false
    }
    
}
console.log(solution(10)); //true
console.log(solution(12)); //true