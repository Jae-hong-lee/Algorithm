// 상수
// https://www.acmicpc.net/problem/2908

// 예를 들어, 734와 893을 칠판에 적었다면, 상수는 이 수를 437과 398로 읽는다.
//  따라서, 상수는 두 수중 큰 수인 437을 큰 수라고 말할 것이다.
// 숫자를 거꾸로 읽는다.

// 첫째 줄에 상근이가 칠판에 적은 두 수 A와 B가 주어진다. 
// 두 수는 같지 않은 세 자리 수이며, 0이 포함되어 있지 않다.
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS/Backjun/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
const A = +input[0].split('').reverse().join('')
const B = +input[1].split('').reverse().join('')
// split 으로 배열로 만들고 reverse 후 join으로 다시 문자열로 만듬
let answer =[];
answer.push(A);
answer.push(B);
// 배열에 A,B 넣고 max로 큰값찾아서 출력.

console.log(Math.max(...answer))