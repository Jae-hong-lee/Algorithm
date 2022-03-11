// 단어 뒤집기
// https://www.acmicpc.net/problem/9093


// for in 문은 파이썬 for in이랑 다르다고한다?
// 프로토타입으로 상속받은 속성까지 열거하는 특성이 있으므로 지양하도록
// https://velog.io/@colki/JS-Object-Array-%EC%9E%90%EC%A3%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EC%88%9C%ED%99%98-Method-%EC%A0%95%EB%A6%AC
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const T = +input[0];

let answer = []
let stack = []
for (let i = 1; i <= T; i++) {
    const word = input[i].split(' ');
    console.log(word)
    for (const i of word) {
        let rev = i.split('').reverse().join('')
        answer.push(rev)
    }
    console.log(answer.join(' ').trim())
    answer = []
}
// }console.log(answer)


//다른사람풀이
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var cases = input[0];
var answer = '';

for(var i=1; i<= cases; i++){
    var splited = input[i].split(' ');
    for(var j in splited){
        answer = answer + splited[j].split('').reverse().join('')+' ';
    }
    answer += '\n';
}

console.log(answer);