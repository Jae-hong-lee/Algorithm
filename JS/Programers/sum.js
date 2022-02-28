// 자릿수 더하기
// https://programmers.co.kr/learn/courses/30/lessons/12931?language=javascript

function solution(n)
{
    var answer = 0;

    return answer;
}
// console.log(solution(123)); //6
// console.log(solution(987)); //24
//---------------------------------

function solution(n)
{
    var answer = 0;
    let str = n+'';
    // console.log(str.length);
    const arr = str.split('');

    for(i=0;i<str.length;i++){
        answer+= +arr[i]
    }
    // console.log(arr)
    return answer;
}
console.log(solution(123)); //6
// console.log(solution(987)); //24


// 다른사람풀이
function solution(n)
{
    var a = (n + '').split('');
    var b = 0;
    for(var i = 0; i < a.length; ++i) {
        b += parseInt(a[i]);
    }
    return b;
    //return n.toString().split('').reduce((a, b) => (a * 1) + (b * 1));
}


//다른사람풀이 2
function solution(n){
    // 문자 풀이
    // return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)

    // 숫자풀이
    var sum = 0;

    do {
        sum += n%10;
        n = Math.floor(n/10);
    } while(n > 0);

    return sum;
}